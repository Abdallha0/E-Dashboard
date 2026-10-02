import React from "react";
import { Search } from "lucide-react";
import DropdownMenu from "./dropdown";

function OrdersHeader({ total, ordersFiltration }) {
  return (
    <section className="w-full p-2 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/20">
      {/* Top Row: Title and Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Admin · Management
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Orders
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 dark:bg-green-400"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-green-400"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-300">
            {total} Total Orders
          </span>
        </div>
      </div>

      {/* Bottom Row: Filters & Search */}
      <div className="flex flex-col md:flex-row gap-3 items-center w-full">
        {/* Search Bar Component */}
        <div className="w-full md:flex-1 min-w-65">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 h-4 w-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
            <input
              type="text"
              onChange={(e) => ordersFiltration({ name: "search", value: e.target.value })}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-sm"
              placeholder="Search ID, customer name..."
            />
          </div>
        </div>

        {/* Dropdowns Container */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
          <DropdownMenu
            handleChange={ordersFiltration}
            type="status"
            menu={[
              "All statuses",
              "Pending",
              "Confirmed",
              "Processing",
              "Shipped",
              "Delivered",
              "Cancelled",
              "Returned",
            ]}
          />
          <DropdownMenu
            handleChange={ordersFiltration}
            type="paymentStatus"
            menu={["All payments", "Pending", "Paid", "Failed", "Refunded"]}
          />
          <DropdownMenu
            handleChange={ordersFiltration}
            type="paymentMethod"
            menu={["All methods", "Cash", "Stripe"]}
          />
        </div>
      </div>
    </section>
  );
}
export default React.memo(OrdersHeader);
