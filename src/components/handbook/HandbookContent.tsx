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
      {article.description.map((section, index) => (
        <React.Fragment key={index}>
          <div className="mb-6" id={generateId(section.heading, index)}>
            <h1 className="text-2xl font-bold mb-2">{section.heading}</h1>
            {typeof section.content === "string" ? (
              <p className="text-gray-700 mb-4">{section.content}</p>
            ) : (
              section.content.map((item, i) => (
                <div key={i} className="mb-4" id={generateId(item.subTitle, i)}>
                  <h3 className="text-lg font-medium mb-2">{item.subTitle}</h3>
                  <p className="text-gray-700 mb-3">{item.content}</p>
                  {item.img && (
                    //căn hình bên trái
                    <div className="mb-4 ">
                      <img
                        src={item.img.url}
                        alt={item.img.caption}
                        className="w-full h-96  object-contain "
                      />
                      <p className="text-sm text-gray-600 mt-2 italic">
                        {item.img.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
            {section.img && (
              <div className="mb-4">
                <img
                  src={section.img.url}
                  alt={section.img.caption}
                  className="w-full h-96 object-cover"
                />
                <p className="text-sm text-gray-600 mt-2 italic">
                  {section.img.caption}
                </p>
              </div>
            )}
          </div>

          {/* Show ListProduct after the second heading if there are more than 3 sections */}
          {index === 1 && article.description.length >= 2 && (
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
