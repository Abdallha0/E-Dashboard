import React, { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { dashboardAlerts } from "../helpers/alerts";
import OverviewSec from "../components/overview-sec";
import SummaryCardSec from "../components/dashboard/summaryCard-sec";
import PanelsSec from "../components/dashboard/panels-sec";
import RecentOrderSec from "../components/dashboard/recentOrder-sec";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import DashboardNotice from "../components/DashboardNotice";
import { getAdminDashboardStats } from "../services/dashboard-api";
import { isAbortError } from "../helpers/isAbortError";
import { toastStyles } from "../helpers/tones";

export const PanelDataContext = createContext({});

function emptyArray(length) {
  return Array.from({ length });
}

const initialState = {
  isLoading: true,
  hasError: false,
  summaryData: emptyArray(6),
  ordersStatus: emptyArray(6),
  topProducts: emptyArray(5),
  recentOrders: emptyArray(5),
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, hasError: false };
    case "success":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        summaryData: action.payload.summaryData,
        ordersStatus: action.payload.ordersStatus,
        topProducts: action.payload.topProducts,
        recentOrders: action.payload.recentOrders,
      };
    case "error":
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
}

function DashboardPage() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const {
    isLoading,
    hasError,
    summaryData,
    ordersStatus,
    topProducts,
    recentOrders,
  } = state;

  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "start" });

    getAdminDashboardStats({ signal: controller.signal })
      .then((res) => {
        if (controller.signal.aborted) return;
        if (!res.success) {
          toast.error(res.message, {
            style: toastStyles.error,
          });
          dispatch({ type: "error" });
          return;
        }

        const topProduct = res.dashboard.topProducts[0]; // still unguarded, see note above

        dispatch({
          type: "success",
          payload: {
            summaryData: [
              {
                id: "total-orders",
                label: "Total Orders",
                value: res.dashboard.orders.total,
                helper: "All orders received",
                accent: "from-emerald-400 to-teal-500",
                icon: "shoppingBag",
              },
              {
                id: "pending-orders",
                label: "Pending Orders",
                value: res.dashboard.orders.pending,
                helper: "Awaiting action",
                accent: "from-amber-400 to-orange-500",
                icon: "clock",
              },
              {
                id: "revenue",
                label: "Revenue",
                value: "$" + res.dashboard.revenue.total,
                helper: "Total gross revenue",
                accent: "from-pink-500 to-rose-500",
                icon: "dollar",
              },
              {
                id: "this-month",
                label: "This Month",
                value: "$" + res.dashboard.revenue.thisMonth,
                helper: "Monthly sales target",
                accent: "from-cyan-400 to-sky-500",
                icon: "cart",
              },
              {
                id: "top-product",
                label: "Top Product",
                value: topProduct ? topProduct.name : "—",
                helper: topProduct ? topProduct.totalSold + " sold" : "No data",
                accent: "from-violet-500 to-fuchsia-500",
                icon: "box",
              },
              {
                id: "users",
                label: "Users",
                value: res.dashboard.totalCustomers,
                helper: "Registered customers",
                accent: "from-slate-400 to-slate-600",
                icon: "users",
              },
            ],
            ordersStatus: res.dashboard.ordersByStatus,
            topProducts: res.dashboard.topProducts,
            recentOrders: res.dashboard.recentOrders.map((i) => ({
              id: i._id,
              customer: i.user ? i.user.username : i.shippingAddress.fullName,
              product: i.items.map((it) => it.name).join(" | "),
              date: i.updatedAt.split("T")[0],
              status: i.status,
              amount: i.totalPrice,
            })),
          },
        });
      })
      .catch((e) => {
        if (controller.signal.aborted || isAbortError(e)) return;

        toast.error(e.message || "Network error please check your connection", {
          style: toastStyles.error,
        });
        dispatch({ type: "error" });
      });

    return () => controller.abort();
  }, []);
  if (hasError) return <DashboardNotice state={dashboardAlerts.error} />;

  return (
    <div className="p-4 lg:p-8 space-y-8 w-full">
      <div className="space-y-8">
        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <>
            <OverviewSec
              title="Admin Overview"
              subtitle="Real-time commerce health"
              description="Monitor your storefront with AI-style clarity and live API metrics."
            />
            <SummaryCardSec summaryData={summaryData} />
            <PanelDataContext.Provider value={{ ordersStatus, topProducts }}>
              <PanelsSec />
            </PanelDataContext.Provider>
            <RecentOrderSec recentOrders={recentOrders} />
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(DashboardPage);
