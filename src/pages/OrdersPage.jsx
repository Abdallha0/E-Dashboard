import React, { useEffect, useReducer, useState } from "react";
import OrdersHeader from "../components/orders/header";
import OrdersTable from "../components/orders/ordersTable";
import { getOrders } from "../services/orders-api";
import { toastStyles } from "../helpers/tones";
import { toast } from "react-toastify";
import { isAbortError } from "../helpers/isAbortError";
import Loader from "../components/loader";
import OrderDetailsSidebar from "../components/orders/orderDetailsSidebar";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, hasError: false };
    case "success":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        payload: action.payload,
      };
    case "error":
      return { ...state, isLoading: false, hasError: true };
    case "update_order":
      return {
        ...state,
        payload: {
          ...state.payload,
          orders: state.payload.orders.map((o) =>
            o._id === action.payload._id ? action.payload : o
          ),
        },
      };
    default:
      return state;
  }
}

const initialState = {
  isLoading: true,
  hasError: false,
  payload: {
    orders: [],
    total: 0,
    totalPages: 1,
    currentPage: 1,
  },
};

function OrdersPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: "start" });

    getOrders("", { signal: controller.signal })
      .then((res) => {
        if (controller.signal.aborted) return;

        if (!res.success) {
          toast.error(res.message, {
            style: toastStyles.error,
          });
          dispatch({ type: "error" });

          return;
        }

        delete res.success;
        dispatch({ type: "success", payload: res });
      })
      .catch((e) => {
        if (controller.signal.aborted || isAbortError(e)) return;

        toast.error(e.message || "Internal Error!", {
          style: toastStyles.error,
        });
        dispatch({ type: "error" });
      });
    return () => controller.abort();
  }, []);

  const { isLoading, hasError, payload } = state;
  const [filters, setFilters] = useState({
    search: "",
    status: "All statuses",
    paymentStatus: "All payments",
    paymentMethod: "All methods",
  });

  const orders = React.useMemo(() => {
    const allOrders = payload?.orders || [];
    return allOrders.filter((order) => {
      // Search filter
      if (filters.search) {
        const query = filters.search.trim().toLowerCase();
        const idMatches = order._id?.toLowerCase().slice(-8).includes(query);
        const nameMatches = order.shippingAddress?.fullName
          ?.toLowerCase()
          .includes(query);
        if (!idMatches && !nameMatches) return false;
      }

      // Status filter
      if (filters.status && !filters.status.toLowerCase().startsWith("all")) {
        if (order.status?.toLowerCase() !== filters.status.toLowerCase()) {
          return false;
        }
      }

      // Payment Status filter
      if (
        filters.paymentStatus &&
        !filters.paymentStatus.toLowerCase().startsWith("all")
      ) {
        if (
          order.paymentStatus?.toLowerCase() !==
          filters.paymentStatus.toLowerCase()
        ) {
          return false;
        }
      }

      // Payment Method filter
      if (
        filters.paymentMethod &&
        !filters.paymentMethod.toLowerCase().startsWith("all")
      ) {
        if (
          order.paymentMethod?.toLowerCase() !==
          filters.paymentMethod.toLowerCase()
        ) {
          return false;
        }
      }

      return true;
    });
  }, [payload.orders, filters]);

  function ordersFiltration({ name, value }) {
    if (!name) return;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [targetOrder, setOrder] = useState(undefined);

  if (isLoading) return <Loader />;
  return (
    <main className="flex flex-col gap-y-4 p-4">
      <OrdersHeader ordersFiltration={ordersFiltration} total={payload.total} />
      <OrdersTable setOrder={setOrder} orders={orders} />

      {targetOrder && (
        <OrderDetailsSidebar
          targetOrder={targetOrder}
          setOrder={setOrder}
          onOrderUpdate={(updatedOrder) =>
            dispatch({ type: "update_order", payload: updatedOrder })
          }
        />
      )}
    </main>
  );
}

export default OrdersPage;
