import React from "react";

const PurchaseGuide: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Hướng dẫn mua hàng</h1>
      <div className="space-y-6">
        <ol className="list-decimal pl-6 space-y-4 text-sm">
          <li>Truy cập website và lựa chọn sản phẩm cần mua để mua hàng.</li>
          <li>
            Click vào sản phẩm muốn mua, màn hình hiển thị ra pop-up với các lựa
            chọn sau:
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần "Tiếp tục mua hàng"
                để lựa chọn thêm sản phẩm vào giỏ hàng.
              </li>
              <li>
                Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào "Xem giỏ
                hàng".
              </li>
              <li>
                Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này: Bấm vào
                "Đặt hàng và thanh toán".
              </li>
            </ul>
          </li>
          <li>
            Lựa chọn thông tin tài khoản thanh toán:
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Nếu bạn đã có tài khoản, vui lòng nhập thông tin tên đăng nhập
                là email và mật khẩu vào mục "Đã có tài khoản trên hệ thống".
              </li>
              <li>
                Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản, vui lòng
                điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có
                tài khoản, bạn sẽ dễ dàng theo dõi được đơn hàng của mình.
              </li>
              <li>
                Nếu bạn muốn mua hàng mà không cần tài khoản, vui lòng nhấp
                chuột vào mục "Đặt hàng không cần tài khoản".
              </li>
            </ul>
          </li>
          <li>
            Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức
            thanh toán và vận chuyển cho đơn hàng của mình.
          </li>
          <li>
            Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng. Sau khi
            nhận được đơn hàng bạn gửi, chúng tôi sẽ liên hệ bằng cách gọi điện
            lại để xác nhận lại đơn hàng và địa chỉ của bạn.
          </li>
        </ol>
        <p className="text-sm mt-4">Trân trọng cảm ơn.</p>
      </div>
    </div>
  );
};

export default PurchaseGuide;
