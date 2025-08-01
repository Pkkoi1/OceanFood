import React, { useState, useEffect } from "react";
import { fetchHandbook } from "../../Service/HandBookService";
import type { HandbookArticle } from "../../data/handbookData";
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
  const [articles, setArticles] = useState<HandbookArticle[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 700) {
        setGridCols("grid-cols-1");
      } else if (width < 1024) {
        setGridCols("grid-cols-2");
      } else {
        setGridCols("grid-cols-3");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await fetchHandbook();
        setArticles(fetchedArticles || []); // Ensure articles is always an array
      } catch (error) {
        console.error("Error fetching handbook articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-full bg-gray-50 py-8 mx-4 mb-6">
      <div className="container mx-auto px-4 lg:px-[100px] py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những bí quyết chế biến món ngon, cách chọn và bảo quản hải
            sản tươi ngon nhất
          </p>
        </div>

        {/* Articles Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {articles.slice(0, maxArticles).map((article) => (
            <HandbookCard
              key={article.id} // Ensure unique key
              article={article}
              onClick={onArticleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Handbook;
