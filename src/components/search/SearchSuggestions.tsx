import React from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../data/mockData";

interface SearchSuggestionsProps {
  suggestions: Product[];
  onSearchSubmit: () => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSearchSubmit,
}) => {
  const navigate = useNavigate();

  const handleSuggestionClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-2 z-50">
      <div className="px-4 py-2 border-b font-bold text-gray-800">Sản phẩm</div>
      {suggestions.map((product) => (
        <div
          key={product.id}
          className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
          onClick={() => handleSuggestionClick(product.id)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 object-cover rounded mr-4"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-800">{product.name}</div>
            <div className="text-red-500 font-bold">
              {formatPrice(product.currentPrice)}
            </div>
            {product.originalPrice && (
              <div className="text-gray-400 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>
        </div>
      ))}
      {suggestions.length >= 4 && (
        <div
          className="px-4 py-2 text-center font-bold text-blue-500 cursor-pointer hover:underline"
          onClick={onSearchSubmit}
        >
          Xem thêm sản phẩm
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
