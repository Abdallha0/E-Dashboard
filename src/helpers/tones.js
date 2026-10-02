export const breakdownToneClasses = {
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-500",
  sky: "border-sky-400/30 bg-sky-400/10 text-sky-500",
  cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-500",
  violet: "border-violet-400/30 bg-violet-400/10 text-violet-500",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-500",
  rose: "border-rose-400/30 bg-rose-400/10 text-rose-500",
  pink: "border-pink-400/30 bg-pink-400/10 text-pink-500",
};

export const statusToneClasses = {
  pending: "border-amber-400/25 bg-amber-400/10 text-amber-500",
  processing: "border-sky-400/25 bg-sky-400/10 text-sky-500",
  confirmed: "border-cyan-400/25 bg-cyan-400/10 text-cyan-500",
  shipped: "border-violet-400/25 bg-violet-400/10 text-violet-500",
  delivered: "border-emerald-400/25 bg-emerald-400/10 text-emerald-500",
  cancelled: "border-red-400 bg-red-400/10 text-red-400",
  returned: "border-pink-400/25 bg-pink-400/10 text-pink-200",
};

export const paymentStatusTones = {
  refunded:
    "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-blue-600/10 dark:ring-blue-500/20 dot-bg-blue-400",
  paid: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 ring-emerald-600/10 dark:ring-emerald-500/20 dot-bg-emerald-400",
  failed:
    "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 ring-red-600/10 dark:ring-red-500/20 dot-bg-red-400",
  pending:
    "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 ring-orange-600/10 dark:ring-orange-500/20 dot-bg-orange-400",
};

export const productsThemesTones = {
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-400",
    glow: "hover:border-cyan-400 dark:hover:border-cyan-500",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/50 text-amber-600 dark:text-amber-400",
    glow: "hover:border-amber-400 dark:hover:border-amber-500",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400",
    glow: "hover:border-emerald-400 dark:hover:border-emerald-500",
  },
  rose: {
    bg: "bg-rose-100 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/50 text-rose-600 dark:text-rose-400",
    glow: "hover:border-rose-400 dark:hover:border-rose-500",
  },
};

export const toastStyles = {
  success: {
    backdropFilter: "blur(10px)",
    backgroundColor: "#00ff401a",
    borderRadius: "20px",
    width: "fit-content",
    color: "var(--text-primary)",
    border: "solid green 1px",
  },

  error: {
    backdropFilter: "blur(10px)",
    backgroundColor: "#ff00001a",
    borderRadius: "20px",
    color: "var(--text-primary)",
    width: "fit-content",
    border: "solid red 1px",
  },

  info: {
    backdropFilter: "blur(10px)",
    backgroundColor: "#0ea5e91a",
    borderRadius: "20px",
    color: "var(--text-primary)",
    width: "fit-content",
    border: "solid #0ea5e9 1px",
  },
};
