import React, { useState } from "react";
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
  number?: number; // Hàm để mount sản phẩm
}
const ListProduct: React.FC<ListProductProps> = ({
  title,
  layout = "vertical",
  number = 10, // Mặc định hiển thị 10 sản phẩm
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

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  // Tính toán số cột grid dựa trên layout và số lượng sản phẩm
  const getGridCols = () => {
    // Layout dọc và ngang đều dùng logic số cột như nhau
    if (number <= 3) return "grid-cols-3";
    if (number <= 4) return "grid-cols-4";
    if (number <= 5) return "grid-cols-5";
    if (number === 6) return "grid-cols-3"; // 6 sản phẩm: 3 cột x 2 hàng
    return "grid-cols-5"; // Mặc định 5 cột cho số lượng lớn hơn 6
  };

  return (
    <div className="py-8 mx-[100px] mb-6">
      <div className="flex justify-around items-center mb-8">
        <button className="text-3xl font-medium text-gray-800 hover:text-[#4FB3D9] transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none">
          {title}
        </button>
      </div>

      {/* Products Grid */}
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

      {/* Chỉ hiển thị nút "Xem tất cả" nếu còn sản phẩm để load */}
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
