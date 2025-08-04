import { CartAPI } from "../api/API";
import { addToCart as addToLocalCart } from "../controller/CartController";

export const CartService = {
  getCart: async (userId: string) => {
    return await CartAPI.getCart(userId);
  },
  addToCart: async (
    userId: string | null,
    productId: string,
    quantity: number
  ) => {
    if (!userId) {
      throw new Error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
    }
    try {
      // Add to API
      await CartAPI.addToCart(userId, productId, quantity);
      // Add to local storage
      addToLocalCart({
        id: productId,
        name: "", // Placeholder, replace with actual product name if available
        price: 0, // Placeholder, replace with actual price if available
        quantity,
        image: "", // Placeholder, replace with actual image if available
        currentPrice: 0, // Placeholder, replace with actual current price
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Đã xảy ra lỗi khi thêm vào giỏ hàng.";
      throw new Error(errorMessage);
    }
  },
  updateCartItem: async (userId: string, itemId: string, quantity: number) => {
    return await CartAPI.updateCartItem(userId, itemId, quantity);
  },
  removeFromCart: async (userId: string, itemId: string) => {
    return await CartAPI.removeFromCart(userId, itemId);
  },
  clearCart: async (userId: string) => {
    return await CartAPI.clearCart(userId);
  },
  increaseCartItem: async (userId: string, itemId: string) => {
    return await CartAPI.increaseCartItem(userId, itemId);
  },
  decreaseCartItem: async (userId: string, itemId: string) => {
    return await CartAPI.decreaseCartItem(userId, itemId);
  },
};
