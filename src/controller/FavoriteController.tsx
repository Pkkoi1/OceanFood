import { favoriteProductIds } from "../data/mockFavoriteProducts";

export const addFavorite = (productId: number): void => {
  if (!favoriteProductIds.includes(productId)) {
    favoriteProductIds.push(productId);
  }
};

export const removeFavorite = (productId: number): void => {
  const index = favoriteProductIds.indexOf(productId);
  if (index > -1) {
    favoriteProductIds.splice(index, 1);
  }
};

export const getAllFavorites = (): number[] => {
  return [...favoriteProductIds];
};
