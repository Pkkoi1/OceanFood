import { CartAPI } from "../api/API";

export const CartService = {
  getCart: async (userId: string) => {
    return await CartAPI.getCart(userId);
  },
  addToCart: async (userId: string, productId: string, quantity: number) => {
    return await CartAPI.addToCart(userId, productId, quantity);
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
};
