import React from "react";
const ImagePreview = ({ src, onRemove, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"
  >
    <img
      loading="lazy"
      src={src}
      alt="Product"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
      <button
        type="button"
        onClick={onRemove}
        className="rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
    <div className="absolute bottom-2 left-2 rounded-lg bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
      Img {index + 1}
    </div>
  </motion.div>
);

export default React.memo(ImagePreview);
