import React from "react";
import { type HandbookArticle } from "../../data/handbookData";
import ListProduct from "../home/ListProduct";

interface HandbookContentProps {
  article: HandbookArticle;
}

const HandbookContent: React.FC<HandbookContentProps> = ({ article }) => {
  // Function to generate ID from heading text
  const generateId = (text: string, index: number) => {
    return `section-${index}-${text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`;
  };

  return (
    <div className="handbook-content">
      {article.sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="mb-6" id={generateId(section.title, index)}>
            <h1 className="text-2xl font-bold mb-2">{section.title}</h1>
            {section.content && (
              <p className="text-gray-700 mb-4">{section.content}</p>
            )}
            {section.image && (
              <div className="mb-4">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-96 object-cover"
                />
                <p className="text-sm text-gray-600 mt-2 italic">
                  {section.title}
                </p>
              </div>
            )}
          </div>

          {/* Show ListProduct after the second heading if there are more than 3 sections */}
          {index === 1 && article.sections.length >= 2 && (
            <div className="mb-8">
              <ListProduct
                title="Có thể bạn quan tâm"
                carousel={true}
                number={4}
                container={false}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HandbookContent;
