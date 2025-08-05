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
  getHandbookByName: async (title: string) => {
    try {
      const response = await apiClient.get("/handbook/search", {
        params: { title },
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching handbook with title ${title}:`, error);
      throw error;
    }
  },
};

// Cart APIs
export const CartAPI = {
  getCart: async (userId: string) => {
    try {
      const response = await apiClient.get(`/cart/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching cart for user ${userId}:`, error);
      throw error;
    }
  },
  addToCart: async (userId: string, productId: string, quantity: number) => {
    try {
      const response = await apiClient.post(`/cart/${userId}/add`, {
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      console.error(`Error adding product ${productId} to cart:`, error);
      throw error;
    }
  },
  updateCartItem: async (userId: string, itemId: string, quantity: number) => {
    try {
      const response = await apiClient.put(`/cart/${userId}/item/${itemId}`, {
        quantity,
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating cart item ${itemId}:`, error);
      throw error;
    }
  },
  removeFromCart: async (userId: string, itemId: string) => {
    try {
      const response = await apiClient.delete(`/cart/${userId}/item/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(`Error removing item ${itemId} from cart:`, error);
      throw error;
    }
  },
  clearCart: async (userId: string) => {
    try {
      const response = await apiClient.delete(`/cart/${userId}/clear`);
      return response.data;
    } catch (error) {
      console.error(`Error clearing cart for user ${userId}:`, error);
      throw error;
    }
  },
  increaseCartItem: async (userId: string, itemId: string) => {
    try {
      const response = await apiClient.put(
        `/cart/${userId}/item/${itemId}/increase`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error increasing quantity for cart item ${itemId}:`,
        error
      );
      throw error;
    }
  },
  decreaseCartItem: async (userId: string, itemId: string) => {
    try {
      const response = await apiClient.put(
        `/cart/${userId}/item/${itemId}/decrease`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error decreasing quantity for cart item ${itemId}:`,
        error
      );
      throw error;
    }
  },
  updateCartItemQuantity: async (
    userId: string,
    productId: string,
    quantity: number
  ) => {
    try {
      const response = await apiClient.put(
        `/cart/${userId}/item/${productId}/quantity`,
        { quantity }
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating quantity for product ${productId}:`, error);
      throw error;
    }
  },
};

// Flash Sale APIs
export const FlashSaleAPI = {
  getFlashSales: async () => {
    try {
      const response = await apiClient.get("/flash-sale");
      console.log("Fetched Flash Sales:", response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching flash sales:", error);
      throw error;
    }
  },
  addFlashSale: async (flashSaleData: {
    product: string;
    startDate: string;
    endDate: string;
    discountPercentage: number;
  }) => {
    try {
      const response = await apiClient.post("/flash-sale", flashSaleData);
      return response.data;
    } catch (error) {
      console.error("Error adding flash sale:", error);
      throw error;
    }
  },
  updateFlashSale: async (
    id: string,
    updateData: {
      startDate?: string;
      endDate?: string;
      discountPercentage?: number;
    }
  ) => {
    try {
      const response = await apiClient.put(`/flash-sale/${id}`, updateData);
      return response.data;
    } catch (error) {
      console.error(`Error updating flash sale with ID ${id}:`, error);
      throw error;
    }
  },
  deleteFlashSale: async (id: string) => {
    try {
      const response = await apiClient.delete(`/flash-sale/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting flash sale with ID ${id}:`, error);
      throw error;
    }
  },
};

// Order APIs
export const OrderAPI = {
  createOrder: async (payload: {
    user: string;
    items: { product: string; quantity: number; price: number }[];
    totalAmount: number;
    shippingAddress: string;
    phone: string;
    note?: string;
    paymentMethod: "cod" | "banking" | "momo";
  }) => {
    try {
      const response = await apiClient.post("/orders", payload);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  },
  getOrdersByUser: async (userId: string) => {
    try {
      const response = await apiClient.get(`/orders/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching orders for user ${userId}:`, error);
      throw error;
    }
  },
  getOrderById: async (orderId: string) => {
    try {
      const response = await apiClient.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with ID ${orderId}:`, error);
      throw error;
    }
  },
  updateOrderStatus: async (orderId: string, status: string) => {
    try {
      const response = await apiClient.put(`/orders/${orderId}/status`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating order status for ID ${orderId}:`, error);
      throw error;
    }
  },
  deleteOrder: async (orderId: string) => {
    try {
      const response = await apiClient.delete(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting order with ID ${orderId}:`, error);
      throw error;
    }
  },
};
