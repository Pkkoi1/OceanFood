import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  addFavorite,
  removeFavorite,
} from "../../controller/FavoriteController";

interface FavoriteButtonProps {
  isLiked: boolean;
  onToggleLike: (productId: number) => void;
  productId: number;
  className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isLiked,
  onToggleLike,
  productId,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isLiked) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
    onToggleLike(productId);
  };

  return (
    <div className={className} onClick={handleClick}>
      {isLiked ? (
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
