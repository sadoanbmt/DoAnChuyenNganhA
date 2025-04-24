export interface Payment {
  paymentId: number;
  orderId: number;
  paymentMethodId: number;
  paymentStatus: 'Unpaid' | 'Paid';
  paymentAt: string;
}
