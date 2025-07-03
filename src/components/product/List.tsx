import React from "react";
import ListProduct from "../home/ListProduct";
import FilterSidebar from "./FilterSidebar";

interface ListProps {
  title?: string;
  titlePosition?: "left" | "center" | "right";
  category?: string | null;
}

const List: React.FC<ListProps> = ({
  title = "",
  titlePosition = "left",
  category = null,
}) => {
  console.log("List component rendered with title:", title);
  console.log("List component rendered with category:", category);
  return (
    <div className="flex flex-row justify-between items-start mx-[100px] mt-4 gap-6">
      <FilterSidebar></FilterSidebar>
      <ListProduct
        title={title}
        layout="vertical"
        container={false}
        titlePosition={titlePosition}
      ></ListProduct>
    </div>
  );
};

export default List;
