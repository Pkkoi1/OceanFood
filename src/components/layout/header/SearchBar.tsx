import { Drawer, Image } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.webp";
import timeWork from "../../../assets/images/time-work.webp";
import ship from "../../../assets/images/free-ship-2h.webp";
import MainMenu from "../../menu/MainMenu";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false); // <-- thêm trạng thái

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
    <div className="flex flex-col bg-white lg:shadow  lg:flex-row items-center justify-between gap-3 px-4 lg:px-[100px] w-screen lg:my-0 my-3">
      <div className="flex-shrink-0">
        <Image src={logo} alt="Ocean Food Logo" width={120} height={60} />
      </div>

      <div className="flex items-center relative w-full lg:w-auto lg:ml-36 order-3 lg:order-2">
        <input
          className="border-2 border-[#37bee3] rounded-full py-2 px-6 w-full lg:w-md pr-32 outline-none focus:border-[#27acd0]"
          type="text"
          placeholder={placeholder + "|"}
        />
        <button className="absolute right-0 bg-[#37bee3] hover:bg-[#27acd0] text-white px-3 py-2 rounded-full flex items-center gap-2 transition-colors">
          <SearchOutlined />
          <span className="">Tìm kiếm</span>
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-4 order-2 lg:order-3">
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

      {/* Button mở menu */}
      <button
        className="lg:hidden order-1 top-10  left-2 absolute z-0 text-white p-2 flex items-center justify-center transition-colors"
        onClick={() => setOpenDrawer(true)}
      >
        <MenuOutlined style={{ color: "#37bee3" }} />
      </button>

      {/* Drawer menu chính */}
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={280}
        bodyStyle={{ padding: 0 }}
      >
        <MainMenu
          onMenuClick={(key) => {
            console.log("Người dùng đã chọn:", key); // Xử lý tùy ý
            setOpenDrawer(false); // Đóng Drawer
          }}
        />
      </Drawer>
    </div>
  );
};

export default SearchBar;
