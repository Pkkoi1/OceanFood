import React, { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  addFavorite,
  removeFavorite,
  getAllFavorites,
} from "../../controller/FavoriteController";
import { notification } from "antd";

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
  const [api, contextHolder] = notification.useNotification();

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
        setIsLikedLocal(isFavorite);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [productId, isLikedLocal]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIsLiked = !isLikedLocal;
    if (newIsLiked) {
      addFavorite(productId);
      api.success({
        message: "Đã thêm vào yêu thích",
        description: `Sản phẩm đã được thêm vào danh sách yêu thích.`,
        placement: "topRight",
      });
    } else {
      removeFavorite(productId);
      api.info({
        message: "Đã xóa khỏi yêu thích",
        description: `Sản phẩm đã được xóa khỏi danh sách yêu thích.`,
        placement: "topRight",
      });
    }
    setIsLikedLocal(newIsLiked);
    onToggleLike(productId);
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
