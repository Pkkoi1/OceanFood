import React from "react";
import FavoriteButton from "../common/FavoriteButton";

interface Product {
  id: number;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice?: number; // Changed to optional
  discount?: number; // Changed to optional
  sold?: number; // Changed to optional
  image: string;
  isLiked: boolean;
  badge?: string;
  stockStatus?: string;
  flashSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onToggleLike: (productId: number) => void;
}

const SaleProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggleLike,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="bg-white overflow-hidden group shadow-lg lg:h-72 relative cursor-grab">
      {/* Corner Badge */}
      {product.badge && (
        <div className="absolute top-4 -right-1 z-20">
          <div
            className="bg-[#4FB3D9] text-white text-[9px] font-me px-8 py-2 transform rotate-45 translate-x-6 -translate-y-2"
            style={{
              transformOrigin: "center",
              minWidth: "80px",
              textAlign: "center",
            }}
          >
            🔥 {product.badge}
          </div>
        </div>
      )}

      <div className="flex lg:flex-row flex-col h-full w-full">
        {/* Product Image Container with overlays */}
        <div className="lg:w-1/2 w-full p-4 relative group">
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-7 left-7 bg-[#4FB3D9] text-white px-2 py-1 rounded text-sm font-bold z-10">
              -{product.discount}%
            </div>
          )}

          {/* Heart Icon */}
          <FavoriteButton
            isLiked={product.isLiked}
            onToggleLike={onToggleLike}
            productId={product.id}
            className="absolute top-7 right-7 z-10 cursor-pointer"
          />

          <div className="w-full h-full overflow-hidden ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col lg:text-left text-center lg:justify-normal mb-10">
          <div>
            <h3 className="font-bold text-lg mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{product.origin}</p>

            <div className="mb-3">
              <div className="flex items-center lg:justify-normal justify-center gap-2 mb-1">
                <span className="text-red-500 font-bold text-xl">
                  {formatPrice(product.currentPrice)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                {product.stockStatus ? (
                  <div className="flex items-center text-sm bg-[#f0f7ff] w-fit p-2 font-bold lg:justify-start justify-center">
                    <span className="mr-1">⚡</span>
                    {product.stockStatus}
                  </div>
                ) : product.sold ? (
                  <div className="flex items-center text-sm bg-[#f0f7ff] w-fit p-2 font-bold lg:justify-start justify-center">
                    Đã bán{" "}
                    <strong className="text-red-500 ml-1">
                      {product.sold}
                    </strong>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <button className="bg-[#37bee3] border-none hover:bg-[#0282a5] w-fit py-2 px-3 rounded-full font-bold text-sm text-white lg:self-start self-center">
            THÊM VÀO GIỎ HÀNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;
