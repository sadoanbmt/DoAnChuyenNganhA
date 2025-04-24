export interface Order {
  orderId: number;
  userId: number;
  orderAt: string;
  totalAmount: number;
  orderStatus: 'Pending' | 'Shipped' | 'Delivered' | 'Canceled';
}
