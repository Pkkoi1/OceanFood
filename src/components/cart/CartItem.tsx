import React, { useState } from "react";

interface CartItemProps {
  imageSrc: string;
  name: string;
  price: number;
  quantity?: number;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  name,
  price,
  quantity,
}) => {
  const [quant, setQuant] = useState<number>(quantity || 1);
  const handleIncrease = () => {
    setQuant((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quant > 1) {
      setQuant((prev) => prev - 1);
    }
  };

  const totalPrice = price * quant;

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <img
        src={imageSrc}
        alt={name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">Số lượng</p>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={handleDecrease}
            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-sm font-bold text-[#ff4440]">
        {totalPrice.toLocaleString("vi-VN")}đ
      </p>
    </div>
  );
};

export default CartItem;
