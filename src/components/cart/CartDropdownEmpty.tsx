

import { ShoppingOutlined } from "@ant-design/icons";
import React from "react";

const CartDropdownEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 w-auto">
      <div>
        <ShoppingOutlined style={{ fontSize: 30 }} />
      </div>
      <span className="mt-6">Không có sản phẩm nào trong giỏ hàng của bạn</span>
    </div>
  );
};

export default CartDropdownEmpty;
