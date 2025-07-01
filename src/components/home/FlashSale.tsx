import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import SaleProductCard from "./SaleProductCard";

interface Product {
  id: number;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  sold: number;
  image: string;
  isLiked: boolean;
  badge?: string;
  stockStatus?: string;
}

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 226,
    hours: 20,
    minutes: 54,
    seconds: 51,
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Cá Hồi Phi Lê Tươi Nguyên...",
      origin: "Xuất xứ: Nauy",
      currentPrice: 1350000,
      originalPrice: 1600000,
      discount: 16,
      sold: 174,
      image: "/images/ca-hoi.jpg",
      isLiked: false,
      badge: "BÁN CHẠY",
    },
    {
      id: 2,
      name: "Tôm Càng Xanh Sống",
      origin: "Xuất xứ: Việt Nam",
      currentPrice: 330000,
      originalPrice: 400000,
      discount: 18,
      sold: 0,
      image: "/images/tom-cang.jpg",
      isLiked: false,
      badge: "BÁN CHẠY",
      stockStatus: "Sắp hết hàng",
    },
  ]);

  const [allProducts] = useState<Product[][]>([
    [
      {
        id: 1,
        name: "Cá Hồi Phi Lê Tươi Nguyên...",
        origin: "Xuất xứ: Nauy",
        currentPrice: 1350000,
        originalPrice: 1600000,
        discount: 16,
        sold: 174,
        image: "/public/images/ca-hoi.webp",
        isLiked: false,
        badge: "BÁN CHẠY",
      },
      {
        id: 2,
        name: "Tôm Càng Xanh Sống",
        origin: "Xuất xứ: Việt Nam",
        currentPrice: 330000,
        originalPrice: 400000,
        discount: 18,
        sold: 0,
        image: "/public/images/tom-cang-xanh.webp",
        isLiked: false,
        badge: "BÁN CHẠY",
        stockStatus: "Sắp hết hàng",
      },
    ],
    [
      {
        id: 3,
        name: "Cua Hoàng Đế Alaska",
        origin: "Xuất xứ: Alaska",
        currentPrice: 2500000,
        originalPrice: 3000000,
        discount: 17,
        sold: 89,
        image: "/images/cua-hoang-de.jpg",
        isLiked: false,
        badge: "MỚI",
      },
      {
        id: 4,
        name: "Bạch Tuộc Baby",
        origin: "Xuất xứ: Việt Nam",
        currentPrice: 180000,
        originalPrice: 220000,
        discount: 18,
        sold: 156,
        image: "/images/bach-tuoc.jpg",
        isLiked: false,
        badge: "BÁN CHẠY",
      },
    ],
    [
      {
        id: 5,
        name: "Sò Điệp Tươi Sống",
        origin: "Xuất xứ: Nha Trang",
        currentPrice: 450000,
        originalPrice: 550000,
        discount: 18,
        sold: 67,
        image: "/images/so-diep.jpg",
        isLiked: false,
        badge: "HOT",
      },
      {
        id: 6,
        name: "Ghẹ Xanh Tươi Sống",
        origin: "Xuất xứ: Cà Mau",
        currentPrice: 320000,
        originalPrice: 400000,
        discount: 20,
        sold: 124,
        image: "/images/ghe-xanh.jpg",
        isLiked: false,
        stockStatus: "Chỉ còn 5 con",
      },
    ],
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleLike = (productId: number) => {
    // Update the like status in allProducts instead of products
    // This is a simplified version - you might want to implement proper state management
    console.log(`Toggle like for product ${productId}`);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    carouselRef.current?.goTo(slideIndex);
  };

  return (
    <div className="bg-gradient-to-r from-[#4FB3D9] to-[#5BC0DE] p-6 rounded-lg mx-[100px] my-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="text-white mr-6 flex items-center">
            <div className="text-4xl font-bold">
              <img src="../../../public/images/save-icon.webp" alt="" />
            </div>
            <div className="text-2xl mt-2 font-bold ml-4">
              GIỜ VÀNG GIẢM GIÁ!
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center text-white">
          <div className="flex gap-2">
            <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Ngày</div>
            </div>
            <div className="text-2xl self-center">:</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Giờ</div>
            </div>
            <div className="text-2xl self-center">:</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Phút</div>
            </div>
            <div className="text-2xl self-center">:</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Giây</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative">
        <Carousel
          ref={carouselRef}
          arrows
          infinite={true}
          dots={false}
          autoplay={false}
          className="flash-sale-carousel"
          beforeChange={(from, to) => setCurrentSlide(to)}
        >
          {allProducts.map((productSet, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-6">
                {productSet.map((product) => (
                  <SaleProductCard
                    key={product.id}
                    product={product}
                    onToggleLike={toggleLike}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>

        {/* Navigation Dots - positioned at bottom of cards */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="flex gap-3 bg-white p-2 rounded-full shadow-lg">
            {allProducts.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#4FB3D9] scale-110"
                    : "bg-[#ececec] hover:bg-[#4FB3D9]/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
