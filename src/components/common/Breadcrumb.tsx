import React from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb: React.FC = () => {
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

  const generateBreadcrumbItems = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);

    // Always start with home
    const items = [
      {
        key: "home",
        title: (
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-[#37bee3]"
          >
            <HomeOutlined className="mr-1" />
            Trang chủ
          </Link>
        ),
      },
    ];

    // If not on home page, add current page
    if (location.pathname !== "/") {
      const currentRoute = "/" + pathSegments.join("/");
      const currentLabel =
        routeMap[currentRoute] || pathSegments[pathSegments.length - 1];

      items.push({
        key: "current",
        title: (
          <span className="text-[#37bee3] font-medium">{currentLabel}</span>
        ),
      });
    }

    return items;
  };

  // Don't show breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="bg-[#ebf5ff] py-3">
      <div className="lg:mx-[100px] mx-4">
        <AntBreadcrumb
          separator=">"
          items={generateBreadcrumbItems()}
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default Breadcrumb;
