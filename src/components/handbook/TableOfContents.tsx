import React, { useState } from "react";
import { type HandbookArticle } from "../../data/handbookData";
import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";

interface TableOfContentsProps {
  article: HandbookArticle;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTableOfContents = () => {
    setIsOpen(!isOpen);
  };

  // Function to generate ID from heading text (same as in HandbookContent)
  const generateId = (text: string, index: number) => {
    return `section-${index}-${text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")}`;
  };

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="w-full mb-3 bg-[#f4f4f4] px-4 py-2">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleTableOfContents}
          className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-between w-full"
        >
          <h2 className="text-lg font-semibold text-gray-800">Mục lục</h2>
          {isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </button>
      </div>
      {isOpen && (
        <ul className="space-y-1">
          {article.sections.map((section, index) => (
            <li key={`heading-${index}`} className="mb-2">
              <div className="text-gray-700 py-1">
                <span
                  className="font-medium cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => scrollToSection(generateId(section.title, index))}
                >
                  {`${index + 1}. ${section.title}`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableOfContents;
             