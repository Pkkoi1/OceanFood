import React from "react";
import fridge from "../../assets/images/fridge.webp";
import fish from "../../assets/images/fish.webp";
import airplane from "../../assets/images/airplane-mode.webp";
import salmon from "../../assets/images/salmon.webp";
import oyster from "../../assets/images/oyster.webp";
import seashell from "../../assets/images/seashell.webp";
import crab from "../../assets/images/crab.webp";
import shrimp from "../../assets/images/shrimp.webp";
import squid from "../../assets/images/squid.webp";
import spices from "../../assets/images/spices.webp";

interface Category {
  id: number;
  name: string;
  icon: string;
}

const ListCategory = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Hải sản đông lạnh",
      icon: fridge,
    },
    { id: 2, name: "100% tươi sống", icon: fish },
    {
      id: 3,
      name: "Hải sản nhập khẩu",
      icon: airplane,
    },
    { id: 4, name: "Cá hồi", icon: salmon },
    { id: 5, name: "Hàu sữa", icon: oyster },
    { id: 6, name: "Ngao, sò, ốc", icon: seashell },
    { id: 7, name: "Cua - ghẹ", icon: crab },
    { id: 8, name: "Tôm các loại", icon: shrimp },
    { id: 9, name: "Mực", icon: squid },
    { id: 10, name: "Gia vị - sốt", icon: spices },
  ];

  return (
    <div className="py-8 mx-[100px]">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Danh mục sản phẩm
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-5 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="bg-white w-24 h-24 rounded-full border-2 border-[#4FB3D9] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#4FB3D9] group-hover:scale-110">
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center group-hover:text-[#4FB3D9] transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
