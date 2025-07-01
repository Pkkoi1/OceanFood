import { Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import logo from "../../../../public/images/logo.webp";
import timeWork from "../../../../public/images/time-work.webp";
import ship from "../../../../public/images/free-ship-2h.webp";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="flex items-center justify-between gap-3 px-[100px] my-3">
      <div>
        <Image src={logo} alt="Ocean Food Logo" width={120} height={60} />
      </div>
      <div className="flex items-center relative">
        <input
          className="border-2 border-[#37bee3] rounded-full py-3 px-6 w-96 pr-32 outline-none focus:border-[#27acd0]"
          type="text"
          placeholder={placeholder + "|"}
        />
        <button className="absolute right-0 bg-[#37bee3] hover:bg-[#27acd0] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
          <SearchOutlined />
          <span>Tìm kiếm</span>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image src={timeWork} alt="Ocean Food Logo" width={45} height={45} />
          <div>
            <div>Thời gian làm việc</div>
            <div>
              <strong className="text-[#bf9083]">8h - 21h</strong>
              <span> (từ thứ 2 - Chủ Nhật)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src={timeWork} alt="Ocean Food Logo" width={45} height={45} />
          <div>
            <div>Tốc độ nhanh chóng</div>
            <Image src={ship} alt="Ocean Food Logo" width={103} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
