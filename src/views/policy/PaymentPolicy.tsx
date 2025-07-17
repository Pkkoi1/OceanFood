import React from "react";

const PaymentPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:px-[100px]">
      <h1 className="text-2xl font-bold mb-6">Chính sách thanh toán</h1>
      <div className="space-y-6">
        {/* Chính sách thanh toán */}
        <div>
          <h2 className="text-xl font-bold mb-4">1. Chính sách thanh toán</h2>
          <p className="text-sm mb-4">
            Có 3 hình thức thanh toán, khách hàng có thể lựa chọn hình thức
            thuận tiện và phù hợp với mình nhất:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Cách 1: Thanh toán tiền mặt trực tiếp địa chỉ của chúng tôi.
            </li>
            <li>
              Cách 2: Thanh toán khi nhận hàng (COD), khách hàng xem hàng tại
              nhà, thanh toán tiền mặt cho nhân viên giao nhận hàng.
            </li>
            <li>
              Cách 3: Chuyển khoản trước. Quý khách chuyển khoản trước, sau đó
              chúng tôi tiến hành giao hàng theo thỏa thuận hoặc hợp đồng với
              Quý khách.
              <br />
              <span className="font-bold">• Lưu ý:</span> Nội dung chuyển khoản
              ghi rõ họ tên và chuyển cho món hàng nào. Sau khi chuyển khoản,
              chúng tôi sẽ liên hệ xác nhận và tiến hành giao hàng. Nếu sau thời
              gian thỏa thuận mà chúng tôi không giao hàng hoặc không phản hồi
              lại, quý khách có thể gửi khiếu nại trực tiếp về địa chỉ trụ sở và
              yêu cầu bồi thường nếu chứng minh được sự chậm trễ làm ảnh hưởng
              đến kinh doanh của quý khách.
            </li>
          </ul>
          <p className="text-sm mt-4">
            Đối với khách hàng có nhu cầu mua số lượng lớn để kinh doanh hoặc
            buôn sỉ vui lòng liên hệ trực tiếp với chúng tôi để có chính sách
            giá cả hợp lý. Và việc thanh toán sẽ được thực hiện theo hợp đồng.
            Chúng tôi cam kết kinh doanh minh bạch, hợp pháp, bán hàng chất
            lượng, có nguồn gốc.
          </p>
        </div>

        {/* Chính sách xử lý khiếu nại */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            2. Chính sách xử lý khiếu nại
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Tiếp nhận mọi khiếu nại của khách hàng liên quan đến việc sử dụng
              dịch vụ của công ty.
            </li>
            <li>
              Tất cả mọi trường hợp bảo hành, quý khách có thể liên hệ với chúng
              tôi để làm thủ tục bảo hành.
            </li>
            <li>
              Thời gian giải quyết khiếu nại trong thời hạn tối đa là 03 (ba)
              ngày làm việc kể từ khi nhận được khiếu nại của khách hàng. Trong
              trường hợp bất khả kháng, 2 bên sẽ tự thương lượng.
            </li>
          </ul>
        </div>

        {/* Chính sách vận chuyển và giao nhận */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            3. Chính sách vận chuyển và giao nhận
          </h2>
          <p className="text-sm mb-4">
            Thông thường sau khi nhận được thông tin đặt hàng chúng tôi sẽ xử lý
            đơn hàng trong vòng 24h và phản hồi lại thông tin cho khách hàng về
            việc thanh toán và giao nhận. Thời gian giao hàng thường trong
            khoảng từ 3-5 ngày kể từ ngày chốt đơn hàng hoặc theo thỏa thuận với
            khách khi đặt hàng. Tuy nhiên, cũng có trường hợp việc giao hàng kéo
            dài hơn nhưng chỉ xảy ra trong những tình huống bất khả kháng như
            sau:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              Nhân viên chúng tôi liên lạc với khách hàng qua điện thoại không
              được nên không thể giao hàng.
            </li>
            <li>
              Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.
            </li>
            <li>
              Số lượng đơn hàng tăng đột biến khiến việc xử lý đơn hàng bị chậm.
            </li>
            <li>
              Đối tác cung cấp hàng chậm hơn dự kiến khiến việc giao hàng bị
              chậm lại hoặc đối tác vận chuyển giao hàng bị chậm.
            </li>
          </ul>
          <p className="text-sm mt-4">
            Về phí vận chuyển, chúng tôi sử dụng dịch vụ vận chuyển ngoài nên
            cước phí vận chuyển sẽ được tính theo phí của các đơn vị vận chuyển
            tùy vào vị trí và khối lượng của đơn hàng. Khi liên hệ lại xác nhận
            đơn hàng với khách sẽ báo mức phí cụ thể cho khách hàng.
          </p>
          <p className="text-sm mt-4">
            Riêng khách tỉnh có nhu cầu mua số lượng lớn hoặc khách buôn sỉ nếu
            có nhu cầu mua sản phẩm, chúng tôi sẽ nhờ dịch vụ giao nhận của các
            công ty vận chuyển và phí sẽ được tính theo phí của các đơn vị cung
            cấp dịch vụ vận chuyển hoặc theo thỏa thuận hợp đồng giữa 2 bên.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
