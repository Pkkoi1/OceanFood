import {
  MailOutlined,
  EnvironmentOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Badge } from "antd";

const Location = () => {
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
          <Badge count={5} color="#27acd0" size="small">
            <HeartFilled style={{ color: "#fff" }} />
          </Badge>
          <span className="cursor-pointer ">Yêu thích</span>
        </div>
        <div className="flex items-center gap-1 ">
          <span className="cursor-pointer">Hệ thống cửa hàng</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
