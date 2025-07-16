import React, { useEffect, useState } from "react";
import ListProduct from "../home/ListProduct";
import FilterSidebar from "./FilterSidebar";
import type { Product } from "../../data/mockData";
import { getAllProducts } from "../../controller/ProductController";

interface ListProps {
  title?: string;
  titlePosition?: "left" | "center" | "right";
  category?: string | null;
  products?: Product[]; // New optional products prop
}

const List: React.FC<ListProps> = ({
  title = "",
  titlePosition = "left",
  products,
}) => {
  const [number, setNumber] = useState(9);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("width", width);
      if (width < 700) {
        // phone
        setNumber(2);
        setLayout("vertical");
        console.log(layout);
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
    <div className="flex flex-row justify-between items-start mx-4 lg:mx-[100px] mt-4 gap-6">
      <FilterSidebar />
      <ListProduct
        title={title}
        layout="vertical"
        container={false}
        titlePosition={titlePosition}
        number={number}
        products={products || getAllProducts()} // Pass products or fetch all
      />
    </div>
  );
};

export default List;
