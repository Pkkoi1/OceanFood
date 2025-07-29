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
import { getProductsByCategory } from "../../Service/ProductService";
import type { Product } from "../../data/mockData";

interface HomeProps {
  isSidebarOpen: boolean;
}
const Home: React.FC<HomeProps> = ({ isSidebarOpen }) => {
  const [Number, setNumber] = useState(6);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");
  const [frozenSeafoodProducts, setFrozenSeafoodProducts] = useState<Product[]>(
    []
  );
  const [importedSeafoodProducts, setImportedSeafoodProducts] = useState<
    Product[]
  >([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const frozenProducts = await getProductsByCategory("frozen-seafood");
        const importedProducts = await getProductsByCategory(
          "imported-seafood"
        );
        setFrozenSeafoodProducts(frozenProducts);
        setImportedSeafoodProducts(importedProducts);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };

    fetchProductsByCategory();
  }, []);

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
          products={frozenSeafoodProducts} // Pass resolved products
        ></ListProduct>
        <FullBanner image={productImg2}></FullBanner>
        <ListProduct
          titlePosition="center"
          title="Hải sản nhập khẩu"
          products={importedSeafoodProducts} // Pass resolved products
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
