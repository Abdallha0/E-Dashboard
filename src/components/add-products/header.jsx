import React from "react";
import { ArrowLeft, Package2 } from "lucide-react";
import { Link } from "react-router-dom";
function AddProductsHeader({title, subtitle, description}) {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50/50 to-slate-100 p-6 sm:p-8 shadow-xl transition-colors duration-300 dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-2xl">
        <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none transition-colors dark:bg-cyan-500/15" />
        <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none transition-colors dark:bg-violet-500/15" />

        <div className="relative z-10 flex items-center justify-between border-b border-slate-200/60 pb-5 dark:border-white/5">
          <Link to='/products'>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white focus:outline-hidden focus:ring-2 focus:ring-cyan-500/20"
          >
            <ArrowLeft size={14} />
            Back to products
          </button>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75 dark:bg-cyan-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 dark:bg-cyan-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              Ready
            </span>
          </div>
        </div>

        <div className="relative z-10 mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300">
                <Package2 size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-300">
                {title}
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight dark:text-white">
              {subtitle}
            </h2>

            <p className="max-w-2xl text-xs sm:text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-300">
              {description}
            </p>
          </div>

          {/* Quick Helper Subtext */}
          <p className="text-[11px] font-medium italic text-slate-400 lg:text-right shrink-0 dark:text-slate-500">
            Create, validate, and save with one click.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AddProductsHeader;
