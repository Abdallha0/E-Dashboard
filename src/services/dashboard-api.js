import api from "../lib/api";
import { handleError } from "../helpers/handleErrorMSG";
import { isAbortError } from "../helpers/isAbortError";

export async function getAdminDashboardStats({ signal } = {}) {
  try {
    const res = await api.get("/orders/admin/dashboard", { signal });
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }
    return data;
  } catch (error) {
    if (isAbortError(error)) throw error;
    return handleError(error);
  }
}
