import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListProduct from "../../components/home/ListProduct";
import { searchProductsByName } from "../../controller/ProductController";
import type { Product } from "../../data/mockData"; // Import Product type

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<Product[]>([]); // Explicitly define type

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
      <h1 className="text-2xl font-bold lg:px-[100px] mt-6">Kết quả tìm kiếm</h1>
      <ListProduct products={products} />
    </div>
  );
};

export default SearchResults;
