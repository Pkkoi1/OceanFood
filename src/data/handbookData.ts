export interface HandbookArticleSection {
  title: string;
  content: string;
  image?: string;
}

export interface HandbookArticle {
  id: string;
  _id?: string; // Optional for backward compatibility
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: HandbookArticleSection[];
  isPublished: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export const handbookArticles: HandbookArticle[] = [
  {
    id: "1",
    author: "Nguyễn Thị Lan",
    title: "Cách sơ chế tôm hùm Canada nhanh và đúng cách",
    image:
      "https://bizweb.dktcdn.net/100/533/545/files/can-59a7c137c5dc4e6f8e9e64438fe70162-grande.png?v=1739585253593",
    category: "Chế biến",
    tags: ["tôm hùm", "sơ chế", "hải sản"],
    slug: "cach-so-che-tom-hum-canada-nhanh-va-dung-cach",
    excerpt:
      "Hướng dẫn chi tiết cách sơ chế tôm hùm Canada từ A đến Z, giúp bạn có được những món ăn ngon tuyệt từ loại hải sản cao cấp này.",
    readTime: "10 phút",
    isPublished: true,
    viewCount: 1200,
    createdAt: "2023-10-01T10:00:00.000Z",
    updatedAt: "2023-10-01T10:00:00.000Z",
    sections: [
      {
        title: "Nguồn gốc xuất xứ",
        content:
          "Tôm hùm Canada là loài hải sản nổi tiếng đến từ vùng biển Đại Tây Dương thuộc Canada, đặc biệt là khu vực Nova Scotia – nơi nổi tiếng có môi trường nước lạnh, sạch và rất giàu khoáng chất tự nhiên. Nhờ điều kiện sống lý tưởng này, tôm hùm Canada phát triển có vỏ cứng, thịt săn chắc, vị ngọt thanh và đậm đà.",
        image:
          "https://bizweb.dktcdn.net/100/533/545/files/can-59a7c137c5dc4e6f8e9e64438fe70162-grande.png?v=1739585253593",
      },
      {
        title: "Quá trình đánh bắt",
        content:
          "Loài tôm này thường được đánh bắt tự nhiên theo mùa và trải qua quá trình bảo quản nghiêm ngặt để đảm bảo chất lượng khi đến tay người tiêu dùng quốc tế.",
      },
      {
        title: "Các bước sơ chế tôm hùm đúng chuẩn",
        content:
          "Đặt tôm còn sống vào ngăn mát tủ lạnh khoảng 10–15 phút hoặc ngâm trong nước đá để làm dịu và hạn chế chuyển động mạnh. Sử dụng bàn chải mềm để chà nhẹ toàn bộ phần vỏ bên ngoài, đặc biệt là các khe kẽ ở càng, chân và phần đầu – nơi thường tích tụ cặn bẩn và cát biển.",
      },
      {
        title: "Sơ chế tôm đông lạnh",
        content:
          "Với tôm đông lạnh, hãy để rã đông tự nhiên trong ngăn mát ít nhất 8 tiếng để đảm bảo cấu trúc thịt không bị bở. Nếu muốn giữ phần gạch tôm, nên thao tác nhẹ nhàng để tránh làm vỡ đầu.",
      },
      {
        title: "Những lưu ý khi sơ chế và bảo quản",
        content:
          "Tôm hùm sau khi sơ chế xong nên được nấu ngay để giữ được vị ngon tự nhiên. Trong trường hợp chưa sử dụng liền, bạn có thể bảo quản bằng cách cấp đông sâu ở nhiệt độ -18°C, nhưng không nên để quá 1 tháng. Khi chế biến, hãy sử dụng những phương pháp giữ nguyên độ ẩm của thịt như hấp, nướng nguyên con hoặc bỏ lò kèm bơ tỏi. Tránh luộc quá kỹ vì có thể khiến thịt bị khô và mất ngọt. Một mẹo nhỏ khi hấp là thêm vài lát gừng hoặc sả vào nước để khử mùi tanh nhẹ tự nhiên của tôm biển.",
      },
    ],
  },
  {
    id: "2",
    author: "Nguyễn Thị Lan",
    title: "Tôm hùm Nova Scotia Canada: lợi ích dinh dưỡng và cách chế biến",
    image:
      "https://bizweb.dktcdn.net/100/533/545/articles/img-7158-b26dc42ed2484e5587e7b9f86578eb8c-1024x1024.jpg?v=1739585606957",
    category: "Dinh dưỡng",
    tags: ["tôm hùm", "dinh dưỡng", "cách chế biến"],
    slug: "tom-hum-nova-scotia-canada-loi-ich-dinh-duong-va-cach-che-bien",
    excerpt:
      "Khám phá lợi ích dinh dưỡng tuyệt vời của tôm hùm Nova Scotia Canada và cách chế biến đơn giản nhưng ngon miệng.",
    readTime: "8 phút",
    isPublished: true,
    viewCount: 900,
    createdAt: "2023-10-02T10:00:00.000Z",
    updatedAt: "2023-10-02T10:00:00.000Z",
    sections: [
      {
        title: "Tôm hùm Nova Scotia có gì đặc biệt?",
        content:
          "Tôm hùm từ vùng Nova Scotia thuộc Canada không chỉ nổi tiếng bởi kích thước lớn mà còn vì hương vị thịt ngọt, giàu độ đạm và ít cholesterol. Loài tôm này sống trong vùng biển có dòng hải lưu lạnh, nên quá trình phát triển chậm nhưng bù lại chất lượng thịt vượt trội.",
        image:
          "https://bizweb.dktcdn.net/100/533/545/files/118-1024x683-1-1686914999522738947316-75edde5a30614756b55d124938e23635-grande.jpg?v=1739584904267",
      },
      {
        title: "Giá trị dinh dưỡng",
        content:
          "Với hàm lượng dinh dưỡng dồi dào như axit béo omega-3, vitamin B12, protein chất lượng cao, sắt và canxi, tôm hùm Nova Scotia là lựa chọn lý tưởng cho những ai đang tìm kiếm một nguồn thực phẩm vừa ngon vừa bổ dưỡng.",
      },
      {
        title: "Lợi ích dinh dưỡng nổi bật",
        content:
          "Một khẩu phần tôm hùm 100g có thể cung cấp khoảng 19g protein, gần 90% nhu cầu vitamin B12 hàng ngày và chỉ chứa chưa đến 1g chất béo bão hòa. Omega-3 trong tôm có vai trò quan trọng trong việc cải thiện chức năng tim mạch, hỗ trợ não bộ và giảm viêm. Ngoài ra, tôm hùm còn chứa choline – một dưỡng chất cần thiết giúp cải thiện trí nhớ và tăng cường khả năng tập trung. Đặc biệt, loại thực phẩm này rất phù hợp với người đang theo chế độ ăn ít carb hoặc keto vì không chứa tinh bột.",
      },
      {
        title: "Cách chế biến đơn giản nhưng ngon miệng",
        content:
          "Cách chế biến phổ biến nhất với tôm hùm Nova Scotia là hấp nguyên con. Thêm vài lát chanh, gừng và lá nguyệt quế để tạo hương thơm. Thời gian hấp trung bình từ 12–15 phút cho tôm khoảng 1kg.",
        image:
          "https://bizweb.dktcdn.net/100/533/545/files/123-topaz-enhance-826fee19440745989c223370eaa42477-grande.jpg?v=1739584943513",
      },
      {
        title: "Nướng bơ tỏi",
        content:
          "Bổ đôi tôm, phết hỗn hợp bơ tỏi cùng chút ớt bột paprika rồi đem nướng trong lò ở 180°C trong 10 phút. Món này giữ trọn độ ngọt và độ dai tự nhiên của thịt tôm, rất phù hợp cho các bữa tiệc tại nhà hoặc dịp đặc biệt.",
      },
    ],
  },
  {
    id: "3",
    author: "Nguyễn Thị Lan",
    title: "Chi tiết công thức vẹm xanh nướng mỡ hành cực hấp dẫn",
    image:
      "https://bizweb.dktcdn.net/100/533/545/articles/vem-xanh-nuong-mo-hanh-10.jpg?v=1739585586507",
    category: "Công thức",
    tags: ["vẹm xanh", "nướng", "mỡ hành"],
    slug: "chi-tiet-cong-thuc-vem-xanh-nuong-mo-hanh-cuc-hap-dan",
    excerpt:
      "Khám phá ngay công thức vẹm xanh nướng mỡ hành thơm ngon, hấp dẫn với hướng dẫn chi tiết từng bước thực hiện.",
    readTime: "7 phút",
    isPublished: true,
    viewCount: 750,
    createdAt: "2023-10-03T10:00:00.000Z",
    updatedAt: "2023-10-03T10:00:00.000Z",
    sections: [
      {
        title: "Nguyên liệu cần chuẩn bị",
        content:
          "Vẹm xanh tươi (500g), hành lá, mỡ heo, đậu phộng, nước mắm và đường. Chọn những con vẹm còn sống, vỏ đóng kín là tốt nhất. Ngoài ra, bạn có thể bổ sung một ít tiêu xay, ớt bột nếu thích ăn cay nhẹ. Để đảm bảo hương vị món ăn tròn đầy, đừng quên chọn loại nước mắm nguyên chất có độ đạm cao.",
      },
      {
        title: "Cách thực hiện",
        content:
          "Làm sạch vẹm, sau đó hấp sơ cho vừa chín. Phi hành với mỡ, nêm gia vị rồi rưới lên vẹm, cuối cùng đem nướng 5–7 phút đến khi dậy mùi thơm. Đậu phộng nên rang trước rồi giã dập để rắc lên mặt khi hoàn tất. Món này ngon nhất khi ăn nóng kèm rau răm và nước mắm chua ngọt.",
      },
    ],
  },
  {
    author: "Nguyễn Văn Hùng",
    id: "4",
    title: "Cách làm sò huyết rang me ngon đúng điệu tại nhà",
    image:
      "https://bizweb.dktcdn.net/100/533/545/articles/so-huyet-rang-me1.jpg?v=1733819127097",
    category: "Chế biến",
    tags: ["sò huyết", "rang me", "hải sản"],
    slug: "cach-lam-so-huyet-rang-me-ngon-dung-dieu-tai-nha",
    excerpt:
      "Hướng dẫn cách làm sò huyết rang me chua ngọt, đậm đà hương vị biển cả ngay tại nhà với công thức đơn giản.",
    readTime: "9 phút",
    isPublished: true,
    viewCount: 600,
    createdAt: "2023-10-04T10:00:00.000Z",
    updatedAt: "2023-10-04T10:00:00.000Z",
    sections: [
      {
        title: "Nguyên liệu chuẩn bị",
        content:
          "Sò huyết tươi sống (500g), me chua, tỏi băm, đường, nước mắm, ớt, dầu ăn. Chọn sò huyết loại lớn, vỏ còn khép chặt để đảm bảo tươi ngon. Me chua nên dùng loại me vắt hoặc me tươi đun lấy nước cốt.",
      },
      {
        title: "Cách chế biến",
        content:
          "Sò huyết rửa sạch, ngâm nước muối loãng khoảng 30 phút để nhả cát. Đun sôi nước, chần sơ sò cho vừa chín tới. Phi thơm tỏi, cho nước cốt me, đường, nước mắm, ớt vào đun thành hỗn hợp sệt, sau đó cho sò vào đảo đều khoảng 2–3 phút cho ngấm đều gia vị là xong.",
      },
    ],
  },
  {
    author: "Lê Thị Mai",
    id: "5",
    title: "Tác dụng của tôm biển là gì? Bật mí 9 lợi ích cho sức khỏe",
    image:
      "https://bizweb.dktcdn.net/100/533/545/articles/tom-bien-3.jpg?v=1733815604127",
    category: "Sức khỏe",
    tags: ["tôm biển", "lợi ích sức khỏe", "dinh dưỡng"],
    slug: "tac-dung-cua-tom-bien-la-gi-bat-mi-9-loi-ich-cho-suc-khoe",
    excerpt:
      "Khám phá 9 lợi ích tuyệt vời của tôm biển đối với sức khỏe và tại sao bạn nên bổ sung loại hải sản này vào chế độ ăn uống hàng ngày.",
    readTime: "6 phút",
    isPublished: true,
    viewCount: 800,
    createdAt: "2023-10-05T10:00:00.000Z",
    updatedAt: "2023-10-05T10:00:00.000Z",
    sections: [
      {
        title: "Giúp giảm cân hiệu quả",
        content:
          "Tôm biển có hàm lượng protein cao nhưng lại ít calo, là lựa chọn tuyệt vời cho những ai đang trong quá trình giảm cân. Protein giúp tạo cảm giác no lâu và hỗ trợ duy trì cơ bắp.",
      },
      {
        title: "Tốt cho tim mạch và huyết áp",
        content:
          "Tôm chứa omega-3 và các chất chống oxy hóa giúp giảm cholesterol xấu, ổn định huyết áp và ngăn ngừa nguy cơ mắc các bệnh tim mạch. Đây là loại thực phẩm phù hợp với chế độ ăn lành mạnh.",
      },
    ],
  },
  {
    author: "Trần Minh Quân",
    id: "6",
    title: "Ốc gai nấu gì ngon? Mách bạn 07 món hấp dẫn từ ốc gai",
    image:
      "https://bizweb.dktcdn.net/100/533/545/articles/oc-gai-nau-gi-ngon-9.jpg?v=1739585596517",
    category: "Công thức",
    tags: ["ốc gai", "món ngon", "hải sản"],
    slug: "oc-gai-nau-gi-ngon-mach-ban-07-mon-hap-dan-tu-oc-gai",
    excerpt:
      "Khám phá ngay 07 món ăn hấp dẫn được chế biến từ ốc gai cùng với công thức và bí quyết nấu ăn chi tiết.",
    readTime: "8 phút",
    isPublished: true,
    viewCount: 700,
    createdAt: "2023-10-06T10:00:00.000Z",
    updatedAt: "2023-10-06T10:00:00.000Z",
    sections: [
      {
        title: "Giới thiệu về ốc gai",
        content:
          "Ốc gai là một loại ốc biển có phần vỏ cứng, gai nhọn đặc trưng. Thịt ốc săn chắc, ngọt đậm và có thể dùng chế biến thành nhiều món ngon như hấp, xào, nướng hoặc nấu cháo.",
      },
      {
        title: "Danh sách các món ngon từ ốc gai",
        content:
          "Ốc gai nướng mỡ hành, ốc gai nướng phô mai, ốc gai xào bơ tỏi là những món được yêu thích nhờ hương vị đậm đà và thơm ngon. Ốc gai hấp gừng sả, ốc gai xào sa tế, cháo ốc gai và ốc gai hầm sả ớt mang đến hương vị đa dạng, phù hợp với nhiều khẩu vị.",
      },
    ],
  },
];
