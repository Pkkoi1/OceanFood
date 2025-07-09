import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductSidebar from "./ProductSidebar";
import type { Product } from "../../data/mockData";

interface ProductDetailContentProps {
  product: Product;
  quantity: number;
  onQuantityChange: (type: "increase" | "decrease") => void;
  onToggleLike: () => void;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({
  product,
  quantity,
  onQuantityChange,
  onToggleLike,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-[100px] gap-6 lg:gap-0">
      {/* Product Images - Mobile: full width, Desktop: 5/12 */}
      <div className="col-span-1 lg:col-span-5">
        <ProductImage product={product} />
      </div>

      {/* Product Info - Mobile: full width, Desktop: 4/12 */}
      <div className="col-span-1 lg:col-span-4">
        <ProductInfo
          product={product}
          quantity={quantity}
          onQuantityChange={onQuantityChange}
          onToggleLike={onToggleLike}
        />
      </div>

      {/* Sidebar - Mobile: full width, Desktop: 3/12 */}
      <div className="col-span-1 lg:col-span-3">
        <ProductSidebar />
      </div>
    </div>
  );
};

export default ProductDetailContent;
