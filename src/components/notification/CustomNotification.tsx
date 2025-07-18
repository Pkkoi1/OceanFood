import React, { useEffect, useState } from "react";
import { newProducts } from "../../data/mockData";

const CustomNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [notificationData, setNotificationData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * newProducts.length);
    const product = newProducts[randomIndex];
    return {
      name: product.name,
      image: product.image,
      description: `${product.name} đã được mua cách đây ${Math.floor(
        Math.random() * 30 + 1
      )} phút`,
    };
  };

  const showNotification = () => {
    const data = getRandomProduct();
    setNotificationData(data);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide notification after 5 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNotification();
    }, 60000); // Show notification every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed lg:bottom-4 bottom-10/12 lleft-0 lg:left-4 bg-white shadow-lg rounded-lg border border-gray-200 p-4 flex items-center gap-4 z-50">
      <img
        src={notificationData.image}
        alt={notificationData.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="text-[#37bee3] font-bold text-sm">Sản phẩm</h3>
        <p className="text-gray-800 font-semibold text-sm">
          {notificationData.name}
        </p>
        <p className="text-gray-500 text-xs">{notificationData.description}</p>
      </div>
      <button
        className="text-gray-400 hover:text-gray-600 transition-colors"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>
    </div>
  );
};

export default CustomNotification;
