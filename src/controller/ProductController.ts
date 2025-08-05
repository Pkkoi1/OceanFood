import type { Product } from "../data/mockData";
import { newProducts } from "../data/mockData";

// Get all products
export const getAllProducts = (): Product[] => {
  return [...newProducts];
};

// Get a product by ID
export const getProductById = (id: string): Product | undefined => {
  return newProducts.find((product) => product.id === id);
};

// Add a new product
export const addProduct = (product: Product): void => {
  newProducts.push(product);
};

// Update an existing product by ID
export const updateProduct = (
  id: string,
  updatedProduct: Partial<Product>
): void => {
  const index = newProducts.findIndex((product) => product.id === id);
  if (index > -1) {
    newProducts[index] = { ...newProducts[index], ...updatedProduct };
  }
};

// Delete a product by ID
export const deleteProduct = (id: string): void => {
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

// Get origins by category
export const getOriginsByCategory = (categoryKey: string): string[] => {
  const products = getProductsByCategory(categoryKey);
  return Array.from(
    new Set(
      products
        .map((product) => product.origin.split(": ")[1]) // Extract origin value
        .filter((origin): origin is string => !!origin) // Ensure valid origins
    )
  );
};

// Filter products based on category, price range, type, and origin
export const filterProducts = (
  category: string | null,
  priceRange?: string,
  types?: string[],
  origins?: string[]
): Product[] => {
  let filteredProducts = [...newProducts];

  // Filter by category from URL
  if (category) {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories?.includes(category)
    );
  }

  // Filter by price range
  if (priceRange) {
    const [minPrice, maxPrice] = (() => {
      switch (priceRange) {
        case "under-500k":
          return [0, 500000];
        case "500k-1m":
          return [500000, 1000000];
        case "1m-3m":
          return [1000000, 3000000];
        case "3m-5m":
          return [3000000, 5000000];
        case "5m-7m":
          return [5000000, 7000000];
        case "over-7m":
          return [7000000, Infinity];
        default:
          return [0, Infinity];
      }
    })();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.currentPrice >= minPrice && product.currentPrice <= maxPrice
    );
  }

  // Filter by types
  if (types && types.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      types.includes(product.type || "")
    );
  }

  // Filter by origins
  if (origins && origins.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      origins.includes(
        product.origin.split(": ")[1]?.toLowerCase().replace(/\s+/g, "-") || ""
      )
    );
  }

  return filteredProducts;
};

// Manage recently viewed products
const RECENT_PRODUCTS_KEY = "recentProducts";

export const addRecentlyViewedProduct = (product: Product): void => {
  const storedProducts = localStorage.getItem(RECENT_PRODUCTS_KEY);
  const recentProducts: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  // Remove the product if it already exists
  const updatedProducts = recentProducts.filter((p) => p.id !== product.id);

  // Add the new product to the beginning
  updatedProducts.unshift(product);

  // Limit to 4 products
  const limitedProducts = updatedProducts.slice(0, 4);

  localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(limitedProducts));
};

export const getRecentlyViewedProducts = (): Product[] => {
  const storedProducts = localStorage.getItem(RECENT_PRODUCTS_KEY);
  return storedProducts ? JSON.parse(storedProducts) : [];
};
