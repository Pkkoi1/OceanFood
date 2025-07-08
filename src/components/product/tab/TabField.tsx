import React from "react";
import ShoppingProcess from "./ShoppingProcess";
import DetailInfo from "./DetailInfo";
import { Tabs, type TabsProps } from "antd";

interface Product {
  description: { title: string; content: string }[];
}

interface DetailInfoProps {
  product: Product;
}

const TabField: React.FC<DetailInfoProps> = ({ product }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả",
      children: <DetailInfo product={product} />,
    },
    {
      key: "2",
      label: "Quy trình mua sắm",
      children: <ShoppingProcess />,
    },
    {
      key: "3",
      label: "Đánh giá",
      children: <div>Chưa có review</div>, // Placeholder for Review component
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-8  px-4 lg:px-[100px] ">
        <Tabs
          defaultActiveKey="1"
          items={items}
          size="large"
          className="custom-tabs" // Thêm class tùy chỉnh
        />
      </div>
    </div>
  );
};

// CSS tùy chỉnh (có thể đặt trong một file CSS riêng hoặc inline)
const styles = `
  .custom-tabs .ant-tabs-tab {
    font-size: 1.3rem !important; 

    font-weight: bold; 
  }
  .custom-tabs .ant-tabs-tab-active {
    font-size: 1.3rem !important;
  }
`;

// Thêm CSS vào document (sử dụng useEffect hoặc style tag nếu cần)
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default TabField;
