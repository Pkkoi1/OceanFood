import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullBanner from "../../components/home/banner/FullBanner";
import banner from "../../assets/images/collection-img.webp";
import ListProduct from "../../components/home/ListProduct";
import Brand from "../../components/home/Brand";
import List from "../../components/product/List";
import { productCategories } from "../../constants/productCategories";

const ProductShowList = () => {
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
      }
    } else {
      setPageTitle("Tất cả sản phẩm");
    }
  }, [location.search]);

  return (
    <div>
      <FullBanner image={banner}></FullBanner>
      <ListProduct
        title="Hàng giá tốt"
        layout="horizontal"
        number={3}
        carousel={true}
      ></ListProduct>
      <List
        title={pageTitle}
        titlePosition="left"
        category={selectedCategory}
      ></List>
      <Brand></Brand>
    </div>
  );
};

export default ProductShowList;
