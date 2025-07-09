import React from "react";
import type { CartItem } from "../../data/cartItemData";

interface OrderItemProps {
  item: CartItem & { key: string; selected?: boolean };
  formatPrice: (price: number) => string;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, formatPrice }) => {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {item.quantity}
        </span>
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-sm text-gray-800 mb-1">{item.name}</h4>
        <p className="text-sm text-gray-600">500g</p>
      </div>

      <div className="text-right">
        <span className="font-medium text-gray-800">
          {formatPrice(item.price * item.quantity)}
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
