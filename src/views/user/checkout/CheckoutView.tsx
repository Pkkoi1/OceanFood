import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { CartItem } from "../../../data/cartItemData";
import OrderSummary from "../../../components/checkout/OrderSummary";
import ShippingSection from "../../../components/checkout/ShippingSection";
import PaymentSection from "../../../components/checkout/PaymentSection";
import CustomerInfoSection from "../../../components/checkout/CustomerInfoSection";
import {
  createOrder,
  type CreateOrderPayload,
} from "../../../Service/orderService";

interface CheckoutState {
  selectedItems: Array<CartItem & { key: string; selected?: boolean }>;
  totalAmount: number;
}

const CheckoutView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CheckoutState;
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    email: "",
    lastName: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    note: "",
    paymentMethod: "cod",
    invoiceRequired: false,
  });
  const [loading, setLoading] = useState(false);

  if (!state || !state.selectedItems || state.selectedItems.length === 0) {
    navigate("/cart");
    return null;
  }

  // Ensure totalAmount is calculated correctly if not provided
  const {
    selectedItems,
    totalAmount = selectedItems.reduce(
      (sum, item) => sum + item.currentPrice * item.quantity,
      0
    ),
  } = state;

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handlePaymentChange = (field: string, value: string) => {
    if (field === "paymentMethod") {
      setPaymentMethod(value);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const shippingFee = 40000; // Fixed shipping fee

  const handleOrder = async () => {
    setLoading(true);
    try {
      const userData = localStorage.getItem("userData");
      const userId = userData ? JSON.parse(userData).user?._id : null;
      if (!userId) {
        setLoading(false);
        return null;
      }
      const totalAmount =
        selectedItems
          .map(
            (item) =>
              Number(item.currentPrice || item.price || 0) * item.quantity
          )
          .reduce((sum, v) => sum + v, 0) + shippingFee || 0;
      const payload: CreateOrderPayload = {
        user: userId,
        items: selectedItems.map((item) => ({
          product: item.id,
          quantity: item.quantity,
          price: Number(item.currentPrice || item.price || 0) || 0,
        })),
        totalAmount,
        shippingAddress: `${formData.address}, ${formData.ward}, ${formData.district}, ${formData.province}`,
        phone: formData.phone,
        note: formData.note,
        paymentMethod: paymentMethod as "cod" | "banking" | "momo",
      };
      await createOrder(payload);
      return { userId, selectedItems };
    } catch (error) {
      alert("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
      console.error("Error creating order:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-8">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-[#37bee3]">OceanFood</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Customer Info */}
        <div className="lg:col-span-1">
          <CustomerInfoSection
            formData={formData}
            onChange={handleInputChange}
          />
        </div>

        {/* Column 2: Shipping & Payment */}
        <div className="lg:col-span-1 space-y-6">
          <ShippingSection
            address={formData.address}
            shippingFee={shippingFee}
          />
          <PaymentSection
            paymentMethod={paymentMethod}
            onChange={handlePaymentChange}
          />
        </div>

        {/* Right side - Order Summary */}
        <div className="lg:col-span-1">
          <OrderSummary
            items={selectedItems}
            totalAmount={totalAmount}
            shippingFee={shippingFee}
            formatPrice={formatPrice}
            onPlaceOrder={handleOrder}
            loading={loading}
          />
        </div>
      </div>
      {/* Nút đặt hàng đã chuyển sang OrderSummary */}
    </div>
  );
};

export default CheckoutView;
