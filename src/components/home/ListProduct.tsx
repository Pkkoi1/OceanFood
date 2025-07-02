import React, { useState } from "react";
import { Carousel } from "antd";
import ProductCard from "../product/ProductCard";
import { newProducts } from "../../data/mockData";

interface Product {
  id: number;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  isLiked: boolean;
  badge?: string;
  isNew?: boolean;
  sold?: number;
  stockStatus?: string;
}

interface ListProductProps {
  title?: string;
  layout?: "vertical" | "horizontal";
  number?: number;
  carousel?: boolean; // New prop for carousel mode
  container?: boolean; // Optional prop to control container styling
}

const ListProduct: React.FC<ListProductProps> = ({
  title,
  layout = "vertical",
  number = 10,
  carousel = false, // Default to false
  container = true, // Default to true
}) => {
  const [products, setProducts] = useState<Product[]>(newProducts);
  const [visibleCount, setVisibleCount] = useState(number); // Sử dụng number prop

  const toggleLike = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  // If carousel mode, show all products; otherwise use existing logic
  const visibleProducts = carousel
    ? products
    : number === 3
    ? products.slice(0, 3)
    : products.slice(0, visibleCount);

  const hasMore = carousel
    ? false
    : number === 3
    ? false
    : visibleCount < products.length;

  // Tính toán số cột grid dựa trên layout và số lượng sản phẩm
  const getGridCols = () => {
    if (carousel) return ""; // No grid for carousel
    if (number === 3) return "grid-cols-3"; // Chỉ 1 hàng 3 cột
    if (number <= 4) return "grid-cols-4";
    if (number === 5) return "grid-cols-5";
    if (number === 6) return "grid-cols-3"; // 6 sản phẩm: 3 cột x 2 hàng
    if (number <= 8) return "grid-cols-4"; // 7-8 sản phẩm: 4 cột
    return "grid-cols-4"; // Mặc định 5 cột cho số lượng lớn hơn 6
  };

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-[#4FB3D9] cursor-pointer text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
        onClick={onClick}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-[#4FB3D9] cursor-pointer text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
        onClick={onClick}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    );
  };

  return (
    <div className={`py-8 mb-6 ${container ? "mx-[100px]" : ""}`}>
      <div className="flex justify-around items-center mb-8">
        <button className="text-3xl font-medium text-gray-800 hover:text-[#4FB3D9] transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none">
          {title}
        </button>
      </div>

      {/* Products Display */}
      {carousel ? (
        <Carousel
          arrows={true}
          infinite={true}
          dots={false}
          draggable={true}
          slidesToShow={number}
          slidesToScroll={1}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {visibleProducts.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard
                product={product}
                onToggleLike={toggleLike}
                layout={layout}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className={`grid ${getGridCols()}`}>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleLike={toggleLike}
              layout={layout} // Truyền prop layout vào ProductCard
            />
          ))}
        </div>
      )}

      {/* Chỉ hiển thị nút "Xem tất cả" nếu còn sản phẩm để load và không phải number = 3 */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            className="bg-[#4FB3D9] border-2 border-[#4FB3D9] hover:bg-white hover:text-[#4FB3D9] hover:border-[#4FB3D9] text-[16px] px-9 py-3 rounded-full font-bold text-white transition-all duration-300"
            onClick={loadMore}
          >
            Xem tất cả
          </button>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
