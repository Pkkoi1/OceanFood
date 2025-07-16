// Hàm tải danh sách yêu thích từ localStorage
const loadFavorites = (): number[] => {
  const storedFavorites = localStorage.getItem("favoriteProductIds");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Hàm lưu danh sách yêu thích vào localStorage
const saveFavorites = (ids: number[]): void => {
  localStorage.setItem("favoriteProductIds", JSON.stringify(ids));
};

// Khởi tạo favoriteProductIds từ localStorage
const favoriteProductIds: number[] = loadFavorites();

export const addFavorite = (productId: number): void => {
  if (!favoriteProductIds.includes(productId)) {
    favoriteProductIds.push(productId);
    saveFavorites(favoriteProductIds);
  }
};

export const removeFavorite = (productId: number): void => {
  const index = favoriteProductIds.indexOf(productId);
  if (index > -1) {
    favoriteProductIds.splice(index, 1);
    saveFavorites(favoriteProductIds);
  }
};

export const getAllFavorites = (): number[] => {
  return [...favoriteProductIds];
};
