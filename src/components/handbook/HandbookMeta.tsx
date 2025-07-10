import React from "react";

interface ArticleMetaProps {
  author: string;
  date: string;
}

const HandbookMeta: React.FC<ArticleMetaProps> = ({ author, date }) => {
  return (
    <p className="text-gray-600 mb-2">
      By {author} | {date}
    </p>
  );
};

export default HandbookMeta;
