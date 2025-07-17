import { Drawer, Image } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import timeWork from "../../../assets/images/time-work.webp";
import ship from "../../../assets/images/free-ship-2h.webp";
import MainMenu from "../../menu/MainMenu";
import { searchProductsByName } from "../../../controller/ProductController";
import { searchHandbookByTitle } from "../../../controller/HandbookController";
import type { Product } from "../../../data/mockData";
import SearchSuggestions from "../../search/SearchSuggestions";
import { type HandbookArticle } from "../../../data/handbookData";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [articles, setArticles] = useState<HandbookArticle[]>([]); // Add state for articles
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const texts = ["Cá hồi", "Bạn muốn chọn gì"];

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (placeholder.length < currentText.length) {
            setPlaceholder(currentText.slice(0, placeholder.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (placeholder.length > 0) {
            setPlaceholder(currentText.slice(0, placeholder.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [placeholder, currentIndex, isDeleting]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    setSearchTerm(value);
    if (value) {
      const productResults = searchProductsByName(value);
      const articleResults = searchHandbookByTitle(value); // Use controller for searching articles
      setSuggestions(productResults.slice(0, 4)); // Limit to 4 product suggestions
      setArticles(articleResults.slice(0, 4)); // Limit to 4 article suggestions
    } else {
      setSuggestions([]); // Clear product suggestions
      setArticles([]); // Clear article suggestions
    }
  };

  const handleSuggestionClick = (productId: number) => {
    setSuggestions([]); // Hide suggestions
    navigate(`/product/${productId}`);
  };

  const handleArticleClick = (articleId: number) => {
    setSuggestions([]); // Hide suggestions
    setArticles([]); // Hide articles
    navigate(`/handbook/${articleId}`);
  };

  const handleSearchSubmit = () => {
    setSuggestions([]); // Hide suggestions
    navigate(`/search?query=${searchTerm}`);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setSuggestions([]); // Hide suggestions when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={searchRef}
      className="flex flex-col bg-white lg:shadow lg:flex-row items-center justify-between gap-3 px-4 lg:px-[100px] w-screen lg:my-0 my-3"
    >
      <a className="flex-shrink-0 py-2" href="/">
        <img src={logo} alt="" className="w-[120px] h-[60px]" />
      </a>

      <div className="flex items-center relative w-full lg:w-auto lg:ml-36 order-3 lg:order-2">
        <input
          className="border-2 border-[#37bee3] rounded-full py-2 px-6 w-full lg:w-md pr-32 outline-none focus:border-[#27acd0]"
          type="text"
          placeholder={placeholder + "|"}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="absolute right-0 bg-[#37bee3] hover:bg-[#27acd0] text-white px-3 py-2 rounded-full flex items-center gap-2 transition-colors"
          onClick={handleSearchSubmit}
        >
          <SearchOutlined />
          <span className="">Tìm kiếm</span>
        </button>
        {(suggestions.length > 0 || articles.length > 0) && ( // Check both suggestions and articles
          <SearchSuggestions
            suggestions={suggestions}
            articles={articles} // Pass articles to suggestions
            onSearchSubmit={handleSearchSubmit}
            onSuggestionClick={handleSuggestionClick}
            onArticleClick={handleArticleClick} // Pass article click handler
          />
        )}
      </div>

      <div className="hidden lg:flex font items-center gap-4 order-2 lg:order-3">
        <div className="flex items-center gap-2">
          <Image src={timeWork} alt="Thời gian" width={45} height={45} />
          <div>
            <div>Thời gian làm việc</div>
            <div>
              <strong className="text-[#bf9083]">8h - 21h</strong>
              <span> (từ thứ 2 - Chủ Nhật)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={timeWork} alt="Giao hàng" width={45} height={45} />
          <div>
            <div>Tốc độ nhanh chóng</div>
            <Image src={ship} alt="Free ship" width={103} height={16} />
          </div>
        </div>
      </div>

      <button
        className="lg:hidden order-1 top-10 left-2 absolute z-0 text-white p-2 flex items-center justify-center transition-colors"
        onClick={() => setOpenDrawer(true)}
      >
        <MenuOutlined style={{ color: "#37bee3" }} />
      </button>

      <Drawer
        placement="left"
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={280}
      >
        <MainMenu
          onMenuClick={(key) => {
            console.log("Người dùng đã chọn:", key);
            setOpenDrawer(false);
          }}
        />
      </Drawer>
    </div>
  );
};

export default SearchBar;
