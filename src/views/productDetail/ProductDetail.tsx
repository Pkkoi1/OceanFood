import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { type Product } from "../../data/mockData";
import { findProductById } from "../../Service/ProductService"; // Import the service function
import ProductDetailContent from "../../components/product/ProductDetailContent";
import ProductDetailTabs from "../../components/product/ProductDetailTabs";
import ListProduct from "../../components/home/ListProduct";
import Brand from "../../components/home/Brand";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const foundProduct = await findProductById(id); // Use the service function
        setProduct(foundProduct || null);
      }
    };

    fetchProduct();
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
      <ProductDetailContent
        product={product}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        onToggleLike={handleToggleLike}
      />
      <ProductDetailTabs product={product} />
      <ListProduct
        title="Tham khảo thêm các sản phẩm khác"
        carousel={true}
        number={5}
      />
      <Brand />
    </div>
  );
};

export default ProductDetail;
