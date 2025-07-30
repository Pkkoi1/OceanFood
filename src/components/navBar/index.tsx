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
import type { CartItem } from "../../data/cartItemData";
import CartDropdown from "../cart/CartDropdown";
import { getAllCartItems } from "../../controller/CartController";
import { logoutAccount } from "../../Service/UserService";

interface NavBarProps {
  onSidebarToggle?: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSidebarToggle }) => {
  const location = useLocation();
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for custom modal

  // Load cart items from controller
  useEffect(() => {
    const fetchedItems = setInterval(() => {
      const cartItems = getAllCartItems();
      setItems(cartItems);
    }, 500);
    return () => clearInterval(fetchedItems);
  }, []);

  // Auto toggle sidebar based on route
  useEffect(() => {
    const isHomePage = location.pathname === "/";
    onSidebarToggle?.(isHomePage);
  }, [location.pathname, onSidebarToggle]);

  // Calculate total quantity dynamically
  useEffect(() => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  }, [items]);

  // Load user fullName from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setUserFullName(parsedData.user?.fullName || null); // Extract fullName from the user object
      } catch (error) {
        console.error("Error parsing userData:", error);
        setUserFullName(null);
      }
    }
  }, []);

  const handleLogout = async () => {
    setShowLogoutModal(true); // Show custom modal
  };

  const confirmLogout = async () => {
    try {
      const response = await logoutAccount();
      if (response.success) {
        localStorage.removeItem("userData");
        setUserFullName(null);
        window.location.reload(); // Reload the page to reset the state
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setShowLogoutModal(false); // Hide modal
    }
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Hide modal
  };

  const accountItems: MenuProps["items"] = userFullName
    ? [
        {
          key: "1",
          label: (
            <div
              onClick={handleLogout}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors cursor-pointer"
            >
              Đăng xuất
            </div>
          ),
        },
      ]
    : [
        {
          key: "1",
          label: (
            <a
              href="/login"
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
              href="/register"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#37bee3] transition-colors"
            >
              Đăng ký
            </a>
          ),
        },
      ];

  return (
    <div className="bg-white shadow-sm relative hidden lg:block pt-32">
      <div className="flex items-center justify-between px-[100px]">
        <SideMenu onToggle={onSidebarToggle} />

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
            trigger={["hover"]}
            placement="bottomRight"
            popupRender={() => (
              <div className="bg-white shadow-lg rounded border w-full border-gray-200">
                <CartDropdown />
              </div>
            )}
          >
            <a
              href="/cart"
              className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors"
            >
              <div className="relative">
                <ShoppingCartOutlined className="text-xl text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              </div>
              <span className="text-gray-600">Giỏ hàng</span>
            </a>
          </Dropdown>

          {/* Account */}
          <Dropdown menu={{ items: accountItems }} trigger={["hover"]}>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#37bee3] transition-colors py-2">
              <UserOutlined className="text-xl text-gray-600" />
              <span className="text-gray-600 hover:text-[#37bee3]">
                {userFullName || "Tài khoản"}
              </span>
            </div>
          </Dropdown>
        </div>
      </div>

      {/* Custom Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Xác nhận đăng xuất</h2>
            <p className="mb-6">Bạn có chắc chắn muốn đăng xuất không?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Đồng ý
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
