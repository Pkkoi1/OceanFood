import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Đảm bảo URL này chính xác

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

//products
export const getAllProducts = async () => {
  try {
    const response = await apiClient.get("/products"); // Đảm bảo endpoint này trả về JSON
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductByCategory = async (category: string) => {
  try {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};

export const filterProducts = async (
  category?: string | null,
  priceRange?: string,
  types?: string[],
  origin?: string[]
) => {
  try {
    const response = await apiClient.get("/products/filter", {
      params: {
        category,
        priceRange,
        types,
        origin,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
export const getOriginsByCategory = async (category: string) => {
  try {
    const response = await apiClient.get(
      `/products/category/${category}/origins`
    );
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching origins for category ${category}:`, error);
    throw error;
  }
};
export const searchProducts = async (name: string) => {
  try {
    const response = await apiClient.get("/products/search", {
      params: { name },
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error searching products by name ${name}:`, error);
    throw error;
  }
};

//users
// Define a User type for registration
interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  // Add other fields as needed
}

export const registerUser = async (userData: User) => {
  try {
    const response = await apiClient.post("/users/register", userData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error registering user:", error);
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/users/login", { email, password });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error logging in user:", error);
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
