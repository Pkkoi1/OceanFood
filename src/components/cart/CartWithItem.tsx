import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCartController from "../../controller/CartController";
import CartTable from "./CartTable";
import CartItem from "./CartItem";
import type { CartItem as CartItemType } from "../../data/cartItemData"; // Import CartItem as a type
import CartTotal from "./CartTotal";

const CartWithItem: React.FC<{ items: CartItemType[] }> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { removeFromCart } = useCartController();

  const [cartItems, setCartItems] = useState(
    items.map((item) => ({
      ...item,
      selected: false,
      key: item.id.toString(),
    }))
  );

  useEffect(() => {
    setCartItems(
      items.map((item) => ({
        ...item,
        selected: false,
        key: item.id.toString(),
      }))
    );
  }, [items]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleQuantityChange = (key: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSelectItem = (itemId: number, checked: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: checked } : item
      )
    );
  };

  const handleDeleteItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const totalAmount = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    if (selectedItems.length > 0) {
      navigate("/cart/checkout", {
        state: { selectedItems, totalAmount },
      });
    } else {
      alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán!");
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-white">
      {isMobile ? (
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Giỏ hàng của bạn</h3>
            <span className="text-sm text-gray-600">
              {cartItems.filter((item) => item.selected).length}/
              {cartItems.length} sản phẩm đã chọn
            </span>
          </div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={item.selected || false}
                  onChange={(e) => handleSelectItem(item.id, e.target.checked)}
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
                  onDelete={() => handleDeleteItem(item.id)}
                  showControls={true}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartTable
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onSelectItem={(key, checked) =>
            setCartItems((prevItems) =>
              prevItems.map((item) =>
                item.key === key ? { ...item, selected: checked } : item
              )
            )
          }
          onSelectAll={(checked) =>
            setCartItems((prevItems) =>
              prevItems.map((item) => ({ ...item, selected: checked }))
            )
          }
          onDeleteItem={(key) =>
            setCartItems((prevItems) =>
              prevItems.filter((item) => item.key !== key)
            )
          }
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
