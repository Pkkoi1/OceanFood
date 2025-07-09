import React from "react";
import { handbookArticles } from "../../data/handbookData";
import MainMenu from "../menu/MainMenu";

interface SideMenuProps {
  onMenuClick?: (menuKey: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuClick }) => {
  const newsItems = handbookArticles.slice(0, 5).map((item) => ({
    id: item.id,
    date: item.date,
    title: item.title,
    image: item.image,
  }));

  return (
    <div className="hidden lg:block bg-white mr-4 w-1/3 sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto">
      {/* Danh mục Section */}
      <div className="mb-8">
        <div className="border-[#37bee3] border-t-4  text-black pr-4 py-3">
          <h3 className="text-lg font-semibold">Danh mục</h3>
        </div>
        <MainMenu onMenuClick={onMenuClick} />
      </div>

      {/* Tin tức nổi bật Section */}
      <div>
        <div className="  text-black pr-4 py-3">
          <h3 className="text-lg font-semibold">Tin tức nổi bật</h3>
        </div>
        <div className="">
          <div className="space-y-4">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="flex gap-3 cursor-pointer hover:opacity-80"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                  <h4 className="text-sm text-gray-800 line-clamp-2 leading-tight font-bold max-w-[80%]  hover:text-[#37bee3] transition-colors duration-300">
                    {news.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
