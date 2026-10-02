import React from "react";

function OverviewSec({ title, subtitle, description }) {
  return (
    <section className="rounded-3xl border p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl border-slate-800 bg-slate-900/90">
      {/* Category / Kicker Title */}
      <p className="mb-4 text-xs font-medium uppercase tracking-[4px] text-cyan-500 dark:text-cyan-400">
        {title}
      </p>

      {/* Main Heading */}
      <h1 className="text-md font-semibold text-white sm:text-4xl">
        {subtitle}
      </h1>

      {/* Description Paragraph */}
      <p className="mt-4 max-w-3xl text-sm text-slate-300">
        {description}
      </p>
    </section>
  );
}

export default React.memo(OverviewSec);
