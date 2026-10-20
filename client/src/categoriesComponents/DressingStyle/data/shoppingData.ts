export type BudgetTier = 'Under ₹999' | '₹1,000 - ₹2,499' | '₹2,500 - ₹4,999' | 'Premium Investment';
export type ProductCategory = 'Tops' | 'Bottoms' | 'Footwear' | 'Outerwear' | 'Accessories';

export interface ShoppingProduct {
  id: string;
  title: string;
  brand: string;
  category: ProductCategory;
  budgetTier: BudgetTier;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  store: string;
  storeUrl?: string;
  fabric: string;
  whyItWorks: string;
  tags: string[];
  isStaffPick?: boolean;
}

export interface ShoppingTip {
  title: string;
  icon: string;
  summary: string;
  detail: string;
}

export const BUDGET_TIERS: BudgetTier[] = [
  'Under ₹999',
  '₹1,000 - ₹2,499',
  '₹2,500 - ₹4,999',
  'Premium Investment',
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Tops',
  'Bottoms',
  'Footwear',
  'Outerwear',
  'Accessories',
];

export const SHOPPING_PRODUCTS: ShoppingProduct[] = [
  {
    id: 'prod-1',
    title: 'Heavyweight Relaxed Supima Cotton Crewneck Tee',
    brand: 'Uniqlo / Basics Lab',
    category: 'Tops',
    budgetTier: 'Under ₹999',
    price: 790,
    originalPrice: 1290,
    discountPercentage: 39,
    rating: 4.8,
    reviewCount: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    store: 'Uniqlo India',
    fabric: '100% Supima Long-Staple Cotton (220 GSM)',
    whyItWorks: 'Thick enough to never show undershirts or nipples, retaining its collar structure after 30+ washes.',
    tags: ['Basic', 'Heavyweight', 'Essential', 'High CPW'],
    isStaffPick: true,
  },
  {
    id: 'prod-2',
    title: 'Essential Oxford Cotton Button-Down Shirt',
    brand: 'Marks & Spencer / H&M Premium',
    category: 'Tops',
    budgetTier: '₹1,000 - ₹2,499',
    price: 1899,
    originalPrice: 2799,
    discountPercentage: 32,
    rating: 4.6,
    reviewCount: 880,
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    store: 'Marks & Spencer',
    fabric: '100% Pure Oxford Weave Cotton',
    whyItWorks: 'Buttoned collar roll creates sharp silhouette whether tucked or untucked. Excellent drape.',
    tags: ['Formal', 'Smart Casual', 'Wrinkle-Resistant'],
    isStaffPick: true,
  },
  {
    id: 'prod-3',
    title: 'French Linen Relaxed Camp Collar Resort Shirt',
    brand: 'Westside / Zara Men',
    category: 'Tops',
    budgetTier: '₹1,000 - ₹2,499',
    price: 1699,
    originalPrice: 2299,
    discountPercentage: 26,
    rating: 4.5,
    reviewCount: 460,
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80',
    store: 'Westside Man',
    fabric: '100% European Flax Linen',
    whyItWorks: 'Natural cooling fiber that looks stylishly nonchalant even with natural wrinkles.',
    tags: ['Linen', 'Summer', 'Vacation', 'Resort'],
  },
  {
    id: 'prod-4',
    title: 'Tailored Smart Stretch Slim Chinos',
    brand: 'Snitch / Roadster Premium',
    category: 'Bottoms',
    budgetTier: 'Under ₹999',
    price: 949,
    originalPrice: 1599,
    discountPercentage: 40,
    rating: 4.4,
    reviewCount: 920,
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
    store: 'Snitch / Myntra',
    fabric: '98% Cotton, 2% Elastane Twill',
    whyItWorks: 'Incredible value for money with high four-way stretch and clean tailored taper to ankle.',
    tags: ['Chinos', 'Stretch', 'Budget King', 'Everyday'],
    isStaffPick: true,
  },
  {
    id: 'prod-5',
    title: 'Dark Raw Indigo Selvedge Clean Jeans',
    brand: 'Levi’s Red Loop / Flying Machine',
    category: 'Bottoms',
    budgetTier: '₹2,500 - ₹4,999',
    price: 3299,
    originalPrice: 4999,
    discountPercentage: 34,
    rating: 4.9,
    reviewCount: 2150,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
    store: 'Levi’s Store',
    fabric: '13oz Japanese Raw Indigo Denim',
    whyItWorks: 'Fades naturally according to your body movements; lasts 5+ years without fabric breakdown.',
    tags: ['Raw Denim', 'Selvedge', 'Investment', 'Durable'],
  },
  {
    id: 'prod-6',
    title: 'Minimalist Clean White Court Leather Sneakers',
    brand: 'Bata Red Label / Rare Rabbit',
    category: 'Footwear',
    budgetTier: '₹1,000 - ₹2,499',
    price: 2199,
    originalPrice: 3499,
    discountPercentage: 37,
    rating: 4.7,
    reviewCount: 630,
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    store: 'Ajio Luxe / Bata',
    fabric: 'Soft Nappa Leather Upper & Rubber Cupsole',
    whyItWorks: 'Clean unbranded look that rivals luxury Italian minimalist sneakers costing 10x more.',
    tags: ['White Sneakers', 'Clean', 'Versatile', 'Comfort'],
    isStaffPick: true,
  },
  {
    id: 'prod-7',
    title: 'Handcrafted Brown Suede Penny Loafers',
    brand: 'Hush Puppies / Escaro Royale',
    category: 'Footwear',
    budgetTier: '₹2,500 - ₹4,999',
    price: 3899,
    originalPrice: 5999,
    discountPercentage: 35,
    rating: 4.6,
    reviewCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
    store: 'Tata CLiQ Luxury',
    fabric: 'Split Cow Suede, Memory Foam Footbed',
    whyItWorks: 'Elevates basic jeans and tee into an intentional European smart-casual statement.',
    tags: ['Loafers', 'Suede', 'Formal', 'Date Ready'],
  },
  {
    id: 'prod-8',
    title: 'Matte Black Lightweight Urban Bomber',
    brand: 'Zara / Jack & Jones',
    category: 'Outerwear',
    budgetTier: '₹2,500 - ₹4,999',
    price: 2990,
    originalPrice: 4590,
    discountPercentage: 35,
    rating: 4.5,
    reviewCount: 480,
    imageUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80',
    store: 'Zara India',
    fabric: 'Water-Repellent Matte Technical Shell',
    whyItWorks: 'Clean collar without fluffy elastic creates athletic shoulder shape.',
    tags: ['Bomber', 'Layering', 'Windproof', 'Streetwear'],
  },
  {
    id: 'prod-9',
    title: 'Tailored Deconstructed Navy Blazer',
    brand: 'Park Avenue / Arrow New York',
    category: 'Outerwear',
    budgetTier: 'Premium Investment',
    price: 6499,
    originalPrice: 9999,
    discountPercentage: 35,
    rating: 4.9,
    reviewCount: 390,
    imageUrl: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=80',
    store: 'Shoppers Stop',
    fabric: 'Super 120s Fine Wool Blend',
    whyItWorks: 'Unlined back makes it lightweight enough for all-season Indian temperatures while keeping sharp lines.',
    tags: ['Blazer', 'Executive', 'Super 120s', 'High Status'],
  },
  {
    id: 'prod-10',
    title: 'Classic Fluted Steel Dress Watch with Sapphire Glass',
    brand: 'Casio Vintage / Timex Waterbury',
    category: 'Accessories',
    budgetTier: '₹1,000 - ₹2,499',
    price: 1995,
    originalPrice: 2995,
    discountPercentage: 33,
    rating: 4.8,
    reviewCount: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
    store: 'Casio Official / Amazon',
    fabric: 'Solid Stainless Steel, Sunburst Dial',
    whyItWorks: 'Looks like a ₹50,000 Swiss heritage piece on your wrist; indestructible Japanese quartz movement.',
    tags: ['Watch', 'Timeless', 'Steel', 'Must-Have'],
    isStaffPick: true,
  },
  {
    id: 'prod-11',
    title: 'Full-Grain Reversible Italian Leather Belt',
    brand: 'Woodland / Hidekraft',
    category: 'Accessories',
    budgetTier: 'Under ₹999',
    price: 899,
    originalPrice: 1499,
    discountPercentage: 40,
    rating: 4.6,
    reviewCount: 1120,
    imageUrl: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80',
    store: 'Myntra Luxe',
    fabric: '100% Genuine Top Grain Leather',
    whyItWorks: 'Reversible mechanism gives you black and brown options in one single durable accessory.',
    tags: ['Belt', 'Leather', 'Reversible', '2-in-1'],
  },
];

