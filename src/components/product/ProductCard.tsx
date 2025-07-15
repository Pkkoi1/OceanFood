import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import FavoriteButton from "../common/FavoriteButton";
import useCartController from "../../controller/CartController";

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
  description: { title: string; content: string }[];
}

interface ProductCardProps {
  product: Product;
  layout?: "vertical" | "horizontal";
  onToggleLike: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  layout = "vertical",
  onToggleLike,
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCartController();

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    console.log(`Added ${product.name} to cart`);
  };

  const handleViewDetail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  if (layout === "horizontal") {
    return (
      <div
        className="bg-white border p-2 border-[#F2F2F2] hover:border-[#4FB3D9] overflow-hidden relative group hover:shadow-xl transition-all duration-300 flex max-h-full lg:max-w-full cursor-pointer"
        onClick={handleProductClick}
      >
        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#4FB3D9] text-white px-2 py-1 rounded text-[10px] font-bold z-10">
            -{product.discount}%
          </div>
        )}
        <FavoriteButton
          isLiked={product.isLiked}
          onToggleLike={onToggleLike}
          productId={product.id}
          className="absolute top-3 right-4/6 z-10 cursor-pointer"
        />
        <div className="w-1/3 relative overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
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

  return (
    <div
      className="bg-white border-[0.01px] border-[#F2F2F2] p-2 overflow-hidden relative group hover:shadow-xl hover:border-[#4FB3D9] transition-all duration-300 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="absolute top-6 left-6 z-10">
        {product.discount ? (
          <div className="bg-[#4FB3D9] text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        ) : (
          <div className="invisible px-2 py-1 rounded text-sm font-bold"></div>
        )}
      </div>
      <FavoriteButton
        isLiked={product.isLiked}
        onToggleLike={onToggleLike}
        productId={product.id}
        className="absolute top-6 right-6 z-10 cursor-pointer"
      />
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 items-center text-center">
        <h3 className="font-bold lg:text-lg text-md mb-2 line-clamp-1 h-6">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.origin}</p>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 justify-center">
            <span className="text-red-500 font-bold lg:text-xl text-md">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-xs lg:text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button
            className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCartOutlined />
          </button>
          <button
            className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center cursor-pointer"
            onClick={handleViewDetail}
          >
            <EyeOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
