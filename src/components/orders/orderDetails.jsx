import React from "react";

function OrderDetails() {
  return (
    <aside
      className="fixed inset-y-0 right-0 z-50 flex w-full max-w-115 flex-col bg-white shadow-2xl dark:bg-slate-900"
      style="transform: none;"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Order detail
          </p>
          <p className="font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
            #CFB797FF
          </p>
        </div>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-1.5 rounded-full ring-1 font-medium
      bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 ring-violet-300/40
      px-3 py-1 text-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              Processing
            </span>
            <span className="inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Pending
            </span>
            <span className="ml-auto text-xs capitalize text-slate-400">
              cash
            </span>
          </div>
          <section>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Info
            </p>
            <div className="rounded-xl border border-slate-100 px-4 dark:border-slate-800">
              <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
                <span className="shrink-0 text-slate-500 dark:text-slate-400">
                  Placed
                </span>
                <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                  24 Jun 2026
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
                <span className="shrink-0 text-slate-500 dark:text-slate-400">
                  Customer
                </span>
                <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                  —
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
                <span className="shrink-0 text-slate-500 dark:text-slate-400">
                  Email
                </span>
                <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                  —
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
                <span className="shrink-0 text-slate-500 dark:text-slate-400">
                  Ship to
                </span>
                <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                  Sohag, Egypt
                </span>
              </div>
            </div>
          </section>
          <section>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Items
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dvaos6oyh/image/upload/v1780230067/ecommerce-products/pj16g07dam3be5j3jgel.jpg"
                  alt="Xiaomi Redmi 15C"
                  className="h-11 w-11 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                    Xiaomi Redmi 15C
                  </p>
                  <p className="text-xs text-slate-400">× 4 · 8,299.00 EGP</p>
                </div>
                <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-700 dark:text-slate-200">
                  33,196.00 EGP
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dvaos6oyh/image/upload/v1780229715/ecommerce-products/jlgqbrawdb47matlnjj4.webp"
                  alt="iPad Air (M2 Chip, 11-inch)"
                  className="h-11 w-11 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                    iPad Air (M2 Chip, 11-inch)
                  </p>
                  <p className="text-xs text-slate-400">× 1 · 599.00 EGP</p>
                </div>
                <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-700 dark:text-slate-200">
                  599.00 EGP
                </span>
              </div>
            </div>
          </section>
          <section className="rounded-xl border border-slate-100 px-4 dark:border-slate-800">
            <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
              <span className="shrink-0 text-slate-500 dark:text-slate-400">
                Subtotal
              </span>
              <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                33,795.00 EGP
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
              <span className="shrink-0 text-slate-500 dark:text-slate-400">
                Shipping
              </span>
              <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                0.00 EGP
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-800 last:border-0">
              <span className="shrink-0 text-slate-500 dark:text-slate-400">
                Tax (14%)
              </span>
              <span className="text-right font-medium text-slate-800 dark:text-slate-100">
                4,731.30 EGP
              </span>
            </div>
            <div className="flex items-center justify-between py-3 text-sm font-bold text-slate-900 dark:text-white">
              <span>Total</span>
              <span className="tabular-nums">38,526.30 EGP</span>
            </div>
          </section>
          <section>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Update status
            </p>
            <div className="space-y-3 rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
                <option value="returned">Returned</option>
              </select>
              <textarea
                rows="3"
                placeholder="Admin note (optional)…"
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              >
                processing via FedEx
              </textarea>
              <button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                Save changes
              </button>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
}

export default OrderDetails;
