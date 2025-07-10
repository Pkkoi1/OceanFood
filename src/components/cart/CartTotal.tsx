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
    <div className="flex lg:text-right justify-center flex-col lg:justify-end w-full py-4">
      <div className="text-md flex items-center lg:justify-end-safe justify-between gap-2">
        <span className="font-bold">Tổng tiền: </span>
        <span className="text-red-500 font-bold">
          {formatPrice(totalAmount)}
        </span>
      </div>
      <div>
        <button
          onClick={onCheckout}
          className="mt-4 bg-[#37bee3] hover:bg-[#3a9bc1] border-[#4FB3D9] w-full lg:w-72 lg:justify-end-safe  py-3 rounded-sm px-8 text-white font-md cursor-pointer"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
