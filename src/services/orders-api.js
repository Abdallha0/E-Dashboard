import { handleError } from "../helpers/handleErrorMSG";
import { isAbortError } from "../helpers/isAbortError";
import api from "../lib/api";

export async function getOrders(id = "", { signal } = {}) {
  try {
    const res = await api.get(`/orders/admin/${id}`, { signal });
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

export async function updateStatus(id, body, { signal } = {}) {
  try {
    const res = await api.patch(`/orders/admin/${id}/status`, body, { signal });
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
