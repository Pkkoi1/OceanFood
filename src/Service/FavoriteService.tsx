import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  clearFavorites,
  getFavoriteCount,
} from "../api/API";
import {
  getAllFavorites,
  saveFavorites,
} from "../controller/FavoriteController";

// Update the Favorite type to match the backend schema
export interface Favorite {
  userId: string;
  productIds: string[]; // Array of product IDs
  createdAt: string;
  updatedAt: string;
}

export const addFavorite = async (
  productId: string,
  userId: string
): Promise<Favorite> => {
  try {
    // Add to localStorage first
    const localFavorites = getAllFavorites();
    if (!localFavorites.includes(productId)) {
      localFavorites.push(productId); // Add productId as string
      saveFavorites(localFavorites);
    }

    // Then add to database
    const response = await addToFavorites(userId, productId);
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
    await removeFromFavorites(userId, productId);
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};

export const clearAllFavorites = async (userId: string): Promise<void> => {
  try {
    await clearFavorites(userId);
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
