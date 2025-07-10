import React from "react";
import { useParams } from "react-router-dom";
import { handbookArticles } from "../../data/handbookData";
import SideMenu from "../../components/handbook/SideMenu";
import HandbookMeta from "../../components/handbook/HandbookMeta";
import TableOfContents from "../../components/handbook/TableOfContents";
import HandbookContent from "../../components/handbook/HandbookContent";

const HandbookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = handbookArticles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className=" mx-auto lg:px-[100px] px-4 flex flex-row items-start my-4">
      <SideMenu></SideMenu>
      <div className="w-full lg:w-3/4 px-4 py-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <HandbookMeta author={article.author} date={article.date} />
        <TableOfContents article={article} />
        <HandbookContent article={article} />
      </div>
    </div>
  );
};

export default HandbookDetail;
