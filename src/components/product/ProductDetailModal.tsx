import React from "react";
import { Modal } from "antd";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import type { Product } from "../../data/mockData";

interface ProductDetailModalProps {
  product: Product;
  quantity: number;
  onQuantityChange: (type: "increase" | "decrease") => void;
  onToggleLike: () => void;
  isVisible: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  quantity,
  onQuantityChange,
  onToggleLike,
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Product Images */}
        <div className="col-span-1 lg:col-span-5">
          <ProductImage product={product} />
        </div>

        {/* Product Info */}
        <div className="col-span-1 lg:col-span-4">
          <ProductInfo
            product={product}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            onToggleLike={onToggleLike}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