export const SHOPPING_TIPS: ShoppingTip[] = [
  {
    title: 'Cost-Per-Wear (CPW) Rule',
    icon: '📊',
    summary: 'Price is what you pay; value is how often you wear it.',
    detail: 'A ₹4,000 pair of raw denim worn 200 days a year costs ₹20 per wear. A trendy ₹900 graphic tee worn twice costs ₹450 per wear. Invest in daily foundations.',
  },
  {
    title: 'Check Fabric Composition First',
    icon: '🧵',
    summary: 'Never pay premium prices for 100% polyester shirts.',
    detail: 'Look for natural fibers: Cotton (100% or 98% + 2% elastane), French Linen, or Merino Wool. Polyester traps sweat odor and pills quickly.',
  },
  {
    title: 'Fit Trumps Brand Every Single Time',
    icon: '📐',
    summary: 'A ₹1,000 shirt tailored to your body beats a ₹10,000 ill-fitting designer shirt.',
    detail: 'Budget ₹300-₹500 for tailoring trousers and shirt sleeve adjustments. Custom tailoring transforms budget fast fashion into bespoke elegance.',
  },
  {
    title: 'Master The End-of-Season Sales',
    icon: '🏷️',
    summary: 'Buy winter wool in February; buy summer linen in September.',
    detail: 'Premium retailers slash prices up to 60-70% at season changeovers. Purchase timeless neutral basics (not trends) during these clearance periods.',
  },
];

