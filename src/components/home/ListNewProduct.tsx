import React, { useState } from "react";
import { Button } from "antd";
import ProductCard from "./ProductCard";
import { newProducts } from "../../data/mockData";

interface Product {
  id: number;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  isLiked: boolean;
  badge?: string;
  isNew?: boolean;
  sold?: number;
  stockStatus?: string;
}

const ListNewProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(newProducts);
  const [visibleCount, setVisibleCount] = useState(10);

  const toggleLike = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <div className="py-8 mx-[100px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Hải sản mới về</h2>
        <Button
          type="link"
          className="text-[#4FB3D9] hover:text-[#3A9BC1] font-medium"
        >
          Xem tất cả →
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-5">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleLike={toggleLike}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-8">
          <Button
            type="primary"
            size="large"
            className="bg-[#4FB3D9] border-none hover:bg-[#3A9BC1] px-8"
            onClick={loadMore}
          >
            Xem thêm sản phẩm
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListNewProduct;
