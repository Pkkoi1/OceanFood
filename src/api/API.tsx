import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Đảm bảo URL này chính xác

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Product APIs
export const ProductAPI = {
  getAllProducts: async () => {
    try {
      const response = await apiClient.get("/products");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductByCategory: async (category: string) => {
    try {
      const response = await apiClient.get(`/products/category/${category}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      throw error;
    }
  },
  filterProducts: async (
    category?: string | null,
    priceRange?: string,
    types?: string[],
    origin?: string[]
  ) => {
    try {
      const response = await apiClient.get("/products/filter", {
        params: { category, priceRange, types, origin },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error filtering products:", error);
      throw error;
    }
  },
  getProductById: async (id: string) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  },
  getOriginsByCategory: async (category: string) => {
    try {
      const response = await apiClient.get(
        `/products/category/${category}/origins`
      );
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching origins for category ${category}:`, error);
      throw error;
    }
  },
  searchProducts: async (name: string) => {
    try {
      const response = await apiClient.get("/products/search", {
        params: { name },
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error searching products by name ${name}:`, error);
      throw error;
    }
  },
};

// User APIs
export const UserAPI = {
  registerUser: async (userData: {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) => {
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
  },
  loginUser: async (email: string, password: string) => {
    try {
      const response = await apiClient.post("/users/login", {
        email,
        password,
      });
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
  },
  logoutUser: async () => {
    try {
      const response = await apiClient.post("/users/logout");
      return response.data;
    } catch (error) {
      console.error("Error in logoutUser API:", error);
      throw error;
    }
  },
};

// Favorite APIs
export const FavoriteAPI = {
  addToFavorites: async (userId: string, productId: string) => {
    try {
      const response = await apiClient.post(`/favorites/${userId}/add`, {
        productId,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding to favorites:", error);
      throw error;
    }
  },
  getFavorites: async (userId: string) => {
    try {
      const response = await apiClient.get(`/favorites/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching favorites:", error);
      throw error;
    }
  },
  removeFromFavorites: async (userId: string, productId: string) => {
    try {
      const response = await apiClient.delete(
        `/favorites/${userId}/remove/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing from favorites:", error);
      throw error;
    }
  },
  clearFavorites: async (userId: string) => {
    try {
      const response = await apiClient.delete(`/favorites/${userId}/clear`);
      return response.data;
    } catch (error) {
      console.error("Error clearing favorites:", error);
      throw error;
    }
  },
  getFavoriteCount: async (userId: string) => {
    try {
      const response = await apiClient.get(`/favorites/${userId}/count`);
      return response.data.data.count;
    } catch (error) {
      console.error("Error fetching favorite count:", error);
      throw error;
    }
  },
};

// Handbook API
export const HandbookAPI = {
  getHandbook: async () => {
    try {
      const response = await apiClient.get("/handbook");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching handbook:", error);
      throw error;
    }
  },
  getHandbookById: async (id: string) => {
    try {
      const response = await apiClient.get(`/handbook/id/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching handbook with ID ${id}:`, error);
      throw error;
    }
  },
};
