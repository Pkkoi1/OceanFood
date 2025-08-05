import React, { useState } from "react";
import { Button, Input } from "antd";
import type { CartItem } from "../../data/cartItemData";
import OrderItem from "./OrderItem";

interface OrderSummaryProps {
  items: Array<CartItem & { key: string; selected?: boolean }>;
  totalAmount: number;
  shippingFee: number;
  formatPrice: (price: number) => string;
  onPlaceOrder?: () => void;
  loading?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  totalAmount,
  shippingFee,
  formatPrice,
  onPlaceOrder,
  loading,
}) => {
  const [discountCode, setDiscountCode] = useState("");
  const finalTotal = totalAmount + shippingFee; // Include shipping fee in total

  console.log("Order Summary Items:", items);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">
        Đơn hàng ({items.length} sản phẩm)
      </h3>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <OrderItem key={item.key} item={item} formatPrice={formatPrice} />
        ))}
      </div>

      {/* Discount Code */}
      <div className="mb-6">
        <div className="flex gap-2">
          <Input
            placeholder="Nhập mã giảm giá"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1"
          />
          <Button type="primary" className="bg-[#37bee3]">
            Áp dụng
          </Button>
        </div>
      </div>

      {/* Price Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>{formatPrice(totalAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span>Phí vận chuyển</span>
          <span>{shippingFee === 0 ? "-" : formatPrice(shippingFee)}</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-bold">
          <span>Tổng cộng</span>
          <span className="text-[#37bee3]">{formatPrice(finalTotal)}</span>
        </div>
      </div>

      {/* Back to Cart Link */}
      <div className="mb-4">
        <a
          href="/cart"
          className="text-[#37bee3] text-sm flex items-center gap-1"
        >
          ← Quay về giỏ hàng
        </a>
      </div>

      {/* Place Order Button */}
      <Button
        type="primary"
        size="large"
        className="w-full bg-[#37bee3] hover:bg-[#2a9bc4] border-[#37bee3]"
        onClick={onPlaceOrder}
        loading={loading}
        disabled={loading}
      >
        {loading ? "Đang xử lý..." : "ĐẶT HÀNG"}
      </Button>
    </div>
  );
};

export default OrderSummary;
