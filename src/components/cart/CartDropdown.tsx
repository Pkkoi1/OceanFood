// src/components/CartDropdown.tsx
import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "../../data/cartItemData";
import { ShoppingOutlined } from "@ant-design/icons";
import { CartService } from "../../Service/CartService";

const CartDropdown: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const userData = localStorage.getItem("userData");
  const userId = userData ? JSON.parse(userData).user?._id : null;

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        const cartData = await CartService.getCart(userId);
        console.log("Fetched cart items:", cartData);
        setItems(
          cartData.items.map(
            (item: {
              _id: string;
              product: {
                _id: string;
                name: string;
                price: number;
                image: string;
              };
              quantity: number;
            }) => ({
              key: item._id ? item._id.toString() : "", // Use _id as key
              id: item.product?._id || "", // Extract product ID
              name: item.product?.name || "Unknown Product", // Extract product name
              price: item.product?.price || 0, // Extract product price
              quantity: item.quantity || 0, // Extract quantity
              image: item.product?.image || "", // Extract product image
            })
          )
        );
      }
    };
    fetchCartItems();
  }, [userId]);

  const handleQuantityChange = async (key: string, newQuantity: number) => {
    const item = items.find((item: CartItemType) => item.key === key);
    if (item && newQuantity > 0 && userId) {
      await CartService.updateCartItem(userId, item.id, newQuantity);
      const updatedCart = await CartService.getCart(userId);
      setItems(
        updatedCart.map((item: CartItemType) => ({
          ...item,
          key: item.id.toString(),
        }))
      );
    }
  };

  const handleDeleteItem = async (key: string) => {
    const item = items.find((item: CartItemType) => item.key === key);
    if (item && userId) {
      await CartService.removeFromCart(userId, item.id);
      const updatedCart = await CartService.getCart(userId);
      setItems(
        updatedCart.map((item: CartItemType) => ({
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
