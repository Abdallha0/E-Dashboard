import { handleError } from "../helpers/handleErrorMSG";
import { isAbortError } from "../helpers/isAbortError";
import api from "../lib/api";

// get Product
export async function getProducts(parameters = "", { signal } = {}) {
  try {

    const res = await api.get(`/products${parameters}`, { signal });
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

// add products
export async function addProducts(productData, { signal } = {}) {
  try {
    const res = await api.post("/products", productData, { signal });
    return res.data;
  } catch (error) {
    if (isAbortError(error)) throw error;
    return handleError(error);
  }
}

// update product
export async function updateProduct(id, formData, { signal } = {}) {
  try {
    const res = await api.patch("/products/update/" + id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    if (isAbortError(error)) throw error;
    return handleError(error);
  }
}
