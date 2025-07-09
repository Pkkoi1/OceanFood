import { Empty } from "antd";
import React from "react";

const CartViewEmty: React.FC = () => {
  return (
    <div>
      <Empty
        description="Không có sản phẩm nào trong giỏ hàng của bạn"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
      ;
    </div>
  );
};

export default CartViewEmty;
