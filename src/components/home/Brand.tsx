import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import brand1 from "../../assets/images/brand_image_1.webp";
import brand2 from "../../assets/images/brand_image_2.webp";
import brand3 from "../../assets/images/brand_image_3.webp";
import brand4 from "../../assets/images/brand_image_4.webp";
import brand5 from "../../assets/images/brand_image_5.webp";

interface BrandProps {
  title?: string;
}

const Brand: React.FC<BrandProps> = ({ title = "Đại lý ủy quyền" }) => {
  const brandLogos = [
    { id: 1, logo: brand1, name: "Brand 1" },
    { id: 2, logo: brand2, name: "Brand 2" },
    { id: 3, logo: brand3, name: "Brand 3" },
    { id: 4, logo: brand4, name: "Brand 4" },
    { id: 5, logo: brand5, name: "Brand 5" },
  ];

  // Custom arrow components
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-400 hover:bg-[#4FB3D9] hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
        onClick={onClick}
      >
        <LeftOutlined className="text-white text-lg" />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-400 hover:bg-[#4FB3D9] hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
        onClick={onClick}
      >
        <RightOutlined className="text-white text-lg" />
      </div>
    );
  };

  return (
    <div className="py-8 mx-4 lg:mx-[100px] mb-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medium text-gray-800">{title}</h2>
      </div>

      {/* Desktop Brand Logos Grid */}
      <div className="hidden lg:grid grid-cols-5 gap-8">
        {brandLogos.map((brand) => (
          <div key={brand.id}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:opacity-50 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Mobile Brand Logos Carousel */}
      <div className="lg:hidden relative">
        <Carousel
          arrows={true}
          infinite={true}
          dots={true}
          autoplay={false}
          draggable={true}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
        >
          {brandLogos.map((brand) => (
            <div key={brand.id}>
              <div className="px-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:opacity-50 cursor-pointer mx-auto"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Brand;
