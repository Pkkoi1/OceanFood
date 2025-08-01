import React from "react";
import type { Product } from "../../data/mockData";
import type { HandbookArticle } from "../../data/handbookData";

interface SearchSuggestionsProps {
  suggestions: Product[];
  articles: HandbookArticle[];
  onSearchSubmit: () => void;
  onSuggestionClick: (productId: string) => void;
  onArticleClick: (articleId: string) => void;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  articles,
  onSearchSubmit,
  onSuggestionClick,
  onArticleClick,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-2 z-50 max-h-96 overflow-y-auto">
      {suggestions.length > 0 && (
        <div className="px-4 py-2 border-b font-bold text-gray-800">
          Sản phẩm
        </div>
      )}
      {suggestions.map((product) => (
        <div
          key={product.id}
          className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
          onClick={() => onSuggestionClick(product.id)}
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
      {articles.length > 0 && (
        <div className="px-4 py-2 border-b font-bold text-gray-800">
          Cẩm nang ẩm thực
        </div>
      )}
      {articles.map((article) => (
        <div
          key={article._id}
          className="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
          onClick={() => article._id && onArticleClick(article._id)}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-12 h-12 object-cover rounded mr-4"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-800">{article.title}</div>
            <div className="text-gray-600 text-sm">{article.author}</div>
          </div>
        </div>
      ))}
      <div
        className="px-4 py-2 text-center font-bold text-blue-500 cursor-pointer hover:underline"
        onClick={onSearchSubmit}
      >
        Xem thêm kết quả
      </div>
    </div>
  );
};

export default SearchSuggestions;
