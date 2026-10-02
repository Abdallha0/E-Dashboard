import React from "react";
import { statusToneClasses } from "../../helpers/tones";

function OrderRow({ order, setOrder }) {
  return (
    <tr
      onClick={() => setOrder(order._id)}
      tabIndex={0}
      className="group cursor-pointer transition-colors hover:bg-slate-100 focus-within:bg-slate-50/80 outline-hidden dark:hover:bg-slate-800 dark:focus-within:bg-slate-900/40"
    >
      {/* Order ID */}
      <td className="py-4 pl-6 pr-4">
        <span className="font-mono text-xs font-semibold tracking-tight text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {"#" + order._id.slice(-8)}
        </span>
      </td>

      {/* Customer Data */}
      <td className="p-3.5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 shadow-xs dark:bg-slate-800 dark:text-slate-300">
            {order.shippingAddress.fullName.split(" ")[0][0] +
              order.shippingAddress.fullName.split(" ")[1][0]}
          </span>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-medium text-slate-800 dark:text-slate-200">
              {order.shippingAddress.fullName}
            </p>
            <p className="truncate text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
              {order.shippingAddress.phone}
            </p>
          </div>
        </div>
      </td>

      {/* Date */}
      <td className="p-3.5 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
        {order.createdAt?.split("T")[0]}
      </td>

      {/* Fulfillment Status */}
      <td className="p-3.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-inset ${statusToneClasses[order.status]}`}
        >
          {/* Inline color rendering trick using dynamic Tailwind color rules */}
          <span
            className={`w-1.5 h-1.5 rounded-full ${statusToneClasses[order.status]}`}
          />
          <span className="capitalize">{order.status}</span>
        </span>
      </td>

      {/* Payment Breakdown */}
      <td className="p-3.5">
        <div className="flex flex-col items-start gap-1">
          <span
            className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-${order.paymentStatus === "cash" ? "emerald" : "amber"}-50 text-amber-700 ring-1 ring-inset ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20`}
          >
            {order.paymentStatus}
          </span>
          <span className="text-[10px] font-medium capitalize text-slate-400 dark:text-slate-500 pl-0.5">
            {order.paymentMethod}
          </span>
        </div>
      </td>

      {/* Total Value */}
      <td className="py-4 pl-4 pr-6 text-right font-semibold text-xs tracking-tight text-slate-800 dark:text-slate-100 whitespace-nowrap">
        {order.totalPrice}
      </td>
    </tr>
  );
}

export default React.memo(OrderRow);
