import React from "react";

function FieldsFormSkeleton() {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5 sm:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        {/* Left Column - Main Details */}
        <div className="space-y-6">
          {/* Product Name & SKU */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-3.5 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>

            <div className="space-y-2">
              <div className="h-3.5 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <div className="h-3.5 w-32 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
            <div className="h-20 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-3.5 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
            <div className="h-32 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
          </div>

          {/* Price & Discount Price */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-3.5 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>

            <div className="space-y-2">
              <div className="h-3.5 w-28 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>
          </div>

          {/* Stock & Brand */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-3.5 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>

            <div className="space-y-2">
              <div className="h-3.5 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>
          </div>

          {/* Category & Subcategory */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <div className="h-3.5 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>

            <div className="space-y-2">
              <div className="h-3.5 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
              <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="h-3.5 w-16 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700/60" />
            <div className="h-11 w-full animate-pulse rounded-xl border border-slate-200 bg-slate-100/80 dark:border-slate-700/60 dark:bg-slate-800/50" />
          </div>
        </div>

        {/* Right Column - Images & Status */}
        <div className="space-y-6">
          {/* Images Section Skeleton */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-3 w-28 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
              <div className="h-8 w-24 animate-pulse rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 w-full animate-pulse rounded-2xl border border-slate-200 bg-slate-200/60 dark:border-slate-700 dark:bg-slate-700/40"
                />
              ))}
            </div>
          </div>

          {/* Status Section Skeleton */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-3 w-16 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            </div>

            <div className="space-y-3">
              {/* Active Toggle Skeleton */}
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <div className="size-4 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="h-4 w-16 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                </div>
                <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700/60" />
              </div>

              {/* Featured Toggle Skeleton */}
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <div className="size-4 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="h-4 w-20 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                </div>
                <div className="h-5 w-10 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FieldsFormSkeleton);
