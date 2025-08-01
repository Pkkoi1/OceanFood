import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHandbookById } from "../../Service/HandBookService";
import SideMenu from "../../components/handbook/SideMenu";
import type { HandbookArticle } from "../../data/handbookData";

const HandbookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<HandbookArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (id) {
          const fetchedArticle = await fetchHandbookById(id);
          setArticle(fetchedArticle);
        }
      } catch (error) {
        console.error("Error fetching handbook article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Đang tải...</div>;
  }

  if (!article) {
    return <div className="text-center mt-10">Không tìm thấy bài viết.</div>;
  }

  return (
    <div className="mx-auto lg:px-[100px] px-4 flex flex-row items-start my-4">
      <SideMenu></SideMenu>
      <div className="w-full lg:w-3/4 px-4 py-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-6">Tác giả: {article.author}</p>
        {article.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
            {section.image && (
              <div className="mt-2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandbookDetail;
