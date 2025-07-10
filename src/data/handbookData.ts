export interface HandbookArticleSection {
  heading: string;
  content:
    | string
    | {
        subTitle: string;
        content: string;
        img?: { url: string; caption: string };
      }[];
  img?: { url: string; caption: string };
}

export interface HandbookArticle {
  id: number;
  author: string;
  title: string;
  date: string;
  description: HandbookArticleSection[];
  image: string;
  category: string;
}

export const handbookArticles: HandbookArticle[] = [
  {
    id: 1,
    author: "Nguyễn Thị Lan",
    title: "Cách sơ chế tôm hùm Canada nhanh và đúng cách",
    date: "15/02/2025",
    image: "https://picsum.photos/300/200?random=11",
    category: "Chế biến",
    description: [
      {
        heading: "Nguồn gốc xuất xứ",
        content: [
          {
            subTitle: "Tôm hùm Canada",
            content:
              "Tôm hùm Canada là loài hải sản nổi tiếng đến từ vùng biển Đại Tây Dương thuộc Canada, đặc biệt là khu vực Nova Scotia – nơi nổi tiếng có môi trường nước lạnh, sạch và rất giàu khoáng chất tự nhiên. Nhờ điều kiện sống lý tưởng này, tôm hùm Canada phát triển có vỏ cứng, thịt săn chắc, vị ngọt thanh và đậm đà.",
            img: {
              url: "https://picsum.photos/600/400?random=201",
              caption:
                "Tôm hùm Canada trong môi trường tự nhiên vùng biển Nova Scotia",
            },
          },
          {
            subTitle: "Quá trình đánh bắt",
            content:
              "Loài tôm này thường được đánh bắt tự nhiên theo mùa và trải qua quá trình bảo quản nghiêm ngặt để đảm bảo chất lượng khi đến tay người tiêu dùng quốc tế.",
          },
        ],
      },
      {
        heading: "Các bước sơ chế tôm hùm đúng chuẩn",
        content: [
          {
            subTitle: "Chuẩn bị trước khi sơ chế",
            content:
              "Đặt tôm còn sống vào ngăn mát tủ lạnh khoảng 10–15 phút hoặc ngâm trong nước đá để làm dịu và hạn chế chuyển động mạnh. Sử dụng bàn chải mềm để chà nhẹ toàn bộ phần vỏ bên ngoài, đặc biệt là các khe kẽ ở càng, chân và phần đầu – nơi thường tích tụ cặn bẩn và cát biển.",
            img: {
              url: "https://picsum.photos/600/400?random=202",
              caption: "Quá trình làm sạch và sơ chế tôm hùm Canada",
            },
          },
          {
            subTitle: "Sơ chế tôm đông lạnh",
            content:
              "Với tôm đông lạnh, hãy để rã đông tự nhiên trong ngăn mát ít nhất 8 tiếng để đảm bảo cấu trúc thịt không bị bở. Nếu muốn giữ phần gạch tôm, nên thao tác nhẹ nhàng để tránh làm vỡ đầu.",
          },
        ],
      },
      {
        heading: "Những lưu ý khi sơ chế và bảo quản",
        content:
          "Tôm hùm sau khi sơ chế xong nên được nấu ngay để giữ được vị ngon tự nhiên. Trong trường hợp chưa sử dụng liền, bạn có thể bảo quản bằng cách cấp đông sâu ở nhiệt độ -18°C, nhưng không nên để quá 1 tháng. Khi chế biến, hãy sử dụng những phương pháp giữ nguyên độ ẩm của thịt như hấp, nướng nguyên con hoặc bỏ lò kèm bơ tỏi. Tránh luộc quá kỹ vì có thể khiến thịt bị khô và mất ngọt. Một mẹo nhỏ khi hấp là thêm vài lát gừng hoặc sả vào nước để khử mùi tanh nhẹ tự nhiên của tôm biển.",
      },
    ],
  },
  {
    id: 2,
    author: "Nguyễn Thị Lan",
    title: "Tôm hùm Nova Scotia Canada: lợi ích dinh dưỡng và cách chế biến",
    date: "15/02/2025",
    image: "https://picsum.photos/300/200?random=17",
    category: "Dinh dưỡng",
    description: [
      {
        heading: "Tôm hùm Nova Scotia có gì đặc biệt?",
        content: [
          {
            subTitle: "Đặc điểm nổi bật",
            content:
              "Tôm hùm từ vùng Nova Scotia thuộc Canada không chỉ nổi tiếng bởi kích thước lớn mà còn vì hương vị thịt ngọt, giàu độ đạm và ít cholesterol. Loài tôm này sống trong vùng biển có dòng hải lưu lạnh, nên quá trình phát triển chậm nhưng bù lại chất lượng thịt vượt trội.",
            img: {
              url: "https://picsum.photos/600/400?random=203",
              caption: "Tôm hùm Nova Scotia với chất lượng thịt vượt trội",
            },
          },
          {
            subTitle: "Giá trị dinh dưỡng",
            content:
              "Với hàm lượng dinh dưỡng dồi dào như axit béo omega-3, vitamin B12, protein chất lượng cao, sắt và canxi, tôm hùm Nova Scotia là lựa chọn lý tưởng cho những ai đang tìm kiếm một nguồn thực phẩm vừa ngon vừa bổ dưỡng.",
          },
        ],
      },
      {
        heading: "Lợi ích dinh dưỡng nổi bật",
        content:
          "Một khẩu phần tôm hùm 100g có thể cung cấp khoảng 19g protein, gần 90% nhu cầu vitamin B12 hàng ngày và chỉ chứa chưa đến 1g chất béo bão hòa. Omega-3 trong tôm có vai trò quan trọng trong việc cải thiện chức năng tim mạch, hỗ trợ não bộ và giảm viêm. Ngoài ra, tôm hùm còn chứa choline – một dưỡng chất cần thiết giúp cải thiện trí nhớ và tăng cường khả năng tập trung. Đặc biệt, loại thực phẩm này rất phù hợp với người đang theo chế độ ăn ít carb hoặc keto vì không chứa tinh bột.",
      },
      {
        heading: "Cách chế biến đơn giản nhưng ngon miệng",
        content: [
          {
            subTitle: "Hấp tôm hùm",
            content:
              "Cách chế biến phổ biến nhất với tôm hùm Nova Scotia là hấp nguyên con. Thêm vài lát chanh, gừng và lá nguyệt quế để tạo hương thơm. Thời gian hấp trung bình từ 12–15 phút cho tôm khoảng 1kg.",
            img: {
              url: "https://picsum.photos/600/400?random=204",
              caption: "Món tôm hùm hấp nguyên con với gia vị thơm ngon",
            },
          },
          {
            subTitle: "Nướng bơ tỏi",
            content:
              "Bổ đôi tôm, phết hỗn hợp bơ tỏi cùng chút ớt bột paprika rồi đem nướng trong lò ở 180°C trong 10 phút. Món này giữ trọn độ ngọt và độ dai tự nhiên của thịt tôm, rất phù hợp cho các bữa tiệc tại nhà hoặc dịp đặc biệt.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    author: "Nguyễn Thị Lan",
    title: "Chi tiết công thức vẹm xanh nướng mỡ hành cực hấp dẫn",
    date: "10/12/2024",
    image: "https://picsum.photos/300/200?random=15",
    category: "Công thức",
    description: [
      {
        heading: "Nguyên liệu cần chuẩn bị",
        content:
          "Vẹm xanh tươi (500g), hành lá, mỡ heo, đậu phộng, nước mắm và đường. Chọn những con vẹm còn sống, vỏ đóng kín là tốt nhất. Ngoài ra, bạn có thể bổ sung một ít tiêu xay, ớt bột nếu thích ăn cay nhẹ. Để đảm bảo hương vị món ăn tròn đầy, đừng quên chọn loại nước mắm nguyên chất có độ đạm cao.",
      },
      {
        heading: "Cách thực hiện",
        content: [
          {
            subTitle: "Sơ chế vẹm",
            content: "Làm sạch vẹm, sau đó hấp sơ cho vừa chín.",
          },
          {
            subTitle: "Chế biến và nướng",
            content:
              "Phi hành với mỡ, nêm gia vị rồi rưới lên vẹm, cuối cùng đem nướng 5–7 phút đến khi dậy mùi thơm. Đậu phộng nên rang trước rồi giã dập để rắc lên mặt khi hoàn tất. Món này ngon nhất khi ăn nóng kèm rau răm và nước mắm chua ngọt.",
          },
        ],
      },
    ],
  },
  {
    author: "Nguyễn Văn Hùng",
    id: 4,
    title: "Cách làm sò huyết rang me ngon đúng điệu tại nhà",
    date: "10/12/2024",
    image: "https://picsum.photos/300/200?random=12",
    category: "Chế biến",
    description: [
      {
        heading: "Nguyên liệu chuẩn bị",
        content:
          "Sò huyết tươi sống (500g), me chua, tỏi băm, đường, nước mắm, ớt, dầu ăn. Chọn sò huyết loại lớn, vỏ còn khép chặt để đảm bảo tươi ngon. Me chua nên dùng loại me vắt hoặc me tươi đun lấy nước cốt.",
      },
      {
        heading: "Cách chế biến",
        content: [
          {
            subTitle: "Sơ chế sò huyết",
            content:
              "Sò huyết rửa sạch, ngâm nước muối loãng khoảng 30 phút để nhả cát. Đun sôi nước, chần sơ sò cho vừa chín tới.",
          },
          {
            subTitle: "Chế biến sốt me",
            content:
              "Phi thơm tỏi, cho nước cốt me, đường, nước mắm, ớt vào đun thành hỗn hợp sệt, sau đó cho sò vào đảo đều khoảng 2–3 phút cho ngấm đều gia vị là xong.",
          },
        ],
      },
    ],
  },
  {
    author: "Lê Thị Mai",
    id: 5,
    title: "Tác dụng của tôm biển là gì? Bật mí 9 lợi ích cho sức khỏe",
    date: "10/12/2024",
    image: "https://picsum.photos/300/200?random=14",
    category: "Sức khỏe",
    description: [
      {
        heading: "Giúp giảm cân hiệu quả",
        content:
          "Tôm biển có hàm lượng protein cao nhưng lại ít calo, là lựa chọn tuyệt vời cho những ai đang trong quá trình giảm cân. Protein giúp tạo cảm giác no lâu và hỗ trợ duy trì cơ bắp.",
      },
      {
        heading: "Tốt cho tim mạch và huyết áp",
        content:
          "Tôm chứa omega-3 và các chất chống oxy hóa giúp giảm cholesterol xấu, ổn định huyết áp và ngăn ngừa nguy cơ mắc các bệnh tim mạch. Đây là loại thực phẩm phù hợp với chế độ ăn lành mạnh.",
      },
    ],
  },
  {
    author: "Trần Minh Quân",
    id: 6,
    title: "Ốc gai nấu gì ngon? Mách bạn 07 món hấp dẫn từ ốc gai",
    date: "10/12/2024",
    image: "https://picsum.photos/300/200?random=7",
    category: "Công thức",
    description: [
      {
        heading: "Giới thiệu về ốc gai",
        content:
          "Ốc gai là một loại ốc biển có phần vỏ cứng, gai nhọn đặc trưng. Thịt ốc săn chắc, ngọt đậm và có thể dùng chế biến thành nhiều món ngon như hấp, xào, nướng hoặc nấu cháo.",
      },
      {
        heading: "Danh sách các món ngon từ ốc gai",
        content: [
          {
            subTitle: "Các món nướng",
            content:
              "Ốc gai nướng mỡ hành, ốc gai nướng phô mai, ốc gai xào bơ tỏi là những món được yêu thích nhờ hương vị đậm đà và thơm ngon.",
          },
          {
            subTitle: "Các món hấp và xào",
            content:
              "Ốc gai hấp gừng sả, ốc gai xào sa tế, cháo ốc gai và ốc gai hầm sả ớt mang đến hương vị đa dạng, phù hợp với nhiều khẩu vị.",
          },
        ],
      },
    ],
  },
  {
    author: "Phạm Thu Trang",
    id: 7,
    title: "Mẹo rã đông hải sản đúng cách để giữ nguyên độ tươi ngon",
    date: "01/01/2025",
    image: "https://picsum.photos/300/200?random=21",
    category: "Mẹo bếp",
    description: [
      {
        heading: "Vì sao phải rã đông đúng cách?",
        content:
          "Rã đông sai cách có thể làm mất chất dinh dưỡng trong hải sản, khiến chúng mềm nhũn hoặc có mùi tanh. Rã đông đúng giúp giữ nguyên cấu trúc thịt, độ ngọt tự nhiên và hương vị ban đầu.",
      },
      {
        heading: "Các phương pháp rã đông an toàn",
        content: [
          {
            subTitle: "Rã đông trong tủ lạnh",
            content:
              "Rã đông trong ngăn mát tủ lạnh là cách tối ưu nhất, tuy tốn thời gian nhưng đảm bảo độ tươi.",
          },
          {
            subTitle: "Rã đông bằng nước lạnh",
            content:
              "Đặt hải sản vào túi kín rồi ngâm nước lạnh trong 30–60 phút. Tránh rã đông bằng nước nóng hoặc để ngoài không khí quá lâu.",
          },
        ],
      },
    ],
  },
  {
    author: "Đặng Hoài Nam",
    id: 8,
    title: "5 loại gia vị nên dùng khi chế biến hải sản để tăng hương vị",
    date: "03/01/2025",
    image: "https://picsum.photos/300/200?random=22",
    category: "Mẹo bếp",
    description: [
      {
        heading: "1. Gừng và sả",
        content:
          "Hai loại gia vị này giúp khử mùi tanh hiệu quả và làm dậy mùi hải sản. Thường được dùng trong các món hấp, luộc hoặc xào.",
      },
      {
        heading: "2. Tỏi và ớt",
        content:
          "Tỏi phi thơm kết hợp với ớt cay tạo nên hương vị đặc trưng cho các món nướng, xào. Đây là bộ đôi không thể thiếu cho các món như mực nướng, nghêu xào cay.",
      },
    ],
  },
  {
    author: "Vũ Ngọc Hà",
    id: 9,
    title: "Bí quyết chọn hải sản tươi sống tại chợ và siêu thị",
    date: "04/01/2025",
    image: "https://picsum.photos/300/200?random=23",
    category: "Mẹo bếp",
    description: [
      {
        heading: "Cách nhận biết hải sản tươi",
        content:
          "Hải sản tươi thường có màu sáng bóng, mắt trong, thịt chắc và không có mùi lạ. Với tôm, hãy chọn con còn sống, vỏ bóng. Với cá, mắt cá phải trong và mang đỏ tươi.",
      },
      {
        heading: "Lưu ý khi mua ở siêu thị",
        content:
          "Ưu tiên chọn hải sản đóng gói có ghi ngày sản xuất và hạn sử dụng rõ ràng. Quan sát màu sắc và hình dạng để tránh mua phải sản phẩm bị hư hoặc cấp đông lâu ngày.",
      },
    ],
  },
  {
    author: "Ngô Văn Duy",
    id: 10,
    title: "Hướng dẫn bảo quản hải sản trong tủ lạnh đúng cách",
    date: "05/01/2025",
    image: "https://picsum.photos/300/200?random=24",
    category: "Bảo quản",
    description: [
      {
        heading: "Phân loại khi bảo quản",
        content:
          "Chia hải sản thành từng loại như tôm, cá, mực, sò… để bảo quản riêng biệt. Dùng túi zip hoặc hộp kín để tránh ám mùi qua lại và bảo vệ hải sản khỏi vi khuẩn.",
      },
      {
        heading: "Nhiệt độ và thời gian bảo quản",
        content:
          "Ngăn mát chỉ nên bảo quản hải sản trong 1–2 ngày. Nếu chưa dùng ngay, cấp đông ở -18°C và dùng trong vòng 1 tháng. Ghi nhãn ngày cấp đông để dễ kiểm soát hạn sử dụng.",
      },
    ],
  },
];
