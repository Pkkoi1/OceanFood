import { WechatOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const ContactButton: React.FC = () => {
  const [isRinging, setIsRinging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 1000); // Tắt hiệu ứng sau 1s (thời gian animation)
    }, 2000); // Lặp lại mỗi 2 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <div className="relative">
      <button
        className={`fixed bottom-30 right-4 z-[1000] w-14 h-14 border border-white bg-[#37bee3] text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-300 ${
          isRinging ? "animate-ring" : ""
        }`}
      >
        <div>
          <WechatOutlined style={{ fontSize: 25 }} />
          <div className="text-[8px]">Liên hệ</div>
        </div>

        {/* Wave effects */}
        {isRinging && (
          <>
            <div className="fixed bottom-0 right-0 w-14 h-14 rounded-full border-2 border-[#37bee3] animate-wave1 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-14 h-14 rounded-full border-2 border-[#37bee3] animate-wave2 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-14 h-14 rounded-full border-2 border-[#37bee3] animate-wave3 pointer-events-none"></div>
          </>
        )}
      </button>
    </div>
  );
};

// CSS animation
const styles = `
  @keyframes ring {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(30deg); }
    40% { transform: rotate(-30deg); }
    60% { transform: rotate(30deg); }
    80% { transform: rotate(-30deg); }
    100% { transform: rotate(0deg); }
  }
  
  @keyframes wave {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  
  .animate-ring {
    animation: ring 1s forwards;
  }
  
  .animate-wave1 {
    animation: wave 1s ease-out forwards;
    animation-delay: 0s;
  }
  
  .animate-wave2 {
    animation: wave 1s ease-out forwards;
    animation-delay: 0.2s;
  }
  
  .animate-wave3 {
    animation: wave 1s ease-out forwards;
    animation-delay: 0.4s;
  }
`;

// Thêm CSS vào document
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ContactButton;
// Note: Ensure to import this component in your main App file and include it in the JSX to see it in action.
