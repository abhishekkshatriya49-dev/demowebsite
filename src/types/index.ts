export type MenuCategory = 'coffee' | 'cold' | 'food' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
}

export interface FavoriteProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  imageUrl: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  isLarge?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: string;
  quote: string;
  avatarUrl: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface OpeningHourItem {
  day: string;
  time: string;
}
