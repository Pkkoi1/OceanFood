import { useState, useEffect } from "react";
import Banner from "../../components/home/banner/Banner";
import FullBanner from "../../components/home/banner/FullBanner";
import FlashSale from "../../components/home/FlashSale";
import ListCategory from "../../components/home/ListCategory";
import ListProduct from "../../components/home/ListProduct";
import productImg1 from "../../assets/images/product-image-1.webp";
import productImg2 from "../../assets/images/product-image-2.webp";
import Handbook from "../../components/handbook/Handbook";
import Brand from "../../components/home/Brand";
import { getProductsByCategory } from "../../controller/ProductController";

interface HomeProps {
  isSidebarOpen: boolean;
}
const Home: React.FC<HomeProps> = ({ isSidebarOpen }) => {
  const [Number, setNumber] = useState(6);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("width", width);
      if (width < 700) {
        // phone
        setNumber(2);
        setLayout("vertical");
      } else if (width < 1024) {
        // tablet/iPad
        setNumber(3);
        setLayout("horizontal");
      } else {
        // desktop
        setNumber(6);
        setLayout("horizontal");
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[#6acfea] via-[#fff] via-[#fff] to-white">
        <Banner isSidebarOpen={isSidebarOpen} />
        <FlashSale></FlashSale>
        <ListCategory></ListCategory>
        <ListProduct
          titlePosition="center"
          title="Hải sản mới về"
          layout="vertical"
          number={Number >= 6 ? 10 : Number}
        ></ListProduct>
        <FullBanner image={productImg1}></FullBanner>
        <ListProduct
          titlePosition="center"
          title="Hải sản đông lạnh"
          layout={layout}
          number={Number}
          products={getProductsByCategory("frozen-seafood")}
        ></ListProduct>
        <FullBanner image={productImg2}></FullBanner>
        <ListProduct
          titlePosition="center"
          title="Hải sản nhập khẩu"
          products={getProductsByCategory("imported-seafood")}
          layout={layout}
          number={Number}
        ></ListProduct>
        <Handbook maxArticles={Number}></Handbook>
        <Brand></Brand>
      </div>
    </div>
  );
};

export default Home;
