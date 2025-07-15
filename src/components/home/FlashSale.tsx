import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import SaleProductCard from "./SaleProductCard";
import flashSale from "../../assets/images/save-icon.webp";
import type { CarouselRef } from "antd/es/carousel";
import { newProducts } from "../../data/mockData";
import { favoriteProductIds } from "../../data/mockFavoriteProducts";
import {
  addFavorite,
  removeFavorite,
} from "../../controller/FavoriteController";

interface Product {
  id: number;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  sold?: number;
  image: string;
  isLiked: boolean;
  badge?: string;
  stockStatus?: string;
  flashSale?: boolean;
}

const FlashSale: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 226,
    hours: 20,
    minutes: 54,
    seconds: 51,
  });

  // Filter products with flashSale: true from mockData
  const [products, setProducts] = useState<Product[]>([]);

  // Group products for desktop view (2 products per slide)
  const allProducts: Product[][] = [];
  for (let i = 0; i < products.length; i += 2) {
    allProducts.push(products.slice(i, i + 2));
  }

  // Flatten products for mobile view (one product per slide)
  const mobileProducts = products.map((product) => [product]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);

  const toggleLike = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) => {
        const isLiked = !product.isLiked;
        if (isLiked) {
          addFavorite(productId);
        } else {
          removeFavorite(productId);
        }
        return product.id === productId ? { ...product, isLiked } : product;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(
        newProducts
          .filter((product) => product.flashSale)
          .map((product) => ({
            ...product,
            isLiked: favoriteProductIds.includes(product.id),
          }))
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

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

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    carouselRef.current?.goTo(slideIndex);
  };

  return (
    <div className="bg-gradient-to-r from-[#4FB3D9] to-[#5BC0DE] p-6 rounded-lg mx-4 lg:mx-[100px] my-8 relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="gap-2 flex-col lg:flex-row text-white lg:mr-6 flex items-center">
            <div className="text-4xl font-bold">
              <img src={flashSale} alt="Flash Sale" className="w-12 h-12" />
            </div>
            <div className="text-2xl text-center justify-around my-2 font-bold lg:ml-4">
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
        {/* Desktop Carousel */}
        <div className="hidden lg:block">
          <Carousel
            ref={carouselRef}
            arrows={true}
            infinite={true}
            dots={false}
            autoplay={false}
            draggable={true}
            className="flash-sale-carousel"
            beforeChange={(to) => setCurrentSlide(to)}
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
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <Carousel
            ref={carouselRef}
            arrows={true}
            infinite={true}
            dots={false}
            autoplay={false}
            draggable={true}
            className="flash-sale-carousel"
            beforeChange={(to) => setCurrentSlide(to)}
          >
            {mobileProducts.map((productSet, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 gap-6">
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
        </div>

        {/* Navigation Dots - positioned at bottom of cards */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <div className="flex gap-3 bg-white p-2 rounded-full shadow-lg">
            <div className="hidden lg:flex gap-3">
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
            <div className="flex lg:hidden gap-3">
              {mobileProducts.map((_, index) => (
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
    </div>
  );
};

export default FlashSale;
