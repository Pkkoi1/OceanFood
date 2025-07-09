import { BellFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Option from "./Option";

const BellButton: React.FC = () => {
  const [isRinging, setIsRinging] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 1000); // Tắt hiệu ứng sau 1s (thời gian animation)
    }, 2000); // Lặp lại mỗi 2 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  const handleClick = () => {
    setIsOptionOpen((prev) => !prev);
  };

  const handleCloseOption = () => {
    setIsOptionOpen(false);
  };

  return (
    <div>
      <Option isOpen={isOptionOpen} onClose={handleCloseOption} />
      <button
        onClick={handleClick}
        className={`fixed bottom-30 left-4 z-[1000] w-14 h-14 border border-white bg-[#37bee3] text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-300 ${
          isRinging ? "animate-ring" : ""
        }`}
      >
        <BellFilled style={{ fontSize: 25 }} />
      </button>
    </div>
  );
};

// CSS animation
const styles = `
  @keyframes ring {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(20deg); }
    40% { transform: rotate(-20deg); }
    60% { transform: rotate(20deg); }
    80% { transform: rotate(-20deg); }
    100% { transform: rotate(0deg); }
  }
  .animate-ring {
    animation: ring 1s forwards;
  }
`;

// Thêm CSS vào document
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default BellButton;
