import React from "react";

const ReturnPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Chính sách đổi trả</h1>
      <div className="space-y-6">
        {/* Điều kiện đổi trả */}
        <div>
          <h2 className="text-xl font-bold mb-4">1. Điều kiện đổi trả</h2>
          <p className="text-sm mb-4">
            Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/
            trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường
            hợp sau:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như
              trên website tại thời điểm đặt hàng.
            </li>
            <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
            <li>
              Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể
              vỡ…
            </li>
          </ul>
          <p className="text-sm mt-4">
            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự
            thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
          </p>
        </div>

        {/* Quy định về thời gian thông báo và gửi sản phẩm đổi trả */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản
              phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể
              vỡ.
            </li>
            <li>
              Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi
              nhận sản phẩm.
            </li>
            <li>
              Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp
              đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu
              điện.
            </li>
          </ul>
          <p className="text-sm mt-4">
            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên
            quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường
            dây chăm sóc khách hàng của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
