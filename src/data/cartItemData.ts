export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  key?: string; // Add optional 'key' property
}

export const cartItems: CartItem[] = [];
