interface CartItemProps {
  imageSrc: string;
  name: string;
  price: number;
  quantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
  onDelete?: () => void;
  showControls?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  imageSrc,
  name,
  price,
  quantity = 1,
  onQuantityChange,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    onQuantityChange?.(newQuantity);
  };

  return (
    <div className="flex items-center w-full gap-4 p-4 border-b border-gray-200">
      <img
        src={imageSrc}
        alt={name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">Số lượng</p>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-sm hidden lg:block font-bold text-[#ff4440]">
        {formatPrice(price)}
      </p>
      <p className="text-sm flex lg:hidden justify-end font-bold text-[#ff4440]">
        {formatPrice(price * quantity)}
      </p>
    </div>
  );
};

export default CartItem;
