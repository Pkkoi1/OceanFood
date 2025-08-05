import { ProductAPI } from "../api/API";
import type { Product } from "../data/mockData"; // Import Product type

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const products = await ProductAPI.getAllProducts();
    return products as Product[]; // Ensure the data is cast to Product[]
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const products = await ProductAPI.getProductByCategory(category);
    return products as Product[]; // Ensure the data is cast to Product[]
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};

export const filter = async (
  category?: string | null,
  priceRange?: string,
  types?: string[],
  origin?: string[]
): Promise<Product[]> => {
  try {
    const products = await ProductAPI.filterProducts(
      category,
      priceRange,
      types,
      origin
    );
    return products as Product[]; // Ensure the data is cast to Product[]
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error;
  }
};

export const findProductById = async (id: string): Promise<Product> => {
  try {
    const product = await ProductAPI.getProductById(id);
    return product as Product; // Ensure the data is cast to Product
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getOriginsByCategories = async (
  category: string
): Promise<string[]> => {
  try {
    const origins = await ProductAPI.getOriginsByCategory(category);
    return origins as string[]; // Ensure the data is cast to string[]
  } catch (error) {
    console.error(`Error fetching origins for category ${category}:`, error);
    throw error;
  }
};

export const searchProductsByName = async (
  name: string
): Promise<Product[]> => {
  try {
    const products = await ProductAPI.searchProducts(name);
    return products.filter((product: Product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    ) as Product[]; // Ensure the data is cast to Product[]
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};
