import React from "react";
import {
  ShoppingCartOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { addToCart } from "../../controller/CartController";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import type { Product } from "../../data/mockData";

interface ProductInfoProps {
  product: Product;
  quantity: number;
  onQuantityChange: (type: "increase" | "decrease") => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  quantity,
  onQuantityChange,
}) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.currentPrice, // Map currentPrice to price
      quantity,
      image: product.image,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      discount: product.discount,
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

  const handleBuyNow = () => {
    navigate("/cart/checkout", {
      state: {
        selectedItems: [{ ...product, quantity, key: product.id.toString() }],
        totalAmount: product.currentPrice * quantity,
      },
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  // Determine product-specific details based on name
  const getProductDetails = () => {
    if (product.name.includes("Cá Hồi")) {
      return [
        { label: "Phù hợp chế biến", value: "Nướng, hấp, sashimi" },
        { label: "Lượng dinh dưỡng", value: `Omega-3, ${product.weight}` },
        { label: "Thời gian bảo quản", value: `${product.condition}` },
      ];
    } else if (product.name.includes("Tôm")) {
      return [
        { label: "Kích thước lý tưởng", value: `${product.weight} mỗi gói` },
        { label: "Phù hợp món ăn", value: "Luộc, nướng, xào" },
        { label: "Lợi ích", value: "Giàu canxi và protein" },
      ];
    } else {
      return [
        { label: "Phù hợp chế biến", value: "Hấp, nướng, chiên" },
        { label: "Nguồn gốc", value: `${product.origin}` },
        { label: "Đặc điểm", value: "Thịt trắng, giàu dinh dưỡng" },
      ];
    }
  };

  return (
    <>
      {contextHolder}
      <div className="space-y-6 mr-0 lg:mr-10 mt-6 lg:mt-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
            <span>
              Thương hiệu:{" "}
              <span className="text-[#4FB3D9] font-medium">
                {product.brand}
              </span>
            </span>
            <span className="hidden sm:inline">|</span>
            <span>
              Tình trạng:{" "}
              <span className="text-green-600 font-medium">
                {product.stockStatus}
              </span>
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-2xl lg:text-3xl font-bold text-red-500">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice && (
              <span className="text-lg lg:text-xl text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.discount && (
            <p className="text-sm text-gray-600">
              Tiết kiệm:{" "}
              <span className="text-red-500 font-bold">
                {formatPrice(
                  (product.originalPrice || 0) - product.currentPrice
                )}
              </span>
            </p>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-3 text-sm">
          {getProductDetails().map((detail, index) => (
            <p key={index}>
              <strong>{detail.label}:</strong> {detail.value}
            </p>
          ))}
          <p>
            <strong>Xuất Xứ:</strong> {product.origin}
          </p>
          <p>
            <strong>Cam Kết:</strong> {product.commitment}
          </p>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium">Số lượng:</span>
            <div className="flex items-center border rounded w-fit">
              <button
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => onQuantityChange("decrease")}
              >
                <MinusOutlined />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => onQuantityChange("increase")}
              >
                <PlusOutlined />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              className="w-full sm:w-fit bg-white border border-[#37bee3] py-3 px-3 rounded font-bold hover:bg-gray-100 transition-colors flex items-center cursor-pointer justify-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCartOutlined
                style={{ color: "#37bee3", fontSize: "20px" }}
              />
            </button>
            <button
              className="flex-1 w-full sm:w-2/3 bg-[#4FB3D9] text-white py-3 px-6 rounded font-bold hover:bg-[#3a9bc1] transition-colors flex items-center justify-center gap-2"
              onClick={handleBuyNow}
            >
              MUA NGAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
