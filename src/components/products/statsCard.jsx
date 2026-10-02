import React from "react";
import { motion } from "framer-motion";
import { productsThemesTones } from "../../helpers/tones";
import { Package2, Star, TrendingUp, Boxes } from "lucide-react";

function StatCard({ icon: Icon, value, label, variant, delay = 0, stats }) {
  const cards = [
    {
      id: "total",
      label: "Total",
      value: stats?.totalProducts || 0,
      icon: Package2,
      // Color utility tokens mapped across light/dark themes
      theme:
        "border-cyan-200/60 dark:border-cyan-900/30 group-hover:border-cyan-400 dark:group-hover:border-cyan-500",
      iconTheme:
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400 dark:border-cyan-800/40",
    },
    {
      id: "featured",
      label: "Featured",
      value: stats?.featured || 0,
      icon: Star,
      theme:
        "border-amber-200/60 dark:border-amber-900/30 group-hover:border-amber-400 dark:group-hover:border-amber-500",
      iconTheme:
        "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-800/40",
    },
    {
      id: "in-stock",
      label: "In Stock",
      value: stats?.inStock || 0,
      icon: TrendingUp,
      theme:
        "border-emerald-200/60 dark:border-emerald-900/30 group-hover:border-emerald-400 dark:group-hover:border-emerald-500",
      iconTheme:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-800/40",
    },
    {
      id: "out-of-stock",
      label: "Out of Stock",
      value: stats?.outOfStock || 0,
      icon: Boxes,
      theme:
        "border-rose-200/60 dark:border-rose-900/30 group-hover:border-rose-400 dark:group-hover:border-rose-500",
      iconTheme:
        "bg-rose-100 text-rose-500 dark:bg-rose-950/50 dark:text-rose-400 dark:border-rose-800/40",
    },
  ];
  const currentTheme = productsThemesTones[variant] || productsThemesTones.cyan;
  // Container variants to orchestrate staggered loading of children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Perfectly timed cascading appearance
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-4 xl:grid-cols-4 w-full p-1"
    >
      {cards.map((card) => {
        const IconComponent = card.icon;

        return (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
            className={`group rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-colors duration-300 ${card.theme}`}
          >
            {/* Smooth Spring Icon Scaling on Hover */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${card.iconTheme}`}
            >
              <IconComponent size={18} strokeWidth={2} />
            </motion.div>

            {/* Layout-safe animated layout text */}
            <motion.p
              layout
              className="text-2xl font-black text-slate-900 dark:text-white"
            >
              {card.value}
            </motion.p>

            <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
              {card.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default React.memo(StatCard);
