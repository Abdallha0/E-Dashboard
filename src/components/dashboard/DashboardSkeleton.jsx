import React from "react";

function DashboardSkeleton() {
  return (
    <div className="space-y-7 p-4">
      <section className="rounded-[28px] border border-slate-200/70 bg-slate-100/80 p-8 dark:border-slate-700/70 dark:bg-slate-900/80">
        <div className="h-4 w-52 animate-pulse rounded bg-slate-500/40" />
        <div className="mt-6 h-9 w-full max-w-xl animate-pulse rounded bg-slate-700/60" />
        <div className="mt-5 h-5 w-full max-w-2xl animate-pulse rounded bg-slate-700/40" />
      </section>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((card, i) => (
          <article
            key={i}
            className="rounded-3xl flex justify-between border border-slate-200/70 bg-slate-100/80 p-8 dark:border-slate-700/70 dark:bg-slate-900/80"
          >
            <div className="space-y-2">
              <div className="h-3 w-40 rounded bg-slate-500/40 animate-pulse mb-3" />
              <div className="h-8 w-6 rounded-2xl bg-slate-500/40 animate-pulse" />
              <div className="h-3 w-24 rounded bg-slate-500/40 animate-pulse mb-4" />
            </div>
            <div className="size-12 rounded-xl bg-slate-500/40 animate-pulse" />
          </article>
        ))}
      </section>
      <section className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
        <div className=" rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80">
          <div className="px-4 py-8 relative space-y-6">
            <div className="h-6 w-52 animate-pulse rounded-full bg-slate-500/40" />
            <div className="h-6 w-72 animate-pulse rounded-full bg-slate-500/40" />
            <div className="h-8 w-26 absolute top-8 right-4 animate-pulse rounded-full bg-slate-500/40" />
          </div>
          <div className="px-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 5 }).map((card, i) => (
              <div
                key={i}
                className="h-32 p-4 animate-pulse rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80"
              >
                <div className="h-3 w-full rounded bg-slate-500/40 animate-pulse mb-3" />
                <div className="h-10 w-6 rounded-2xl bg-slate-500/40 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        <div className=" animate-pulse rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80">
          <div className=" rounded-[28px] border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80">
            <div className="px-4 py-8 relative space-y-6">
              <div className="h-6 w-52 animate-pulse rounded-full bg-slate-500/40" />
              <div className="h-6 w-72 animate-pulse rounded-full bg-slate-500/40" />
            </div>
            <div className="p-4 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80 p-3.5"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-500/40 animate-pulse" />

                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100/80 dark:border-slate-700/70 dark:bg-slate-900/80 animate-pulse" />

                  <div className="flex flex-1 items-center justify-between gap-4 min-w-0">
                    <div className="min-w-0 space-y-1">
                      <div className="h-4 w-40 rounded bg-slate-500/40 animate-pulse" />
                      <div className="h-3 w-24 rounded bg-slate-500/40 animate-pulse" />
                    </div>

                    <div className="text-right shrink-0">
                      <div className="h-6 w-16 rounded-lg bg-slate-500/40 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(DashboardSkeleton);
