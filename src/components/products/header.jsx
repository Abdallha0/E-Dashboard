import { motion, AnimatePresence } from "framer-motion";
import { Package2, Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ProductsHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="relative overflow-hidden rounded-4xl border border-slate-200/60 bg-slate-50 p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_4px_20px_-2px_rgba(148,163,184,0.12),0_20px_25px_-5px_rgba(148,163,184,0.08)] dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-none"
    >
      {/* Dynamic Putty-Style Ambient Blurs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-800/20" />
      <div className="pointer-events-none absolute -bottom-16 left-12 h-52 w-52 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-950/40" />

      {/* Subtle Top Specular Reflection Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent dark:via-slate-700/30" />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Side: Brand Identity */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300/60 bg-(--bg-primary) text-cyan-500 shadow-[0_4px_10px_rgba(148,163,184,0.1),inset_0_2px_4px_rgba(255,255,255,1)] dark:border-slate-700/50 dark:shadow-none">
            <Package2 size={28} />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500">
              Management Suite
            </p>
            <h1 className="mt-0.5 text-3xl font-black tracking-tight text-slate-800 dark:text-white">
              Products
            </h1>
          </div>
        </div>

        <Link to="/products/add">
          <button className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(15,23,42,0.15),inset_0_2px_4px_rgba(255,255,255,0.2)] transition-all duration-200 ease-out hover:scale-[1.02] bg-linear-to-bl from-cyan-300 via-cyan-500 to-cyan-600 hover:shadow-[0_6px_20px_rgba(15,23,42,0.2),inset_0_2px_4px_rgba(255,255,255,0.2)] active:scale-[0.98] dark:border-slate-700 dark:shadow-none dark:hover:bg-white">
            <Plus size={18} />
            <span>Add Products</span>
          </button>
        </Link>
      </div>
    </motion.header>
  );
}

export default ProductsHeader;
