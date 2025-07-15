import { cartItems } from "../data/cartItemData";
import type { CartItem } from "../data/cartItemData";

// Thêm sản phẩm vào giỏ hàng (nếu đã có thì tăng số lượng)
export const addToCart = (product: CartItem): void => {
  const existingItem = cartItems.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cartItems.push({ ...product });
  }
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartItemQuantity = (
  productId: number,
  quantity: number
): void => {
  const item = cartItems.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (productId: number): void => {
  const index = cartItems.findIndex((item) => item.id === productId);
  if (index > -1) {
    cartItems.splice(index, 1);
  }
};

// Lấy toàn bộ sản phẩm trong giỏ hàng
export const getAllCartItems = (): CartItem[] => {
  return [...cartItems];
};

// Xóa toàn bộ giỏ hàng
export const clearCart = (): void => {
  cartItems.length = 0;
};
