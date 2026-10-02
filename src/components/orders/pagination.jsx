import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SimplePagination({setCurrentPage, currentPage, totalPages}) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-40 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:disabled:bg-slate-950"
      >
        <ChevronLeft size={14} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={
            `flex h-7 w-7 items-center justify-center rounded-lg text-xs transition ` +
            (p === currentPage
              ? "font-semibold bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-900"
              : "font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800")
          }
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-40 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default React.memo(SimplePagination);
