import Banner from "../../components/home/Banner";
import FlashSale from "../../components/home/FlashSale";
import ListCategory from "../../components/home/ListCategory";
import ListNewProduct from "../../components/home/ListNewProduct";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#6acfea] via-[#fff] via-[#fff] to-white">
        <Banner></Banner>
        <FlashSale></FlashSale>
        <ListCategory></ListCategory>
        <ListNewProduct></ListNewProduct>
      </div>
    </div>
  );
};

export default Home;
