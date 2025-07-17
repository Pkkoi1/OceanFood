import React from "react";

const SalesPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Chính sách bán hàng</h1>
      <div className="space-y-6">
        {/* Đặt hàng */}
        <div>
          <h2 className="text-xl font-bold mb-4">1. Đặt hàng</h2>
          <p className="text-sm mb-4">
            Hiện tại khách hàng có thể đến trực tiếp các địa chỉ mua hàng của
            Lofi Gift để mua hàng trực tiếp hoặc đặt hàng. Đồng thời chúng tôi
            tiếp nhận đơn hàng qua điện thoại:
          </p>
          <p className="text-sm mb-4">
            Hiện tại chúng tôi hỗ trợ đặt hàng với 03 hình thức sau đây:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Đặt hàng trực tiếp tại cửa hàng.</li>
            <li>Đặt hàng trực tuyến.</li>
            <li>Đặt hàng qua hotline: 0987654321.</li>
          </ul>
        </div>

        {/* Xác nhận đơn hàng */}
        <div>
          <h2 className="text-xl font-bold mb-4">2. Xác nhận đơn hàng</h2>
          <p className="text-sm">
            Chúng tôi sẽ sử dụng các thông tin khách hàng cung cấp để tiến hành
            xác nhận đơn hàng.
          </p>
        </div>

        {/* Thay đổi, hủy bỏ giao dịch */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            3. Thay đổi, hủy bỏ giao dịch
          </h2>
          <p className="text-sm mb-4">
            Trong mọi trường hợp quý khách đều có quyền hủy bỏ đơn hàng sau khi
            thực hiện các biện pháp sau:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Thông báo cho chúng tôi về việc hủy đơn hàng qua đường dây nóng
              0987654321.
            </li>
          </ul>
        </div>

        {/* Chương trình ưu đãi */}
        <div>
          <h2 className="text-xl font-bold mb-4">4. Chương trình ưu đãi</h2>
          <p className="text-sm">
            Lofi Gift có áp dụng chương trình chiết khấu ưu đãi dành cho khách
            hàng tại từng thời điểm cụ thể khác nhau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesPolicy;
