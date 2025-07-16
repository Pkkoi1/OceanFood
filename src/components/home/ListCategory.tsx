import { Carousel } from "antd";
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
  key: string;
}

const ListCategory = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Hải sản đông lạnh",
      icon: fridge,
      key: "frozen-seafood",
    },
    { id: 2, name: "100% tươi sống", icon: fish, key: "fresh-live" },
    {
      id: 3,
      name: "Hải sản nhập khẩu",
      icon: airplane,
      key: "imported-seafood",
    },
    { id: 4, name: "Cá hồi", icon: salmon, key: "salmon" },
    { id: 5, name: "Hàu sữa", icon: oyster, key: "oyster" },
    { id: 6, name: "Ngao, sò, ốc", icon: seashell, key: "clam-scallop-snail" },
    { id: 7, name: "Cua - ghẹ", icon: crab, key: "crab-lobster" },
    { id: 8, name: "Tôm các loại", icon: shrimp, key: "shrimp" },
    { id: 9, name: "Mực", icon: squid, key: "squid" },
    { id: 10, name: "Gia vị - sốt", icon: spices, key: "spices-sauce" },
  ];

  const handleClick = (categoryKey: string) => {
    // Navigate to the category page
    window.location.href = `/products?category=${categoryKey}`;
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px]">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Danh mục sản phẩm
      </h2>

      {/* Desktop Categories Grid */}
      <div className="hidden lg:grid grid-cols-5 gap-8">
        {categories.map((category) => (
          <button
            onClick={() => handleClick(category.key)}
            key={category.id}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="bg-white w-32 h-32 rounded-full border-2 border-[#4FB3D9] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#4FB3D9] group-hover:scale-110">
              <img
                src={category.icon}
                alt={category.name}
                className="w-14 h-14 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center group-hover:text-[#4FB3D9] transition-colors duration-300">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Categories Carousel */}
      <div className="lg:hidden">
        <Carousel
          arrows={true}
          infinite={true}
          dots={false}
          autoplay={false}
          draggable={true}
        >
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex flex-col items-center group cursor-pointer px-4">
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
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ListCategory;
