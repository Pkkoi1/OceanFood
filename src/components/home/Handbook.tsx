import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { handbookArticles } from "../../data/handbookData";

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
}

const Handbook: React.FC<HandbookProps> = ({
  title = "Cẩm nang ẩm thực",
  maxArticles = 6,
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
          <div
            key={article.id}
            className="bg-white borderoverflow-hidden duration-300 cursor-pointer group flex"
          >
            {/* Article Image */}
            <div className="relative overflow-hidden w-32 flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Article Content */}
            <div className="p-3 flex-1">
              {/* Title */}
              <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-[#4FB3D9] transition-colors duration-300">
                {article.title}
              </h3>

              {/* Date */}
              <div className="flex items-center text-gray-500 text-xs mb-2">
                <CalendarOutlined className="mr-1 text-xs" />
                <span>{article.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Handbook;
