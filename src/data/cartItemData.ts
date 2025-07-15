export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  key: string; // Added key property
}

export const cartItems: CartItem[] = [];
