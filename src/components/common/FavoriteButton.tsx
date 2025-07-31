import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addFavorite, removeFavorite } from "../../Service/FavoriteService";
import { getAllFavorites } from "../../controller/FavoriteController";
import { notification } from "antd";

interface FavoriteButtonProps {
  isLiked: boolean;
  onToggleLike: (productId: string) => void; // productId is string
  productId: string; // productId is string
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isLiked: initialIsLiked,
  onToggleLike,
  productId,
  className,
}) => {
  const [isLikedLocal, setIsLikedLocal] = useState(initialIsLiked);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const isFavorite = getAllFavorites().includes(productId);
    setIsLikedLocal(isFavorite);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "favoriteProductIds") {
        setIsLikedLocal(getAllFavorites().includes(productId));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [productId]);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIsLiked = !isLikedLocal;

    try {
      const userData = localStorage.getItem("userData");
      const userId = userData ? JSON.parse(userData).user?._id : null;

      if (!userId) {
        throw new Error("User ID not found. Please log in.");
      }

      if (newIsLiked) {
        await addFavorite(productId, userId); // Pass userId
        api.success({
          message: "Đã thêm vào yêu thích",
          description: `Sản phẩm đã được thêm vào danh sách yêu thích.`,
          placement: "topRight",
        });
      } else {
        await removeFavorite(userId, productId); // Pass userId
        api.info({
          message: "Đã xóa khỏi yêu thích",
          description: `Sản phẩm đã được xóa khỏi danh sách yêu thích.`,
          placement: "topRight",
        });
      }
      setIsLikedLocal(newIsLiked);
      onToggleLike(productId);
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return (
    <>
      {contextHolder}
      <div className={className} onClick={handleClick}>
        {isLikedLocal ? (
          <HeartFilled
            style={{ color: "#FF4D4F" }}
            className="text-red-500 text-xl"
          />
        ) : (
          <HeartOutlined
            style={{ color: "#FF4D4F" }}
            className="text-gray-400 text-xl hover:text-red-500"
          />
        )}
      </div>
    </>
  );
};

export default FavoriteButton;
