import { getAllProducts } from "../api/API";

export const fetchProducts = async () => {
  try {
    const products = await getAllProducts();
    console.log("Fetched Products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
