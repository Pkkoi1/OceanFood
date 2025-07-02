import { Image } from "antd";
import logo from "../../../assets/images/logo-footer.png";

const FooterTop = () => {
  return (
    <div className="flex items-center justify-between gap-3 px-[100px] py-10 bg-[#0282a5]">
      <div>
        <Image src={logo} alt="Ocean Food Logo" width={120} height={60} />
      </div>
      <div className="flex items-center relative">
        <input
          className="bg-[#fff] border-0 rounded-full py-3 px-6 w-md pr-32 outline-none focus:border-[#27acd0]"
          type="text"
          placeholder="Nhập email nhận tin khuyến mãi"
        />
        <button className="absolute right-0 bg-[#0282a5] hover:bg-[#27acd0] text-white px-6 py-2 mr-1 rounded-full flex items-center gap-2 transition-colors">
          <span className="font-bold">Đăng Ký</span>
        </button>
      </div>
    </div>
  );
};

export default FooterTop;
