import React from "react";
import { motion } from "framer-motion";
function DashboardNotice({ state }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }} className="p-4">
      <div className="min-w-md rounded-3xl w-fit border border-dashed border-red-600 bg-red-200/35 dark:border-red-300/35 dark:bg-cyan-400/5 p-6">
        <p className="text-sm text-red-600">{state.description}</p>
      </div>
    </motion.div>
  );
}

export default React.memo(DashboardNotice);
