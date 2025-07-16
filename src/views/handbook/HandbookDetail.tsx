import React from "react";
import { useParams } from "react-router-dom";
import { handbookArticles } from "../../data/handbookData";
import SideMenu from "../../components/handbook/SideMenu";

const HandbookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = handbookArticles.find((item) => item.id === Number(id));

  if (!article) {
    return <div className="text-center mt-10">Không tìm thấy bài viết.</div>;
  }

  return (
    <div className=" mx-auto lg:px-[100px] px-4 flex flex-row items-start my-4">
      <SideMenu></SideMenu>
      <div className="w-full lg:w-3/4 px-4 py-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-6">Tác giả: {article.author}</p>
        {article.description.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            {typeof section.content === "string" ? (
              <p className="text-gray-700">{section.content}</p>
            ) : (
              section.content.map((subSection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-lg font-medium">{subSection.subTitle}</h3>
                  <p className="text-gray-700">{subSection.content}</p>
                  {subSection.img && (
                    <div className="mt-2">
                      <img
                        src={subSection.img.url}
                        alt={subSection.img.caption}
                        className="w-full h-auto rounded"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        {subSection.img.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandbookDetail;
