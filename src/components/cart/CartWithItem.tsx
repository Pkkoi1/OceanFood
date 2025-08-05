import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem as ImportedCartItem } from "../../data/cartItemData";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { CartService } from "../../Service/CartService";

interface CartData {
  items: ImportedCartItem[];
  total?: number;
}

// Extend CartItem type to include 'key'
interface CartItem extends ImportedCartItem {
  key: string; // Ensure 'key' is always a string
  selected?: boolean;
}

const CartWithItem: React.FC<CartData> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const userId = userData ? JSON.parse(userData).user?._id : null;

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        const cartData = await CartService.getCart(userId);
        setCartItems(
          cartData.items.map(
            (
              item: {
                id?: string;
                product: {
                  _id?: string;
                  name?: string;
                  price?: number;
                  image?: string;
                };
                quantity?: number;
              },
              index: number
            ) => ({
              key: item.id ? item.id.toString() : `fallback-key-${index}`, // Ensure key is unique
              id: item.product?._id || "", // Extract product ID
              name: item.product?.name || "Unknown Product", // Extract product name
              price: item.product?.price || 0, // Extract product price
              quantity: item.quantity || 0, // Extract quantity
              image: item.product?.image || "", // Extract product image
              selected: false, // Default selected state
            })
          )
        );
      }
    };
    fetchCartItems();
  }, [userId]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleQuantityChange = async (key: string, newQuantity: number) => {
    const item = cartItems.find((item: CartItem) => item.key === key);

    if (item && userId) {
      try {
        if (newQuantity === 0) {
          // Remove item if quantity is 0
          await CartService.removeFromCart(userId, item.id);
        } else {
          // Update quantity
          await CartService.updateCartItemQuantity(
            userId,
            item.id,
            newQuantity
          );
        }
        const updatedCart = await CartService.getCart(userId);
        setCartItems(
          updatedCart.items.map(
            (
              item: {
                id?: string;
                product: {
                  _id?: string;
                  name?: string;
                  price?: number;
                  image?: string;
                };
                quantity?: number;
              },
              index: number
            ) => ({
              key: item.id ? item.id.toString() : `fallback-key-${index}`, // Ensure key is unique
              id: item.product?._id || "", // Extract product ID
              name: item.product?.name || "Unknown Product", // Extract product name
              price: item.product?.price || 0, // Extract product price
              quantity: item.quantity || 0, // Extract quantity
              image: item.product?.image || "", // Extract product image
              selected:
                cartItems.find((i) => i.id === item.product?._id)?.selected ||
                false,
            })
          )
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
        alert("Không thể cập nhật số lượng sản phẩm.");
      }
    }
  };

  const handleSelectItem = (key: string, checked: boolean) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, selected: checked } : item
      )
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, selected: checked }))
    );
  };

  const handleDeleteItem = async (key: string) => {
    const item = cartItems.find((item) => item.key === key);
    if (item && userId) {
      await CartService.removeFromCart(userId, item.id);
      const updatedCart = await CartService.getCart(userId);
      setCartItems(
        updatedCart.items.map(
          (item: {
            id: string;
            product: {
              _id: string;
              name: string;
              price: number;
              image: string;
            };
            quantity: number;
          }) => ({
            key: item.id.toString(),
            id: item.product?._id || "",
            name: item.product?.name || "Unknown Product",
            price: item.product?.price || 0,
            quantity: item.quantity || 0,
            image: item.product?.image || "",
            selected:
              cartItems.find((i) => i.id === item.product?._id)?.selected ||
              false,
          })
        )
      );
    }
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);
    const totalAmount = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    if (selectedItems.length > 0) {
      navigate("/cart/checkout", {
        state: { selectedItems, totalAmount },
      });
    } else {
      alert("Vui lòng chọn ít nhất một sản phẩm để thanh toán!");
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

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
            <div key={item.key}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={(e) =>
                    handleSelectItem(item.key ?? "", e.target.checked)
                  }
                  className="mt-1"
                />
                <CartItem
                  imageSrc={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={(newQuantity) =>
                    handleQuantityChange(item.key ?? "", newQuantity)
                  }
                  onDelete={() => handleDeleteItem(item.key ?? "")}
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
          onSelectItem={handleSelectItem}
          onSelectAll={handleSelectAll}
          onDeleteItem={handleDeleteItem}
          formatPrice={formatPrice}
        />
      )}

      <CartTotal
        totalAmount={cartItems.reduce(
          (sum, item) => sum + (item.selected ? item.price * item.quantity : 0),
          0
        )}
        formatPrice={formatPrice}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default CartWithItem;
