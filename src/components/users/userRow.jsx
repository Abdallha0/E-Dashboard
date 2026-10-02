import React, { useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  X,
  Pencil,
  ShieldCheck,
  Trash2,
  Loader,
  Loader2Icon,
} from "lucide-react";
import { changeRole } from "../../services/auth";
import { handleError } from "../../helpers/handleErrorMSG";
import { toast } from "react-toastify";
import { deleteUser } from "../../services/users-api";
import { toastStyles } from "../../helpers/tones";

function UserRow({ user, index, setSearchParams, setUsersUpdating }) {
  const [currentRole, setNewRole] = useState(user.role);
  const [saving, setIsSaving] = useState(false);

  const updateRole = useCallback(
    async (currentRole) => {
      setIsSaving(true);
      const res = await changeRole(user._id, currentRole);
      if (res.success) {
        setNewRole(res.user.role);
        toast.success(res.message, {
          style: toastStyles.success,
        });
      } else {
        toast.error(res.message, {
          style: toastStyles.error,
        });
      }
      setIsSaving(false);
    },
    [currentRole, user],
  );
  const removeUser = useCallback(async () => {
    if (!window.confirm(`Delete ${user.username}? This can't be undone.`))
      return;
    setIsSaving(true);
    const res = await deleteUser(user._id);
    if (res.success) {
      setUsersUpdating({ ...user, isDelete: true });
      toast.success(res.message, {
        style: toastStyles.error,
      });
    } else {
      toast.error(res.message, {
        style: toastStyles.error,
      });
    }
    setIsSaving(false);
  }, [user]);
  return (
    <motion.tr
      id={user._id}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-t border-slate-100 transition-colors hover:bg-slate-50/50 dark:border-slate-800 dark:hover:bg-slate-800/40"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              loading="lazy"
              src={user.avatar}
              alt=""
              className="min-h-11 min-w-11 size-11 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800"
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {user.username}
            </p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            currentRole === "admin"
              ? "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400"
              : "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-400"
          }`}
        >
          {currentRole}
        </span>
      </td>
      <td className="px-6 py-4">
        {user.isVerified ? (
          <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <UserCheck size={16} /> Verified
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
            <X size={16} /> Pending
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setSearchParams({ edit: user._id })}
            className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
          >
            <Pencil size={18} />
          </button>
          {saving ? (
            <Loader2Icon className="animate-spin size-5" />
          ) : (
            <button
              disabled={saving}
              onClick={() => updateRole(currentRole)}
              className="rounded-lg p-2 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20"
            >
              <ShieldCheck size={18} />
            </button>
          )}
          <button
            onClick={removeUser}
            className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}

export default React.memo(UserRow);
