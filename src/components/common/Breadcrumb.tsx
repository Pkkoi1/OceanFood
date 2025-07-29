import React, { type JSX } from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";
import { getHandbookById } from "../../controller/HandbookController";
import { findProductById } from "../../Service/ProductService";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = React.useState<
    { key: string; title: JSX.Element }[]
  >([]);

  const routeMap: Record<string, string> = {
    "/": "Trang chủ",
    "/about": "Giới thiệu",
    "/products": "Sản phẩm",
    "/handbooks": "Cẩm nang ẩm thực",
    "/contact": "Liên hệ",
    "/login": "Đăng nhập",
    "/register": "Đăng ký",
    "/favorites": "Sản phẩm yêu thích",
    "/search": "Kết quả tìm kiếm",
    "/store-location": "Địa điểm cửa hàng",
    "/policy/return": "Chính sách đổi trả",
    "/policy/payment": "Chính sách mua hàng",
    "/policy/sales": "Chính sách bán hàng",
    "/policy/shipping": "Chính sách giao hàng",
    "/policy/purchase-guide": "Hướng dẫn mua hàng",
    "/policy/privacy": "Bảo mật thông tin cá nhân",
  };

  const generateBreadcrumbItems = async () => {
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

    let currentPath = "";
    for (const [index, segment] of pathSegments.entries()) {
      currentPath += `/${segment}`;
      let label = routeMap[currentPath];

      if (!label) {
        console.log(
          "Path segment:",
          segment,
          "Index:",
          index,
          "Current path:",
          currentPath
        );
        if (currentPath.match(/\/products/)) {
          const productId = segment;
          const product = await findProductById(productId); // Use await here
          console.log("Product:", product);
          label = product ? product.name : "Sản phẩm";
        } else if (currentPath.match(/\/handbooks/)) {
          const handbookId = Number(segment);
          const handbook = getHandbookById(handbookId);
          label = handbook ? handbook.title : "Cẩm nang ẩm thực";
        } else {
          console.log("Default label for segment:", segment);
          label = segment;
        }
      }

      items.push({
        key: `segment-${index}`,
        title: (
          <Link to={currentPath} className="text-gray-600 hover:text-[#37bee3]">
            {label}
          </Link>
        ),
      });
    }

    return items;
  };

  React.useEffect(() => {
    const fetchBreadcrumbItems = async () => {
      const items = await generateBreadcrumbItems();
      setBreadcrumbItems(items);
    };

    fetchBreadcrumbItems();
  }, [location.pathname]);

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="bg-[#ebf5ff] py-3">
      <div className="lg:mx-[100px] mx-4">
        <AntBreadcrumb
          separator=">"
          items={breadcrumbItems}
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default Breadcrumb;
