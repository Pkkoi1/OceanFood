import React from "react";
import { Carousel } from "antd";
import banner1 from "../../../public/images/slider_1.webp";
import banner2 from "../../../public/images/slider_1.webp";
import banner3 from "../../../public/images/slider_1.webp";
import banner4 from "../../../public/images/slider_1.webp";
import banner5 from "../../../public/images/two_banner_image_1.webp";
import banner6 from "../../../public/images/two_banner_image_2.webp";

const bannerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  objectFit: "fill",
  display: "block",
  borderRadius: "8px",
};

const Banner: React.FC = () => (
  <div>
    <div className="w-2/3 ml-[400px] p-4 pb-0">
      <Carousel
        arrows
        infinite={true}
        autoplay
        autoplaySpeed={3000}
        dotPosition="bottom"
      >
        <div className="bg-[#6acfea] overflow-hidden rounded-lg">
          <img
            src={banner1}
            alt="Hải sản tươi sống"
            style={bannerStyle}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="bg-[#6acfea] overflow-hidden rounded-lg">
          <img
            src={banner2}
            alt="Khuyến mãi đặc biệt"
            style={bannerStyle}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="bg-[#6acfea] overflow-hidden rounded-lg">
          <img
            src={banner3}
            alt="Sản phẩm cao cấp"
            style={bannerStyle}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="bg-[#6acfea] overflow-hidden rounded-lg">
          <img
            src={banner4}
            alt="Giao hàng nhanh chóng"
            style={bannerStyle}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </Carousel>
    </div>
    <div className="flex justify-between mt-4 mx-[100px]">
      <div className="p-2 overflow-hidden rounded-2xl">
        <img
          className="rounded-2xl transition-transform duration-300 hover:scale-110"
          src={banner5}
        />
      </div>
      <div className="p-2 overflow-hidden rounded-2xl">
        <img
          className="rounded-2xl transition-transform duration-300 hover:scale-110"
          src={banner6}
        />
      </div>
    </div>
  </div>
);

export default Banner;
