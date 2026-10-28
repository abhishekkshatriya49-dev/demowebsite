import { MenuItem, FavoriteProduct, GalleryItem, Testimonial, Feature, OpeningHourItem } from '../types';

export const FEATURES: Feature[] = [
  {
    id: 'f-1',
    icon: '☕',
    title: 'Specialty Coffee',
    description: 'Freshly brewed coffee prepared by people who genuinely love what they do.',
  },
  {
    id: 'f-2',
    icon: '🥐',
    title: 'Fresh Bites',
    description: 'Delicious pastries, desserts and café favorites made to pair perfectly with your drink.',
  },
  {
    id: 'f-3',
    icon: '✨',
    title: 'Beautiful Space',
    description: 'A warm, aesthetic environment made for conversations, work and relaxing moments.',
  },
  {
    id: 'f-4',
    icon: '❤️',
    title: 'Good Vibes',
    description: 'Come for the coffee. Stay for the atmosphere, people and unforgettable moments.',
  },
];

export const MENU_CATEGORIES = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'cold', label: 'Cold Drinks' },
  { id: 'food', label: 'Food' },
  { id: 'dessert', label: 'Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm-1',
    name: 'Classic Cappuccino',
    description: 'Rich espresso, steamed milk and velvety foam.',
    price: '₹180',
    category: 'coffee',
  },
  {
    id: 'm-2',
    name: 'Café Latte',
    description: 'Smooth espresso with creamy steamed milk.',
    price: '₹190',
    category: 'coffee',
  },
  {
    id: 'm-3',
    name: 'Classic Americano',
    description: 'Bold espresso balanced with hot water.',
    price: '₹150',
    category: 'coffee',
  },
  {
    id: 'm-4',
    name: 'Mocha',
    description: 'Espresso, chocolate and steamed milk.',
    price: '₹220',
    category: 'coffee',
  },
  {
    id: 'm-5',
    name: 'Iced Latte',
    description: 'Chilled espresso, milk and ice.',
    price: '₹210',
    category: 'cold',
  },
  {
    id: 'm-6',
    name: 'Cold Coffee',
    description: 'Creamy blended coffee with a smooth finish.',
    price: '₹230',
    category: 'cold',
  },
  {
    id: 'm-7',
    name: 'Classic Club Sandwich',
    description: 'Fresh vegetables, cheese and signature dressing.',
    price: '₹260',
    category: 'food',
  },
  {
    id: 'm-8',
    name: 'Avocado Toast',
    description: 'Toasted sourdough topped with creamy avocado.',
    price: '₹280',
    category: 'food',
  },
  {
    id: 'm-9',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie served warm.',
    price: '₹180',
    category: 'dessert',
  },
  {
    id: 'm-10',
    name: 'Classic Cheesecake',
    description: 'Creamy cheesecake with a buttery biscuit base.',
    price: '₹220',
    category: 'dessert',
  },
];

export const FAVORITE_PRODUCTS: FavoriteProduct[] = [
  {
    id: 'fav-1',
    name: 'Signature Cappuccino',
    description: 'A rich espresso base topped with perfectly textured milk foam.',
    price: '₹180',
    rating: '★★★★★',
    imageUrl: '/images/fav-cappuccino.webp',
    imageAlt: 'Signature Cappuccino with latte art',
  },
  {
    id: 'fav-2',
    name: 'Chocolate Delight',
    description: 'A decadent dessert created for serious chocolate lovers.',
    price: '₹220',
    rating: '★★★★★',
    imageUrl: '/images/fav-chocolate.webp',
    imageAlt: 'Rich artisan chocolate dessert',
  },
  {
    id: 'fav-3',
    name: 'Breakfast Plate',
    description: 'A satisfying café-style breakfast for slow and beautiful mornings.',
    price: '₹290',
    rating: '★★★★★',
    imageUrl: '/images/fav-breakfast.webp',
    imageAlt: 'Fresh cafe breakfast plate',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: '/images/gallery-1.webp',
    alt: 'Warm cafe interior corner',
    isLarge: true,
  },
  {
    id: 'gal-2',
    imageUrl: '/images/gallery-2.webp',
    alt: 'Rustic cafe dining table',
  },
  {
    id: 'gal-3',
    imageUrl: '/images/gallery-3.webp',
    alt: 'Freshly brewed artisan coffee',
  },
  {
    id: 'gal-4',
    imageUrl: '/images/gallery-4.webp',
    alt: 'Cozy restaurant seating',
  },
  {
    id: 'gal-5',
    imageUrl: '/images/gallery-5.webp',
    alt: 'Velvet lounge seating area',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Priya S.',
    role: 'Local Guide',
    rating: '★★★★★',
    quote: '"Absolutely loved the atmosphere. The coffee was excellent and the place has such a beautiful vibe. Definitely coming back!"',
    avatarUrl: '/images/avatar-priya.webp',
  },
  {
    id: 'rev-2',
    name: 'Rahul M.',
    role: 'Café Guest',
    rating: '★★★★★',
    quote: '"This is exactly the kind of café I was looking for. Great coffee, peaceful atmosphere and amazing desserts."',
    avatarUrl: '/images/avatar-rahul.webp',
  },
  {
    id: 'rev-3',
    name: 'Ananya K.',
    role: 'Regular Guest',
    rating: '★★★★★',
    quote: '"Beautiful interiors, friendly staff and delicious food. Perfect place for a relaxed evening with friends."',
    avatarUrl: '/images/avatar-ananya.webp',
  },
];

export const OPENING_HOURS: OpeningHourItem[] = [
  { day: 'Monday – Friday', time: '9:00 AM – 10:30 PM' },
  { day: 'Saturday', time: '9:00 AM – 11:30 PM' },
  { day: 'Sunday', time: '10:00 AM – 10:30 PM' },
];

export const CONTACT_INFO = {
  addressLine1: 'College Road, Near City Center',
  city: 'Nashik, Maharashtra',
  phone: '+91 98765 43210',
  email: 'hello@velvetbeancafe.com',
};
