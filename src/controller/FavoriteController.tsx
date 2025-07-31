// FavoriteController.tsx
const loadFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem("favoriteProductIds");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

let favoriteProductIds: string[] = loadFavorites();

export const saveFavorites = (ids: string[]): void => {
  favoriteProductIds = [...ids]; // Cập nhật biến toàn cục
  localStorage.setItem("favoriteProductIds", JSON.stringify(ids));
  window.dispatchEvent(new Event("favoriteChange"));
  console.log("Favorites saved:", ids);
};

export const getAllFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem("favoriteProductIds");
  favoriteProductIds = storedFavorites ? JSON.parse(storedFavorites) : []; // Đồng bộ từ localStorage
  console.log("getAllFavorites:", favoriteProductIds);
  return [...favoriteProductIds];
};

export const addFavorite = (productId: string): void => {
  if (!favoriteProductIds.includes(productId)) {
    favoriteProductIds.push(productId);
    saveFavorites(favoriteProductIds);
  }
};

export const removeFavorite = (productId: string): void => {
  const index = favoriteProductIds.indexOf(productId);
  if (index > -1) {
    favoriteProductIds.splice(index, 1);
    saveFavorites(favoriteProductIds);
  }
};
