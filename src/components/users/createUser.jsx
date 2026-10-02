import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { addUser } from "../../services/users-api";
import { handleError } from "../../helpers/handleErrorMSG";
import { toast } from "react-toastify";
import { toastStyles } from "../../helpers/tones";

const formFields = [
  { label: "Username", placeholder: "example", type: "text", req: true },
  {
    label: "Email",
    placeholder: "example@email.com",
    type: "email",
    req: true,
  },
  { label: "Password", placeholder: "••••••••", type: "password", req: true },
  { label: "Phone", placeholder: "+1 234...", type: "tel", req: false },
];

function CreateUser({ onClose, setUsersUpdating }) {
  const { register, handleSubmit } = useForm();
  const [saving, setIsSaving] = useState(false);
  const subButtonRef = useRef(null);
  const resetButtonRef = useRef(null);

  const onSubmit = (data) => {
    setIsSaving(true);
    addUser(data.email, data.username, data.password, data.phone)
      .then((res) => {
        if (res.success) {
          setUsersUpdating(res.user);
          toast.success(res.message, {
        style: toastStyles.success
      });
        } else {
          toast.error(res.message, {
            style: toastStyles.error,
          });
        }
        setIsSaving(false);
      })
      .catch((e) => {
        toast.error(handleError(e).message, {
        style: toastStyles.error
      });
        setIsSaving(false);
      });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="overflow-hidden"
      >
        <div className="rounded-3xl border border-cyan-100 bg-white p-1 shadow-xl dark:border-cyan-900/30 dark:bg-slate-900">
          <div className="flex items-center justify-between rounded-t-[22px] bg-cyan-50/50 px-8 py-5 dark:bg-cyan-950/20">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-md">
                <UserPlus size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Create New Account</h3>
                <p className="text-xs font-medium text-slate-500">
                  Provide user credentials and contact info
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {formFields.map((field) => (
                <div key={field.label} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {field.label}{" "}
                    {field.req && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.label.toLowerCase(), {
                      required: field.label.toLowerCase() !== "phone",
                    })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-800 dark:bg-slate-800/50 dark:focus:bg-slate-800"
                  />
                </div>
              ))}

              <div className="hidden">
                <button ref={subButtonRef} type="submit"></button>
                <button ref={resetButtonRef} type="reset"></button>
              </div>
            </form>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-400 italic">
                Fields marked with * are mandatory
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => resetButtonRef.current.click()}
                  className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Clear
                </button>
                <button
                  onClick={() => subButtonRef.current.click()}
                  disabled={saving}
                  className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                >
                  {saving ? "Creating" : "Register User"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(CreateUser);
