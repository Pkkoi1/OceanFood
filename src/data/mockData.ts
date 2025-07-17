export interface Product {
  id: number;
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
}

export const newProducts: Product[] = [
  {
    id: 1,
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
    id: 2,
    name: "Cá Hồi Cắt Khoanh",
    origin: "Xuất xứ: Chile",
    currentPrice: 195000,
    originalPrice: 230000,
    discount: 15,
    image: "https://picsum.photos/300/200?random=2",
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
      "https://picsum.photos/300/200?random=2",
      "https://picsum.photos/300/200?random=14",
      "https://picsum.photos/300/200?random=15",
      "https://picsum.photos/300/200?random=16",
    ],
  },
  {
    id: 3,
    name: "Cá Hồi Nguyên Con Tươi",
    origin: "Xuất xứ: Nauy",
    currentPrice: 590000,
    originalPrice: 700000,
    discount: 16,
    image: "https://picsum.photos/300/200?random=3",
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
      "https://picsum.photos/300/200?random=3",
      "https://picsum.photos/300/200?random=17",
      "https://picsum.photos/300/200?random=18",
      "https://picsum.photos/300/200?random=19",
    ],
  },
  {
    id: 4,
    name: "Cá Hồi Phi Lê Tươi Nguyên Miếng",
    origin: "Xuất xứ: Nauy",
    currentPrice: 1350000,
    originalPrice: 1600000,
    discount: 16,
    image: "https://picsum.photos/300/200?random=4",
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
      "https://picsum.photos/300/200?random=4",
      "https://picsum.photos/300/200?random=20",
      "https://picsum.photos/300/200?random=21",
      "https://picsum.photos/300/200?random=22",
    ],
  },
  {
    id: 5,
    name: "Thân Cá Hồi Phile",
    origin: "Xuất xứ: Nauy",
    currentPrice: 175000,
    originalPrice: 210000,
    discount: 17,
    image: "https://picsum.photos/300/200?random=5",
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
      "https://picsum.photos/300/200?random=5",
      "https://picsum.photos/300/200?random=23",
      "https://picsum.photos/300/200?random=24",
      "https://picsum.photos/300/200?random=25",
    ],
  },
  {
    id: 6,
    name: "Tôm Thẻ Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 185000,
    originalPrice: 225000,
    discount: 18,
    image: "https://picsum.photos/300/200?random=6",
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
      "https://picsum.photos/300/200?random=6",
      "https://picsum.photos/300/200?random=26",
      "https://picsum.photos/300/200?random=27",
      "https://picsum.photos/300/200?random=28",
    ],
  },
  {
    id: 7,
    name: "Tôm Sú Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 295000,
    originalPrice: 355000,
    discount: 17,
    image: "https://picsum.photos/300/200?random=7",
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
      "https://picsum.photos/300/200?random=7",
      "https://picsum.photos/300/200?random=29",
      "https://picsum.photos/300/200?random=30",
      "https://picsum.photos/300/200?random=31",
    ],
  },
  {
    id: 8,
    name: "Tôm Càng Xanh Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 450000,
    image: "https://picsum.photos/300/200?random=8",
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
      "https://picsum.photos/300/200?random=8",
      "https://picsum.photos/300/200?random=32",
      "https://picsum.photos/300/200?random=33",
      "https://picsum.photos/300/200?random=34",
    ],
  },
  {
    id: 9,
    name: "Tôm Hùm Baby Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 680000,
    image: "https://picsum.photos/300/200?random=9",
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
      "https://picsum.photos/300/200?random=9",
      "https://picsum.photos/300/200?random=35",
      "https://picsum.photos/300/200?random=36",
      "https://picsum.photos/300/200?random=37",
    ],
  },
  {
    id: 10,
    name: "Cá Chẽm Tươi Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 320000,
    image: "https://picsum.photos/300/200?random=10",
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
      "https://picsum.photos/300/200?random=10",
      "https://picsum.photos/300/200?random=38",
      "https://picsum.photos/300/200?random=39",
      "https://picsum.photos/300/200?random=40",
    ],
  },
  {
    id: 11,
    name: "Hàu sữa Pháp",
    origin: "Xuất xứ: Pháp",
    currentPrice: 250000,
    originalPrice: 300000,
    discount: 17,
    image: "https://picsum.photos/300/200?random=41",
    isLiked: false,
    categories: ["oyster", "frozen-seafood"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Hàu sữa Pháp tươi ngon, giàu dinh dưỡng, hỗ trợ sức khỏe.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=41"],
  },
  {
    id: 12,
    name: "Ngao trắng New Zealand",
    origin: "Xuất xứ: New Zealand",
    currentPrice: 180000,
    originalPrice: 220000,
    discount: 18,
    image: "https://picsum.photos/300/200?random=42",
    isLiked: false,
    categories: ["clam-scallop-snail", "frozen-seafood"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Ngao trắng nhập khẩu, thịt ngọt, giàu protein.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=42"],
  },
  {
    id: 13,
    name: "Cua Hoàng Đế Alaska",
    origin: "Xuất xứ: Alaska",
    currentPrice: 1200000,
    originalPrice: 1500000,
    discount: 20,
    image: "https://picsum.photos/300/200?random=43",
    isLiked: false,
    categories: ["crab-lobster"],
    type: "crab", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Cua Hoàng Đế Alaska, thịt chắc, giàu dinh dưỡng.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=43"],
  },
  {
    id: 14,
    name: "Tôm Sú Tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 350000,
    originalPrice: 400000,
    discount: 12,
    image: "https://picsum.photos/300/200?random=44",
    isLiked: false,
    categories: ["shrimp"],
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Tôm sú tươi sống, thịt ngọt, giàu canxi.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=44"],
  },
  {
    id: 15,
    name: "Mực ống tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 220000,
    originalPrice: 260000,
    discount: 15,
    image: "https://picsum.photos/300/200?random=45",
    isLiked: false,
    categories: ["squid"],
    type: "squid", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Mực ống tươi, thịt giòn, dễ chế biến.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=45"],
  },
  {
    id: 16,
    name: "Sốt Teriyaki Nhật Bản",
    origin: "Xuất xứ: Nhật Bản",
    currentPrice: 120000,
    originalPrice: 150000,
    discount: 20,
    image: "https://picsum.photos/300/200?random=46",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Sốt Teriyaki Nhật Bản, hương vị đậm đà.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=46"],
  },
  {
    id: 17,
    name: "Hàu sữa Canada",
    origin: "Xuất xứ: Canada",
    currentPrice: 280000,
    originalPrice: 320000,
    discount: 12,
    image: "https://picsum.photos/300/200?random=47",
    isLiked: false,
    categories: ["oyster"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Hàu sữa Canada tươi ngon, giàu dinh dưỡng, hỗ trợ sức khỏe.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=47"],
  },
  {
    id: 18,
    name: "Ngao vàng Úc",
    origin: "Xuất xứ: Úc",
    currentPrice: 190000,
    originalPrice: 240000,
    discount: 21,
    image: "https://picsum.photos/300/200?random=48",
    isLiked: false,
    categories: ["clam-scallop-snail"],
    type: "clam", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Ngao vàng Úc, thịt ngọt, giàu protein và khoáng chất.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=48"],
  },
  {
    id: 19,
    name: "Cua biển Việt Nam",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 450000,
    originalPrice: 500000,
    discount: 10,
    image: "https://picsum.photos/300/200?random=49",
    isLiked: false,
    categories: ["crab-lobster"],
    type: "crab", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Cua biển Việt Nam, thịt chắc, giàu dinh dưỡng.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=49"],
  },
  {
    id: 20,
    name: "Tôm hùm Alaska",
    origin: "Xuất xứ: Alaska",
    currentPrice: 1500000,
    originalPrice: 1800000,
    discount: 17,
    image: "https://picsum.photos/300/200?random=50",
    isLiked: false,
    categories: ["shrimp"],
    type: "shrimp", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Tôm hùm Alaska, thịt ngọt, giàu canxi và protein.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=50"],
  },
  {
    id: 21,
    name: "Mực lá tươi",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 250000,
    originalPrice: 300000,
    discount: 17,
    image: "https://picsum.photos/300/200?random=51",
    isLiked: false,
    categories: ["squid"],
    type: "squid", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Mực lá tươi, thịt giòn, dễ chế biến.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=51"],
  },
  {
    id: 22,
    name: "Sốt BBQ Mỹ",
    origin: "Xuất xứ: Mỹ",
    currentPrice: 120000,
    originalPrice: 150000,
    discount: 20,
    image: "https://picsum.photos/300/200?random=52",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Sốt BBQ Mỹ, hương vị đậm đà, phù hợp cho các món nướng.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=52"],
  },
  {
    id: 23,
    name: "Muối biển Pháp",
    origin: "Xuất xứ: Pháp",
    currentPrice: 80000,
    originalPrice: 100000,
    discount: 20,
    image: "https://picsum.photos/300/200?random=53",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Muối biển Pháp, tinh khiết, phù hợp cho mọi món ăn.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=53"],
  },
  {
    id: 24,
    name: "Sốt Mayonnaise Nhật Bản",
    origin: "Xuất xứ: Nhật Bản",
    currentPrice: 110000,
    originalPrice: 140000,
    discount: 21,
    image: "https://picsum.photos/300/200?random=54",
    isLiked: false,
    categories: ["spices-sauce"],
    type: "spices", // Updated type
    description: [
      {
        title: "Thông tin chi tiết",
        content: "Sốt Mayonnaise Nhật Bản, béo ngậy, phù hợp cho salad.",
      },
    ],
    images: ["https://picsum.photos/300/200?random=54"],
  },
];
