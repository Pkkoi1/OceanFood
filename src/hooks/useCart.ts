import { useState } from "react";
import type { CartItem as ImportedCartItem } from "../data/cartItemData";

interface CartItem extends ImportedCartItem {
  key: string; // Ensure 'key' is always a string
  selected?: boolean;
}

export const useCart = (initialItems: ImportedCartItem[]) => {
  const [items, setItems] = useState<CartItem[]>(
    initialItems.map((item) => ({
      ...item,
      key: item.id.toString(), // Ensure 'key' is always a string
      selected: false,
    }))
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleQuantityChange = (key: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSelectItem = (key: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, selected: checked } : item
      )
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: checked })));
  };

  const handleDeleteItem = (key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  };

  const selectedItems = items.filter((item) => item.selected);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    items,
    selectedItems,
    totalAmount,
    formatPrice,
    handleQuantityChange,
    handleSelectItem,
    handleSelectAll,
    handleDeleteItem,
  };
};
