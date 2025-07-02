import React from "react";
import styles from "./Banner.module.css";

interface FullBannerProps {
  image: string;
  alt?: string;
  height?: string;
  children?: React.ReactNode;
}

const FullBanner: React.FC<FullBannerProps> = ({
  image,
  alt = "Full Banner",
  children,
}) => {
  return (
    <div className="w-full mb-6">
      <div
        className={`${styles.imageHoverWrapper}  h-full mx-[100px] relative`}
      >
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className={styles.imageHoverVertical}></div>
        <div className={styles.imageHoverHorizontal}></div>

        {/* Overlay content */}
        {children && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white text-center">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullBanner;
