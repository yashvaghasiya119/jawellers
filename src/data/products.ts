import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    description: 'A timeless 18K white gold ring featuring a brilliant-cut diamond solitaire. Perfect as an engagement ring or a special occasion gift.',
    price: 2499.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/10917030/pexels-photo-10917030.jpeg',
      'https://images.pexels.com/photos/10916993/pexels-photo-10916993.jpeg',
      'https://images.pexels.com/photos/10917062/pexels-photo-10917062.jpeg',
      'https://images.pexels.com/photos/10917032/pexels-photo-10917032.jpeg'
    ],
    category: 'Rings',
    material: '18K White Gold',
    gemstone: 'Diamond',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 128,
    createdAt: '2023-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Sapphire Pendant Necklace',
    description: 'An elegant pendant necklace featuring a stunning blue sapphire surrounded by small diamonds, set in 14K white gold.',
    price: 1899.99,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg',
      'https://images.pexels.com/photos/9428836/pexels-photo-9428836.jpeg',
      'https://images.pexels.com/photos/9428837/pexels-photo-9428837.jpeg'
    ],
    category: 'Necklaces',
    material: '14K White Gold',
    gemstone: 'Sapphire, Diamond',
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 86,
    createdAt: '2023-02-20T14:15:00Z'
  },
  {
    id: '3',
    name: 'Pearl Drop Earrings',
    description: 'Sophisticated drop earrings featuring lustrous freshwater pearls suspended from 14K gold posts with small diamond accents.',
    price: 899.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/10917062/pexels-photo-10917062.jpeg',
      'https://images.pexels.com/photos/10916993/pexels-photo-10916993.jpeg',
      'https://images.pexels.com/photos/10917030/pexels-photo-10917030.jpeg',
      'https://images.pexels.com/photos/10917032/pexels-photo-10917032.jpeg'
    ],
    category: 'Earrings',
    material: '14K Gold',
    gemstone: 'Pearl, Diamond',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 64,
    createdAt: '2023-03-05T09:45:00Z'
  },
  {
    id: '4',
    name: 'Rose Gold Tennis Bracelet',
    description: 'A stunning tennis bracelet crafted in 18K rose gold, featuring a continuous line of brilliant-cut diamonds for a total of 3 carats.',
    price: 3299.99,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/18404098/pexels-photo-18404098/free-photo-of-close-up-of-hand-with-bracelet.jpeg',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg',
      'https://images.pexels.com/photos/9428836/pexels-photo-9428836.jpeg'
    ],
    category: 'Bracelets',
    material: '18K Rose Gold',
    gemstone: 'Diamond',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: 42,
    createdAt: '2023-04-12T11:20:00Z'
  },
  {
    id: '5',
    name: 'Vintage Emerald Ring',
    description: 'A vintage-inspired 14K yellow gold ring featuring a stunning emerald center stone surrounded by a halo of diamonds.',
    price: 1749.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/9428948/pexels-photo-9428948.jpeg',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg',
      'https://images.pexels.com/photos/9428836/pexels-photo-9428836.jpeg'
    ],
    category: 'Rings',
    material: '14K Yellow Gold',
    gemstone: 'Emerald, Diamond',
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 37,
    createdAt: '2023-05-18T15:10:00Z'
  },
  {
    id: '6',
    name: 'Diamond Stud Earrings',
    description: 'Classic diamond stud earrings set in 14K white gold, featuring a total of 1 carat of brilliant-cut diamonds.',
    price: 1199.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/8100457/pexels-photo-8100457.jpeg',
      'https://images.pexels.com/photos/10917062/pexels-photo-10917062.jpeg',
      'https://images.pexels.com/photos/10916993/pexels-photo-10916993.jpeg',
      'https://images.pexels.com/photos/10917030/pexels-photo-10917030.jpeg'
    ],
    category: 'Earrings',
    material: '14K White Gold',
    gemstone: 'Diamond',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 112,
    createdAt: '2023-06-25T08:30:00Z'
  },
  {
    id: '7',
    name: 'Ruby Halo Pendant',
    description: 'A luxurious pendant featuring a vibrant ruby center stone surrounded by a halo of diamonds, set in 18K white gold with matching chain.',
    price: 2099.99,
    discount: 5,
    images: [
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg',
      'https://images.pexels.com/photos/9428836/pexels-photo-9428836.jpeg',
      'https://images.pexels.com/photos/9428837/pexels-photo-9428837.jpeg'
    ],
    category: 'Necklaces',
    material: '18K White Gold',
    gemstone: 'Ruby, Diamond',
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 28,
    createdAt: '2023-07-07T13:50:00Z'
  },
  {
    id: '8',
    name: 'Gold Chain Bracelet',
    description: 'A sophisticated 18K gold chain bracelet with a modern, interlocking design. Perfect for both casual and formal occasions.',
    price: 1499.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      'https://images.pexels.com/photos/18404098/pexels-photo-18404098/free-photo-of-close-up-of-hand-with-bracelet.jpeg',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg'
    ],
    category: 'Bracelets',
    material: '18K Gold',
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 45,
    createdAt: '2023-08-14T16:40:00Z'
  },
  {
    id: '9',
    name: 'Three-Stone Diamond Ring',
    description: 'A stunning trilogy ring featuring three brilliant-cut diamonds set in platinum, symbolizing your past, present, and future together.',
    price: 3999.99,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg',
      'https://images.pexels.com/photos/9428948/pexels-photo-9428948.jpeg',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg'
    ],
    category: 'Rings',
    material: 'Platinum',
    gemstone: 'Diamond',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: 21,
    createdAt: '2023-09-03T10:15:00Z'
  },
  {
    id: '10',
    name: 'Amethyst Drop Earrings',
    description: 'Elegant drop earrings featuring pear-shaped amethysts suspended from 14K white gold chains with diamond accents.',
    price: 849.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/8100371/pexels-photo-8100371.jpeg',
      'https://images.pexels.com/photos/8100457/pexels-photo-8100457.jpeg',
      'https://images.pexels.com/photos/10917062/pexels-photo-10917062.jpeg',
      'https://images.pexels.com/photos/10916993/pexels-photo-10916993.jpeg'
    ],
    category: 'Earrings',
    material: '14K White Gold',
    gemstone: 'Amethyst, Diamond',
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 33,
    createdAt: '2023-10-22T14:05:00Z'
  },
  {
    id: '11',
    name: 'Pearl Strand Necklace',
    description: 'A classic strand of graduated Akoya pearls with a 14K white gold clasp. A timeless addition to any jewelry collection.',
    price: 1299.99,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg',
      'https://images.pexels.com/photos/9428835/pexels-photo-9428835.jpeg',
      'https://images.pexels.com/photos/9428836/pexels-photo-9428836.jpeg',
      'https://images.pexels.com/photos/9428837/pexels-photo-9428837.jpeg'
    ],
    category: 'Necklaces',
    material: '14K White Gold, Akoya Pearl',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: 57,
    createdAt: '2023-11-15T09:30:00Z'
  },
  {
    id: '12',
    name: 'Diamond Bangle Bracelet',
    description: 'A luxurious 18K white gold bangle bracelet adorned with a line of brilliant-cut diamonds for a touch of sparkle and elegance.',
    price: 2799.99,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/18404098/pexels-photo-18404098/free-photo-of-close-up-of-hand-with-bracelet.jpeg',
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      'https://images.pexels.com/photos/18404098/pexels-photo-18404098/free-photo-of-close-up-of-hand-with-bracelet.jpeg',
      'https://images.pexels.com/photos/9428834/pexels-photo-9428834.jpeg'
    ],
    category: 'Bracelets',
    material: '18K White Gold',
    gemstone: 'Diamond',
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: 19,
    createdAt: '2023-12-07T11:45:00Z'
  }
];