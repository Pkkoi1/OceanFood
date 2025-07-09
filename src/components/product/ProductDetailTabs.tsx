import React from "react";
import TabField from "./tab/TabField";
import RecentProducts from "./RecentProducts";
import type { Product } from "../../data/mockData";

interface ProductDetailTabsProps {
  product: Product;
}

const ProductDetailTabs: React.FC<ProductDetailTabsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-[100px] mt-8">
      {/* TabField - Mobile: full width, Desktop: 8/12 */}
      <div className="col-span-1 lg:col-span-8">
        <TabField product={product} />
      </div>
      {/* RecentProducts - Mobile: full width, Desktop: 4/12 */}
      <div className="col-span-1 lg:col-span-4">
        <RecentProducts />
      </div>
    </div>
  );
};

export default ProductDetailTabs;
