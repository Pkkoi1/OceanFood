import React from "react";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Chính sách giao hàng</h1>
      <div className="space-y-6">
        {/* Thời gian giao hàng */}
        <div>
          <h2 className="text-xl font-bold mb-4">1. Thời gian giao hàng</h2>
          <p className="text-sm mb-4">
            Lofi Seafood có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng
            cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp
            dụng cho khách mua trực tiếp tại cửa hàng.
          </p>
          <p className="text-sm mb-4">
            Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp
            thông qua công ty vận chuyển trung gian.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Đơn hàng nội và ngoại thành Hà Nội:</strong> Thời gian
              giao hàng là 1-2 ngày sau khi đặt hàng.
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Đơn hàng trước 11h30 trưa thì sẽ giao trong buổi chiều cùng
                  ngày.
                </li>
                <li>
                  Đơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm sau.
                </li>
              </ul>
            </li>
            <li>
              <strong>Đơn hàng ở các tỉnh thành khác:</strong> Thời gian là 2-3
              ngày đối với khu vực trung tâm tỉnh thành phố, 3-7 ngày đối với
              khu vực ngoại thành, huyện, xã, thị trấn… (Không tính thứ bảy, chủ
              nhật hay các ngày lễ tết).
            </li>
          </ul>
          <p className="text-sm mt-4">
            Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán
            hoàn tất của quý khách. Có thể thay đổi thời gian giao hàng nếu
            khách hàng yêu cầu và Lofi Seafood chủ động đổi trong trường hợp
            chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác.
          </p>
          <p className="text-sm mt-4">
            Đơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp
            lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp
            xếp lịch giao hàng lần 2 với quý khách. Trong trường hợp vẫn không
            thể liên lạc lại được hoặc không nhận được bất kì phản hồi nào từ
            phía quý khách, đơn hàng sẽ không còn hiệu lực.
          </p>
          <p className="text-sm mt-4">
            Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin
            vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện
            thoại để được kiểm tra.
          </p>
          <p className="text-sm mt-4">
            Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên
            giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao
            có chính xác không. Xin quý khách vui lòng giữ lại biên lai vận
            chuyển và hóa đơn mua hàng để đối chiếu kiểm tra.
          </p>
        </div>

        {/* Phí giao hàng */}
        <div>
          <h2 className="text-xl font-bold mb-4">2. Phí giao hàng</h2>
          <p className="text-sm">
            Phí ship cố định là 30,000đ áp dụng cho mọi khu vực.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
