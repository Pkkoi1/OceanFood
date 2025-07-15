import React from "react";
import DateFilter from "../../components/cart/DateFilter";
import CartWithItem from "../../components/cart/CartWithItem";
import useCartController from "../../controller/CartController";

const CartView: React.FC = () => {
  const { cartItems } = useCartController(); // Use cartItems from the controller

  return (
    <div className="lg:px-[100px] px-4 flex flex-col lg:flex-row gap-6 my-6">
      <div className="w-full lg:w-3/4">
        <CartWithItem items={cartItems} />{" "}
        {/* Pass cartItems to CartWithItem */}
      </div>
      <div className="w-full lg:w-1/4 items-baseline flex justify-end">
        <DateFilter />
      </div>
    </div>
  );
};

export default CartView;
