import { Carousel } from "antd";
import React, { useState, useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Product {
  name: string;
  image?: string;
  images?: string[];
  discount?: number;
}

interface ProductImageProps {
  product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  return (
    <div className="space-y-4">
      <div className="relative w-[33.33vw] ">
        <Carousel
          arrows={true}
          dots={false}
          className="w-[33.33vw] h-[33.33vw]"
          ref={carouselRef}
          afterChange={(current) => setSelectedImage(current)}
        >
          {product.images?.map((image, index) => (
            <div key={index} className="flex w-[33.33vw] h-[33.33vw]">
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          ))}
          {product.image && (
            <div className="flex justify-center items-center w-[33.33vw] h-[33.33vw]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          )}
        </Carousel>
      </div>

      {product.images && (
        <div className="flex flex-col gap-2 items-center w-[33.33vw] ">
          <div className="flex gap-[6.5%] w-full">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-1/5 h-1/5 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === index
                    ? "border-[#4FB3D9]"
                    : "border-gray-200"
                }`}
                onClick={() => {
                  setSelectedImage(index);
                  carouselRef.current?.goTo(index);
                }}
              />
            ))}
          </div>
          <div className="flex justify-between  w-full">
            <button
              onClick={handlePrev}
              className="text-[#4FB3D9] hover:text-[#3a8cb1] w-10  bg-white bg-opacity-50 rounded-full p-2 absolute left-26 -bottom-25 cursor-pointer"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={handleNext}
              className="text-[#4FB3D9] hover:text-[#3a8cb1] w-10  bg-white bg-opacity-50 rounded-full p-2 absolute left-142 -bottom-25 cursor-pointer"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
