import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { productTypes } from "../../data/typeData";
import { getProductsByCategory } from "../../controller/ProductController";

interface FilterOptions {
  priceRange: string;
  productTypes: string[];
  origins: string[];
}

interface FilterSidebarProps {
  onFilterChange?: (filters: FilterOptions) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const location = useLocation();
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    []
  );
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [availableTypes, setAvailableTypes] = useState(productTypes);

  const priceRanges = [
    { key: "under-500k", label: "Giá dưới 500.000đ" },
    { key: "500k-1m", label: "500.000đ - 1.000.000đ" },
    { key: "1m-3m", label: "1.000.000đ - 3.000.000đ" },
    { key: "3m-5m", label: "3.000.000đ - 5.000.000đ" },
    { key: "5m-7m", label: "5.000.000đ - 7.000.000đ" },
    { key: "over-7m", label: "Giá trên 7.000.000đ" },
  ];

  const origins = [
    { key: "chile", label: "Chile" },
    { key: "my", label: "Mỹ" },
    { key: "nhat-ban", label: "Nhật Bản" },
    { key: "ireland", label: "Ireland" },
    { key: "viet-nam", label: "Việt Nam" },
    { key: "nauy", label: "Nauy" },
    { key: "han-quoc", label: "Hàn Quốc" },
    { key: "canada", label: "Canada" },
    { key: "thai-lan", label: "Thái Lan" },
    { key: "trung-quoc", label: "Trung Quốc" },
  ];

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const category = urlParams.get("category");

    if (category) {
      const products = getProductsByCategory(category);
      const types = Array.from(
        new Set(products.map((product) => product.type).filter(Boolean))
      );
      setAvailableTypes(
        productTypes.filter((type) => types.includes(type.key))
      );
    } else {
      setAvailableTypes(productTypes); // Default to all types
    }
  }, [location.search]);

  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value);
    onFilterChange?.({
      priceRange: value,
      productTypes: selectedProductTypes,
      origins: selectedOrigins,
    });
  };

  const handleProductTypeChange = (value: string, checked: boolean) => {
    const newTypes = checked
      ? [...selectedProductTypes, value]
      : selectedProductTypes.filter((type) => type !== value);
    setSelectedProductTypes(newTypes);
    onFilterChange?.({
      priceRange: selectedPriceRange,
      productTypes: newTypes,
      origins: selectedOrigins,
    });
  };

  const handleOriginChange = (value: string, checked: boolean) => {
    const newOrigins = checked
      ? [...selectedOrigins, value]
      : selectedOrigins.filter((origin) => origin !== value);
    setSelectedOrigins(newOrigins);
    onFilterChange?.({
      priceRange: selectedPriceRange,
      productTypes: selectedProductTypes,
      origins: newOrigins,
    });
  };

  return (
    <div className="hidden lg:block bg-white p-6 w-1/3 sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto">
      {/* Price Range Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-0.5 after:bg-[#4FB3D9]">
          Chọn mức giá
        </h3>
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <label key={range.key} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="priceRange"
                value={range.key}
                checked={selectedPriceRange === range.key}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="mr-3 w-4 h-4 text-[#4FB3D9] focus:ring-[#4FB3D9]"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Product Type Section */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-0.5 after:bg-[#4FB3D9]">
          Loại hàng
        </h3>
        <div className="space-y-1">
          {availableTypes.map((type) => (
            <label key={type.key} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProductTypes.includes(type.key)}
                onChange={(e) =>
                  handleProductTypeChange(type.key, e.target.checked)
                }
                className="mr-3 w-4 h-4 text-[#4FB3D9] focus:ring-[#4FB3D9] rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Origin Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-0.5 after:bg-[#4FB3D9]">
          Xuất xứ
        </h3>
        <div className="space-y-1">
          {origins.map((origin) => (
            <label
              key={origin.key}
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedOrigins.includes(origin.key)}
                onChange={(e) =>
                  handleOriginChange(origin.key, e.target.checked)
                }
                className="mr-3 w-4 h-4 text-[#4FB3D9] focus:ring-[#4FB3D9] rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{origin.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
