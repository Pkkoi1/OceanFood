import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import type { CartItem } from "../../data/cartItemData";

interface CheckoutState {
  selectedItems: Array<CartItem & { key: string; selected?: boolean }>;
  totalAmount: number;
}

const CheckoutView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CheckoutState;

  if (!state || !state.selectedItems || state.selectedItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const { selectedItems, totalAmount } = state;

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Checkout Form */}
        <div>
          <CheckoutForm />
        </div>

        {/* Right side - Order Summary */}
        <div>
          <OrderSummary
            items={selectedItems}
            totalAmount={totalAmount}
            formatPrice={formatPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
