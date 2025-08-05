import React, { useEffect, useState } from "react";
import { List } from "antd";
import HandbookCard from "./HandbookCard";
import { fetchHandbook } from "../../Service/HandBookService";
import type { HandbookArticle } from "../../data/handbookData";

const HandbookList: React.FC = () => {
  const [articles, setArticles] = useState<HandbookArticle[]>([]);

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
    <div className="w-full">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 6,
        }}
        dataSource={articles}
        renderItem={(article) => (
          <HandbookCard
            key={article.id} // Ensure unique key
            article={article}
            onClick={() => console.log(`Clicked on ${article.title}`)}
            size="large"
          />
        )}
      />
    </div>
  );
};

export default HandbookList;
