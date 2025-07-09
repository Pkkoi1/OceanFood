import React, { useState } from "react";
import { Select, Input, Radio, Checkbox, Button } from "antd";

const { TextArea } = Input;

const CheckoutForm: React.FC = () => {
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const provinces = [
    { value: "hanoi", label: "Hà Nội" },
    { value: "hcm", label: "TP. Hồ Chí Minh" },
    { value: "danang", label: "Đà Nẵng" },
  ];

  return (
    <div className="bg-white">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-[#37bee3]">OceanFood</h1>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">Thông tin nhận hàng</h2>
          <div className="space-y-4">
            <Input
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full"
            />

            <Input
              placeholder="Họ và tên"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full"
            />

            <div className="flex gap-2">
              <Select
                defaultValue="+84"
                className="w-20"
                options={[{ value: "+84", label: "🇻🇳 +84" }]}
              />
              <Input
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-1"
              />
            </div>

            <Input
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full"
            />

            <Select
              placeholder="Tỉnh thành"
              value={formData.province}
              onChange={(value) => handleInputChange("province", value)}
              options={provinces}
              className="w-full"
            />

            <TextArea
              placeholder="Ghi chú (tùy chọn)"
              value={formData.note}
              onChange={(e) => handleInputChange("note", e.target.value)}
              rows={4}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Vận chuyển</h2>
          <div className="p-4 bg-blue-50 rounded">
            <span className="text-blue-600">
              Vui lòng nhập thông tin giao hàng
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Thanh toán</h2>
          <Radio.Group
            value={formData.paymentMethod}
            onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
            className="w-full"
          >
            <div className="space-y-3">
              <Radio
                value="transfer"
                className="flex items-center p-3 border rounded"
              >
                <div className="flex-1 ml-2">
                  <span>Chuyển khoản</span>
                  <div className="text-xs text-blue-600 mt-1">💳</div>
                </div>
              </Radio>

              <Radio
                value="cod"
                className="flex items-center p-3 border rounded"
              >
                <div className="flex-1 ml-2">
                  <span>Thu hộ (COD)</span>
                  <div className="text-xs text-blue-600 mt-1">💰</div>
                </div>
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

