import React from "react";
import { Carousel } from "antd";
import banner1 from "../../../assets/images/slider_1.webp";
import banner2 from "../../../assets/images/slider_1.webp";
import banner3 from "../../../assets/images/slider_1.webp";
import banner4 from "../../../assets/images/slider_1.webp";
import banner5 from "../../../assets/images/two_banner_image_1.webp";
import banner6 from "../../../assets/images/two_banner_image_2.webp";
import styles from "./Banner.module.css";

interface BannerProps {
  isSidebarOpen?: boolean;
}

const bannerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  objectFit: "fill",
  borderRadius: "8px",
};

const Banner: React.FC<BannerProps> = ({ isSidebarOpen = true }) => (
  <div>
    <div
      className={`pt-4 transition-all duration-300 ${
        isSidebarOpen
          ? "lg:w-2/3  lg:ml-[400px] mx-4"
          : "w-auto lg:mx-[100px] mx-4"
      }`}
    >
      <Carousel
        arrows
        infinite={true}
        autoplay
        autoplaySpeed={3000}
        dotPosition="bottom"
      >
        {[banner1, banner2, banner3, banner4].map((banner, index) => (
          <div key={index} className="bg-[#6acfea] overflow-hidden rounded-lg">
            <div className={`rounded-lg lg:h-[400px] h-full`}>
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>

    <div className="flex flex-col lg:flex-row justify-between mt-4 mx-2 lg:mx-[100px]">
      {[banner5, banner6].map((banner, index) => (
        <div key={index} className="p-2 overflow-hidden rounded-2xl">
          <div
            className={`${styles.imageHoverWrapper} rounded-2xl`}
          >
            <img
              src={banner}
              className="rounded-2xl h-1 lg:w-full lg:h-full object-cover"
              alt={`Banner bottom ${index + 1}`}
            />
            <div className={styles.imageHoverVertical}></div>
            <div className={styles.imageHoverHorizontal}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Banner;
