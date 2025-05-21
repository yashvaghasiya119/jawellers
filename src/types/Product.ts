export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number; // Percentage discount, e.g., 10 for 10%
  images: string[];
  category: string;
  material: string;
  gemstone?: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  createdAt: string;
}