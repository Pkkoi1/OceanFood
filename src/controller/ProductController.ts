import type { Product } from "../data/mockData";
import { newProducts } from "../data/mockData";

// Get all products
export const getAllProducts = (): Product[] => {
  return [...newProducts];
};

// Get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return newProducts.find((product) => product.id === id);
};

// Add a new product
export const addProduct = (product: Product): void => {
  newProducts.push(product);
};

// Update an existing product by ID
export const updateProduct = (
  id: number,
  updatedProduct: Partial<Product>
): void => {
  const index = newProducts.findIndex((product) => product.id === id);
  if (index > -1) {
    newProducts[index] = { ...newProducts[index], ...updatedProduct };
  }
};

// Delete a product by ID
export const deleteProduct = (id: number): void => {
  const index = newProducts.findIndex((product) => product.id === id);
  if (index > -1) {
    newProducts.splice(index, 1);
  }
};

// Search products by name
export const searchProductsByName = (name: string): Product[] => {
  return newProducts.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Get unique types of products
export const getUniqueTypes = (): string[] => {
  return Array.from(
    new Set(
      newProducts
        .map((product) => product.type)
        .filter((type): type is string => !!type)
    )
  );
};

// Get unique categories of products
export const getUniqueCategories = (): string[] => {
  return Array.from(
    new Set(
      newProducts
        .flatMap((product) => product.categories || []) // Flatten categories array
        .filter((category): category is string => !!category) // Ensure valid categories
    )
  );
};

// Get products by category
export const getProductsByCategory = (categoryKey: string): Product[] => {
  return newProducts.filter(
    (product) => product.categories?.includes(categoryKey) // Updated to check multiple categories
  );
};
