export interface Product {
  productId: number;
  productName: string;
  description: string;
  size: string;
  color: string;
  imageUrl: string;
  status: 'In Stock' | 'Out of Stock';
  productQuantity: number;
  categoryId: number;
  updateDate: string;
}
