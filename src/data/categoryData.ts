export interface Category {
  key: string;
  label: string;
}

export const productCategories: Category[] = [
  { key: "frozen-seafood", label: "Hải sản đông lạnh" },
  { key: "fresh-live", label: "100% tươi sống" },
  { key: "imported-seafood", label: "Hải sản nhập khẩu" },
  { key: "salmon", label: "Cá hồi" },
  { key: "oyster", label: "Hàu sữa" },
  { key: "clam-scallop-snail", label: "Ngao, sò, ốc" },
  { key: "crab-lobster", label: "Cua - ghẹ" },
  { key: "shrimp", label: "Tôm các loại" },
  { key: "squid", label: "Mực" },
  { key: "spices-sauce", label: "Gia vị - sốt" },
];
