import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CustomSelect from "../products/customDropdown";
import UserRow from "./userRow";

const ROWS_PER_PAGE = 10;
const FILTER_OPTIONS = [
  "Most Recent",
  "Role: Admin",
  "Role: Customer",
  "Status: Pending",
  "Status: Verified",
];
function applyFilter(filter, usersArray) {
  if (filter === FILTER_OPTIONS[0]) {
    return usersArray;
  }

  let separating = filter.split(":");

  if (separating.length !== 2) return usersArray;

  let obj = {
    key: separating[0].toLowerCase(),
    value: separating[1].toLowerCase().trim(),
  };

  if (obj.key === "role") {
    return usersArray.filter((i) => i.role === obj.value);
  } else if (obj.key === "status") {
    return usersArray.filter(
      (i) => i.isVerified === (obj.value === "verified"),
    );
  }
  return usersArray;
}

function UsersList({
  allUsers,
  searchQuery,
  setSearchParams,
  setUsersUpdating,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(FILTER_OPTIONS[0]);
  const sortedUsers = useMemo(
    () =>
      [...allUsers].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ),
    [allUsers],
  );

  const users = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const searched = q
      ? sortedUsers.filter(
          (i) =>
            i.username.toLowerCase().includes(q) ||
            i.email.toLowerCase().includes(q),
        )
      : sortedUsers;
    return applyFilter(sortBy, searched);
  }, [sortedUsers, searchQuery, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  const total = users.length;
  const totalPages = Math.max(1, Math.ceil(total / ROWS_PER_PAGE));
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = Math.min(startIndex + ROWS_PER_PAGE, total);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
    >
      <div className="flex items-center justify-between border-b border-slate-50 px-8 py-6 dark:border-slate-800">
        <h3 className="text-lg font-bold">User Directory</h3>
        <div className="">
          <CustomSelect
            label=""
            onChange={(v) => setSortBy(v.target.value)}
            options={FILTER_OPTIONS}
            value={sortBy}
            additionBar={false}
          />
        </div>
      </div>
      {users.length > 0 ? (
        <>
          <div className="overflow-x-auto coustom-scrollbar">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50/50 text-xs font-bold uppercase tracking-widest text-slate-500 dark:bg-slate-800/50">
                  <th className="px-8 py-4">User Details</th>
                  <th className="px-8 py-4">Access Level</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y min-w-full divide-slate-50 dark:divide-slate-800">
                {users.slice(startIndex, endIndex).map((user, idx) => (
                  <UserRow
                    setUsersUpdating={setUsersUpdating}
                    key={user._id}
                    user={user}
                    index={idx}
                    setSearchParams={setSearchParams}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between bg-slate-50/30 px-8 py-4 dark:bg-slate-800/30">
            <p className="text-sm font-medium text-slate-500">
              Showing {startIndex + 1} to {endIndex} of {users.length} users
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-sm font-bold shadow-sm disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <button
                type="button"
                disabled={currentPage === totalPages}
                className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-sm font-bold shadow-sm disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="py-8 text-center text-gray-500 ">No Users Found.</p>
      )}
    </motion.div>
  );
}

export default React.memo(UsersList);
