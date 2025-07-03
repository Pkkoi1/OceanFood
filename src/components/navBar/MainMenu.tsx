import React, { useState, useRef } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { productCategories } from "../../constants/productCategories";

const MainMenu = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const location = useLocation();
  const productMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { name: "Trang chủ", href: "/OceanFood/", path: "/" },
    { name: "Giới thiệu", href: "/OceanFood/about", path: "/about" },
    {
      name: "Sản phẩm",
      href: "/OceanFood/products",
      hasDropdown: true,
      path: "/products",
    },
    {
      name: "Cẩm nang ẩm thực",
      href: "/OceanFood/handbooks",
      path: "/handbooks",
    },
    { name: "Liên hệ", href: "/OceanFood/contact", path: "/contact" },
  ];

  // Chia đều 10 sản phẩm thành 4 cột: 3-3-2-2
  const getColumnItems = (colIndex: number) => {
    const itemsPerColumn = [3, 3, 2, 2];
    let startIndex = 0;
    for (let i = 0; i < colIndex; i++) {
      startIndex += itemsPerColumn[i];
    }
    return productCategories.slice(
      startIndex,
      startIndex + itemsPerColumn[colIndex]
    );
  };

  const isActive = (itemPath: string) => {
    return location.pathname === itemPath;
  };

  const handleProductMouseEnter = () => {
    if (productMenuTimeout.current) {
      clearTimeout(productMenuTimeout.current);
    }
    setShowProductMenu(true);
  };

  const handleProductMouseLeave = () => {
    productMenuTimeout.current = setTimeout(() => {
      setShowProductMenu(false);
    }, 200); // 200ms delay
  };

  return (
    <nav className="flex-1 flex justify-center">
      <ul className="flex items-center gap-8 text-base font-medium">
        {menuItems.map((item) => (
          <li key={item.name} className={item.hasDropdown ? "relative" : ""}>
            {item.hasDropdown ? (
              <div
                onMouseEnter={handleProductMouseEnter}
                onMouseLeave={handleProductMouseLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center transition-colors py-2 ${
                    isActive(item.path)
                      ? "text-[#49c9ea] font-semibold"
                      : "hover:text-[#49c9ea]"
                  }`}
                >
                  {item.name}
                  <CaretDownOutlined
                    className={`ml-1 text-xs transition-transform duration-300 ${
                      showProductMenu ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </a>

                {/* Product Dropdown - 4 columns */}
                {showProductMenu && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded border border-gray-200 w-[800px] z-50"
                    onMouseEnter={handleProductMouseEnter}
                    onMouseLeave={handleProductMouseLeave}
                  >
                    <div className="grid grid-cols-4 gap-6 p-6">
                      {[0, 1, 2, 3].map((colIndex) => (
                        <div key={colIndex} className="space-y-3">
                          {getColumnItems(colIndex).map((item) => (
                            <a
                              key={item.key}
                              href={`/OceanFood/products?category=${item.key}`}
                              className="block hover:text-[#49c9ea] cursor-pointer py-1 transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-[#49c9ea] font-semibold"
                    : "hover:text-[#49c9ea]"
                }`}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
