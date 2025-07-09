import { Table, Button, InputNumber, Checkbox } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import type { CartItem as ImportedCartItem } from "../../data/cartItemData";

interface CartItem extends ImportedCartItem {
  key: string;
  selected?: boolean;
}

interface CartData {
  items: ImportedCartItem[];
  total?: number;
}

const CartWithItem: React.FC<CartData> = ({ items: initialItems }) => {
  const [items, setItems] = useState<CartItem[]>(
    initialItems.map((item) => ({
      ...item,
      key: item.id.toString(),
      selected: false,
    }))
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleQuantityChange = (key: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSelectItem = (key: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, selected: checked } : item
      )
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setItems((prev) => prev.map((item) => ({ ...item, selected: checked })));
  };

  const handleDeleteItem = (key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  };

  const selectedItems = items.filter((item) => item.selected);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const columns: ColumnsType<CartItem> = [
    {
      title: (
        <Checkbox
          onChange={(e) => handleSelectAll(e.target.checked)}
          checked={items.length > 0 && items.every((item) => item.selected)}
          indeterminate={
            items.some((item) => item.selected) &&
            !items.every((item) => item.selected)
          }
        >
          Thông tin sản phẩm
        </Checkbox>
      ),
      dataIndex: "product",
      key: "product",
      width: "45%",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Checkbox
            checked={record.selected}
            onChange={(e) => handleSelectItem(record.key, e.target.checked)}
          />
          <img
            src={record.image}
            alt={record.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="font-medium text-gray-800">{record.name}</h4>
            <button
              onClick={() => handleDeleteItem(record.key)}
              className="text-red-500 text-sm cursor-pointer hover:text-red-700"
            >
              Xóa
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
      width: "15%",
      align: "center",
      render: (price) => (
        <span className="text-red-500 font-medium">{formatPrice(price)}</span>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      width: "15%",
      align: "center",
      render: (quantity, record) => (
        <div className="flex items-center justify-center gap-1">
          <Button
            size="small"
            icon={<MinusOutlined />}
            onClick={() => handleQuantityChange(record.key, quantity - 1)}
            disabled={quantity <= 1}
          />
          <InputNumber
            min={1}
            value={quantity}
            onChange={(value) => handleQuantityChange(record.key, value || 1)}
            className="w-16 mx-1"
            controls={false}
          />
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => handleQuantityChange(record.key, quantity + 1)}
          />
        </div>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
      width: "15%",
      align: "center",
      render: (_, record) => (
        <span className="text-red-500 font-medium">
          {formatPrice(record.price * record.quantity)}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white">
      <div className="border-1 border-gray-200">
        <Table
          columns={columns}
          dataSource={items}
          pagination={false}
          className="cart-table"
          bordered={false}
        />
      </div>

      {/* Total Section */}
      <div className="flex justify-end w-full p-4">
        <div className="text-right">
          <div className="text-md flex items-center justify-between gap-2">
            <span className="font-bold">Tổng tiền: </span>
            <span className="text-red-500 font-bold">
              {formatPrice(totalAmount)}
            </span>
          </div>
          <button className="mt-4 bg-[#37bee3] hover:bg-[#3a9bc1] border-[#4FB3D9] w-72 py-3 rounded-sm px-8 text-white font-md cursor-pointer">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartWithItem;
