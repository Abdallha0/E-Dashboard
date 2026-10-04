function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 animate-pulse">
      {/* Image placeholder */}
      <div className="h-52 w-full bg-slate-200 dark:bg-slate-700" />

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title + category */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-5/6 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Price */}
        <div className="h-8 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-6 w-14 rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="h-6 w-16 rounded-lg bg-slate-200 dark:bg-slate-700" />
          <div className="h-6 w-12 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          <div className="h-8 w-20 rounded-xl bg-slate-200 dark:bg-slate-700" />
          <div className="h-8 w-24 rounded-xl bg-slate-200 dark:bg-slate-700" />
          <div className="ml-auto h-8 w-20 rounded-xl bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton