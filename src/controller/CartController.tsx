import type { CartItem } from "../data/cartItemData";

// Hàm lấy danh sách giỏ hàng từ localStorage
const loadCartItems = (): CartItem[] => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

// Hàm lưu danh sách giỏ hàng vào localStorage
const saveCartItems = (items: CartItem[]): void => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

// Khởi tạo danh sách giỏ hàng từ localStorage
const cartItems: CartItem[] = loadCartItems();

// Thêm sản phẩm vào giỏ hàng (nếu đã có thì tăng số lượng)
export const addToCart = (product: CartItem): void => {
  const existingItem = cartItems.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cartItems.push({ ...product });
  }
  saveCartItems(cartItems);
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartItemQuantity = (
  productId: number,
  quantity: number
): void => {
  const item = cartItems.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCartItems(cartItems);
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (productId: number): void => {
  const index = cartItems.findIndex((item) => item.id === productId);
  if (index > -1) {
    cartItems.splice(index, 1);
    saveCartItems(cartItems);
  }
};

// Lấy toàn bộ sản phẩm trong giỏ hàng
export const getAllCartItems = (): CartItem[] => {
  return [...cartItems];
};

// Xóa toàn bộ giỏ hàng
export const clearCart = (): void => {
  cartItems.length = 0;
  saveCartItems(cartItems);
};
