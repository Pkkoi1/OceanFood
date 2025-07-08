import React from "react";

interface Product {
  description: { title: string; content: string }[];
}

interface DetailInfoProps {
  product: Product;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ product }) => {
  // Render description array
  const renderDescription = (
    descriptions: { title: string; content: string }[]
  ) => {
    if (!descriptions || descriptions.length === 0) {
      return <p className="text-gray-500">No description available.</p>;
    }
    return descriptions.map((item, index) => (
      <div key={index}>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.content}</p>
      </div>
    ));
  };

  return (
    <div className="space-y-6">{renderDescription(product.description)}</div>
  );
};

export default DetailInfo;
