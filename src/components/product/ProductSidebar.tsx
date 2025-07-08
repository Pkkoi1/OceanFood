import React from "react";
import support from "../../assets/images/supporter.webp";
import { Image } from "antd";
import method1 from "../../assets/images/trustbadge_1.png";
import method2 from "../../assets/images/trustbadge_2.webp";
import method3 from "../../assets/images/trustbadge_3.webp";
import method4 from "../../assets/images/trustbadge_4.webp";
import { PhoneFilled } from "@ant-design/icons";
const ProductSidebar: React.FC = () => {
  return (
    <div className="border-[0.5px] border-t-4 border-t-[#37bee3] border-gray-200 mt-6 lg:mt-0">
      <div className="space-y-6 w-full">
        {/* Service Info */}
        <div className="p-4 lg:p-6 space-y-4 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-baseline">
              <img src={support} alt="" />
            </div>
            <span className="text-sm justify-baseline w-full">
              Tư vấn tận tâm
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-baseline">
              <img src={support} alt="" />
            </div>
            <span className="text-sm justify-baseline w-full">
              Giao hàng siêu tốc (chỉ áp dụng khu vực nội thành Hà Nội & TP HCM)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-baseline">
              <img src={support} alt="" />
            </div>
            <span className="text-sm justify-baseline w-full">
              Miễn phí thanh toán qua các thẻ Visa, Master, JCB
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-baseline">
              <img src={support} alt="" />
            </div>
            <span className="text-sm justify-baseline w-full">
              Đổi trả miễn phí trong 30 ngày
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="px-4 lg:px-6">
          <h3 className="font-bold text-lg mb-4">Phương thức thanh toán</h3>
          <div className="grid grid-cols-4 gap-2 mb-6">
            <Image
              src={method1}
              alt="Tiền mặt"
              className="w-full h-auto max-w-[50px] sm:max-w-[60px] lg:max-w-[80px]"
            />
            <Image
              src={method2}
              alt="Chuyển khoản"
              className="w-full h-auto max-w-[50px] sm:max-w-[60px] lg:max-w-[80px]"
            />
            <Image
              src={method3}
              alt="Visa"
              className="w-full h-auto max-w-[50px] sm:max-w-[60px] lg:max-w-[80px]"
            />
            <Image
              src={method4}
              alt="Momo"
              className="w-full h-auto max-w-[50px] sm:max-w-[60px] lg:max-w-[80px]"
            />
          </div>
        </div>

        {/* Hotline */}
        <div className="bg-[#0282a5] text-white px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg bg-white w-10 h-10 border-2 rounded-full flex items-center justify-center">
              <PhoneFilled style={{ color: "#0282a5", fontSize: "20px" }} />
            </span>
            <span className="font-bold text-sm lg:text-base">
              Hotline: 1900 6750
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
