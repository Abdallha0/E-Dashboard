import React from 'react';
import { motion } from 'framer-motion';

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className={`rounded-2xl ${color} p-3 text-white shadow-lg`}>
          <Icon size={24} />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 h-16 w-16 opacity-[0.03] dark:opacity-[0.05]">
        <Icon size={64} />
      </div>
    </motion.div>
  );
}

function UsersStatsCard({stats}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}

export default React.memo(UsersStatsCard);
