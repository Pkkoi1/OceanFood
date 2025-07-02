import React from "react";
import { Carousel } from "antd";
import banner1 from "../../../assets/images/slider_1.webp";
import banner2 from "../../../assets/images/slider_1.webp";
import banner3 from "../../../assets/images/slider_1.webp";
import banner4 from "../../../assets/images/slider_1.webp";
import banner5 from "../../../assets/images/two_banner_image_1.webp";
import banner6 from "../../../assets/images/two_banner_image_2.webp";
import styles from "./Banner.module.css"; // Sửa đường dẫn import CSS module

const bannerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
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
        {[banner1, banner2, banner3, banner4].map((banner, index) => (
          <div key={index} className="bg-[#6acfea] overflow-hidden rounded-lg">
            <div className={`rounded-lg`} style={{ height: "400px" }}>
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                style={bannerStyle}
              />
              <div className={styles.imageHoverVertical}></div>
              <div className={styles.imageHoverHorizontal}></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>

    <div className="flex justify-between mt-4 mx-[100px]">
      {[banner5, banner6].map((banner, index) => (
        <div key={index} className="p-2 overflow-hidden rounded-2xl">
          <div
            className={`${styles.imageHoverWrapper} rounded-2xl`}
            style={{ height: "200px" }}
          >
            <img
              src={banner}
              className="rounded-2xl"
              alt={`Banner bottom ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
