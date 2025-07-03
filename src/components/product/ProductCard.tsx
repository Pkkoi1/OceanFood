import React from "react";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  EyeOutlined,
} from "@ant-design/icons";

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

interface ProductCardProps {
  product: Product;
  onToggleLike: (productId: number) => void;
  layout?: "vertical" | "horizontal"; // Thêm prop để chọn layout
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggleLike,
  layout = "vertical", // Mặc định là vertical như hiện tại
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  // Layout horizontal như trong hình
  if (layout === "horizontal") {
    return (
      <div className="bg-white border p-2 border-[#F2F2F2] hover:border-[#4FB3D9]  overflow-hidden relative group hover:shadow-xl transition-all duration-300 flex max-h-full lg:max-w-full">
        {/* Heart Icon */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#4FB3D9] text-white px-2 py-1 rounded text-[10px] font-bold z-10">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-3 right-4/6 z-10 cursor-pointer">
          {product.isLiked ? (
            <HeartFilled
              style={{ color: "#FF4D4F", fontSize: "1.2rem" }}
              className="text-red-500 text-sm"
              onClick={() => onToggleLike(product.id)}
            />
          ) : (
            <HeartOutlined
              style={{ color: "#FF4D4F", fontSize: "1.2rem" }}
              className="text-gray-400 text-sm hover:text-red-500"
              onClick={() => onToggleLike(product.id)}
            />
          )}
        </div>

        {/* Product Image */}
        <div className="w-1/3 relative overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 p-3 flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-1 text-left truncate max-w-[80%]">
            {product.name}
          </h3>
          <p className="text-gray-600 text-xs mb-2 text-left">
            Xuất xứ: {product.origin}
          </p>

          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-red-500 font-bold text-lg">
                {formatPrice(product.currentPrice)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-xs">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout vertical (hiện tại)
  return (
    <div className="bg-white border-[0.01px] border-[#F2F2F2] p-2 overflow-hidden relative group hover:shadow-xl hover:border-[#4FB3D9] transition-all duration-300">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-6 left-6 bg-[#4FB3D9] text-white px-2 py-1 rounded text-sm font-bold z-10">
          -{product.discount}%
        </div>
      )}

      {/* Heart Icon */}
      <div className="absolute top-6 right-6 z-10 cursor-pointer">
        {product.isLiked ? (
          <HeartFilled
            style={{ color: "#FF4D4F" }}
            className="text-red-500 text-xl"
            onClick={() => onToggleLike(product.id)}
          />
        ) : (
          <HeartOutlined
            style={{ color: "#FF4D4F" }}
            className="text-gray-400 text-xl hover:text-red-500"
            onClick={() => onToggleLike(product.id)}
          />
        )}
      </div>

      {/* Product Image */}
      <div className="relative overflow-hidden p-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 items-center text-center">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 h-14">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.origin}</p>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 justify-center">
            <span className="text-red-500 font-bold text-xl">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-center">
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center">
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center">
            <EyeOutlined></EyeOutlined>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
