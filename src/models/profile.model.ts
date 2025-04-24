export interface ProfileModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  dateTime: string; // ISO format
  role: 'Admin' | 'Customer';
}
