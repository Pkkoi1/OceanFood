import React, { useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import { newProducts, type Product } from "../../data/mockData";
import { fetchFavorites, removeFavorite } from "../../Service/FavoriteService";

const FavoriteProducts: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("userData") || "{}"); // Retrieve user object from local storage
  const userId = user.user._id || ""; // Extract userId from the user object
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type
  console.log("User ID:", user); // Debugging line to check userId
  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const favorites = await fetchFavorites(userId);
        const productIds = favorites?.productIds || []; // Safely access productIds
        setProducts(
          newProducts
            .filter((product) => productIds.includes(product.id))
            .map((product) => ({ ...product, isLiked: true }))
        );
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();

    // Lắng nghe sự kiện storage để cập nhật khi localStorage thay đổi
    const handleStorageChange = async (event: StorageEvent) => {
      if (event.key === "favoriteProductIds") {
        await fetchFavoriteProducts();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [userId]);

  const toggleLike = async (productId: string) => {
    try {
      await removeFavorite(userId, productId);
      setProducts((prev) => prev.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error removing favorite product:", error);
    }
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
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
