import React from "react";
import messenger from "../../../assets/images/messenger.webp";
const MessengerButton: React.FC = () => {
  return (
    <div>
      <button
        className={`fixed bottom-15 right-4 z-[1000] w-14 h-14 text-white p-1 cursor-pointer transition-colors duration-300`}
      >
        <div>
          <img
            src={messenger}
            alt="Messenger"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </button>
    </div>
  );
};

export default MessengerButton;
