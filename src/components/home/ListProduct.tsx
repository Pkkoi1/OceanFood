import React, { useEffect, useState } from "react";
import { Carousel, Select } from "antd";
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
  carousel?: boolean;
  container?: boolean;
  titlePosition?: "left" | "center" | "right";
}

const ListProduct: React.FC<ListProductProps> = ({
  title,
  layout = "vertical",
  number = 10,
  carousel = false,
  container = true,
  titlePosition = "center",
}) => {
  const [products, setProducts] = useState<Product[]>(newProducts);
  const [visibleCount, setVisibleCount] = useState(number);
  const [sortOption, setSortOption] = useState("default");
  const [displayTitle, setDisplayTitle] = useState(title);

  const sortOptions = [
    { value: "default", label: "Mặc định" },
    { value: "name-asc", label: "A → Z" },
    { value: "name-desc", label: "Z → A" },
    { value: "price-asc", label: "Giá tăng dần" },
    { value: "price-desc", label: "Giá giảm dần" },
    { value: "newest", label: "Hàng mới nhất" },
    { value: "oldest", label: "Hàng cũ nhất" },
  ];
  useEffect(() => {
    setDisplayTitle(title);
  }, [title]);

  const handleSortChange = (value: string) => {
    setSortOption(value);
    const selectedOption = sortOptions.find((option) => option.value === value);
    if (
      selectedOption &&
      (titlePosition === "left" || titlePosition === "right")
    ) {
      setDisplayTitle(selectedOption.label);
    }
  };

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
    if (number === 1) return "grid-cols-1"; // Chỉ 1 hàng 1 cột
    if (number === 2) return "grid-cols-2"; // Chỉ 1 hàng 2 cột
    if (number === 3) return "grid-cols-3"; // Chỉ 1 hàng 3 cột
    if (number === 4) return "grid-cols-4";
    if (number === 5) return "grid-cols-5";
    if (number === 6) return "grid-cols-3"; // 6 sản phẩm: 3 cột x 2 hàng
    if (number <= 8) return "grid-cols-4"; // 7-8 sản phẩm: 4 cột
    if (number <= 10) return "grid-cols-5"; // 9-10 sản phẩm: 5 cột
    return "grid-cols-4"; // Mặc định 5 cột cho số lượng lớn hơn 6
  };

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-[#4FB3D9] cursor-pointer text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-[#4FB3D9] cursor-pointer text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
        onClick={onClick}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    );
  };

  const getTitleAlignment = () => {
    switch (titlePosition) {
      case "left":
        return "justify-between flex-col lg:flex-row";
      case "right":
        return "justify-between flex-col lg:flex-row";
      case "center":
        return "justify-evenly";
      default:
        return "justify-evenly";
    }
  };

  return (
    <div className={`py-8 mb-6 ${container ? "mx-4 lg:mx-[100px]" : ""}`}>
      <div className={`flex w-full items-center mb-8`}>
        <div
          className={`flex items-center gap-4 w-full  ${getTitleAlignment()}`}
        >
          <h2 className="lg:text-3xl text-2xl font-bold lg:font-medium text-gray-800 hover:text-[#4FB3D9] transition-colors duration-300">
            {displayTitle}
          </h2>

          {(titlePosition === "left" || titlePosition === "right") && (
            <div className="flex items-center gap-[150px] lg:gap-2">
              <span className="text-gray-600">Sắp xếp theo:</span>
              <Select
                value={sortOption}
                onChange={handleSortChange}
                style={{ width: 200 }}
                options={sortOptions}
              />
            </div>
          )}
        </div>
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
                slidesToShow: 1,
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
