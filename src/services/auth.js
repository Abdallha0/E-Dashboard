import api from "../lib/api";
import { handleError } from "../helpers/handleErrorMSG";
import { isAbortError } from "../helpers/isAbortError";

export async function loginRequest(email, password) {
  try {
    const res = await api.post("/auth/login", { email, password });

    const data = res.data;

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function logoutRequest() {
  try {
    const res = await api.post("/auth/logout");
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function getAdmin({ signal } = {}) {
  try {
    const res = await api.get("/auth/me", { signal });
    const data = res.data;
    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    if (isAbortError(error)) throw error;
    return handleError(error);
  }
}

export async function changeRole(userId, role) {
  try {
    const res = await api.patch('/auth/change-role', { userId, role });
    const data = res.data;
    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error)
  }
}