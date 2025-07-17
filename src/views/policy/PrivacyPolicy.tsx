import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Bảo mật thông tin cá nhân</h1>
      <div className="space-y-6">
        {/* Thu thập thông tin cá nhân */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            1. Thu thập thông tin cá nhân
          </h2>
          <p className="text-sm mb-4">
            Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá trình
            mua hàng và cho những thông báo sau này liên quan đến đơn hàng, và
            để cung cấp dịch vụ, bao gồm một số thông tin cá nhân: danh hiệu,
            tên, giới tính, ngày sinh, email, địa chỉ, địa chỉ giao hàng, số
            điện thoại, fax, chi tiết thanh toán, chi tiết thanh toán bằng thẻ
            hoặc chi tiết tài khoản ngân hàng.
          </p>
          <p className="text-sm">
            Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn đặt
            hàng, cung cấp các dịch vụ và thông tin yêu cầu thông qua website và
            theo yêu cầu của bạn.
          </p>
        </div>

        {/* Bảo mật */}
        <div>
          <h2 className="text-xl font-bold mb-4">2. Bảo mật</h2>
          <p className="text-sm">
            Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn
            truy cập trái phép hoặc trái pháp luật hoặc mất mát hoặc tiêu hủy
            hoặc thiệt hại cho thông tin của bạn.
          </p>
        </div>

        {/* Quyền lợi khách hàng */}
        <div>
          <h2 className="text-xl font-bold mb-4">3. Quyền lợi khách hàng</h2>
          <p className="text-sm">
            Quý khách có quyền yêu cầu truy cập vào dữ liệu cá nhân của mình, có
            quyền yêu cầu chúng tôi sửa lại những sai sót trong dữ liệu của bạn
            mà không mất phí. Bất cứ lúc nào bạn cũng có quyền yêu cầu chúng tôi
            ngưng sử dụng dữ liệu cá nhân của bạn cho mục đích tiếp thị.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
