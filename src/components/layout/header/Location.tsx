import {
  MailOutlined,
  EnvironmentOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllFavorites } from "../../../controller/FavoriteController";
import { useEffect, useState } from "react";

const Location = () => {
  const navigate = useNavigate();
  const [favoriteCount, setFavoriteCount] = useState(getAllFavorites().length);

  useEffect(() => {
    const updateInterval = 500; // Thiết lập thời gian cập nhật (ms)

    const updateFavoriteCount = () => {
      const newCount = getAllFavorites().length;
      if (favoriteCount !== newCount) {
        setFavoriteCount(newCount);
      }
    };

    // Cập nhật định kỳ theo interval
    const intervalId = setInterval(updateFavoriteCount, updateInterval);

    // Lắng nghe sự kiện storage để cập nhật khi localStorage thay đổi
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "favoriteProductIds") {
        updateFavoriteCount();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [favoriteCount]);

  return (
    <div className="flex flex-row items-center justify-between gap-2 py-2 bg-[#0282a5] text-white px-[100px] text-[14px]">
      <div className="flex items-center gap-2">
        <EnvironmentOutlined />
        <span>266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, Hà Nội</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 border-r-2 border-white pr-2">
          <MailOutlined />
          <a
            href="mailto:support@sapo.vn"
            className="text-white hover:underline"
          >
            support@sapo.vn
          </a>
        </div>
        <div className="flex items-center gap-1 border-r-2 border-white pr-2">
          <Badge count={favoriteCount} color="#27acd0" size="small">
            <HeartFilled style={{ color: "#fff" }} />
          </Badge>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/favorites")}
          >
            Yêu thích
          </span>
        </div>
        <a className="flex items-center gap-1 " href="/store-location">
          <span className="cursor-pointer">Hệ thống cửa hàng</span>
        </a>
      </div>
    </div>
  );
};

export default Location;
