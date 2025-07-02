import React from "react";
import ListProduct from "../home/ListProduct";
import FilterSidebar from "./FilterSidebar";

const List = () => {
  return (
    <div className="flex flex-row justify-between mx-[100px] mt-4">
      <FilterSidebar></FilterSidebar>

      <ListProduct
        title="Sản phẩm"
        layout="vertical"
        container={false}
      ></ListProduct>
    </div>
  );
};

export default List;
