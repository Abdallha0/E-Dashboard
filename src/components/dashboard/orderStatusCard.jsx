import React from "react";

function OrderStatusCard({ item }) {
  return (
    <div
      key={item._id}
      className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl  ${item.customToneClass}`}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 shrink-0 rounded-full border opacity-60  transition-transform duration-300 group-hover:scale-125" />

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-80">
            {item._id}
          </p>
        </div>

        <p className="mt-6 text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-0.5 sm:text-5xl">
          {item.count.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default React.memo(OrderStatusCard);
