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
}

export const newProducts: Product[] = [
  {
    id: 1,
    name: "Cá Hồi Xông Khói Vị Truyền Thống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 269000,
    image: "https://picsum.photos/300/200?random=1",
    isLiked: false,
    isNew: true,
  },
  {
    id: 2,
    name: "Cá Hồi Cắt Khoanh",
    origin: "Xuất xứ: Chile",
    currentPrice: 195000,
    image: "https://picsum.photos/300/200?random=2",
    isLiked: false,
    isNew: true,
  },
  {
    id: 3,
    name: "Cá Hồi Nguyên Con Tươi",
    origin: "Xuất xứ: Nauy",
    currentPrice: 590000,
    image: "https://picsum.photos/300/200?random=3",
    isLiked: false,
    isNew: true,
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
  },
  {
    id: 5,
    name: "Thân Cá Hồi Phile Tươi",
    origin: "Xuất xứ: Nauy",
    currentPrice: 175000,
    image: "https://picsum.photos/300/200?random=5",
    isLiked: false,
    badge: "BÁN CHẠY",
    isNew: true,
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
  },
  {
    id: 8,
    name: "Tôm Càng Xanh Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 450000,
    image: "https://picsum.photos/300/200?random=8",
    isLiked: false,
    isNew: true,
  },
  {
    id: 9,
    name: "Tôm Hùm Baby Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 680000,
    image: "https://picsum.photos/300/200?random=9",
    isLiked: false,
    isNew: true,
  },
  {
    id: 10,
    name: "Cá Chẽm Tươi Sống",
    origin: "Xuất xứ: Việt Nam",
    currentPrice: 320000,
    image: "https://picsum.photos/300/200?random=10",
    isLiked: false,
    isNew: true,
  },
];
