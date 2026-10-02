import { Package, X } from "lucide-react";
import React from "react";

function EditFormHeader({ removeProduct }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6 dark:border-slate-800">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
          <Package size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Edit Product
          </h3>
          <p className="text-xs text-slate-500">
            Update your product information and media
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => removeProduct(null)}
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
      >
        <X
          size={20}
          className="text-slate-500 transition-colors group-hover:text-slate-900 dark:group-hover:text-white"
        />
      </button>
    </div>
  );
}

export default EditFormHeader;
