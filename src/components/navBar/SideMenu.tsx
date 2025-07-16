import React, { useState, useEffect } from "react";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

interface SideMenuProps {
  onToggle?: (isOpen: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCategoryMenu, setShowCategoryMenu] = useState(true); // Mặc định luôn hiện
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Ngưỡng 768px cho điện thoại

  // Cập nhật trạng thái khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setShowCategoryMenu(false); // Đóng menu khi là điện thoại
      } else {
        const isHomePage = location.pathname === "/";
        setShowCategoryMenu(isHomePage); // Mở lại nếu là desktop và trang chủ
      }
    };

    handleResize(); // Gọi ngay khi component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, [location.pathname]);

  // Auto close/open based on route (chỉ áp dụng cho desktop)
  useEffect(() => {
    if (!isMobile) {
      const isHomePage = location.pathname === "/";
      setShowCategoryMenu(isHomePage);
    }
  }, [location.pathname, isMobile]);

  const productCategories = [
    { key: "frozen-seafood", label: "Hải sản đông lạnh" },
    { key: "fresh-live", label: "100% tươi sống" },
    { key: "imported-seafood", label: "Hải sản nhập khẩu" },
    { key: "salmon", label: "Cá hồi" },
    { key: "oyster", label: "Hàu sữa" },
    { key: "clam-scallop-snail", label: "Ngao, sò, ốc" },
    { key: "crab-lobster", label: "Cua - ghẹ" },
    { key: "shrimp", label: "Tôm các loại" },
    { key: "squid", label: "Mực" },
    { key: "spices-sauce", label: "Gia vị - sốt" },
  ];

  const toggleMenu = () => {
    const newState = !showCategoryMenu;
    setShowCategoryMenu(newState);
    onToggle?.(newState);
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
    if (isMobile) {
      setShowCategoryMenu(false); // Close menu on mobile after selection
      onToggle?.(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-[#37bee3] hover:bg-[#27acd0] w-72 text-white px-6 py-2.5 rounded-t-xl flex items-center transition-colors"
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

      {/* Category Dropdown */}
      {showCategoryMenu && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md border border-gray-200 w-72 z-50">
          {productCategories.map((item) => (
            <div
              key={item.key}
              className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => handleCategoryClick(item.key)}
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
