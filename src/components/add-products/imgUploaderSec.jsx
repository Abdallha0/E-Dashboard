import { X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

function ImgUploaderSec({ setProductGallery, productGallery = [], resetSignal }) {
  const [images, setImages] = useState(productGallery);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setImages([]);
    setProductGallery([]);
    setCoverImg("");
  }, [resetSignal]);

  const handleChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      setProductGallery((prev) => [...prev, file]);
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    },
    [images],
  );

  const [coverImg, setCoverImg] = useState(images[0]);

  return (
    <section className="flex-1 rounded-2xl border border-slate-100 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-image-plus"
          >
            <path d="M16 5h6"></path>
            <path d="M19 2v6"></path>
            <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"></path>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            <circle cx="9" cy="9" r="2"></circle>
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Product Media
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Curate your product gallery and preview instantly.
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {images.map((i, ind) => (
            <article
              key={i || ind}
              className="group relative aspect-square overflow-hidden rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80"
            >
              <img
                loading="lazy"
                src={i}
                alt="preview"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-linear-to-t from-black/60 to-transparent text-[10px] uppercase font-semibold tracking-wider text-white">
                Cover Image
              </div>
            </article>
          ))}
          {/* Placeholder for adding more images directly within the grid */}
          <label className="flex flex-col aspect-square items-center justify-center rounded-xl border-2 border-dashed border-cyan-300 dark:border-cyan-800 bg-cyan-50/20 dark:bg-cyan-950/20 text-cyan-500 cursor-pointer hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <span className="text-xs font-semibold mt-1">Add Image</span>
            <input
              hidden
              type="file"
              className="bg-red-800"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </div>

        <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-400/20 bg-cyan-50/10 dark:border-cyan-800 dark:bg-cyan-950/10 p-10 text-center transition hover:border-cyan-400 hover:bg-cyan-50/20 dark:hover:bg-cyan-950/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-upload-cloud mb-4 text-cyan-500"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M12 12v9"></path>
            <path d="m16 16-4-4-4 4"></path>
          </svg>
          <p className="font-semibold text-slate-800 dark:text-white">
            Product Cover | click to upload
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Supports PNG, JPG, WEBP (Max 5MB)
          </p>
          <input
            hidden
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const file = e.target.files[0];
              setProductGallery((prev) => [file, ...prev]);
              const url = URL.createObjectURL(file);
              setImages([url, ...images]);
              setCoverImg(url);
            }}
          />

          {coverImg && (
            <div
              className="absolute text-end inset-0 size-full z-10 rounded-2xl bg-center bg-cover"
              style={{
                backgroundImage: `url(${coverImg})`,
                backgroundSize: "100% 100%",
              }}
            >
              <button
                onClick={() => setCoverImg("")}
                className="text-gray-400 m-2 hover:text-gray-500 "
              >
                <X className="size-5" />
              </button>
            </div>
          )}
        </label>
        <button
          onClick={() => setImages([])}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold bg-slate-100 text-slate-950 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition active:scale-[0.98]"
          type="button"
        >
          Discard Draft
        </button>
        <div className="rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 p-5 text-sm text-emerald-900 dark:text-emerald-100 flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles h-6 w-6 text-emerald-500 shrink-0"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
          <div>
            <div className="font-semibold mb-0.5">Optimized Experience</div>
            <p className="text-emerald-800/90 dark:text-emerald-200/90 leading-relaxed">
              Crafted for intuitive use, ensuring seamless interactions and
              responsiveness across devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ImgUploaderSec);
