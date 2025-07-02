import React, { useState, useEffect, useRef } from "react";
import {
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

interface NavBarProps {
  onSidebarToggle?: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const location = useLocation();
  const accountMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto toggle sidebar based on route
  useEffect(() => {
    const isHomePage = location.pathname === "/";
    setIsSidebarOpen(isHomePage);
    onSidebarToggle?.(isHomePage);
  }, [location.pathname, onSidebarToggle]);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
    onSidebarToggle?.(isOpen);
  };

  const handleAccountMouseEnter = () => {
    if (accountMenuTimeout.current) {
      clearTimeout(accountMenuTimeout.current);
    }
    setShowAccountMenu(true);
  };

  const handleAccountMouseLeave = () => {
    accountMenuTimeout.current = setTimeout(() => {
      setShowAccountMenu(false);
    }, 200); // 200ms delay
  };

  return (
    <div className="bg-white shadow-sm relative">
      <div className="flex items-center justify-between px-[100px]">
        <SideMenu onToggle={handleSidebarToggle} />

        <MainMenu />

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <div className="flex items-center bg-red-500 text-white px-4 py-2 rounded">
            <PhoneOutlined className="mr-2" />
            <span className="font-bold">19006750</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors">
            <div className="relative">
              <ShoppingCartOutlined className="text-xl text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-gray-600">Giỏ hàng</span>
          </div>

          {/* Account */}
          <div
            className="relative"
            onMouseEnter={handleAccountMouseEnter}
            onMouseLeave={handleAccountMouseLeave}
          >
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors py-2">
              <UserOutlined className="text-xl text-gray-600" />
              <span className="text-gray-600 hover:text-[#37bee3]">
                Tài khoản
              </span>
            </div>

            {/* Account Dropdown */}
            {showAccountMenu && (
              <div
                className="absolute top-full right-0 bg-white shadow-lg rounded border border-gray-200 w-48 z-50"
                onMouseEnter={handleAccountMouseEnter}
                onMouseLeave={handleAccountMouseLeave}
              >
                <div className="py-2">
                  <a
                    href="/OceanFood/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors"
                  >
                    Đăng nhập
                  </a>
                  <a
                    href="/OceanFood/register"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors"
                  >
                    Đăng ký
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
