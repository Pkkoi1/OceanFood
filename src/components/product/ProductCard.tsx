import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import { Modal, notification } from "antd";
import FavoriteButton from "../common/FavoriteButton"; // Import the updated component
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import { addToCart } from "../../controller/CartController";
import type { Product } from "../../data/mockData";

interface ProductCardProps {
  product: Product;
  onToggleLike: (productId: number) => void;
  layout?: "vertical" | "horizontal";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onToggleLike,
  layout = "vertical",
}) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu trang
    navigate(`/products/${product.id}`);
  };

  const handleActionButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn event bubble lên parent
    // Xử lý logic cho button (add to cart, view detail, etc.)
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.currentPrice,
      quantity: 1, // Mặc định thêm 1
      currentPrice: product.currentPrice,
    });
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

  const handleModalOpen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  // Layout horizontal
  if (layout === "horizontal") {
    return (
      <div
        className="bg-white border p-2 border-[#F2F2F2] hover:border-[#4FB3D9] overflow-hidden relative group transition-all duration-300 flex max-h-full lg:max-w-full cursor-pointer"
        onClick={handleProductClick}
      >
        {contextHolder}
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#4FB3D9] text-white px-2 py-1 rounded text-[10px] font-bold z-10">
            -{product.discount}%
          </div>
        )}

        {/* Heart Icon */}
        <FavoriteButton
          isLiked={product.isLiked}
          onToggleLike={onToggleLike}
          productId={product.id}
          className="absolute top-3 right-4/6 z-10 cursor-pointer"
        />

        {/* Product Image */}
        <div className="w-1/3 relative overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
        <button
          className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded shadow-lg"
          onClick={handleModalOpen}
        >
          Xem chi tiết
        </button>
        <Modal
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          centered
          width={800}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-1 lg:col-span-5">
              <ProductImage product={product} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <ProductInfo
                product={product}
                quantity={1}
                onQuantityChange={() => {}}
                onToggleLike={() => {}}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  // Layout vertical
  return (
    <div
      className="bg-white border-[0.01px] border-[#F2F2F2] p-2 overflow-hidden relative group hover:border-[#4FB3D9] transition-all duration-300 cursor-pointer"
      onClick={handleProductClick}
    >
      {contextHolder}
      {/* Discount Badge */}
      <div className="absolute top-6 left-6 z-10">
        {product.discount ? (
          <div className="bg-[#4FB3D9] text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        ) : (
          <div className="invisible px-2 py-1 rounded text-sm font-bold">
            {/* Placeholder giữ khoảng trống */}
          </div>
        )}
      </div>

      {/* Heart Icon */}
      <FavoriteButton
        isLiked={product.isLiked}
        onToggleLike={onToggleLike}
        productId={product.id}
        className="absolute top-6 right-6 z-10 cursor-pointer"
      />

      {/* Product Image */}
      <div className="relative  overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 items-center text-center">
        <h3 className="font-bold lg:text-lg text-md mb-2 line-clamp-1 h-6">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{product.origin}</p>

        <div className="mb-4">
          <div className="flex  items-center gap-2 mb-1 justify-center">
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

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-4">
          <button
            className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCartOutlined />
          </button>
          <button
            className="w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-[#4FB3D9] hover:text-white hover:border-[#4FB3D9] flex items-center justify-center cursor-pointer"
            onClick={handleActionButtonClick}
          >
            <EyeOutlined />
          </button>
        </div>
      </div>
      <button
        className="absolute bottom-3 right-3 bg-blue-500 text-white p-2 rounded shadow-lg"
        onClick={handleModalOpen}
      >
        Xem chi tiết
      </button>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
        width={800}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-5">
            <ProductImage product={product} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <ProductInfo
              product={product}
              quantity={1}
              onQuantityChange={() => {}}
              onToggleLike={() => {}}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
