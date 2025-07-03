import React, { useState } from "react";
import { PlusOutlined, MinusOutlined, UserOutlined } from "@ant-design/icons";
import { productCategories } from "../../constants/productCategories";
import { useLocation } from "react-router-dom";

interface MainMenuProps {
  onMenuClick?: (menuKey: string) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onMenuClick }) => {
  const [isProductsExpanded, setIsProductsExpanded] = useState<boolean>(false);

  const location = useLocation();

  // Route mapping for Vietnamese labels
  const routeMap: Record<string, string> = {
    "/": "Trang chủ",
    "/about": "Giới thiệu",
    "/products": "Sản phẩm",
    "/handbooks": "Cẩm nang ẩm thực",
    "/contact": "Liên hệ",
    "/login": "Đăng nhập",
    "/register": "Đăng ký",
  };

  const menuItems = [
    { key: "home", label: "Trang chủ", href: "/OceanFood/" },
    { key: "about", label: "Giới thiệu", href: "/OceanFood/about" },
    {
      key: "products",
      label: "Sản phẩm",
      href: "/OceanFood/products",
      hasIcon: true,
    },
    {
      key: "handbooks",
      label: "Cẩm nang ẩm thực",
      href: "/OceanFood/handbooks",
    },
    { key: "contact", label: "Liên hệ", href: "/OceanFood/contact" },
  ];

  const handleMenuClick = (menuKey: string, href: string) => {
    onMenuClick?.(menuKey);
    window.location.href = href;
  };

  const handleProductsToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsProductsExpanded(!isProductsExpanded);
  };

  return (
    <div className="text-md">
      {/* Login/Register Section - Only visible on mobile */}
      <div className="lg:hidden mb-4">
        <div className="bg-[#4FB3D9] text-white p-4 flex items-center gap-3">
          <UserOutlined className="text-white text-lg" />
          <div className="flex-1">
            <div
              className="font-semibold cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleMenuClick("login", "/OceanFood/login")}
            >
              Đăng nhập
            </div>
            <div
              className="text-sm opacity-90 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => handleMenuClick("register", "/OceanFood/register")}
            >
              Đăng ký
            </div>
          </div>
        </div>
      </div>

      {menuItems.map((item) => (
        <div
          key={item.key}
          className={`${
            location.pathname === item.href.replace("/OceanFood", "")
              ? "text-[#37bee3]"
              : "bg-white"
          }`}
        >
          <button
            onClick={() => handleMenuClick(item.key, item.href)}
            className={`w-full text-left pl-4 lg:pl-0 pr-4 py-1 flex items-center justify-between  hover:text-[#37bee3] cursor-pointer transition-colors ${
              location.pathname === item.href.replace("/OceanFood", "")
                ? "text-[#37bee3]"
                : "text-gray-700"
            }`}
          >
            <span>{item.label}</span>
            {item.hasIcon && (
              <button
                onClick={handleProductsToggle}
                className="hover:text-[#37bee3] transition-colors"
              >
                {isProductsExpanded ? (
                  <MinusOutlined className="text-sm" />
                ) : (
                  <PlusOutlined className="text-sm" />
                )}
              </button>
            )}
          </button>

          {/* Product Subcategories */}
          {item.key === "products" && isProductsExpanded && (
            <div className="ml-4 mt-2 space-y-1">
              {productCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() =>
                    handleMenuClick(
                      category.key,
                      `/OceanFood/products/${category.key}`
                    )
                  }
                  className="w-full text-left py-1 text-sm text-gray-600 hover:text-[#37bee3] cursor-pointer transition-colors"
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
