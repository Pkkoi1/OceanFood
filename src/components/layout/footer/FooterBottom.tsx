import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import method1 from "../../../assets/images/trustbadge_1.png";
import method2 from "../../../assets/images/trustbadge_2.webp";
import method3 from "../../../assets/images/trustbadge_3.webp";
import method4 from "../../../assets/images/trustbadge_4.webp";
import { Image } from "antd";

const FooterBottom = () => {
  return (
    <div className="bg-[#0282a5] text-white text-[14px] py-12 px-[100px] relative overflow-hidden border-t border-white/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 text-6xl">🐟</div>
        <div className="absolute top-32 right-32 text-4xl">🦐</div>
        <div className="absolute bottom-20 left-40 text-5xl">🦀</div>
        <div className="absolute bottom-32 right-20 text-4xl">🐠</div>
        <div className="absolute top-20 right-80 text-3xl">🐚</div>
      </div>

      <div className="relative z-10 grid grid-cols-4 gap-4">
        {/* Thông tin công ty */}
        <div>
          <h3 className="text-xl font-bold mb-4">Thông tin công ty</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Mã số thuế: 01234567891 do Sở Kế hoạch và Đầu tư Tp Hà Nội cấp ngày
            13/02/2024
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <EnvironmentOutlined className="text-white mt-1" />
              <span className="text-sm">
                266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, Hà Nội
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MailOutlined className="text-white" />
              <span className="text-sm">support@sapo.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneOutlined className="text-white" />
              <span className="text-sm">1900 6750</span>
            </div>
          </div>
        </div>

        {/* Về chúng tôi */}
        <div className="col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Về chúng tôi</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cẩm nang ăn thức
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Chính sách */}
        <div className="col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Chính sách</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Chính sách đổi trả
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách mua hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách bán hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách giao hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bảo mật thông tin cá nhân
              </a>
            </li>
          </ul>
        </div>

        {/* Hình thức thanh toán */}
        <div className="w-ful">
          <h3 className="text-xl font-bold mb-4">Hình thức thanh toán</h3>
          <div className="grid grid-cols-4 gap-2 mb-6">
            <Image
              src={method1}
              alt="Tiền mặt"
              className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
            />
            <Image
              src={method2}
              alt="Chuyển khoản"
              className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
            />
            <Image
              src={method3}
              alt="Visa"
              className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
            />
            <Image
              src={method4}
              alt="Momo"
              className="w-full h-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
            />
          </div>
          <h4 className="text-lg font-bold mb-3">Liên kết mạng xã hội</h4>
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-blue-300 text-xl">
              <FacebookFilled />
            </a>
            <a href="#" className="text-white hover:text-blue-300 text-xl">
              <LinkedinFilled />
            </a>
            <a href="#" className="text-white hover:text-red-300 text-xl">
              <YoutubeFilled />
            </a>
            <a href="#" className="text-white hover:text-pink-300 text-xl">
              <InstagramFilled />
            </a>
            <a href="#" className="text-white hover:text-blue-300 text-xl">
              <TwitterOutlined />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/20 mt-8 pt-6 text-sm">
        <p>© Bản quyền thuộc về Lofi Team | Cung cấp bởi Sapo</p>
      </div>
    </div>
  );
};

export default FooterBottom;
