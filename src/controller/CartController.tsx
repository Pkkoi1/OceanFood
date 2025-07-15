import { useState } from "react";
import type { CartItem } from "../data/cartItemData";
import { type Product } from "../data/mockData";
const useCartController = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.currentPrice,
      quantity: 1,
      key: product.id.toString(), // Add key property
    };

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === cartItem.id);
      const updatedItems = existingItem
        ? prevItems.map((item) =>
            item.id === cartItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, cartItem];

      console.log(`Adding new item: ${cartItem.name}`);
      console.log(`Updated cart items: ${JSON.stringify(updatedItems)}`);
      return updatedItems;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCartController;
