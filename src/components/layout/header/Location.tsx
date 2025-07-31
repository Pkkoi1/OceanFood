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
  console.log("Location mounted");

  useEffect(() => {
    const updateFavoriteCount = () => {
      const newCount = getAllFavorites().length;
      console.log("favoriteChange event triggered, newCount:", newCount);
      setFavoriteCount(() => {
        console.log("Updating favoriteCount state to:", newCount);
        return newCount;
      });
    };

    console.log("Adding favoriteChange listener");
    window.addEventListener("favoriteChange", updateFavoriteCount);

    return () => {
      console.log("Removing favoriteChange listener");
      window.removeEventListener("favoriteChange", updateFavoriteCount);
    };
  }, []);

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
