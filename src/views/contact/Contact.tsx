import { EnvironmentFilled, EnvironmentOutlined, MailFilled, PhoneFilled } from "@ant-design/icons";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex items-start justify-center min-h-screen bg-white mt-6 lg:mx-0 mx-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section - Form (mới) */}

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-medium mb-4">
            Lofi Seafood - Kênh bán lẻ hải sản online
          </h2>
          <p className="text-gray-600 mb-6">
            Nếu bạn có thắc mắc gì, có thể gửi yêu cầu hoặc liên hệ trực tiếp
            với chúng tôi để được hỗ trợ.
          </p>
          {/* Contact Info */}
          <div>
            <div className="mb-4">
              <EnvironmentFilled
                style={{ color: "#37bee3", marginRight: "10px" }}
              />
              <span>266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, Hà Nội</span>
            </div>
            <div className="mb-4">
              <MailFilled
                style={{ color: "#37bee3", marginRight: "10px" }}
              />
              <span>support@sapo.vn</span>
            </div>
            <div className="mb-4">
              <PhoneFilled
                style={{ color: "#37bee3", marginRight: "10px" }}
              />

              <span>1900 6750</span>
            </div>
          </div>
          {/* Contact Form */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Điện thoại*"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Nội dung"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            />
            <button className="w-full bg-[#37bee3] text-white p-3 rounded-lg hover:bg-[#0282a5] transition-colors">
              Gửi thông tin
            </button>
          </div>
        </div>

        {/* Right Section - Map (mới) */}
        <div className="w-full  md:w-1/2">
          <div className="relative h-screen lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904149430893!2d105.8133027744812!3d21.03652088751348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2bddedd8ff%3A0xde7c4fb8e272fabc!2zQ8O0bmcgdHkgQVZBIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1751508389308!5m2!1svi!2s"
              width="100%"
              height="96%"
              loading="lazy"
              className=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
