import React, { useState } from "react";
import OrderRow from "./orderRow";
import SimplePagination from "./pagination";

function OrdersTable({ orders, setOrder }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const totalOrders = orders.length;
  const totalPages = Math.max(1, Math.ceil(totalOrders / rowsPerPage));

  // Reset to page 1 if current page exceeds total pages after filtering
  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalOrders);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
      {/* Responsive Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-160 text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200/60 bg-slate-50/70 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-400">
              <th className="py-3.5 pl-6 pr-4">Order</th>
              <th className="p-3.5">Customer</th>
              <th className="p-3.5">Date</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5">Payment</th>
              <th className="p-3.5 pr-6 text-right">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {orders.slice(startIndex, endIndex).map((order) => (
              <OrderRow setOrder={setOrder} order={order} key={order._id} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="flex items-center justify-between border-t border-slate-200/80 bg-slate-50/30 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-900/20">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {startIndex + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {endIndex}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {totalOrders}
          </span>{" "}
          orders
        </p>

        {totalPages > 1 && (
          <SimplePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(OrdersTable);
