import React, { useRef, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

interface OptionProps {
  isOpen: boolean;
  onClose: () => void;
}

const Option: React.FC<OptionProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const menuItems = [
    {
      text: "Đánh giá sản phẩm",
      icon: "»",
      link: "https://apps.sapo.vn/danh-gia-san-pham-v2",
    },
    {
      text: "Mua X tặng Y",
      icon: "»",
      link: "https://apps.sapo.vn/mua-x-tang-y-v2",
    },
    {
      text: "Ứng dụng Affiliate",
      icon: "»",
      link: "https://apps.sapo.vn/quan-ly-affiliate-v2",
    },
    {
      text: "Đa ngôn ngữ",
      icon: "»",
      link: "https://apps.sapo.vn/ae-da-ngon-ngu",
    },
    {
      text: "Livechat Facebook",
      icon: "»",
      link: "https://facebook.com/messages",
      external: true,
    },
  ];

  const handleItemClick = (item: { link: string; external?: boolean }) => {
    window.open(item.link, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed bottom-40 left-10 pb-4 z-[999] w-80 bg-[#37bee3] text-white rounded-lg shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <h3 className="text-lg font-bold">Tích hợp sẵn các ứng dụng</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <CloseOutlined style={{ fontSize: 16 }} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 hover:bg-white/10 rounded transition-colors cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <span className="text-white font-bold text-lg">{item.icon}</span>
            <span className="text-white text-sm">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/20">
        <p className="text-xs text-white/80 italic">
          Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này
          trên App store Sapo để sử dụng ngay
        </p>
      </div>
    </div>
  );
};

export default Option;
