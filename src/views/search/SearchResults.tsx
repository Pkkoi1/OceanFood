import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListProduct from "../../components/home/ListProduct";
import { searchProductsByName } from "../../controller/ProductController";
import type { Product } from "../../data/mockData"; // Import Product type

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]); // Explicitly define type
  const [Number, setNumber] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log("width", width);
      if (width < 700) {
        // phone
        setNumber(2);
      } else if (width < 1024) {
        // tablet/iPad
        setNumber(3);
      } else {
        // desktop
        setNumber(6);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    if (query) {
      const results = searchProductsByName(query);
      setProducts(results);
    }
  }, [location.search]);

  return (
    <div>
      <h1 className="text-2xl font-bold lg:px-[100px] lg:ml-0 ml-4  mt-6">
        Kết quả tìm kiếm
      </h1>
      <ListProduct products={products} number={Number >= 6 ? 10 : Number} />
    </div>
  );
};

export default SearchResults;
