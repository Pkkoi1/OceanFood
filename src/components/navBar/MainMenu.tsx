import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const MainMenu = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);

  return (
    <nav className="flex-1 flex justify-center">
      <ul className="flex items-center gap-8 text-base font-medium">
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Giới thiệu
          </a>
        </li>
        <li className="relative">
          <div
            onMouseEnter={() => setShowProductMenu(true)}
            onMouseLeave={() => setShowProductMenu(false)}
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Sản phẩm
              <CaretDownOutlined
                className={`ml-1 text-xs transition-transform duration-300 ${
                  showProductMenu ? "rotate-180" : "rotate-0"
                }`}
              />
            </a>

            {/* Product Dropdown - 4 columns */}
            {showProductMenu && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded border border-gray-200 w-[800px] z-50 mt-1">
                <div className="grid grid-cols-4 gap-6 p-6">
                  {/* Cột 1 - 3 dòng */}
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Hải Sản Đông Lạnh
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      100% Tươi Sống
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Hải Sản Nhập Khẩu
                    </a>
                  </div>

                  {/* Cột 2 - 3 dòng */}
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Cá Hồi
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Hàu Sữa
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Tôm Các Loại
                    </a>
                  </div>

                  {/* Cột 3 - 2 dòng */}
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Ngao, Sò, Ốc
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Cua - Ghẹ
                    </a>
                  </div>

                  {/* Cột 4 - 2 dòng */}
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Mực
                    </a>
                    <a
                      href="#"
                      className="block hover:text-blue-600 cursor-pointer py-1 transition-colors"
                    >
                      Gia Vị - Sốt
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Cẩm nang ẩm thực
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Liên hệ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;