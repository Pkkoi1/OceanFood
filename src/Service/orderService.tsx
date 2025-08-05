import { OrderAPI } from "../api/API";

export interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

export interface CreateOrderPayload {
  user: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: string;
  phone: string;
  note?: string;
  paymentMethod: "cod" | "banking" | "momo";
}

export async function createOrder(payload: CreateOrderPayload) {
  return await OrderAPI.createOrder(payload);
}

export async function getOrdersByUser(userId: string) {
  return await OrderAPI.getOrdersByUser(userId);
}

export async function getOrderById(orderId: string) {
  return await OrderAPI.getOrderById(orderId);
}

export async function updateOrderStatus(orderId: string, status: string) {
  return await OrderAPI.updateOrderStatus(orderId, status);
}

export async function deleteOrder(orderId: string) {
  return await OrderAPI.deleteOrder(orderId);
}
