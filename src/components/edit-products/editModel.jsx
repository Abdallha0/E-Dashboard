import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderCircle, Save } from "lucide-react";
import EditFormHeader from "./header";
import { getProducts } from "../../services/products-api";
import { toast } from "react-toastify";
import { toastStyles } from "../../helpers/tones";
import FieldsForm from "./fieldsForm";
import FieldsFormSkeleton from "./fieldsFormSkeleton";

const InitialProduct = {
  name: null,
  shortDescription: null,
  description: null,
  price: null,
  discountPrice: null,
  stock: null,
  sku: null,
  category: null,
  subcategory: null,
  brand: null,
  tags: [],
  isActive: null,
  featured: null,
  images: [],
};

const initialState = {
  isLoading: true,
  hasError: false,
  payload: {
    product: InitialProduct,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, hasError: false };
    case "success":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        payload: action.payload,
      };
    case "error":
      return { ...state, isLoading: false, hasError: true };
  }
}

function EditProductModal({ removeProduct, productId }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSaving, setIsSaving] = useState(false);

  const refetchProduct = useCallback(() => {
    dispatch({ type: "start" });
    getProducts(`/${productId}`)
      .then((res) => {
        if (res.success) {
          dispatch({ type: "success", payload: res });
        } else {
          dispatch({ type: "error" });
        }
      })
      .catch(() => {
        dispatch({ type: "error" });
      });
  }, [productId]);

  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: "start" });
    if (productId) {
      getProducts(`/${productId}`, { signal: controller.signal })
        .then((res) => {
          if (controller.signal.aborted) return;
          if (res.success) {
            dispatch({ type: "success", payload: res });
          } else {
            toast.error(
              res.message || "Error occurred while fetching product details",
              {
                style: toastStyles.error,
              },
            );
            dispatch({ type: "error" });
          }
        })
        .catch((err) => {
          if (controller.signal.aborted) return;
          toast.error(
            err.message || "Error occurred while fetching product details",
            {
              style: toastStyles.error,
            },
          );
          dispatch({ type: "error" });
        });
    }
    return () => controller.abort();
  }, [productId]);

  const {
    payload: { product },
  } = state;

  const submitRef = useRef(null);
  const discardRef = useRef(null);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md dark:bg-slate-950/80"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700/50 dark:bg-slate-900"
        >
          <EditFormHeader removeProduct={removeProduct} />

          {state.isLoading ? (
            <FieldsFormSkeleton />
          ) : (
            <FieldsForm
              submitRef={submitRef}
              discardRef={discardRef}
              product={product}
              setIsSaving={setIsSaving}
              refetchProduct={refetchProduct}
            />
          )}

          <div className="flex items-center justify-end gap-4 border-t border-slate-100 bg-slate-50/50 px-8 py-6 dark:border-slate-800 dark:bg-slate-900/50">
            <button
              type="button"
              disabled={isSaving || state.isLoading}
              onClick={() => discardRef.current?.click()}
              className="rounded-xl px-6 py-3 text-sm font-bold text-slate-500 transition-colors hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:text-white"
            >
              Discard Changes
            </button>
            <button
              onClick={() => submitRef.current?.click()}
              type="button"
              disabled={isSaving || state.isLoading}
              className="flex items-center disabled:opacity-60 disabled:cursor-not-allowed gap-2 rounded-2xl bg-cyan-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all hover:bg-cyan-500 hover:shadow-cyan-500/40 active:scale-95"
            >
              {isSaving ? (
                <>
                  {" "}
                  <LoaderCircle className="animate-spin size-4 text-white" />{" "}
                  Saving
                </>
              ) : (
                <>
                  <Save size={18} /> Save Product{" "}
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default React.memo(EditProductModal);
