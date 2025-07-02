import React from "react";
import FullBanner from "../../components/home/banner/FullBanner";
import banner from "../../assets/images/collection-img.webp";
import ListProduct from "../../components/home/ListProduct";
import Brand from "../../components/home/Brand";
import FilterSidebar from "../../components/product/FilterSidebar";
import List from "../../components/product/List";

const ProductShowList = () => {
  return (
    <div>
      <FullBanner image={banner}></FullBanner>
      <ListProduct
        title="Hàng giá tốt"
        layout="horizontal"
        number={3}
        carousel={true}
      ></ListProduct>
      <List></List>
      <Brand></Brand>
    </div>
  );
};

export default ProductShowList;
