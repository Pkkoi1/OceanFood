import React, { useState } from "react";
import { Modal } from "antd";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import type { Product } from "../../data/mockData";

interface ProductDetailModalProps {
  product: Product;
  quantity: number;
  onQuantityChange: (type: "increase" | "decrease") => void;
  isVisible: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  quantity: initialQuantity,
  onQuantityChange,
  isVisible,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    const newQuantity =
      type === "increase" ? quantity + 1 : Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange(type); // Notify parent about the change
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={1100}
    >
      <div className="grid grid-row-1 lg:grid-cols-2 gap-6">
        {/* Product Images */}
        <div className="col-span-1 lg:col-span-1">
          <ProductImage product={product} />
        </div>

        {/* Product Info */}
        <div className="col-span-1 lg:col-span-1">
          <ProductInfo
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
