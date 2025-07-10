import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShopOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";

const PhoneFooter: React.FC = () => {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  const productCategories = [
    { key: "hai-san-dong-lanh", label: "Hải sản đông lạnh" },
    { key: "100-tuoi-song", label: "100% tươi sống" },
    { key: "hai-san-nhap-khau", label: "Hải sản nhập khẩu" },
    { key: "ca-hoi", label: "Cá hồi" },
    { key: "hau-sua", label: "Hàu sữa" },
    { key: "ngao-so-oc", label: "Ngao, sò, ốc" },
    { key: "cua-ghe", label: "Cua - ghẹ" },
    { key: "tom-cac-loai", label: "Tôm các loại" },
    { key: "muc", label: "Mực" },
    { key: "gia-vi-sot", label: "Gia vị - sốt" },
  ];

  const menuItems = [
    { icon: <HomeOutlined />, label: "Trang chủ", key: "" },
    {
      icon: <AppstoreOutlined />,
      label: "Danh mục",
      key: "danh-muc",
      hasDropdown: true,
    },
    { icon: <ShopOutlined />, label: "Hệ thống", key: "he-thong" },
    { icon: <HeartOutlined />, label: "Yêu thích", key: "yeu-thich", badge: 0 },
    {
      icon: <ShoppingCartOutlined />,
      label: "Giỏ hàng",
      key: "cart",
      badge: 1,
    },
  ];

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleMenuClick = (key: string) => {
    console.log("Người dùng đã chọn:", key);
    if (key === "danh-muc") {
      toggleCategories();
    } else {
      setShowCategories(false);
      navigate(`/${key}`); // Navigate to the selected menu item's route
    }
  };

  const handleCategoryClick = (categoryKey: string) => {
    console.log("Chọn danh mục:", categoryKey);
    setShowCategories(false);
    navigate(`/products?category=${categoryKey}`); // Navigate to the selected category
  };

  return (
    <>
      {/* Category Overlay */}
      {showCategories && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setShowCategories(false)}
        >
          <div
            className={`absolute bottom-0 left-0 w-80 h-full bg-white transform transition-transform duration-300 ${
              showCategories ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4 border-b bg-[#4FB3D9] text-white">
              <h3 className="text-lg font-semibold">≡ Danh mục sản phẩm</h3>
            </div>
            <div className="divide-y divide-gray-200 h-full overflow-y-auto pb-20">
              {productCategories.map((category) => (
                <div
                  key={category.key}
                  className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleCategoryClick(category.key)}
                >
                  <span className="text-gray-700">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white shadow-lg">
        <div className="flex items-center justify-around py-2">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center justify-center min-w-0 flex-1 py-1 px-1 cursor-pointer hover:text-[#4FB3D9] transition-colors"
              onClick={() => handleMenuClick(item.key)}
            >
              <div className="relative">
                {item.badge !== undefined && item.badge > 0 ? (
                  <Badge count={item.badge} size="small" color="#4FB3D9">
                    <div className="text-xl">{item.icon}</div>
                  </Badge>
                ) : (
                  <div className="text-xl">{item.icon}</div>
                )}
              </div>
              <span className="text-xs mt-1 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhoneFooter;
