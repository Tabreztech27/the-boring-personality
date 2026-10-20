export type ClothingCategory = 'tops' | 'bottoms' | 'shoes' | 'outerwear' | 'accessories';
export type SeasonType = 'All-Season' | 'Summer' | 'Winter' | 'Monsoon';

export interface ClothingItem {
  id: string;
  name: string;
  category: ClothingCategory;
  color: string;
  colorHex?: string;
  season: SeasonType;
  imageUrl: string;
  brand?: string;
  fit?: string;
  notes?: string;
  createdAt: string;
}

export interface SavedWardrobeOutfit {
  id: string;
  name: string;
  topId?: string;
  bottomId?: string;
  shoesId?: string;
  outerwearId?: string;
  accessoriesId?: string;
  occasion?: string;
  createdAt: string;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface DayOutfitPlan {
  day: DayOfWeek;
  outfitId?: string;
  topId?: string;
  bottomId?: string;
  shoesId?: string;
  outerwearId?: string;
  note?: string;
}

export interface EssentialChecklistItem {
  id: string;
  title: string;
  category: ClothingCategory;
  description: string;
  priority: 'Must-Have' | 'Recommended' | 'Versatile';
  checked: boolean;
}

export const WARDROBE_CATEGORIES: { id: ClothingCategory; label: string; icon: string }[] = [
  { id: 'tops', label: 'Tops, Shirts & T-Shirts', icon: '👕' },
  { id: 'bottoms', label: 'Jeans, Trousers & Shorts', icon: '👖' },
  { id: 'shoes', label: 'Shoes & Footwear', icon: '👟' },
  { id: 'outerwear', label: 'Jackets & Outerwear', icon: '🧥' },
  { id: 'accessories', label: 'Accessories', icon: '⌚' },
];

export const INITIAL_WARDROBE_ITEMS: ClothingItem[] = [
  // Tops
  {
    id: 'item-top-1',
    name: 'Classic White Crewneck Tee',
    category: 'tops',
    color: 'White',
    colorHex: '#FFFFFF',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    brand: 'Uniqlo Supima',
    fit: 'Regular Fit',
    notes: 'Go-to foundational tee for layering or solo wear.',
    createdAt: '2026-01-10',
  },
  {
    id: 'item-top-2',
    name: 'Sky Blue Oxford Button-Down',
    category: 'tops',
    color: 'Light Blue',
    colorHex: '#93C5FD',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    brand: 'Ralph Lauren',
    fit: 'Slim Fit',
    notes: 'Versatile shirt for office, dates, and smart casual.',
    createdAt: '2026-01-12',
  },
  {
    id: 'item-top-3',
    name: 'Washed Black Heavyweight Oversized Tee',
    category: 'tops',
    color: 'Washed Black',
    colorHex: '#27272A',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    brand: 'Zara Origins',
    fit: 'Oversized',
    notes: 'Streetwear staple, 280 GSM heavyweight cotton.',
    createdAt: '2026-01-15',
  },
  {
    id: 'item-top-4',
    name: 'Cream Knit Textured Polo',
    category: 'tops',
    color: 'Cream',
    colorHex: '#FEF3C7',
    season: 'Summer',
    imageUrl: 'https://images.unsplash.com/photo-1625910513413-722143159930?auto=format&fit=crop&w=600&q=80',
    brand: 'Massimo Dutti',
    fit: 'Slim Fit',
    notes: 'Elevated texture for brunch and summer evenings.',
    createdAt: '2026-02-01',
  },

  // Bottoms
  {
    id: 'item-bot-1',
    name: 'Deep Navy Tailored Chinos',
    category: 'bottoms',
    color: 'Navy Blue',
    colorHex: '#1E293B',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
    brand: 'Bonobos',
    fit: 'Slim Tapered',
    notes: 'High stretch, ideal for work and travel.',
    createdAt: '2026-01-10',
  },
  {
    id: 'item-bot-2',
    name: 'Dark Indigo Selvedge Denim',
    category: 'bottoms',
    color: 'Indigo',
    colorHex: '#1E3A8A',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
    brand: "Levi's 511",
    fit: 'Slim Straight',
    notes: 'Raw unwashed denim that molds to shape over time.',
    createdAt: '2026-01-14',
  },
  {
    id: 'item-bot-3',
    name: 'Sand Beige Pleated Trousers',
    category: 'bottoms',
    color: 'Beige',
    colorHex: '#D6C7A1',
    season: 'Summer',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
    brand: 'COS',
    fit: 'Relaxed Taper',
    notes: 'Single pleat front with ankle length crop.',
    createdAt: '2026-02-03',
  },
  {
    id: 'item-bot-4',
    name: 'Olive Multi-Pocket Cargo Pants',
    category: 'bottoms',
    color: 'Olive Green',
    colorHex: '#3F6212',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80',
    brand: 'Carhartt WIP',
    fit: 'Regular Fit',
    notes: 'Ripstop fabric, comfortable for daily streetwear.',
    createdAt: '2026-02-10',
  },

  // Shoes
  {
    id: 'item-shoe-1',
    name: 'Minimalist White Leather Low-Tops',
    category: 'shoes',
    color: 'White',
    colorHex: '#FFFFFF',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    brand: 'Common Projects / Stan Smith',
    fit: 'True to Size',
    notes: 'The most versatile footwear in existence.',
    createdAt: '2026-01-08',
  },
  {
    id: 'item-shoe-2',
    name: 'Cognac Suede Penny Loafers',
    category: 'shoes',
    color: 'Cognac Brown',
    colorHex: '#78350F',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
    brand: 'Meermin',
    fit: 'Regular',
    notes: 'No-sock loafers for smart-casual & dates.',
    createdAt: '2026-01-20',
  },
  {
    id: 'item-shoe-3',
    name: 'Black Leather Chelsea Boots',
    category: 'shoes',
    color: 'Black',
    colorHex: '#000000',
    season: 'Winter',
    imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80',
    brand: 'Thursday Boot Co.',
    fit: 'Snug Ankle',
    notes: 'Sleek look for winter outfits and dinners.',
    createdAt: '2026-02-05',
  },

  // Outerwear
  {
    id: 'item-out-1',
    name: 'Structured Navy Blazer',
    category: 'outerwear',
    color: 'Navy Blue',
    colorHex: '#1E293B',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=80',
    brand: 'Suitsupply',
    fit: 'Tailored Fit',
    notes: 'Half-canvassed Italian wool, unpadded shoulders.',
    createdAt: '2026-01-12',
  },
  {
    id: 'item-out-2',
    name: 'Matte Black Minimal Bomber Jacket',
    category: 'outerwear',
    color: 'Black',
    colorHex: '#18181B',
    season: 'Winter',
    imageUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80',
    brand: 'AllSaints',
    fit: 'Regular Fit',
    notes: 'Lightweight weather-resistant satin nylon.',
    createdAt: '2026-01-18',
  },
  {
    id: 'item-out-3',
    name: 'Camel Wool Overcoat',
    category: 'outerwear',
    color: 'Camel Tan',
    colorHex: '#B45309',
    season: 'Winter',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    brand: 'Mango Man',
    fit: 'Tailored',
    notes: 'Timeless outerwear piece for sharp winter styling.',
    createdAt: '2026-02-01',
  },

  // Accessories
  {
    id: 'item-acc-1',
    name: 'Silver Minimalist Steel Watch',
    category: 'accessories',
    color: 'Silver',
    colorHex: '#E2E8F0',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
    brand: 'Seiko / Tissot',
    fit: '39mm Dial',
    notes: 'Understated everyday companion.',
    createdAt: '2026-01-05',
  },
  {
    id: 'item-acc-2',
    name: 'Reversible Brown & Black Leather Belt',
    category: 'accessories',
    color: 'Brown / Black',
    colorHex: '#78350F',
    season: 'All-Season',
    imageUrl: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80',
    brand: 'Coach',
    fit: '32-34',
    notes: 'Full-grain leather with rotating brushed brass buckle.',
    createdAt: '2026-01-08',
  },
];

export const INITIAL_SAVED_OUTFITS: SavedWardrobeOutfit[] = [
  {
    id: 'saved-outfit-1',
    name: 'Sharp Office Friday',
    topId: 'item-top-2',
    bottomId: 'item-bot-1',
    shoesId: 'item-shoe-1',
    outerwearId: 'item-out-1',
    accessoriesId: 'item-acc-1',
    occasion: 'Work',
    createdAt: '2026-02-10',
  },
  {
    id: 'saved-outfit-2',
    name: 'Weekend Date Night',
    topId: 'item-top-4',
    bottomId: 'item-bot-3',
    shoesId: 'item-shoe-2',
    outerwearId: undefined,
    accessoriesId: 'item-acc-1',
    occasion: 'Date',
    createdAt: '2026-02-12',
  },
  {
    id: 'saved-outfit-3',
    name: 'Urban Street Casual',
    topId: 'item-top-3',
    bottomId: 'item-bot-4',
    shoesId: 'item-shoe-1',
    outerwearId: 'item-out-2',
    accessoriesId: undefined,
    occasion: 'Daily',
    createdAt: '2026-02-14',
  },
];

export const INITIAL_WEEKLY_CALENDAR: DayOutfitPlan[] = [
  {
    day: 'Monday',
    outfitId: 'saved-outfit-1',
    topId: 'item-top-2',
    bottomId: 'item-bot-1',
    shoesId: 'item-shoe-1',
    outerwearId: 'item-out-1',
    note: 'Weekly kickoff meeting & sprint review',
  },
  {
    day: 'Tuesday',
    topId: 'item-top-1',
    bottomId: 'item-bot-2',
    shoesId: 'item-shoe-1',
    outerwearId: 'item-out-2',
    note: 'Deep work & client coffee check-in',
  },
  {
    day: 'Wednesday',
    topId: 'item-top-2',
    bottomId: 'item-bot-3',
    shoesId: 'item-shoe-2',
    outerwearId: 'item-out-1',
    note: 'Midweek presentations',
  },
  {
    day: 'Thursday',
    topId: 'item-top-4',
    bottomId: 'item-bot-1',
    shoesId: 'item-shoe-2',
    note: 'After-work team dinner',
  },
  {
    day: 'Friday',
    outfitId: 'saved-outfit-2',
    topId: 'item-top-4',
    bottomId: 'item-bot-3',
    shoesId: 'item-shoe-2',
    note: 'Friday evening drinks and date night',
  },
  {
    day: 'Saturday',
    outfitId: 'saved-outfit-3',
    topId: 'item-top-3',
    bottomId: 'item-bot-4',
    shoesId: 'item-shoe-1',
    outerwearId: 'item-out-2',
    note: 'Weekend hangout, café & errands',
  },
  {
    day: 'Sunday',
    topId: 'item-top-1',
    bottomId: 'item-bot-2',
    shoesId: 'item-shoe-1',
    note: 'Relaxed Sunday morning brunch',
  },
];

export const INITIAL_WARDROBE_ESSENTIALS: EssentialChecklistItem[] = [
  {
    id: 'ess-1',
    title: 'Opaque Crisp White Crewneck T-Shirt',
    category: 'tops',
    description: 'A heavyweight, non-see-through white tee acts as the anchor for 70% of casual layering combinations.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-2',
    title: 'Sky Blue Oxford Button-Down (OCBD)',
    category: 'tops',
    description: 'Flattering collar roll that works effortlessly under blazers, sweaters, or worn open over tees.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-3',
    title: 'Dark Raw Indigo Jeans (Slim-Straight)',
    category: 'bottoms',
    description: 'No tears, no excessive distressing. Clean dark indigo denim bridges the gap between casual and formal.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-4',
    title: 'Navy or Charcoal Tailored Chinos',
    category: 'bottoms',
    description: 'Breathable alternative to denim that upgrades any casual outfit instantly.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-5',
    title: 'Minimalist Plain White Leather Sneakers',
    category: 'shoes',
    description: 'Low-top, unbranded or subtle branding. Matches chinos, suits, denim, and shorts.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-6',
    title: 'Dark Brown Leather Loafers or Chelsea Boots',
    category: 'shoes',
    description: 'The instant step-up for dates, dinners, interviews, and upscale events.',
    priority: 'Must-Have',
    checked: false,
  },
  {
    id: 'ess-7',
    title: 'Tailored Navy or Charcoal Blazer',
    category: 'outerwear',
    description: 'Unpadded or soft shoulders. The ultimate weapon to look sharp within 3 seconds.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-8',
    title: 'Matte Bomber Jacket or Denim Trucker',
    category: 'outerwear',
    description: 'Casual layering piece that adds masculine frame structure across chest and shoulders.',
    priority: 'Recommended',
    checked: false,
  },
  {
    id: 'ess-9',
    title: 'Camel Wool Overcoat',
    category: 'outerwear',
    description: 'Instantly adds authority and elegance in cold weather over any basic outfit.',
    priority: 'Recommended',
    checked: false,
  },
  {
    id: 'ess-10',
    title: 'Quality Leather Belt (Matches Shoes)',
    category: 'accessories',
    description: 'Never wear worn out synthetic peeling belts. Full-grain leather lasts a decade.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-11',
    title: 'Clean Minimal Dial Watch (Steel or Leather)',
    category: 'accessories',
    description: 'Signifies punctuality, attention to detail, and mature personal style.',
    priority: 'Must-Have',
    checked: true,
  },
  {
    id: 'ess-12',
    title: 'Signature Eau de Parfum Fragrance',
    category: 'accessories',
    description: 'Scent is the invisible layer of your outfit; choose woody, amber, or fresh citrus notes.',
    priority: 'Versatile',
    checked: false,
  },
];

