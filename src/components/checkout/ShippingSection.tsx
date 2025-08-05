import React from "react";

interface ShippingSectionProps {
  address: string;
  shippingFee: number;
}

const ShippingSection: React.FC<ShippingSectionProps> = ({
  address,
  shippingFee,
}) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Vận chuyển</h2>
      {address ? (
        <div className="p-4 border rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-lg">🚚</span>
            <span className="text-gray-800">Giao hàng tận nơi</span>
          </div>
          <span className="text-gray-800 font-medium">
            {shippingFee.toLocaleString("vi-VN")}đ
          </span>
        </div>
      ) : (
        <div className="p-4 bg-blue-50 rounded">
          <span className="text-blue-600">
            Vui lòng nhập thông tin giao hàng
          </span>
        </div>
      )}
    </div>
  );
};

export default ShippingSection;
