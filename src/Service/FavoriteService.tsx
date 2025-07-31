import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  clearFavorites,
  getFavoriteCount,
} from "../api/API";

// Update the Favorite type to match the backend schema
export interface Favorite {
  userId: string;
  productIds: string[]; // Array of product IDs
  createdAt: string;
  updatedAt: string;
}

// // Hàm tải danh sách yêu thích từ localStorage
// const loadFavorites = (): string[] => {
//   const storedFavorites = localStorage.getItem("favoriteProductIds");
//   return storedFavorites ? JSON.parse(storedFavorites) : [];
// };

// Hàm lưu danh sách yêu thích vào localStorage
export const saveFavorites = (ids: string[]): void => {
  localStorage.setItem("favoriteProductIds", JSON.stringify(ids));
  window.dispatchEvent(new Event("favoriteChange"));
  console.log("Favorites saved:", ids);
};

// Hàm lấy danh sách yêu thích từ localStorage
export const getAllFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem("favoriteProductIds");
  const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  console.log("getAllFavorites:", favorites);
  return [...favorites];
};

// Hàm thêm sản phẩm vào danh sách yêu thích trong localStorage
export const addFavoriteLocal = (productId: string): void => {
  const localFavorites = getAllFavorites();
  if (!localFavorites.includes(productId)) {
    localFavorites.push(productId);
    saveFavorites(localFavorites);
  }
};

// Hàm xóa sản phẩm khỏi danh sách yêu thích trong localStorage
export const removeFavoriteLocal = (productId: string): void => {
  const localFavorites = getAllFavorites();
  const updatedFavorites = localFavorites.filter((id) => id !== productId);
  saveFavorites(updatedFavorites);
};

export const addFavorite = async (
  productId: string,
  userId: string
): Promise<Favorite> => {
  try {
    // Add to database
    const response = await addToFavorites(userId, productId);
    // Add to localStorage
    addFavoriteLocal(productId);
    return response as Favorite;
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
};

export const fetchFavorites = async (userId: string): Promise<Favorite> => {
  try {
    const response = await getFavorites(userId);

    // Log the full response for debugging
    console.log("fetchFavorites response:", response);

    // Extract product IDs from the response
    if (!response || !Array.isArray(response)) {
      throw new Error(
        `Invalid response format: Expected an array of products, got ${JSON.stringify(
          response
        )}`
      );
    }

    const productIds = response.map((product) => product.id || product._id);
    // Update localStorage with server data
    saveFavorites(productIds);

    return {
      userId,
      productIds,
      createdAt: "",
      updatedAt: "",
    } as Favorite;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

export const fetchFavoriteCount = async (userId: string): Promise<number> => {
  try {
    const response = await getFavorites(userId);
    return response.productIds.length; // Return the count of product IDs
  } catch (error) {
    console.error("Error fetching favorite count:", error);
    throw error;
  }
};

export const removeFavorite = async (
  userId: string,
  productId: string
): Promise<void> => {
  try {
    // Remove from database
    await removeFromFavorites(userId, productId);
    // Remove from localStorage
    removeFavoriteLocal(productId);
    // Fetch updated favorites from server to ensure sync
    const serverFavorites = await fetchFavorites(userId);
    saveFavorites(serverFavorites.productIds);
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};

export const clearAllFavorites = async (userId: string): Promise<void> => {
  try {
    await clearFavorites(userId);
    // Clear localStorage
    saveFavorites([]);
  } catch (error) {
    console.error("Error clearing favorites:", error);
    throw error;
  }
};

export const fetchFavoriteCountFromAPI = async (
  userId: string
): Promise<number> => {
  try {
    return await getFavoriteCount(userId);
  } catch (error) {
    console.error("Error fetching favorite count from API:", error);
    throw error;
  }
};
