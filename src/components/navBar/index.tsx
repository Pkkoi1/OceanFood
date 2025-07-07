import React, { useState, useEffect } from "react";
import {
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
import { Dropdown, type MenuProps } from "antd";
import CartDropdownEmpty from "../cart/CartDropdownEmpty";
import CartDropdown from "../cart/CartDropdown";

// Menu cho Tài khoản
const accountItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        href="/OceanFood/login"
        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors"
      >
        Đăng nhập
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        href="/OceanFood/register"
        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors"
      >
        Đăng ký
      </a>
    ),
  },
];

// Menu cho Giỏ hàng (dùng CartDropdownEmpty)
const cartItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="w-full">
        {/* <CartDropdownEmpty /> */}
        <CartDropdown />
      </div>
    ),
  },
];

interface NavBarProps {
  onSidebarToggle?: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

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

  return (
    <div className="bg-white shadow-sm relative hidden lg:block">
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
          <Dropdown
            menu={{ items: cartItems }}
            trigger={["hover"]}
            placement="bottomRight"
            dropdownRender={(menu) => (
              <div className="bg-white shadow-lg rounded border w-full border-gray-200">
                {menu}
              </div>
            )}
          >
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors">
              <div className="relative">
                <ShoppingCartOutlined className="text-xl text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-gray-600">Giỏ hàng</span>
            </div>
          </Dropdown>

          {/* Account */}
          <Dropdown menu={{ items: accountItems }} trigger={["hover"]}>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors py-2">
              <UserOutlined className="text-xl text-gray-600" />
              <span className="text-gray-600 hover:text-[#37bee3]">
                Tài khoản
              </span>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
