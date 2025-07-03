import Banner from "../../components/home/banner/Banner";
import FullBanner from "../../components/home/banner/FullBanner";
import FlashSale from "../../components/home/FlashSale";
import ListCategory from "../../components/home/ListCategory";
import ListProduct from "../../components/home/ListProduct";
import productImg1 from "../../assets/images/product-image-1.webp";
import productImg2 from "../../assets/images/product-image-2.webp";
import Handbook from "../../components/handbook/Handbook";
import Brand from "../../components/home/Brand";

interface HomeProps {
  isSidebarOpen: boolean;
}
const Home: React.FC<HomeProps> = ({ isSidebarOpen }) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#6acfea] via-[#fff] via-[#fff] to-white">
        <Banner isSidebarOpen={isSidebarOpen} />
        <FlashSale></FlashSale>
        <ListCategory></ListCategory>
        <ListProduct title="Hải sản mới về" layout="vertical"></ListProduct>
        <FullBanner image={productImg1}></FullBanner>
        <ListProduct
          title="Hải sản đông lạnh"
          layout="horizontal"
          number={6}
        ></ListProduct>
        <FullBanner image={productImg2}></FullBanner>
        <ListProduct
          title="Hải sản nhập khẩu"
          layout="horizontal"
          number={6}
        ></ListProduct>
        <Handbook size="medium"></Handbook>
        <Brand></Brand>
      </div>
    </div>
  );
};

export default Home;
