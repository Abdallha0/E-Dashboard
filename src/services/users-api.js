import { handleError } from "../helpers/handleErrorMSG";
import { isAbortError } from "../helpers/isAbortError";
import api from "../lib/api";

export async function getUsers({ signal } = {}) {
  try {
    const res = await api.get("/users/all", { signal });
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

export async function addUser(email, username, password, phone = "") {
  try {
    const res = await api.post("/users/add", {
      email,
      username,
      password,
      phone,
    });
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }
    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function updateUser(id, username, avatar, phone = "") {
  try {
    const res = await api.patch(`/users/${id}`, { username, avatar, phone });
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteUser(id) {
  try {
    const res = await api.delete(`/users/${id}`);
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}
