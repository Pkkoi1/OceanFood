import React from "react";

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, onCheckout }) => {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-bold text-gray-600">Tổng tiền:</span>
        <span className="text-sm font-bold text-[#ff4440]">
          {total.toLocaleString("vi-VN")}đ
        </span>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Thanh toán
      </button>
    </div>
  );
};

export default CartSummary;
