/**
 * Compares current form state against the original product data.
 * Returns `true` if any field has been modified.
 */
export function hasProductChanges({
  formData,
  product,
  descriptions,
  category,
  isFeatured,
  isActive,
  files,
  deletedImages,
}) {
  if (files.length > 0 || deletedImages.length > 0) return true;

  const formFieldChanged = [
    ["name", product.name],
    ["sku", product.sku],
    ["price", product.price],
    ["discountPrice", product.discountPrice || 0],
    ["stock", product.stock],
    ["brand", product.brand],
    ["subcategory", product.subcategory],
    ["tags", Array.isArray(product.tags) ? product.tags.join(" | ") : product.tags],
  ].some(([key, original]) => {
    const current = formData.get(key);
    return String(current ?? "") !== String(original ?? "");
  });

  if (formFieldChanged) return true;

  const stateFieldChanged =
    descriptions.description !== product.description ||
    descriptions.shortDescription !== product.shortDescription ||
    (category.target.value || "") !== (product.category || "") ||
    isFeatured !== Boolean(product.featured) ||
    isActive !== Boolean(product.isActive);

  return stateFieldChanged;
}
