import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../../components/product/ProductImage";
import ProductInfo from "../../components/product/ProductInfo";
import ProductSidebar from "../../components/product/ProductSidebar";
import { newProducts, type Product } from "../../data/mockData";
import TabField from "../../components/product/tab/TabField";
import ListProduct from "../../components/home/ListProduct";
import Brand from "../../components/home/Brand";
import RecentProducts from "../../components/product/RecentProducts";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = newProducts.find((p) => p.id === parseInt(id || "1"));
    setProduct(foundProduct || null);
  }, [id]);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleToggleLike = () => {
    if (product) {
      setProduct({ ...product, isLiked: !product.isLiked });
    }
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 lg:px-[100px] gap-6 lg:gap-0">
        {/* Product Images - Mobile: full width, Desktop: 5/12 */}
        <div className="col-span-1 lg:col-span-5">
          <ProductImage product={product} />
        </div>

        {/* Product Info - Mobile: full width, Desktop: 4/12 */}
        <div className="col-span-1 lg:col-span-4">
          <ProductInfo
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onToggleLike={handleToggleLike}
          />
        </div>

        {/* Sidebar - Mobile: full width, Desktop: 3/12 */}
        <div className="col-span-1 lg:col-span-3">
          <ProductSidebar />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-[100px] mt-8">
        {/* TabField - Mobile: full width, Desktop: 8/12 */}
        <div className="col-span-1 lg:col-span-8">
          <TabField product={product}></TabField>
        </div>
        {/* RecentProducts - Mobile: full width, Desktop: 4/12 */}
        <div className="col-span-1 lg:col-span-4">
          <RecentProducts></RecentProducts>
        </div>
      </div>
      <ListProduct
        title="Tham khảo thêm các sản phẩm khác"
        carousel={true}
        number={5}
      ></ListProduct>
      <Brand></Brand>
    </div>
  );
};

export default ProductDetail;
