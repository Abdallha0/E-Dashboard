import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GallerySec({ images }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-lg sm:shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={images[activeImg].url}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full aspect-4/3 sm:aspect-5/4 md:aspect-4/3 bg-no-repeat bg-center"
            alt="Product"
            style={{ backgroundSize: "100% 100%" }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={img.public_id || idx}
            onClick={() => setActiveImg(idx)}
            className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 
                  ${
                    activeImg === idx
                      ? "border-blue-500 scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
          >
            <img
              loading="lazy"
              src={img.url}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default React.memo(GallerySec);
