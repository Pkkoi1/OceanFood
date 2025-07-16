import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  addFavorite,
  removeFavorite,
  getAllFavorites,
} from "../../controller/FavoriteController";

interface FavoriteButtonProps {
  isLiked: boolean;
  onToggleLike: (productId: number) => void;
  productId: number;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isLiked: initialIsLiked,
  onToggleLike,
  productId,
  className,
}) => {
  const [isLikedLocal, setIsLikedLocal] = useState(initialIsLiked);

  useEffect(() => {
    // Đồng bộ trạng thái với localStorage khi khởi động
    const isFavorite = getAllFavorites().includes(productId);
    if (isLikedLocal !== isFavorite) {
      setIsLikedLocal(isFavorite);
    }

    // Lắng nghe sự kiện storage để cập nhật khi localStorage thay đổi
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "favoriteProductIds") {
        const isFavorite = getAllFavorites().includes(productId);
        console.log(
          `Storage changed for product ${productId}, isFavorite: ${isFavorite}`
        ); // Debug
        setIsLikedLocal(isFavorite);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [productId, isLikedLocal]); // Thêm isLikedLocal vào dependencies để kiểm tra lại

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIsLiked = !isLikedLocal;
    if (newIsLiked) {
      addFavorite(productId);
    } else {
      removeFavorite(productId);
    }
    setIsLikedLocal(newIsLiked); // Cập nhật ngay lập tức
    onToggleLike(productId); // Thông báo cho component cha
  };

  return (
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
  );
};

export default FavoriteButton;
