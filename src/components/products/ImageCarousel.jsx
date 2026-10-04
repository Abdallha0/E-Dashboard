import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageCarousel({ images, productName }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const hasMounted = useRef(false); // ✅ track first render

  useEffect(() => {
    hasMounted.current = true; // mark as mounted after first render
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div className="relative h-64 overflow-hidden">
      <div className="h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <AnimatePresence custom={direction}>
          <motion.img
            key={currentImgIndex}
            src={images[currentImgIndex].url}
            alt={productName}
            custom={direction}
            variants={variants}
            initial={hasMounted.current ? "enter" : false} // no animation on first render
            animate="center"
            exit="exit"
            className="absolute h-64 w-full"
            style={{backgroundSize: "100% 100%"}}
          />
        </AnimatePresence>
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                idx === currentImgIndex ? "w-3 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
}

export default ImageCarousel;
