export interface CartItem {
  id: number;
  name: string;
  price: number; // Add this field to match the required type
  quantity: number;
  image: string;
  currentPrice: number; // Include currentPrice for compatibility
  originalPrice?: number;
  discount?: number;
  key?: string; // Optional key for unique identification
}

export const cartItems: CartItem[] = [];
