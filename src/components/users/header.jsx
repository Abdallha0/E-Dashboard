import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, ChevronDown } from 'lucide-react';

function UsersHeader({ searchQuery, isFormOpen, onToggleForm, handleSearching }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className='min-w-1/2'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400"
        >
          System Overview
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          User Management
        </motion.h2>
      </div>

      <div className="flex flex-col gap-3 min-w-1/2 sm:flex-row sm:items-center">
        <div className="relative group md:w-3/4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-500" size={20} />
          <input
            onChange={(e) => handleSearching(e.target.value)}
            value={searchQuery}
            placeholder="Search users..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none ring-cyan-500/20 transition-all focus:border-cyan-500 focus:ring-4 dark:border-slate-800 dark:bg-slate-900"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onToggleForm}
          className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3.5 max-h-12 text-nowrap font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-700 active:shadow-none"
        >
          <UserPlus size={20} />
          <span>Add User</span>
          <motion.div animate={{ rotate: isFormOpen ? 180 : 0 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

export default React.memo(UsersHeader);
