import React, { useEffect, useState } from "react";
import DateFilter from "../../components/cart/DateFilter";
import CartWithItem from "../../components/cart/CartWithItem";
import { cartItems } from "../../data/cartItemData";
import type { CartItem } from "../../data/cartItemData";

const CartView: React.FC = () => {
  const [products, setProducts] = useState<CartItem[]>(cartItems);

  useEffect(() => {
    // Simulate fetching cart items from an API or local storage
    setProducts(cartItems);
  }, []);

  return (
    <div className="lg:px-[100px] px-4 flex flex-col lg:flex-row gap-6 my-6">
      <div className="w-full lg:w-3/4">
        <CartWithItem items={products} />
      </div>
      <div className="w-full lg:w-1/4 items-baseline flex justify-end">
        <DateFilter />
      </div>
    </div>
  );
};

export default CartView;
