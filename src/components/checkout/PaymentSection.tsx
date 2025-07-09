import React from "react";
import { Radio } from "antd";
import type { RadioGroupProps } from "antd/es/radio";

interface PaymentSectionProps {
  paymentMethod: string;
  onChange: (field: string, value: string) => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  paymentMethod,
  onChange,
}) => {
  const paymentOptions: RadioGroupProps["options"] = [
    {
      label: (
        <div className="flex items-center justify-between w-full p-3">
          <span className="font-medium">Chuyển khoản</span>
          <div className="flex items-center justify-center w-8 h-8 py-3 rounded">
            <span className="text-blue-600 text-lg">💳</span>
          </div>
        </div>
      ),
      value: "transfer",
    },
    {
      label: (
        <div className="flex items-center justify-between w-full p-3">
          <span className="font-medium">Thu hộ (COD)</span>
          <div className="flex items-center justify-center w-8 h-8 rounded">
            <span className="text-blue-600 text-lg">💰</span>
          </div>
        </div>
      ),
      value: "cod",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Thanh toán</h2>

      <Radio.Group
        block
        options={paymentOptions}
        value={paymentMethod}
        onChange={(e) => onChange("paymentMethod", e.target.value)}
        className="space-y-3"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      />

      <style>{`
        .ant-radio-group .ant-radio-wrapper {
          border: 1px solid #d9d9d9;
          border-radius: 8px;
          padding: 0 !important;
          margin: 0;
          width: 100%;
          transition: border-color 0.3s;
          justify-content: flex-start;
          padding-left: 10px !important;
        }

        .ant-radio-group .ant-radio-wrapper:hover {
          border-color: #4096ff;
          
        }

        .ant-radio-group .ant-radio-wrapper-checked {
          border-color: #4096ff;
        }

        .ant-radio-group .ant-radio {
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
};

export default PaymentSection;
