import React from "react";
import { List } from "antd";
import HandbookCard from "./HandbookCard";
import { handbookArticles, type HandbookArticle } from "../../data/handbookData";

const HandbookList: React.FC = () => {
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
        dataSource={handbookArticles}
        renderItem={(article: HandbookArticle) => (
          <HandbookCard
            key={article.id}
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
