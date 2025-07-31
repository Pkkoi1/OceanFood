import React, { useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import { type Product } from "../../data/mockData";
import { fetchFavorites, removeFavorite } from "../../Service/FavoriteService";

const FavoriteProducts: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("userData") || "{}"); // Retrieve user object from local storage
  const userId = user.user._id || ""; // Extract userId from the user object
  const [favProducts, setFavProducts] = useState<Product[]>([]); // Use the Product type
  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const favorites = await fetchFavorites(userId);
        const favoriteProducts = favorites?.products || []; // Safely access products
        console.log("Fetched favorite products:", favoriteProducts);

        // If `favorites.products` contains `Product` objects, use them directly
        const mappedProducts = favoriteProducts.map((product) => ({
          ...product,
          isLiked: true, // Mark as liked
        }));

        console.log("Mapped favorite products:", mappedProducts);
        setFavProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();

    // Listen for storage changes to update the UI
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
      setFavProducts((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error removing favorite product:", error);
    }
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Danh sách yêu thích của tôi
      </h2>
      {favProducts.length === 0 ? (
        <div className="">
          Bạn chưa có sản phẩm yêu thích,{" "}
          <a href="/products" className="cursor-pointer text-blue-600">
            vào đây
          </a>{" "}
          để thêm thật nhiều sản phẩm vào yêu thích nào.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {favProducts.map((product) => (
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
