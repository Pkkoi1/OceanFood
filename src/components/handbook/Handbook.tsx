import React from "react";
import { handbookArticles } from "../../data/handbookData";
import HandbookCard from "./HandbookCard";

interface HandbookArticle {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  description: string;
}

interface HandbookProps {
  title?: string;
  maxArticles?: number;
  onArticleClick?: (article: HandbookArticle) => void;
  size?: "small" | "medium" | "large";
}

const Handbook: React.FC<HandbookProps> = ({
  title = "Cẩm nang ẩm thực",
  maxArticles = 6,
  onArticleClick,
  size = "medium",
}) => {
  const displayArticles = handbookArticles.slice(0, maxArticles);

  return (
    <div className="py-8 mx-[100px] mb-6">
      {/* Title */}
      <div className="text-center mb-8">
        <button className="text-3xl font-medium text-gray-800 hover:text-[#4FB3D9] transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none">
          {title}
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-3 gap-6">
        {displayArticles.map((article) => (
          <HandbookCard
            key={article.id}
            article={article}
            onClick={onArticleClick}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

export default Handbook;
