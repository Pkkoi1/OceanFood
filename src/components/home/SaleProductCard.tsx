import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../common/FavoriteButton";
import { addToCart } from "../../controller/CartController";
import { notification } from "antd";
import type { Product } from "../../data/mockData";

interface ProductCardProps {
  product: Product;
  onToggleLike: (productId: string) => void; // sửa lại thành string
}

const SaleProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggleLike,
}) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleNameClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    navigate(`/products/${product.id}`); // Navigate to product detail page
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.currentPrice,
      quantity: 1, // Default quantity
      currentPrice: product.currentPrice,
    });

    // Show notification
    api.success({
      message: "Thêm vào giỏ hàng",
      description: (
        <div>
          <p>{product.name} đã được thêm vào giỏ hàng.</p>
          <a
            href="/cart"
            style={{ color: "#1890ff", textDecoration: "underline" }}
          >
            Xem danh sách giỏ hàng tại đây
          </a>
        </div>
      ),
      placement: "topRight",
    });
  };

  return (
    <>
      {contextHolder}
      <div className="bg-white overflow-hidden group shadow-lg lg:h-72 relative">
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

        <div className="flex lg:flex-row flex-col justify-between lg:h-full h-[500px] w-full">
          <div className="lg:w-1/2 w-full p-4 relative group">
            {product.discount && (
              <div className="absolute top-7 left-7 bg-[#4FB3D9] text-white px-2 py-1 rounded text-sm font-bold z-10">
                -{product.discount}%
              </div>
            )}

            <FavoriteButton
              isLiked={product.isLiked} // Use local state
              onToggleLike={onToggleLike} // Pass local handler
              productId={product.id}
              className="absolute top-7 right-7 cursor-pointer z-30"
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
              <h3
                className="font-bold text-lg mb-2 line-clamp-2 cursor-pointer hover:text-[#4FB3D9] transition-colors"
                onClick={handleNameClick}
              >
                {product.name}
              </h3>
              {/* Luôn hiển thị xuất xứ nếu có */}
              <p className="text-gray-600 text-sm mb-3">
                {product.origin.startsWith("Xuất xứ")
                  ? product.origin
                  : `Xuất xứ: ${product.origin}`}
              </p>

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
                  ) : typeof product.sold === "number" ? (
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

            <button
              onClick={handleAddToCart}
              className="bg-[#37bee3] cursor-pointer border-none hover:bg-[#0282a5] w-fit py-2 px-3 rounded-full font-bold text-sm text-white lg:self-start self-center"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleProductCard;
