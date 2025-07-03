import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { handbookArticles } from "../../data/handBookData";
import { productCategories } from "../../constants/productCategories";

interface SideMenuProps {
  onMenuClick?: (menuKey: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState<string>("handbook");
  const [isProductsExpanded, setIsProductsExpanded] = useState<boolean>(false);

  const menuItems = [
    { key: "home", label: "Trang chủ", href: "/OceanFood/" },
    { key: "about", label: "Giới thiệu", href: "/OceanFood/about" },
    {
      key: "products",
      label: "Sản phẩm",
      href: "/OceanFood/products",
      hasIcon: true,
    },
    { key: "handbook", label: "Cẩm nang ẩm thực", href: "/OceanFood/handbook" },
    { key: "contact", label: "Liên hệ", href: "/OceanFood/contact" },
  ];

  const newsItems = handbookArticles.slice(0, 5).map((item) => ({
    id: item.id,
    date: item.date,
    title: item.title,
    image: item.image,
  }));

  const handleMenuClick = (menuKey: string, href: string) => {
    setActiveMenu(menuKey);
    onMenuClick?.(menuKey);
    window.location.href = href;
  };

  const handleProductsToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsProductsExpanded(!isProductsExpanded);
  };

  return (
    <div className="bg-white mr-4 w-1/3 sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto">
      {/* Danh mục Section */}
      <div className="mb-8">
        <div className="border-[#37bee3] border-t-4  text-black pr-4 py-3">
          <h3 className="text-lg font-semibold">Danh mục</h3>
        </div>
        <div className="text-md">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`${
                activeMenu === item.key ? "text-[#37bee3]" : "bg-white"
              }`}
            >
              <button
                onClick={() => handleMenuClick(item.key, item.href)}
                className={`w-full text-left pr-4 py-1 flex items-center justify-between  hover:text-[#37bee3] cursor-pointer transition-colors ${
                  activeMenu === item.key ? "text-[#37bee3]" : "text-gray-700"
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
      </div>

      {/* Tin tức nổi bật Section */}
      <div>
        <div className="  text-black pr-4 py-3">
          <h3 className="text-lg font-semibold">Tin tức nổi bật</h3>
        </div>
        <div className="">
          <div className="space-y-4">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="flex gap-3 cursor-pointer hover:opacity-80"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                  <h4 className="text-sm text-gray-800 line-clamp-2 leading-tight font-bold max-w-[80%]  hover:text-[#37bee3] transition-colors duration-300">
                    {news.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
