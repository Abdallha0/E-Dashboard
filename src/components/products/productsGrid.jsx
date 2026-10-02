import React, { useReducer, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./productsCard";

export default function ProductGrid({ products }) {
  // Framer Motion container configuration for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  if (products.length < 1)
    return (
      <p className="py-20 text-center text-2xl capitalize">
        no products define
      </p>
    );
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3 p-6 bg-slate-50 dark:bg-slate-950 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </motion.div>
  );
}
