import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem as ImportedCartItem } from "../../data/cartItemData";
import { useCart } from "../../hooks/useCart";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";

interface CartData {
  items: ImportedCartItem[];
  total?: number;
}

const CartWithItem: React.FC<CartData> = ({ items: initialItems }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const {
    items,
    totalAmount,
    handleQuantityChange,
    handleSelectItem,
    handleSelectAll,
    handleDeleteItem,
  } = useCart(initialItems);

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCheckout = () => {
    const selectedItems = items.filter((item) => item.selected);
    if (selectedItems.length > 0) {
      navigate("/cart/checkout", {
        state: { selectedItems, totalAmount },
      });
    } else {
      alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán!");
    }
  };

  const selectedItems = items.filter((item) => item.selected);

  return (
    <div className="bg-white">
      {isMobile ? (
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Giỏ hàng của bạn</h3>
            <span className="text-sm text-gray-600">
              {selectedItems.length}/{items.length} sản phẩm đã chọn
            </span>
          </div>

          {items.map((item) => (
            <div key={item.key}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={(e) => handleSelectItem(item.key, e.target.checked)}
                  className="mt-1"
                />
                <CartItem
                  imageSrc={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(item.key, newQuantity)
                  }
                  onDelete={() => handleDeleteItem(item.key)}
                  showControls={true}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartTable
          items={items}
          onQuantityChange={handleQuantityChange}
          onSelectItem={handleSelectItem}
          onSelectAll={handleSelectAll}
          onDeleteItem={handleDeleteItem}
          formatPrice={formatPrice}
        />
      )}

      <CartTotal
        totalAmount={totalAmount}
        formatPrice={formatPrice}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default CartWithItem;
