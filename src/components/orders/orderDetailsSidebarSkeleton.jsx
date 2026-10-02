import React from "react";

export default function OrderDetailSidebarSkeleton({ setOrder }) {
  return (
    <aside className="flex fixed top-0 z-999 right-0 h-screen w-sm max-w-md flex-col border-l border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="flex items-start justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div>
          <div className="animate-pulse">
            <div className="mb-2 h-3 w-16 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-6 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
        <button
          onClick={() => setOrder && setOrder(undefined)}
          aria-label="Close"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto coustom-scrollbar px-6 pb-6">
        <div className="animate-pulse">
          {/* Badges Skeleton */}
          <div className="mt-5 flex gap-2">
            <div className="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="h-6 w-32 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Info Skeleton */}
          <div className="mb-1 mt-7 h-5 w-10 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="space-y-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between border-b border-slate-100 py-3 dark:border-slate-800">
                <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
          </div>

          {/* Items Skeleton */}
          <div className="mb-1 mt-7 h-5 w-12 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-3 border-b border-slate-100 py-3 dark:border-slate-800">
            <div className="h-12 w-12 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Totals Skeleton */}
          <div className="mt-1 space-y-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between border-b border-slate-100 py-3 dark:border-slate-800">
                <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
            <div className="flex justify-between pt-4">
              <div className="h-5 w-16 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-5 w-24 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          </div>

          {/* Update status Skeleton */}
          <div className="mb-2 mt-7 h-5 w-28 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-full rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="mt-3 h-21.5 w-full rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
        <button disabled className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
          Save changes
        </button>
      </footer>
    </aside>
  );
}
