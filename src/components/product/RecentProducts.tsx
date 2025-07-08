import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { newProducts } from "../../data/mockData"; // Giả định import từ mockData.ts

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

const RecentProducts: React.FC = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Lấy ngẫu nhiên 4 sản phẩm từ mockData
    const shuffled = [...newProducts].sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 4);
    setRecentProducts(selectedProducts);
  }, []);

  const handleToggleLike = (productId: number) => {
    setRecentProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  return (
    <div className="container mx-auto py-4 lg:py-8">
      <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-left">
        Sản phẩm xem gần đây
      </h2>
      <div className="flex flex-col space-y-4 lg:space-y-6">
        {recentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleLike={handleToggleLike}
            layout="horizontal"
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
