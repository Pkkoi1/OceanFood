// src/components/CartDropdown.tsx
import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "../../data/cartItemData";
import { ShoppingOutlined } from "@ant-design/icons";
import {
  getAllCartItems,
  updateCartItemQuantity,
  removeFromCart,
} from "../../controller/CartController";

const CartDropdown: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(
        getAllCartItems().map((item) => ({
          ...item,
          key: item.id.toString(), // Ensure 'key' is always a string
        }))
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cartItems") {
        setItems(
          getAllCartItems().map((item) => ({
            ...item,
            key: item.id.toString(),
          }))
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleQuantityChange = (key: string, newQuantity: number) => {
    const item = items.find((item) => item.key === key);
    if (item && newQuantity > 0) {
      updateCartItemQuantity(item.id, newQuantity);
      setItems(
        getAllCartItems().map((item) => ({
          ...item,
          key: item.id.toString(),
        }))
      );
    }
  };

  const handleDeleteItem = (key: string) => {
    const item = items.find((item) => item.key === key);
    if (item) {
      removeFromCart(item.id);
      setItems(
        getAllCartItems().map((item) => ({
          ...item,
          key: item.id.toString(),
        }))
      );
    }
  };

  const handleCheckout = () => {
    alert("Chuyển đến trang thanh toán!");
    // Add checkout logic here
  };

  // Calculate total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-fit">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <CartItem
              key={item.key}
              imageSrc={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.key ?? "", newQuantity)
              }
              onDelete={() => handleDeleteItem(item.key ?? "")}
            />
          ))}
          <CartSummary total={total} onCheckout={handleCheckout} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-4 w-auto">
          <div>
            <ShoppingOutlined style={{ fontSize: 30 }} />
          </div>
          <span className="mt-6">
            Không có sản phẩm nào trong giỏ hàng của bạn
          </span>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
