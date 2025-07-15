import React, { useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { favoriteProductIds } from "../../data/mockFavoriteProducts";
import { newProducts } from "../../data/mockData"; // Import all products

const FavoriteProducts: React.FC = () => {
  // Filter products based on favoriteProductIds and set isLiked to true
  const [products, setProducts] = useState(
    newProducts
      .filter((product) => favoriteProductIds.includes(product.id))
      .map((product) => ({ ...product, isLiked: true }))
  );

  const toggleLike = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px]">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sản phẩm yêu thích
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleLike={toggleLike}
            layout="vertical"
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
