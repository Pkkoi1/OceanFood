import { Table, Button, InputNumber, Checkbox } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import type { ColumnsType } from "antd/es/table";
import type { CartItem as ImportedCartItem } from "../../data/cartItemData";

interface CartItem extends ImportedCartItem {
  key: string;
  selected?: boolean;
}

interface CartTableProps {
  items: CartItem[];
  onQuantityChange: (key: string, newQuantity: number) => void;
  onSelectItem: (key: string, checked: boolean) => void;
  onSelectAll: (checked: boolean) => void;
  onDeleteItem: (key: string) => void;
  formatPrice: (price: number) => string;
}

const CartTable: React.FC<CartTableProps> = ({
  items,
  onQuantityChange,
  onSelectItem,
  onSelectAll,
  onDeleteItem,
  formatPrice,
}) => {
  const columns: ColumnsType<CartItem> = [
    {
      title: (
        <Checkbox
          onChange={(e) => onSelectAll(e.target.checked)}
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
            onChange={(e) => onSelectItem(record.key, e.target.checked)}
          />
          <img
            src={record.image}
            alt={record.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="font-medium text-gray-800">{record.name}</h4>
            <button
              onClick={() => onDeleteItem(record.key)}
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
            onClick={() => onQuantityChange(record.key, quantity - 1)}
            disabled={quantity <= 0} // Prevent reducing below 0
          />
          <InputNumber
            min={0} // Prevent entering negative numbers
            value={quantity}
            onChange={(value) => {
              if (value === 0) {
                onDeleteItem(record.key); // Remove item if quantity is 0
              } else if (value !== null && value > 0) {
                onQuantityChange(record.key, value);
              }
            }}
            className="w-16 mx-1"
            controls={false}
          />
          <Button
            size="small"
            icon={<PlusOutlined />}
            onClick={() => onQuantityChange(record.key, quantity + 1)}
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
    <div className="border-1 border-gray-200">
      <Table
        columns={columns}
        dataSource={items}
        pagination={false}
        className="cart-table"
        bordered={false}
      />
    </div>
  );
};

export default CartTable;
