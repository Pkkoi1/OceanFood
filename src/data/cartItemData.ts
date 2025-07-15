export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Tôm hùm Canada",
    image: "https://picsum.photos/300/200?random=1",
    price: 1500000,
    quantity: 2,
  },
  // {
  //   id: 2,
  //   name: "Sò huyết rang me",
  //   image: "https://picsum.photos/300/200?random=2",
  //   price: 80000,
  //   quantity: 1,
  // },
  // {
  //   id: 3,
  //   name: "Vẹm xanh nướng mỡ hành",
  //   image: "https://picsum.photos/300/200?random=3",
  //   price: 120000,
  //   quantity: 3,
  // },
  // {
  //   id: 4,
  //   name: "Ốc gai nướng",
  //   image: "https://picsum.photos/300/200?random=4",
  //   price: 90000,
  //   quantity: 1,
  // },
  // {
  //   id: 5,
  //   name: "Cua biển hấp",
  //   image: "https://picsum.photos/300/200?random=5",
  //   price: 2000000,
  //   quantity: 1,
  // },
];
