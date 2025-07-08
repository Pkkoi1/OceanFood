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
      <div className="grid grid-cols-12 px-4 lg:px-[100px]">
        {/* Product Images - Cột 1 */}
        <div className="col-span-12 lg:col-span-5">
          <ProductImage product={product} />
        </div>

        {/* Product Info - Cột 2 */}
        <div className="col-span-12 lg:col-span-4">
          <ProductInfo
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onToggleLike={handleToggleLike}
          />
        </div>

        {/* Sidebar - Cột 3 */}
        <div className="col-span-12 lg:col-span-3">
          <ProductSidebar />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-[100px] mt-8">
        {/* TabField - 2/3 cột */}
        <div className="col-span-12 lg:col-span-8">
          <TabField product={product}></TabField>
        </div>
        {/* RecentProducts - 1/3 cột */}
        <div className="col-span-12 lg:col-span-4">
          <RecentProducts></RecentProducts>
        </div>
      </div>
      <ListProduct
        title="Tham khảo thêm các sản phẩm khác"
        number={5}
      ></ListProduct>
      <Brand></Brand>
    </div>
  );
};

export default ProductDetail;
