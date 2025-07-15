import React, { useState, useEffect } from "react";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import { cartItems } from "../../data/cartItemData";
import type { CartItem as CartItemType } from "../../data/cartItemData";
import { ShoppingOutlined } from "@ant-design/icons";

const CartDropdown: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    // Load cart items from data
    setItems(cartItems);
  }, []);

  const handleCheckout = () => {
    alert("Chuyển đến trang thanh toán!");
    // Thêm logic thanh toán ở đây
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
              key={item.id}
              imageSrc={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
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
