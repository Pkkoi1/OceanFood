import { FavoriteAPI } from "../api/API";
import type { Product } from "../data/mockData";

export interface Favorite {
  userId: string;
  productIds: string[];
  products: Product[];
  createdAt: string;
  updatedAt: string;
}

// Hàm tải danh sách yêu thích từ localStorage
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
    const response = await FavoriteAPI.addToFavorites(userId, productId);
    addFavoriteLocal(productId);
    return response as Favorite;
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
};

export const fetchFavorites = async (userId: string): Promise<Favorite> => {
  try {
    const response = await FavoriteAPI.getFavorites(userId);
    console.log("fetchFavorites response:", response);
    if (!response || !Array.isArray(response)) {
      throw new Error(
        `Invalid response format: Expected an array of products, got ${JSON.stringify(
          response
        )}`
      );
    }
    const productIds = response.map((product) => product.id || product._id);
    saveFavorites(productIds);
    return {
      userId,
      productIds,
      products: response,
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
    return await FavoriteAPI.getFavoriteCount(userId);
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
    await FavoriteAPI.removeFromFavorites(userId, productId);
    removeFavoriteLocal(productId);
    const serverFavorites = await fetchFavorites(userId);
    saveFavorites(serverFavorites.productIds);
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};

export const clearAllFavorites = async (userId: string): Promise<void> => {
  try {
    await FavoriteAPI.clearFavorites(userId);
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
    return await FavoriteAPI.getFavoriteCount(userId);
  } catch (error) {
    console.error("Error fetching favorite count from API:", error);
    throw error;
  }
};
