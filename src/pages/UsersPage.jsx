import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import UsersHeader from "../components/users/header";
import CreateUser from "../components/users/createUser";
import UsersStatsCard from "../components/users/statsCard";
import UsersList from "../components/users/usersList";
import { getUsers } from "../services/users-api";
import { toast } from "react-toastify";
import UsersSkeleton from "../components/users/UsersSkeleton";
import { isAbortError } from "../helpers/isAbortError";
import { useSearchParams } from "react-router-dom";
import EditUserModal from "../components/users/editUser";
import { Users, Shield, UserCheck } from "lucide-react";
import { toastStyles } from "../helpers/tones";

const initialState = {
  isLoading: true,
  hasError: false,
  users: [],
};

function UsersReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, hasError: false };
    case "success":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        users: action.payload?.users,
      };
    case "error":
      return { ...state, isLoading: false, hasError: true };
    case "addUser": {
      const user = action.payload.user;

      const exists = state.users.some((u) => u._id === user._id);

      return {
        ...state,
        users: exists
          ? state.users.map((u) => (u._id === user._id ? user : u))
          : [user, ...state.users],
      };
    }

    case "deleteUser": {
      const user = action.payload.user;
      return { ...state, users: state.users.filter((i) => i._id !== user._id) };
    }
    default:
      return state;
  }
}

function UsersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  const { users, isLoading, hasError } = state;
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    dispatch({ type: "start" });
    getUsers({ signal: controller.signal })
      .then((res) => {
        if (controller.signal.aborted) return;

        if (!res.success) {
          toast.error(res.message, {
            style: toastStyles.error,
          });
          dispatch({ type: "error" });
          return;
        }
        dispatch({ type: "success", payload: { users: res.users } });
      })
      .catch((e) => {
        if (controller.signal.aborted || isAbortError(e)) return;

        toast.error(e.message || "Internal Error!", {
          style: toastStyles.error,
        });
        dispatch({ type: "error" });
      });

    return () => controller.abort();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("edit");

  const [usersUpdating, setUsersUpdating] = useState(null);

  useEffect(() => {
    if (!usersUpdating) return;
    if (usersUpdating.isDelete) {
      dispatch({ type: "deleteUser", payload: { user: usersUpdating } });
    } else {
      dispatch({ type: "addUser", payload: { user: usersUpdating } });
    }
  }, [usersUpdating]);

  const onToggleForm = useCallback(() => {
    setIsFormOpen(!isFormOpen);
  }, [isFormOpen]);

  const initialData = useMemo(
    () => users.find((i) => i._id === id),
    [users, id],
  );

  useEffect(() => {
    if (id && !isLoading && !initialData) {
      toast.error("User not found", {
        style: toastStyles.error,
      });
      setSearchParams({});
    }
  }, [id, isLoading, initialData, setSearchParams]);

  const stats = useMemo(
    () => [
      {
        title: "Total Users",
        value: users.length,
        icon: Users,
        color: "bg-blue-500",
      },
      {
        title: "Admins",
        value: users.filter((i) => i.role === "admin").length,
        icon: Shield,
        color: "bg-purple-500",
      },
      {
        title: "Customers",
        value: users.filter((i) => i.role === "customer").length,
        icon: Users,
        color: "bg-cyan-500",
      },
      {
        title: "Verified",
        value: users.filter((i) => i.isVerified).length,
        icon: UserCheck,
        color: "bg-emerald-500",
      },
    ],
    [users],
  );

  const closeForm = useCallback(() => setIsFormOpen(false), []);
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 sm:p-8">
      {isLoading ? (
        <UsersSkeleton />
      ) : (
        <div className="mx-auto max-w-7xl space-y-8">
          <UsersHeader
            searchQuery={searchQuery}
            handleSearching={setSearchQuery}
            isFormOpen={isFormOpen}
            onToggleForm={onToggleForm}
          />

          {isFormOpen && (
            <CreateUser
              setUsersUpdating={setUsersUpdating}
              onClose={closeForm}
            />
          )}
          <UsersStatsCard stats={stats} />
          <UsersList
            setUsersUpdating={setUsersUpdating}
            setSearchParams={setSearchParams}
            allUsers={users}
            searchQuery={searchQuery}
          />
          {id && initialData && (
            <EditUserModal
              setUsersUpdating={setUsersUpdating}
              setSearchParams={setSearchParams}
              initialData={initialData}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UsersPage;
