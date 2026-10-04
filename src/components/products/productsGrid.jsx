import React, { useReducer, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./productsCard";
import ProductCardSkeleton from "./productsSkeleton";

const SKELETON_COUNT = 6;

export default function ProductGrid({ products, isLoading }) {
  // Framer Motion container configuration for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      className="grid relative gap-6 md:grid-cols-2 2xl:grid-cols-3 p-6 bg-slate-50 dark:bg-slate-950 max-h-fit"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {isLoading ? (
        Array.from({ length: SKELETON_COUNT }).map((i, _) => (
          <ProductCardSkeleton key={_} />
        ))
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="py-20 text-center absolute w-full text-2xl capitalize">
          no products defined
        </p>
      )}
    </motion.div>
  );
}
