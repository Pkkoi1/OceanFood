import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullBanner from "../../../components/home/banner/FullBanner";
import banner from "../../../assets/images/collection-img.webp";
import ListProduct from "../../../components/home/ListProduct";
import Brand from "../../../components/home/Brand";
import List from "../../../components/product/List";
import { productCategories } from "../../../data/categoryData";

interface ProductShowListProps {
  isSidebarOpen?: boolean; // Add isSidebarOpen as an optional prop
}

const ProductShowList: React.FC<ProductShowListProps> = ({ isSidebarOpen }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Tất cả sản phẩm");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const category = urlParams.get("category");
    console.log("category", category);
    setSelectedCategory(category);

    if (category) {
      const foundCategory = productCategories.find(
        (cat) => cat.key === category
      );
      if (foundCategory) {
        setPageTitle(foundCategory.label);
      } else {
        setPageTitle("Tất cả sản phẩm");
      }
    } else {
      setPageTitle("Tất cả sản phẩm");
    }
  }, [location.search]);

  return (
    <div className={`mt-4 ${isSidebarOpen ? "ml-72" : ""}`}>
      <FullBanner image={banner} />
      <ListProduct
        title="Hàng giá tốt"
        layout="horizontal"
        number={3}
        carousel={true}
      />
      <List
        title={pageTitle}
        titlePosition="left"
        category={selectedCategory}
      />
      <Brand />
    </div>
  );
};

export default ProductShowList;
