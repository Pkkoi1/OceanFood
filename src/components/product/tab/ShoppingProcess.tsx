import React from "react";

const ShoppingProcess: React.FC = () => {
  const processData = [
    {
      title: "Quy trình mua sắm",
      content: [
        "Chọn sản phẩm",
        "Thêm vào giỏ hàng",
        "Xem giỏ hàng",
        "Tiến hành thanh toán",
        "Hoàn tất đơn hàng",
        "Xác nhận đơn hàng",
        "Theo dõi lô hàng",
        "Cập nhật trạng thái đơn hàng",
      ],
    },
    {
      title: "Quản lý tài khoản",
      content: [
        "Tạo tài khoản",
        "Đăng ký",
        "Đăng nhập",
        "Đăng xuất",
        "Quản lý đơn hàng",
        "Cập nhật thông tin tài khoản",
        "Tạo hồ sơ",
      ],
    },
    {
      title: "Thanh toán và giao hàng",
      content: [
        "Phương thức thanh toán an toàn",
        "Phương thức giao hàng",
        "Xác nhận giao dịch",
        "Theo dõi trạng thái giao hàng",
        "Giao hàng tận nơi",
      ],
    },
    {
      title: "Hỗ trợ khách hàng",
      content: [
        "Hỗ trợ khách hàng",
        "Dịch vụ khách hàng",
        "Hướng dẫn sử dụng",
        "Trợ giúp trực tuyến",
        "Hướng dẫn từng bước",
      ],
    },
  ];

  return (
    <div className="space-y-6  max-w-2xl mx-auto">
      {processData.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {section.title}
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShoppingProcess;
