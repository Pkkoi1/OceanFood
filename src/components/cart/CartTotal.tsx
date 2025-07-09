import React from "react";

interface CartTotalProps {
  totalAmount: number;
  formatPrice: (price: number) => string;
  onCheckout?: () => void;
}

const CartTotal: React.FC<CartTotalProps> = ({
  totalAmount,
  formatPrice,
  onCheckout,
}) => {
  return (
    <div className="flex justify-center lg:justify-end w-full p-4">
      <div className="text-right">
        <div className="text-md flex items-center justify-between gap-2">
          <span className="font-bold">Tổng tiền: </span>
          <span className="text-red-500 font-bold">
            {formatPrice(totalAmount)}
          </span>
        </div>
        <button
          onClick={onCheckout}
          className="mt-4 bg-[#37bee3] hover:bg-[#3a9bc1] border-[#4FB3D9] lg:w-72 w-96  py-3 rounded-sm px-8 text-white font-md cursor-pointer"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
