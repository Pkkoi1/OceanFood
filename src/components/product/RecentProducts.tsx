import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { type Product } from "../../data/mockData"; // Giả định import từ mockData.ts
import { getRecentlyViewedProducts } from "../../controller/ProductController";

const RecentProducts: React.FC = () => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch recently viewed products from localStorage
    const recentProducts = getRecentlyViewedProducts();
    setRecentProducts(recentProducts);
  }, []);

  const handleToggleLike = (productId: string) => {
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
