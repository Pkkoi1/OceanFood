import React, { useEffect, useState } from "react";
import ListProduct from "../home/ListProduct";
import FilterSidebar from "./FilterSidebar";
import { useLocation } from "react-router-dom";
import type { Product } from "../../data/mockData";
import { filter } from "../../Service/ProductService";

interface ListProps {
  title?: string;
  titlePosition?: "left" | "center" | "right";
  category?: string | null;
  products?: Product[]; // New optional products prop
}

interface FilterOptions {
  priceRange: string;
  productTypes: string[];
  origin: string[];
}

const List: React.FC<ListProps> = ({
  title = "",
  titlePosition = "left",
  category,
}) => {
  const [number, setNumber] = useState(9);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("vertical");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: "",
    productTypes: [],
    origin: [],
  });
  const location = useLocation();

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const urlParams = new URLSearchParams(location.search);
      const categoryFromUrl = urlParams.get("category") || category;

      // Apply filters immediately
      const updatedProducts = await filter(
        categoryFromUrl ?? null,
        filters.priceRange,
        filters.productTypes,
        filters.origin
      );
      setFilteredProducts(updatedProducts);
    };

    fetchFilteredProducts();
  }, [location.search, category, filters]);

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

  const handleFilterChange = async (newFilters: FilterOptions) => {
    setFilters(newFilters);
    const updatedProducts = await filter(
      category ?? null, // Ensure category is either string or null
      newFilters.priceRange,
      newFilters.productTypes,
      newFilters.origin
    );
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="flex flex-row justify-between items-start mx-4 lg:mx-[100px] mt-4 gap-6">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <ListProduct
        title={title}
        layout="vertical"
        container={false}
        titlePosition={titlePosition}
        number={number}
        buttonType="more"
        products={filteredProducts} // Pass filtered products
      />
    </div>
  );
};

export default List;
