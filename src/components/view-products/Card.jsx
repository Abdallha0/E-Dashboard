import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`rounded-3xl border transition-all duration-300 
      bg-white border-slate-200 shadow-sm hover:shadow-xl
      dark:bg-slate-900/50 dark:border-white/10 dark:shadow-2xl dark:hover:border-blue-500/50 ${className}`}
  >
    {children}
  </motion.div>
);

export default React.memo(Card)