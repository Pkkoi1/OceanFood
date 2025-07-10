import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { type HandbookArticle } from "../../data/handbookData";
import { useNavigate } from "react-router-dom";

interface HandbookCardProps {
  article: HandbookArticle;
  onClick?: (article: HandbookArticle) => void;
  size?: "small" | "medium" | "large";
}

const HandbookCard: React.FC<HandbookCardProps> = ({
  article,
  onClick,
  size = "medium",
}) => {
  const navigate = useNavigate();
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "lg:min-h-[40%] min-h-[50%]",
          image: "w-1/2 lg:w-24",
          content: "p-2",
          title: "text-xs font-medium mb-1",
          date: "text-xs mb-1",
          description: "text-xs",
        };
      case "large":
        return {
          container: "lg:min-h-[60%] min-h-[50%] mb-6",
          image: "w-1/2 lg:w-1/4",
          content: "p-4",
          title: "text-lg font-bold mb-3 max-w-[100%]",
          date: "text-sm mb-3",
          description: "text-sm",
        };
      default: // medium
        return {
          container: "min-h-[50%]",
          image: "w-32",
          content: "p-3",
          title: "text-sm font-bold mb-2",
          date: "text-xs mb-2",
          description: "text-xs",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  // Use the first section's content as the description for display
const displayDescription = (() => {
    const firstSection = article.description[0];
    if (!firstSection?.content) return "";
    if (typeof firstSection.content === "string") {
      return firstSection.content;
    }
    // If content is an array, use the first item's content
    return firstSection.content[0]?.content || "";
  })();

  const handleCardClick = () => {
    navigate(`/handbook/${article.id}`);
    if (onClick) onClick(article);
  };
  return (
    <div
      className={`bg-white overflow-hidden duration-300 cursor-pointer group flex ${sizeClasses.container}`}
      onClick={handleCardClick}
    >
      {/* Article Image */}
      <div
        className={`relative overflow-hidden ${sizeClasses.image} flex-shrink-0`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Article Content */}
      <div className={`${sizeClasses.content} flex-1`}>
        {/* Title */}
        <h3
          className={`${sizeClasses.title} line-clamp-2 group-hover:text-[#4FB3D9] transition-colors duration-300`}
        >
          {article.title}
        </h3>

        {/* Date */}
        <div className={`flex items-center text-gray-500 ${sizeClasses.date}`}>
          <CalendarOutlined className="mr-1 text-xs" />
          <span>{article.date}</span>
        </div>

        {/* Description */}
        <p
          className={`text-gray-600 ${sizeClasses.description} line-clamp-2 leading-relaxed`}
        >
          {displayDescription}
        </p>
      </div>
    </div>
  );
};

export default HandbookCard;
