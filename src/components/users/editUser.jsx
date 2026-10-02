import React, { useState } from "react";
import {
  X,
  User,
  Phone,
  Image as ImageIcon,
  Save,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { updateUser } from "../../services/users-api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { handleError } from "../../helpers/handleErrorMSG";
import { toastStyles } from "../../helpers/tones";

const EditUserModal = ({ setSearchParams, initialData, setUsersUpdating }) => {
  const [isSaving, setIsSaving] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: initialData.username,
      phone: initialData.phone,
      avatar: initialData.avatar,
    },
  });

  const onSubmit = (data) => {
    if (
      data.username === initialData.username &&
      data.phone === initialData.phone &&
      data.avatar === initialData.avatar
    )
      return;
    setIsSaving(true);
    updateUser(initialData._id, data.username, data.avatar, data.phone)
      .then((res) => {
        if (res.success) {
          toast.success(res.message, {
            style: toastStyles.success,
          });
          setUsersUpdating(res.user);
        } else {
          toast.error(res.message, {
            style: toastStyles.error,
          });
        }
        setIsSaving(false);
      })
      .catch((e) => {
        toast.error(handleError(e).message, {
          style: toastStyles.error,
        });
        setIsSaving(false);
      });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSearchParams({})}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900 border border-white/20"
        >
          {/* Header */}
          <div className="relative border-b border-slate-100 p-6 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Edit Profile
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Update user details and preferences
                </p>
              </div>
              <button
                onClick={() => setSearchParams({})}
                className="group rounded-full p-2 text-slate-400 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
            {/* Input Group: Username */}
            <div className="space-y-1.5">
              <label htmlFor="username" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <User size={14} /> Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                {...register("username")}
                placeholder={initialData.username || "Username"}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:ring-cyan-400"
              />
            </div>

            {/* Input Group: Phone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <Phone size={14} /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder={initialData.phone || "Phone"}
                {...register("phone")}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:ring-cyan-400"
              />
            </div>

            {/* Input Group: Avatar */}
            <div className="space-y-1.5">
              <label htmlFor="avatar" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <ImageIcon size={14} /> Avatar URL
              </label>
              <input
                type="url"
                name="avatar"
                id="avatar"
                placeholder={initialData.avatar || "Avatar"}
                {...register("avatar")}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:ring-cyan-400"
              />
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setSearchParams({})}
                className="flex-1 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 transition-all hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="relative flex flex-2 items-center justify-center gap-2 overflow-hidden rounded-xl bg-cyan-600 py-3 font-bold text-white shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-700 hover:shadow-cyan-500/50 active:scale-[0.98] disabled:opacity-70"
              >
                {isSaving ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Save size={18} />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default React.memo(EditUserModal);
