import React from "react";
import CartSummary from "./CartSummary";
import CartItem from "./Cartitem";

const CartDropdown: React.FC = () => {
  const handleCheckout = () => {
    alert("Chuyển đến trang thanh toán!");
    // Thêm logic thanh toán ở đây
  };

  return (
    <div className=" w-fit">
      <CartItem
        imageSrc="https://bizweb.dktcdn.net/thumb/compact/100/533/545/products/01-2-4ee4d028410c4f6b97c5f71ba9930eb9-1024x1024.jpg"
        name="Cá Hồi Phi Lê Tươi Nguyên"
        price={1350000}
      />
      <CartSummary total={1350000} onCheckout={handleCheckout} />
    </div>
  );
};

export default CartDropdown;
