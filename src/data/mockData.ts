export interface Product {
  id: string;
  name: string;
  origin: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  isLiked: boolean;
  badge?: string;
  isNew?: boolean;
  sold?: number;
  stockStatus?: string;
  brand?: string;
  weight?: string;
  condition?: string;
  commitment?: string;
  description: { title: string; content: string }[];
  images?: string[];
  flashSale?: boolean;
  categories?: string[]; // Updated to allow multiple categories
  type?: string;
  soldQuantity?: number; // Added for sold quantity
  totalQuantity?: number; // Added for total quantity
}

export const newProducts: Product[] = [
  {
    id: "1",
    name: "Cá Hồi Xông Khói Vị Truyền Thống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 269000,
    originalPrice: 320000,
    discount: 16,
    image:
      "https://product.hstatic.net/1000030244/product/ca-hoi-xong-khoi-truyen-thong_01bc221aeb3c4d1a974f512a61965664_large.jpg",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "200g/hộp",
    condition: "Bảo quản lạnh",
    commitment: "Đảm bảo VSATTP, sản phẩm tươi ngon",
    flashSale: true,
    badge: "HOT",
    categories: ["salmon", "imported-seafood"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Cá hồi xông khói vị truyền thống là sản phẩm cao cấp được chế biến từ cá hồi nuôi tại vùng nước sạch của Việt Nam, giàu protein, omega-3 và vitamin D, hỗ trợ sức khỏe tim mạch và phát triển trí não.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Bạn có thể đặt hàng trực tuyến qua website hoặc hotline, với giao hàng tận nơi trong vòng 24 giờ tại các thành phố lớn. Sản phẩm được đóng gói lạnh để giữ độ tươi, khuyến khích bảo quản trong tủ đông ở -18°C để sử dụng lâu dài. Kiểm tra kỹ bao bì trước khi nhận hàng để đảm bảo chất lượng.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Rất đơn giản, chỉ cần mở hộp và dùng trực tiếp cùng bánh mì hoặc salad. Bạn cũng có thể nướng nhẹ ở 180°C trong 5-7 phút để tăng hương vị, hoặc kết hợp với sốt mật ong để tạo món độc đáo. Tránh chiên quá lâu để giữ dinh dưỡng.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Khách hàng đánh giá cao sản phẩm nhờ hương vị đậm đà, chất lượng ổn định, đạt điểm trung bình 4.8/5 từ hơn 200 lượt đánh giá. Nhiều người dùng cho biết thích hợp làm quà biếu hoặc món ăn trong các bữa tiệc gia đình.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Omega-3 trong cá hồi giúp giảm cholesterol, tăng cường thị lực và hỗ trợ hệ miễn dịch, đặc biệt tốt cho trẻ em và người lớn tuổi. Sản phẩm không chứa gluten, phù hợp với chế độ ăn kiêng lành mạnh.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Để giữ hương vị tốt nhất, hãy rã đông từ từ trong ngăn mát trước khi dùng. Kết hợp với rau xanh hoặc phô mai để tăng trải nghiệm ẩm thực, và bảo quản phần thừa trong hộp kín ngay sau khi mở.",
      },
    ],
    images: [
      "https://product.hstatic.net/1000030244/product/ca-hoi-xong-khoi-truyen-thong_01bc221aeb3c4d1a974f512a61965664_large.jpg",
      "https://nguyenhafood.vn/uploads/2019/07/24/e65114fd10dabe921bdf468a3759e049.jpg",
      "https://media.dolenglish.vn/PUBLIC/MEDIA/abb9c861-3c52-4c20-b394-31c405d754f5.jpg",
      "https://doiduavang.vn/wp-content/uploads/2021/06/gia-tri-dinh-duong-ca-hoi-xong-khoi.jpg",
    ],
  },
  {
    id: "2",
    name: "Cá Hồi Cắt Khoanh",
    origin: "Xuất xứ: Chile",
    currentPrice: 195000,
    originalPrice: 230000,
    discount: 15,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/18260798-8074faf06dd88754836b3bfbee57b319-removebg-preview-1-1-1-8abd32aded3d4670b2f482f01f894216-grande.jpg?v=1739863613467",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Chile",
    weight: "500g/khoanh",
    condition: "Giao tươi sống",
    commitment: "Cam kết chất lượng, nhập khẩu chính ngạch",
    flashSale: true,
    badge: "SALE",
    categories: ["salmon", "imported-seafood", "frozen-seafood"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Cá hồi cắt khoanh từ Chile được đánh bắt từ vùng biển lạnh giàu dưỡng chất, mang lại thịt chắc, giàu omega-3 và protein, hỗ trợ sức khỏe tim mạch và da dẻ. Sản phẩm không sử dụng chất bảo quản, giữ nguyên độ tươi tự nhiên, phù hợp cho các món ăn cao cấp.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng qua ứng dụng hoặc website với giao hàng trong 48 giờ, đảm bảo lạnh suốt hành trình. Bảo quản ở nhiệt độ 0-4°C nếu dùng trong 2 ngày, hoặc tủ đông để lưu trữ lâu hơn. Kiểm tra ngày sản xuất trên bao bì khi nhận.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Có thể hấp cách thủy trong 10 phút với muối và gừng, nướng ở 200°C với sốt teriyaki, hoặc làm sashimi với nước tương và wasabi. Tránh nấu quá chín để giữ độ mềm và dinh dưỡng.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Được 4.7/5 từ 150 lượt đánh giá, khách hàng khen ngợi độ tươi và vị ngọt tự nhiên. Phù hợp cho bữa tối gia đình hoặc nhà hàng, đặc biệt được ưa chuộng trong mùa lễ hội.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Giàu axit béo omega-3, giúp giảm viêm và cải thiện trí nhớ. Thích hợp cho người ăn kiêng nhờ hàm lượng calo thấp và chất béo lành mạnh.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rã đông trong nước lạnh để giữ kết cấu, kết hợp với rau củ luộc hoặc cơm trắng. Dùng dao sắc để cắt lát mỏng, và tránh để quá lâu ngoài không khí sau khi mở gói.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/18260798-8074faf06dd88754836b3bfbee57b319-removebg-preview-1-1-1-8abd32aded3d4670b2f482f01f894216-grande.jpg?v=1739863613467",
      "https://bizweb.dktcdn.net/100/533/545/products/noi-dung-doan-van-ban-cua-ban-2023-07-13t101148.jpg?v=1739863613467",
      "https://bizweb.dktcdn.net/100/533/545/products/0798-8074faf06dd88754836b3bfbee57b319-removebg-preview-1-1-9-1-baaa04a8b4b740559af0c78595643f42-grande.jpg?v=1739863613467",
      "https://bizweb.dktcdn.net/100/533/545/products/18260798-8074faf06dd88754836b3bfbee57b319-removebg-preview-1-1-4-95d610cdad8a4380ad94f7ab87c889da-grande.jpg?v=1739863613467",
    ],
  },
  {
    id: "3",
    name: "Cá Hồi Nguyên Con Tươi",
    origin: "Xuất xứ: Nauy",
    currentPrice: 590000,
    originalPrice: 700000,
    discount: 16,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/02-3-dbfb52e579a04d02b68d896a89d62240-1024x1024.jpg?v=1739863300123",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Nauy",
    weight: "1-2kg/con",
    condition: "Giao sống",
    commitment: "Sản phẩm đạt chuẩn xuất khẩu",
    flashSale: true,
    badge: "LIMITED",
    categories: ["salmon", "fresh-live"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Cá hồi nguyên con từ Nauy được nuôi trong môi trường nước sạch, cung cấp omega-3 dồi dào, vitamin D và khoáng chất, tốt cho xương và hệ miễn dịch. Sản phẩm tươi sống, không hóa chất, lý tưởng cho các bữa tiệc lớn.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng trực tuyến với giao hàng trong 24-48 giờ, đảm bảo lạnh từ Nauy đến tay bạn. Bảo quản ở 0-2°C nếu dùng ngay, hoặc đông lạnh ở -18°C. Kiểm tra kỹ con cá khi nhận để đảm bảo chất lượng.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Nướng nguyên con với muối ớt và chanh trong 25-30 phút ở 180°C, hấp với hành gừng, hoặc làm sốt cà chua. Có thể cắt lát để chiên giòn, nhưng nên giữ lửa vừa.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Đạt 4.9/5 từ 300 lượt đánh giá, khách hàng yêu thích nhờ độ tươi và kích thước lớn. Thường được dùng trong các sự kiện gia đình hoặc nhà hàng cao cấp.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Giúp giảm nguy cơ bệnh tim, tăng cường sức đề kháng, và hỗ trợ phát triển não bộ. Phù hợp cho chế độ ăn low-carb nhờ ít tinh bột.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rửa sạch với nước muối loãng trước khi chế biến, ướp gia vị ít nhất 30 phút để thấm. Kết hợp với rượu vang trắng để tăng trải nghiệm, và bảo quản phần thừa trong hộp kín.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/02-3-dbfb52e579a04d02b68d896a89d62240-1024x1024.jpg?v=1739863300123",
      "https://bizweb.dktcdn.net/100/533/545/products/1-3fbcd29fc38647f7976409fc1a28c9d9-grande.jpg?v=1739863300123",
      "https://bizweb.dktcdn.net/100/533/545/products/319995993-925556472192337-4377416227590152459-n-7-b9ca205019df4c7daef6aadd00413288-grande.jpg?v=1739863300123",
      "https://bizweb.dktcdn.net/100/533/545/products/342024227-533016602119307-370026652074849604-n-22-1-faebd89d62004d809a0a15abd3467fb1-grande.jpg?v=1739863300123",
    ],
  },
  {
    id: "4",
    name: "Cá Hồi Phi Lê Tươi Nguyên Miếng",
    origin: "Xuất xứ: Nauy",
    currentPrice: 1350000,
    originalPrice: 1600000,
    discount: 16,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/01-2-4ee4d028410c4f6b97c5f71ba9930eb9-1024x1024.jpg?v=1739862908633",
    isLiked: false,
    badge: "SALE",
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Nauy",
    weight: "1kg/miếng",
    condition: "Bảo quản lạnh",
    commitment: "Đảm bảo an toàn thực phẩm",
    flashSale: true,
    categories: ["salmon"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Cá hồi phi lê từ Nauy, giảm giá 16%, cung cấp protein cao cấp và omega-3, hỗ trợ sức khỏe tim mạch và làn da. Sản phẩm được cắt tỉa kỹ lưỡng, không da, phù hợp cho các món ăn tinh tế.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng online qua website với giao hàng trong 24 giờ, đóng gói lạnh để giữ độ tươi. Bảo quản ở 0-4°C nếu dùng trong 2 ngày, hoặc đông lạnh để lưu trữ lâu hơn. Kiểm tra ngày sản xuất khi nhận.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Làm sashimi với nước tương và wasabi, nướng với sốt mật ong ở 200°C trong 15 phút, hoặc hấp với hành gừng. Tránh chiên ngập dầu để giữ dinh dưỡng tối đa.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Được 4.6/5 từ 250 lượt đánh giá, khách hàng hài lòng với độ tươi và giá trị sau giảm giá. Phù hợp cho bữa ăn gia đình hoặc món cao cấp.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Giảm nguy cơ đột quỵ, tăng cường thị lực, và hỗ trợ giảm cân nhờ chất béo lành mạnh. Thích hợp cho người ăn kiêng keto.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rã đông trong ngăn mát, cắt lát mỏng bằng dao sắc. Kết hợp với rau bina hoặc mì Ý, và bảo quản phần thừa trong túi zip kín.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/01-2-4ee4d028410c4f6b97c5f71ba9930eb9-1024x1024.jpg?v=1739862908633",
      "https://bizweb.dktcdn.net/100/533/545/products/342024227-533016602119307-370026652074849604-n-15-2522d036c25b457298473f75a4fd0dc4-grande.jpg?v=1739862909167",
      "https://bizweb.dktcdn.net/100/533/545/products/ca-min-6d3e461f57b94254b04d31ef77cfe8b7-grande.jpg?v=1739862909943",
      "https://bizweb.dktcdn.net/100/533/545/products/z2443211151939-17v0fdd4e8326eae18aaa6c50611e0e90-24cf0e08faa0407797a1cabfc7d68f53-grande.jpg?v=1739862910483",
    ],
  },
  {
    id: "5",
    name: "Thân Cá Hồi Phile",
    origin: "Xuất xứ: Nauy",
    currentPrice: 175000,
    originalPrice: 210000,
    discount: 17,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/cahoi-phile-than-1-55994516a344408f8bd6032c17a96fbe-1024x1024.jpg?v=1739862808230",
    isLiked: false,
    badge: "BÁN CHẠY",
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Nauy",
    weight: "300g/thân",
    condition: "Giao lạnh",
    commitment: "Chất lượng cao, đảm bảo tươi",
    flashSale: true,
    categories: ["salmon", "frozen-seafood"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Thân cá hồi phi lê từ Nauy, bán chạy nhất, giàu omega-3 và protein, hỗ trợ sức khỏe tim mạch và não bộ. Sản phẩm được xử lý lạnh ngay sau khi đánh bắt, giữ nguyên vị ngọt tự nhiên.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng qua ứng dụng với giao hàng trong 24 giờ, đóng gói lạnh chuyên nghiệp. Bảo quản ở 0-4°C nếu dùng ngay, hoặc đông lạnh ở -18°C. Kiểm tra bao bì trước khi nhận.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Làm sashimi với tương ớt, nướng với sốt cà chua ở 180°C trong 10 phút, hoặc hấp với sả. Có thể chiên giòn nhưng nên để lửa vừa.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Đạt 4.8/5 từ 200 lượt đánh giá, khách hàng yêu thích nhờ độ tươi và dễ chế biến. Thường dùng trong các món Nhật hoặc bữa ăn hàng ngày.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Giảm viêm khớp, tăng cường hệ miễn dịch, và hỗ trợ giấc ngủ nhờ vitamin D. Phù hợp với chế độ ăn lành mạnh.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rã đông từ từ trong nước lạnh, ướp gia vị trước khi nấu. Kết hợp với cơm hoặc salad, và giữ phần thừa trong hộp kín.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/cahoi-phile-than-1-55994516a344408f8bd6032c17a96fbe-1024x1024.jpg?v=1739862808230",
      "https://bizweb.dktcdn.net/100/533/545/products/2bv3ca96814dfed81b4ce-min-2e952b5c3afa4b3fa1aa2165c0819a91-grande.jpg?v=1739862808230",
      "https://bizweb.dktcdn.net/100/533/545/products/7-5f3eb7afdfb44c51bcefd3ba069448d4-grande.jpg?v=1739862808230",
      "https://bizweb.dktcdn.net/100/533/545/products/ca-hoi-nauy-1-ea451e6b20a645fbbc235e79f088891c-grande.jpg?v=1739862808230",
    ],
  },
  {
    id: "6",
    name: "Tôm Thẻ Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 185000,
    originalPrice: 225000,
    discount: 18,
    image: "https://chihaisan.com/wp-content/uploads/2024/06/tom-the.png",
    isLiked: false,
    badge: "SALE",
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "500g/gói",
    condition: "Giao sống",
    commitment: "Sản phẩm sạch, an toàn",
    flashSale: true,
    categories: ["shrimp", "fresh-live"], // Updated to include multiple categories
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Tôm thẻ sống từ Việt Nam, giảm 18%, giàu protein và khoáng chất như canxi, hỗ trợ xương chắc khỏe. Được nuôi trong môi trường nước sạch, không chất kích thích, đảm bảo an toàn thực phẩm.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng online với giao hàng trong 24 giờ, đóng gói sống để giữ độ tươi. Bảo quản ở 0-2°C nếu dùng trong 1 ngày, hoặc đông lạnh. Kiểm tra tình trạng tôm khi nhận.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Nấu cháo với gạo nếp trong 20 phút, nướng với muối ớt, hoặc luộc với lá chanh. Tránh để tôm quá lâu ngoài không khí để giữ độ tươi.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Được 4.7/5 từ 180 lượt đánh giá, khách hàng yêu thích độ tươi và giá tốt sau giảm giá. Phù hợp cho bữa ăn gia đình.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Tăng cường hệ miễn dịch, hỗ trợ tiêu hóa, và cung cấp năng lượng nhờ hàm lượng i-ốt. Thích hợp cho người lớn tuổi.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rửa tôm với nước muối trước khi nấu, ướp gia vị nhẹ. Kết hợp với rau muống hoặc bún, và bảo quản phần thừa trong túi lạnh.",
      },
    ],
    images: [
      "https://chihaisan.com/wp-content/uploads/2024/06/tom-the.png",
      "https://product.hstatic.net/1000030244/product/tom_the_avatar_42e7cacdeeb64f0d8e00b02901cac1a2_1024x1024.png",
      "https://kingfoodmart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsc_pcm_product%2Fprod%2F2023%2F10%2F26%2F15501-369133.jpg&w=3840&q=75",
      "https://product.hstatic.net/1000030244/product/1_430f38b4d2a9402aad2218d2811ffab0_large.jpg",
    ],
  },
  {
    id: "7",
    name: "Tôm Sú Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 295000,
    originalPrice: 355000,
    discount: 17,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyQVWxYWzsdzZoaJ6bVd9G9Twp7pWfEl71w&s",
    isLiked: false,
    badge: "SALE",
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "700g/gói",
    condition: "Giao sống",
    commitment: "Đảm bảo chất lượng",
    flashSale: false,
    categories: ["shrimp"], // Updated to include multiple categories
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Tôm sú sống từ Việt Nam, giảm 17%, giàu protein và kẽm, hỗ trợ sức khỏe nam giới và hệ miễn dịch. Nuôi trong ao sạch, không hóa chất, đảm bảo độ tươi tự nhiên.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng qua hotline với giao hàng trong 24 giờ, đóng gói sống cẩn thận. Bảo quản ở 0-2°C nếu dùng ngay, hoặc đông lạnh. Kiểm tra kỹ khi nhận hàng.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Nấu cháo với hành lá trong 15 phút, nướng với bơ tỏi ở 200°C, hoặc hấp với sả. Tránh nấu quá chín để giữ vị ngọt.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Đạt 4.6/5 từ 220 lượt đánh giá, khách hàng khen ngợi hương vị đậm đà. Thích hợp cho món ăn gia đình hoặc tiệc.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Tăng cường sinh lực, hỗ trợ hệ thần kinh, và cung cấp năng lượng. Phù hợp cho chế độ ăn giàu đạm.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rửa tôm với nước lạnh, ướp gia vị trong 20 phút. Kết hợp với mắm nêm hoặc rau sống, và giữ phần thừa trong hộp kín.",
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyQVWxYWzsdzZoaJ6bVd9G9Twp7pWfEl71w&s",
      "https://product.hstatic.net/1000030244/product/img_2975_ea235127334f4ce183761eb726231564.jpeg",
      "https://crabseafood.vn/wp-content/uploads/2020/12/47-8.png",
      "https://quanchitoi.vn/watermark/product/600x600x1/upload/product/tom-su-an-song-5743.png",
    ],
  },
  {
    id: "8",
    name: "Tôm Càng Xanh Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 450000,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/tom-cang-xanh-2de015440edc4ddea5460b3e7883041f-1024x1024.jpg?v=1739800159243",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "1kg/gói",
    condition: "Giao sống",
    commitment: "Sản phẩm tươi sống",
    flashSale: false,
    categories: ["shrimp"], // Updated to include multiple categories
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Tôm càng xanh sống từ Việt Nam, thịt chắc, giàu canxi và protein, hỗ trợ xương và cơ bắp. Được đánh bắt từ vùng nước sạch, không chất bảo quản, phù hợp cho món ăn truyền thống.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng online với giao hàng trong 24 giờ, đóng gói sống để giữ độ tươi. Bảo quản ở 0-2°C nếu dùng trong 1 ngày, hoặc đông lạnh. Kiểm tra khi nhận hàng.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Nướng với muối ớt ở 180°C trong 10 phút, luộc với lá chanh, hoặc xào với tỏi. Tránh để tôm chết trước khi nấu để giữ chất.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Được 4.7/5 từ 190 lượt đánh giá, khách hàng khen ngợi độ tươi và kích thước lớn. Thích hợp cho bữa tiệc gia đình.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Tăng cường xương, hỗ trợ tiêu hóa, và cung cấp năng lượng. Phù hợp cho người cần bổ sung canxi.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rửa tôm với nước muối loãng, ướp gia vị nhẹ. Kết hợp với bún hoặc rau luộc, và bảo quản phần thừa trong túi lạnh.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/tom-cang-xanh-2de015440edc4ddea5460b3e7883041f-1024x1024.jpg?v=1739800159243",
      "https://bizweb.dktcdn.net/100/533/545/products/tom-cang-xanh-2de015440edc4ddea5460b3e7883041f-1024x1024.jpg?v=1739800159243",
      "https://bizweb.dktcdn.net/100/533/545/products/z3091440817595-480c13063b6626426c1483155f8f3841-7-1-3f2400ed06b7437896c044520b66283c-grande.jpg?v=1739800159243",
      "https://bizweb.dktcdn.net/100/533/545/products/z3091440817595-480c13063b6626426c1483155f8f3841-10-1-fb3e6b5366524d98be6598caa5307a22-grande.jpg?v=1739800159243",
    ],
  },
  {
    id: "9",
    name: "Tôm Hùm Baby Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 680000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73VZZogtHIJIZ4_g-Gb2ZjwA0MnHxf-M_Tg&s",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "500g/gói",
    condition: "Giao sống",
    commitment: "Cam kết chất lượng cao",
    flashSale: false,
    categories: ["shrimp"], // Updated to include multiple categories
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Tôm hùm baby sống từ Việt Nam, giàu protein và kẽm, hỗ trợ sức khỏe tổng thể và hệ miễn dịch. Được nuôi trong môi trường sạch, đảm bảo không chất kích thích, phù hợp cho món cao cấp.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng qua website với giao hàng trong 24 giờ, đóng gói sống cẩn thận. Bảo quản ở 0-2°C nếu dùng ngay, hoặc đông lạnh. Kiểm tra tình trạng tôm khi nhận.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Hấp với muối và gừng trong 8-10 phút, nướng với bơ tỏi ở 200°C, hoặc làm sốt kem. Tránh nấu quá lâu để giữ độ ngọt.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Đạt 4.9/5 từ 210 lượt đánh giá, khách hàng yêu thích nhờ độ tươi và hương vị đặc trưng. Thích hợp cho bữa tiệc sang trọng.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Tăng cường sinh lực, hỗ trợ da đẹp, và cung cấp năng lượng. Phù hợp cho chế độ ăn giàu đạm.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rã đông trong nước lạnh, ướp gia vị trong 15 phút. Kết hợp với rượu vang đỏ hoặc salad, và giữ phần thừa trong hộp kín.",
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73VZZogtHIJIZ4_g-Gb2ZjwA0MnHxf-M_Tg&s",
      "https://limoki.com/wp-content/uploads/2020/03/5983633092b96ae733a8.jpg",
      "https://limoki.com/wp-content/uploads/2020/03/T%C3%B4m-h%C3%B9m-baby-h%E1%BA%A5p-bia-h%E1%BA%A5p-s%E1%BA%A3.jpg",
      "https://dichvuxunau.vn/wp-content/uploads/2025/03/tom-hum-baby.jpg",
    ],
  },
  {
    id: "10",
    name: "Cá Chẽm Tươi Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 320000,
    image:
      "https://cdn.tgdd.vn/Files/2020/10/02/1295353/ca-chem-la-ca-gi-co-bao-nhieu-loai-ca-chem-202010021135030391.jpg",
    isLiked: false,
    isNew: true,
    stockStatus: "Còn hàng",
    brand: "Việt Nam",
    weight: "800g/con",
    condition: "Giao sống",
    commitment: "Sản phẩm đạt chuẩn",
    flashSale: false,
    categories: ["fresh-live"], // Updated to include multiple categories
    type: "fish", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Cá chẽm tươi sống từ Việt Nam, thịt trắng, giàu protein và omega-3, hỗ trợ sức khỏe tim mạch và hệ thần kinh. Được đánh bắt từ vùng nước sạch, không chất bảo quản, phù hợp cho món ăn gia đình.",
      },
      {
        title: "Hướng dẫn mua hàng",
        content:
          "Đặt hàng trực tuyến với giao hàng trong 24 giờ, đóng gói sống để giữ độ tươi. Bảo quản ở 0-2°C nếu dùng ngay, hoặc đông lạnh. Kiểm tra khi nhận hàng.",
      },
      {
        title: "Hướng dẫn chế biến",
        content:
          "Nướng với muối ớt ở 180°C trong 15 phút, hấp với sả gừng, hoặc chiên giòn. Tránh để cá chết trước khi nấu để giữ chất.",
      },
      {
        title: "Đánh giá sản phẩm",
        content:
          "Được 4.6/5 từ 170 lượt đánh giá, khách hàng khen ngợi độ tươi và giá trị. Thích hợp cho bữa ăn hàng ngày.",
      },
      {
        title: "Lợi ích sức khỏe",
        content:
          "Tăng cường thị lực, hỗ trợ tiêu hóa, và cung cấp năng lượng. Phù hợp cho người cần bổ sung dinh dưỡng.",
      },
      {
        title: "Mẹo sử dụng",
        content:
          "Rửa cá với nước muối loãng, ướp gia vị trong 20 phút. Kết hợp với rau cải hoặc cơm trắng, và bảo quản phần thừa trong túi lạnh.",
      },
    ],
    images: [
      "https://cdn.tgdd.vn/Files/2020/10/02/1295353/ca-chem-la-ca-gi-co-bao-nhieu-loai-ca-chem-202010021135030391.jpg",
      "https://vuacachem.com/watermark/product/540x540x2/upload/product/ca-chem-tuoi-song-5309.jpg",
      "https://cagiongtruongphat.com/FileStorage/Product/Image/ca-chem-tuoi-song.jpg",
      "https://product.hstatic.net/1000238872/product/dscf1145_9251618e19ad40b3b4293ae26f1f2039.jpg",
    ],
  },
  {
    id: "11",
    name: "Hàu sữa Pháp",
    origin: "Xuất xứ: Pháp",
    currentPrice: 250000,
    originalPrice: 300000,
    discount: 17,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEFD5_lIAsDhBmZcY-35Pget5h49cWqxQwg&s",
    isLiked: false,
    categories: ["oyster", "frozen-seafood"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Hàu sữa Pháp tươi ngon, giàu dinh dưỡng, hỗ trợ sức khỏe.",
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEFD5_lIAsDhBmZcY-35Pget5h49cWqxQwg&s",
    ],
  },
  {
    id: "12",
    name: "Ngao trắng New Zealand",
    origin: "Xuất xứ: New Zealand",
    currentPrice: 180000,
    originalPrice: 220000,
    discount: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW6Ir5CquvxZ8JzoUtYHvUTwEDSv3Pz-ncA&s",
    isLiked: false,
    categories: ["clam-scallop-snail", "frozen-seafood"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Ngao trắng nhập khẩu, thịt ngọt, giàu protein.",
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW6Ir5CquvxZ8JzoUtYHvUTwEDSv3Pz-ncA&s",
    ],
  },
  {
    id: "13",
    name: "Cua Hoàng Đế Alaska",
    origin: "Xuất xứ: Alaska",
    currentPrice: 1200000,
    originalPrice: 1500000,
    discount: 20,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/227/495/products/cua-hoa-ng-de-cua-huy-nh-dees-jpeg-89e04372-f9f2-42d5-a052-ac90819de250.jpg?v=1717211154640",
    isLiked: false,
    categories: ["crab-lobster"],
    type: "crab", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Cua Hoàng Đế Alaska, thịt chắc, giàu dinh dưỡng.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/thumb/large/100/227/495/products/cua-hoa-ng-de-cua-huy-nh-dees-jpeg-89e04372-f9f2-42d5-a052-ac90819de250.jpg?v=1717211154640",
      "https://vn1.vdrive.vn/chohaisanvandon.net/2021/12/bZbxyfVu-Cho-Hai-San-Van-Don-Thuc-Don-24-Cua-Hoang-De-King-Crab.jpg",
      "https://giangghe.com/upload/filemanager/images/king%20crab/cua-hoang-de-hap.png",
    ],
  },
  {
    id: "14",
    name: "Tôm Sú Tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 350000,
    originalPrice: 400000,
    discount: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyQVWxYWzsdzZoaJ6bVd9G9Twp7pWfEl71w&s",

    isLiked: false,
    categories: ["shrimp"],
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Tôm sú tươi sống, thịt ngọt, giàu canxi.",
      },
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyQVWxYWzsdzZoaJ6bVd9G9Twp7pWfEl71w&s",
      "https://product.hstatic.net/1000030244/product/img_2975_ea235127334f4ce183761eb726231564.jpeg",
      "https://crabseafood.vn/wp-content/uploads/2020/12/47-8.png",
      "https://quanchitoi.vn/watermark/product/600x600x1/upload/product/tom-su-an-song-5743.png",
    ],
  },
  {
    id: "15",
    name: "Mực ống tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 220000,
    originalPrice: 260000,
    discount: 15,
    image:
      "https://cdn.tgdd.vn/Files/2019/08/29/1193017/cach-nhan-biet-va-chon-muc-ong-tuoi-che-bien-mon-ngon-cho-gia-dinh-201908292012247702.jpg",
    isLiked: false,
    categories: ["squid"],
    type: "squid", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Mực ống tươi, thịt giòn, dễ chế biến.",
      },
    ],
    images: [
      "https://cdn.tgdd.vn/Files/2019/08/29/1193017/cach-nhan-biet-va-chon-muc-ong-tuoi-che-bien-mon-ngon-cho-gia-dinh-201908292012247702.jpg",
      "https://tripmap.vn/wp-content/uploads/2022/06/mucong.jpeg",
      "https://www.locbien.com/images/muc-bien/muc-ong/muc-ong-01.webp",
    ],
  },
  {
    id: "16",
    name: "Sốt Teriyaki Nhật Bản",
    origin: "Xuất xứ: Nhật Bản",
    currentPrice: 120000,
    originalPrice: 150000,
    discount: 20,
    image:
      "https://product.hstatic.net/1000301274/product/sot_teriyaki_250g_25e6e3701c5943c2985afdf25786e2d5.png",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Sốt Teriyaki Nhật Bản, hương vị đậm đà.",
      },
    ],
    images: [
      "https://product.hstatic.net/1000301274/product/sot_teriyaki_250g_25e6e3701c5943c2985afdf25786e2d5.png",
      "https://bizweb.dktcdn.net/100/227/495/products/nuoc-sot-teriyaki-nhat-ban-chai-290g.jpg?v=1651043290607",
      "https://cdn.tgdd.vn/2020/09/CookProductThumb/32-620x620.jpg",
    ],
  },
  {
    id: "17",
    name: "Hàu sữa Canada",
    origin: "Xuất xứ: Canada",
    currentPrice: 280000,
    originalPrice: 320000,
    discount: 12,
    image:
      "https://product.hstatic.net/1000182631/product/resize_anh-5280-5__1__0a9eddc8203043f596a5b1e795780e24_master.png",
    isLiked: false,
    categories: ["oyster"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Hàu sữa Canada tươi ngon, giàu dinh dưỡng, hỗ trợ sức khỏe.",
      },
    ],
    images: [
      "https://product.hstatic.net/1000182631/product/resize_anh-5280-5__1__0a9eddc8203043f596a5b1e795780e24_master.png",
      "https://file.hstatic.net/1000182631/file/eaac65a86f54e57b96455ca92d44c0c81d9f9005-_-oysters-on-the-half-shell-2_4a9429a54808482aa96d1a26664f683e.jpg",
      "https://haisanhoanglong.com/wp-content/uploads/2019/11/d416da7aa0c57f9b26d4.jpg",
    ],
  },
  {
    id: "18",
    name: "Ngao vàng Úc",
    origin: "Xuất xứ: Úc",
    currentPrice: 190000,
    originalPrice: 240000,
    discount: 21,
    image: "https://daihaisan.com/wp-content/uploads/2019/12/ngao-vang-my.jpg",
    isLiked: false,
    categories: ["clam-scallop-snail"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Ngao vàng Úc, thịt ngọt, giàu protein và khoáng chất.",
      },
    ],
    images: [
      "https://daihaisan.com/wp-content/uploads/2019/12/ngao-vang-my.jpg",
      "https://daihaisan.com/wp-content/uploads/2019/12/ngao-vang-my-1.jpg",
    ],
  },
  {
    id: "19",
    name: "Cua Thịt Cà Mau Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 450000,
    originalPrice: 500000,
    discount: 10,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/hinh-website-bc3801f55b174f9d8fda1e98295175d6-grande.jpg?v=1739780686740",
    isLiked: false,
    categories: ["crab-lobster"],
    type: "crab", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Cua Thịt Cà Mau, thịt chắc, giàu dinh dưỡng.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/hinh-website-bc3801f55b174f9d8fda1e98295175d6-grande.jpg?v=1739780686740",
      "https://bizweb.dktcdn.net/100/533/545/products/hinh-website-c96eda2b34eb4ef7bdba499efa571ac9-grande.jpg?v=1739780686740",
      "https://bizweb.dktcdn.net/100/533/545/products/z6157078499028-37f821ca09b26bb08ca7c05f9a547eb2-3fcedf9cc5194621ab46d2e0833860d6-grande.jpg?v=1739780686740",
      "https://bizweb.dktcdn.net/100/533/545/products/428297707-400531012734284-7866230400384465760-n-6edada005ed94b5d84d0893612ffb77f-grande.jpg?v=1739780686740",
    ],
  },
  {
    id: "20",
    name: "Tôm hùm Alaska",
    origin: "Xuất xứ: Alaska",
    currentPrice: 1500000,
    originalPrice: 1800000,
    discount: 17,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/artboard-1-copy-9-a69582ef076f444baedee7a4fd429e35-1024x1024.jpg?v=1739798963867",
    isLiked: false,
    categories: ["shrimp"],
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Tôm hùm Alaska, thịt ngọt, giàu canxi và protein.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/artboard-1-copy-9-a69582ef076f444baedee7a4fd429e35-1024x1024.jpg?v=1739798963867",
      "https://bizweb.dktcdn.net/100/533/545/products/untitled-1-380b907757de4e129b6604b0451c1f2a-grande.jpg?v=1739798963867",
      "https://bizweb.dktcdn.net/100/533/545/products/img-5144-1-1-d5aa60b5f47c4d56aaa18cd6d485cf9f-grande.jpg?v=1739798963867",
      "https://bizweb.dktcdn.net/100/533/545/products/tom-hum-alaska-lon-4-9-261b4594ec7640198edc099e45386d25-grande.jpg?v=1739798963867",
    ],
  },
  {
    id: "21",
    name: "Mực lá tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 250000,
    originalPrice: 300000,
    discount: 17,
    image:
      "https://thucphamsachgiagoc.com/wp-content/uploads/2018/12/muc-la-600x450.jpg",
    isLiked: false,
    categories: ["squid"],
    type: "squid", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Mực lá tươi, thịt giòn, dễ chế biến.",
      },
    ],
    images: [
      "https://thucphamsachgiagoc.com/wp-content/uploads/2018/12/muc-la-600x450.jpg",
      "https://dacsannanggio.vn/image/cache/catalog/Hai-san/muc-la-500x500.JPG",
      "https://chodaumoibinhdien.com.vn/upload/hinhanh/thumb/muc-la-cau-tuoi-ngon-gia-tot-400-600-grcon8816.png",
      "https://haisantuoisachphanthiet.com/upload/images/muc-la-tuoi-1697939743.jpg",
    ],
  },
  {
    id: "22",
    name: "Sốt BBQ Mỹ",
    origin: "Xuất xứ: Mỹ",
    currentPrice: 120000,
    originalPrice: 150000,
    discount: 20,
    image:
      "https://product.hstatic.net/200000356095/product/sot-uop-bbq-mrcormick-vi-khoi-1_fccbf3fe76dc4dcc83ff6b736bfdbeb0.jpg",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Sốt BBQ Mỹ, hương vị đậm đà, phù hợp cho các món nướng.",
      },
    ],
    images: [
      "https://product.hstatic.net/200000356095/product/sot-uop-bbq-mrcormick-vi-khoi-1_fccbf3fe76dc4dcc83ff6b736bfdbeb0.jpg",
      "https://down-vn.img.susercontent.com/file/8f16ff5ad78097e552391327df7256ec",
      "https://salt.tikicdn.com/cache/w300/ts/product/8d/7b/6d/67aa3a7072f329281a02ce2a3be24e99.jpg",
      "https://nguyenhafood.vn/uploads/2023/03/14/41475177e7acc67cd24a570282b3fd12.png",
    ],
  },
  {
    id: "23",
    name: "Nước Mắm Tĩn Nhãn Đỏ",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 80000,
    originalPrice: 100000,
    discount: 20,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/mam-tin-39213aea54d64c55b6ca9011995a269e-1024x1024.jpg?v=1739865585197",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Nước mắm Tĩn - nước mắm rin nguyên chất của ngày xưa trong bình gốm.Lịch sử nước mắm đã có từ 300 năm tại làng chài Phan Thiết xưa với ông tổ nghề Trần Gia Hòa, người được vua Nguyễn ban tước quan bát phẩm do có công khai sanh ra nghề nước mắm Việt Nam. Những tĩn gốm nước mắm đậy kín bằng vôi, dán nhãn vuông, được chở bằng ghe bầu từ sông Cà Ty đi khắp lục tỉnh Nam Kỳ ra tới miền Trung, miền Bắc và chiếm thị phần lớn nhất Việt Nam thời bấy giờ. Người xưa quen gọi loại nước mắm rin nguyên chất này là nước mắm Tĩn.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/mam-tin-39213aea54d64c55b6ca9011995a269e-1024x1024.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/products/dc49121566-275940163072282-3730012516269424640-o-d4f009f253a8466fb98cc4ccfee0c3e3-grande.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/products/dcbao-tang-nha-thung-7a9dbdb94d744d73b6aa88004e693f55-grande.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/products/ueb74569137-412578146320522-4619918637510164480-n-727c87457993480d953a26edaab26da5-grande.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/products/web74325204-472645803349437-2665690577751769088-n-e35a8ee885884b3f86abd6e637a3d977-grande.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/products/74911769-585322898943396-5977601943449632768-n-9d934e55a6234284ad5320aea689d83b-grande.jpg?v=1739865585197",
      "https://bizweb.dktcdn.net/100/533/545/files/web49067585-275938319739133-6630180919376347136-o-a73c42bcb5e54cb99f1e394f59e0694b-grande.jpg?v=1739865426577",
    ],
  },
  {
    id: "24",
    name: "Nước Xốt Mè Rang (Chai)",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 110000,
    originalPrice: 140000,
    discount: 21,
    image:
      "https://bizweb.dktcdn.net/100/533/545/products/nuoc-xot-me-rang-01-4ee9462dcde84c48abb532b71944cd10-1024x1024.jpg?v=1739865291413",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content:
          "Nước xốt mè rang có hương vị đặc trưng đến từ sự kết hợp hài hòa giữa vị ngon bùi của mè rang, vị đậm đà của nước tương và vị thanh chua của giấm.",
      },
    ],
    images: [
      "https://bizweb.dktcdn.net/100/533/545/products/nuoc-xot-me-rang-01-4ee9462dcde84c48abb532b71944cd10-1024x1024.jpg?v=1739865291413",
      "https://bizweb.dktcdn.net/100/533/545/products/nuoc-xot-me-rang-2-c2efcd0fb60d4ac389cce1a5ba6779b7-grande.jpg?v=1739865291413",
      "https://bizweb.dktcdn.net/100/533/545/products/nuoc-xot-me-rang-4-c8bf871f227b4e7e8a6e39ea5c869410-grande.jpg?v=1739865291413",
      "https://bizweb.dktcdn.net/100/533/545/products/xong-me-rang-3-a998d277c5e34c91909312d6b21be69e-grande.jpg?v=1739865291413",
    ],
  },
];
