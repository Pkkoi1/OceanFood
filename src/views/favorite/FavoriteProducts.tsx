import React, { useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { newProducts } from "../../data/mockData"; // Import all products
import {
  getAllFavorites,
  removeFavorite,
} from "../../controller/FavoriteController";

const FavoriteProducts: React.FC = () => {
  // Filter products based on favoriteProductIds and set isLiked to true
  const [products, setProducts] = useState(
    newProducts
      .filter((product) => getAllFavorites().includes(product.id))
      .map((product) => ({ ...product, isLiked: true }))
  );

  const toggleLike = (productId: number) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter((product) => {
        if (product.id === productId) {
          removeFavorite(productId); // Remove from favorites
          return false; // Exclude from the list
        }
        return true;
      });
      return updatedProducts;
    });
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px]">
      <h2 className="text-3xl font-bold  mb-8 text-gray-800">
        Danh sách yêu thích của tôi
      </h2>
      {products.length === 0 ? (
        <div className="">
          Bạn chưa có sản phẩm yêu thích,{" "}
          <a href="/products" className="cursor-pointer text-blue-600">
            vào đây
          </a>{" "}
          để thêm thật nhiều sản phẩm vào yêu thích nào.
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default FavoriteProducts;
