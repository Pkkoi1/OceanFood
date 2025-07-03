export interface HandbookArticle {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export const handbookArticles: HandbookArticle[] = [
  {
    id: 1,
    title: "Cách sơ chế tôm hùm Canada nhanh và đúng cách",
    date: "15/02/2025",
    description:
      "1. Nguồn gốc xuất xứ Tôm Hùm Canada có tên gọi gắn với vùng biển Canada - nơi có...",
    image: "https://picsum.photos/300/200?random=11",
    category: "Chế biến",
  },
  {
    id: 2,
    title: "Tôm hùm Nova Scotia Canada: lợi ích dinh dưỡng và cách chế biến",
    date: "15/02/2025",
    description:
      "1. Thành phần dinh dưỡng của tôm hùm Nova Scotia Canada Tôm hùm Nova Scotia...",
    image: "https://picsum.photos/300/200?random=17",
    category: "Dinh dưỡng",
  },
  {
    id: 3,
    title: "Chi tiết công thức vẹm xanh nướng mỡ hành cực hấp dẫn",
    date: "10/12/2024",
    description:
      "Các nguyên liệu cần chuẩn bị Vẹm nướng mỡ hành là sự kết hợp hoàn hảo giữa...",
    image: "https://picsum.photos/300/200?random=15",
    category: "Công thức",
  },
  {
    id: 4,
    title: "Cách làm sò huyết rang me ngon đúng điệu tại nhà",
    date: "10/12/2024",
    description:
      "Nguyên liệu chuẩn bị món sò huyết rang me Sò huyết rang me là một trong những...",
    image: "https://picsum.photos/300/200?random=12",
    category: "Chế biến",
  },
  {
    id: 5,
    title: "Tác dụng của tôm biển là gì? Bật mí 9 lợi ích cho sức khỏe",
    date: "10/12/2024",
    description:
      "9 tác dụng của tôm biển đối với sức khỏe người 1. Giúp giảm cân hiệu quả với...",
    image: "https://picsum.photos/300/200?random=14",
    category: "Sức khỏe",
  },
  {
    id: 6,
    title: "Ốc gai nấu gì ngon? Mách bạn 07 món hấp dẫn từ ốc gai",
    date: "10/12/2024",
    description:
      "TOP 07 món ăn chế biến từ ốc gai hấp dẫn Ốc gai thuộc loại ốc biển chứa nhiều chất...",
    image: "https://picsum.photos/300/200?random=7",
    category: "Công thức",
  },
];
