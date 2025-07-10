import React, { useState, useEffect } from "react";
import {
  handbookArticles,
  type HandbookArticle,
} from "../../data/handbookData";
import HandbookCard from "./HandbookCard";

interface HandbookProps {
  title?: string;
  maxArticles?: number;
  onArticleClick?: (article: HandbookArticle) => void;
}

const Handbook: React.FC<HandbookProps> = ({
  title = "Cẩm nang ẩm thực",
  maxArticles = 6,
  onArticleClick,
}) => {
  const [gridCols, setGridCols] = useState("grid-cols-3");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 700) {
        // phone
        setGridCols("grid-cols-1");
      } else if (width < 1024) {
        // tablet/iPad
        setGridCols("grid-cols-2");
      } else {
        // desktop
        setGridCols("grid-cols-3");
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-8 mx-4 lg:mx-[100px] mb-6">
      {/* Title */}
      <div className="text-center mb-8">
        <button className="text-3xl font-medium text-gray-800 hover:text-[#4FB3D9] transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none">
          {title}
        </button>
      </div>

      {/* Articles Grid */}
      <div className={`grid ${gridCols} gap-6`}>
        {handbookArticles.slice(0, maxArticles).map((article) => (
          <HandbookCard
            key={article.id}
            article={article}
            onClick={onArticleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Handbook;
