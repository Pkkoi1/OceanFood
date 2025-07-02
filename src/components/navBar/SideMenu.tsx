import React, { useState, useEffect } from "react";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

interface SideMenuProps {
  onToggle?: (isOpen: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onToggle }) => {
  const location = useLocation();
  const [showCategoryMenu, setShowCategoryMenu] = useState(true); // Mặc định luôn hiện

  // Auto close/open based on route
  useEffect(() => {
    const isHomePage = location.pathname === "/";
    setShowCategoryMenu(isHomePage);
  }, [location.pathname]);

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

  const toggleMenu = () => {
    const newState = !showCategoryMenu;
    setShowCategoryMenu(newState);
    onToggle?.(newState); // ✅ gọi callback truyền lên NavBar
  };

  return (
    <div className="relative">
      <button
        className="bg-[#37bee3] hover:bg-[#27acd0]  w-72 text-white px-6 py-2.5 rounded-t-xl flex items-center transition-colors"
        onClick={toggleMenu}
      >
        <MenuOutlined className="mr-2" />
        <span>Danh mục sản phẩm</span>
        <CaretDownOutlined
          className={`ml-2 transition-transform duration-300 ${
            showCategoryMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Category Dropdown - luôn hiện */}
      {showCategoryMenu && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md border border-gray-200 w-72 z-50">
          {productCategories.map((item) => (
            <div
              key={item.key}
              className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
            >
              <span className="text-blue-600 mr-2">🐟</span>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
