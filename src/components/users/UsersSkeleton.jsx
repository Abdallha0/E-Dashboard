import React from "react";

function UsersSkeleton() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="h-3 w-32 animate-pulse rounded bg-slate-500/40" />
          <div className="h-10 w-64 animate-pulse rounded bg-slate-500/40" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-500/40 sm:w-72" />
          <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-500/40 sm:w-36" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <article
            key={i}
            className="rounded-3xl border border-slate-200/70 bg-slate-100/80 p-6 dark:border-slate-700/70 dark:bg-slate-900/80"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 animate-pulse rounded bg-slate-500/40" />
                <div className="h-9 w-12 animate-pulse rounded bg-slate-500/40" />
              </div>
              <div className="size-12 animate-pulse rounded-2xl bg-slate-500/40" />
            </div>
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100/80 shadow-xl shadow-slate-200/50 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-none">
        <div className="flex items-center justify-between border-b border-slate-200/70 px-8 py-6 dark:border-slate-700/70">
          <div className="h-6 w-36 animate-pulse rounded bg-slate-500/40" />
          <div className="h-8 w-20 animate-pulse rounded-lg bg-slate-500/40" />
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 gap-4 bg-slate-500/10 px-8 py-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-3 w-24 animate-pulse rounded bg-slate-500/40" />
            ))}
          </div>

          <div className="divide-y divide-slate-200/70 dark:divide-slate-700/70">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-4">
                <div className="size-11 shrink-0 animate-pulse rounded-full bg-slate-500/40" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-36 animate-pulse rounded bg-slate-500/40" />
                  <div className="h-3 w-48 animate-pulse rounded bg-slate-500/40" />
                </div>
                <div className="hidden h-6 w-20 animate-pulse rounded-full bg-slate-500/40 sm:block" />
                <div className="hidden h-4 w-16 animate-pulse rounded bg-slate-500/40 md:block" />
                <div className="hidden gap-2 sm:flex">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="size-9 animate-pulse rounded-lg bg-slate-500/40" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200/70 px-8 py-4 dark:border-slate-700/70">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-500/40" />
          <div className="flex gap-2">
            <div className="h-9 w-16 animate-pulse rounded-lg bg-slate-500/40" />
            <div className="h-9 w-16 animate-pulse rounded-lg bg-slate-500/40" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(UsersSkeleton);
