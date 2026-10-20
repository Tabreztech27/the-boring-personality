export interface OutfitItem {
  name: string;
  category: 'top' | 'bottom' | 'shoes' | 'outerwear' | 'accessories';
  color: string;
  brandOrNote?: string;
}

export interface Outfit {
  id: string;
  title: string;
  subCategory: string; // e.g., 'Casual Outfits', 'College Outfits', etc.
  style: 'Casual' | 'Smart Casual' | 'Formal' | 'Streetwear' | 'Minimalist' | 'Athleisure';
  occasion: 'Daily' | 'Work' | 'College' | 'Date' | 'Party' | 'Travel';
  season: 'All-Season' | 'Summer' | 'Winter' | 'Monsoon';
  budget: 'Budget-Friendly' | 'Mid-Range' | 'Premium';
  imageUrl: string;
  description: string;
  colorPalette: { name: string; hex: string }[];
  items: OutfitItem[];
  stylingTips: string[];
  tags: string[];
  likesCount: number;
}

export const OUTFIT_SUBCATEGORIES = [
  'All Outfits',
  'Casual Outfits',
  'College Outfits',
  'Office & Formal Outfits',
  'Streetwear',
  'Smart Casual',
  'Minimalist Outfits',
  'Summer, Winter & Monsoon Outfits',
  'Color Combinations',
  'Shirt, Trouser & Shoes Combinations',
  'Daily Outfit Inspiration',
] as const;

export const OUTFIT_DATA: Outfit[] = [
  {
    id: 'outfit-1',
    title: 'Minimalist Clean White & Navy Combo',
    subCategory: 'Minimalist Outfits',
    style: 'Minimalist',
    occasion: 'Daily',
    season: 'All-Season',
    budget: 'Budget-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    description: 'A timeless silhouette pairing a crisp crewneck tee with tailored navy chinos and low-profile white sneakers.',
    colorPalette: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Deep Navy', hex: '#1E293B' },
      { name: 'Slate Gray', hex: '#64748B' },
    ],
    items: [
      { name: 'Heavyweight Cotton Crewneck Tee', category: 'top', color: 'White', brandOrNote: '100% Ring-spun cotton' },
      { name: 'Slim-Tapered Stretch Chinos', category: 'bottom', color: 'Deep Navy', brandOrNote: 'Ankle break fit' },
      { name: 'Clean Leather Low-Top Sneakers', category: 'shoes', color: 'White', brandOrNote: 'Minimalist court sneaker' },
      { name: 'Silver Mesh Minimal Watch', category: 'accessories', color: 'Silver', brandOrNote: '38mm slim dial' },
    ],
    stylingTips: [
      'Ensure the white t-shirt is completely opaque and has a structured collar that does not bacon.',
      'Slightly roll the hem of the chinos once to showcase clean white sneakers.',
      'Keep accessories minimal — a simple silver or matte black watch is plenty.',
    ],
    tags: ['Minimalist', 'Timeless', 'Everyday', 'Clean'],
    likesCount: 342,
  },
  {
    id: 'outfit-2',
    title: 'Oversized Streetwear Layering',
    subCategory: 'Streetwear',
    style: 'Streetwear',
    occasion: 'Daily',
    season: 'Winter',
    budget: 'Mid-Range',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    description: 'Urban streetwear silhouette featuring an oversized drop-shoulder hoodie, relaxed cargo pants, and chunky retro sneakers.',
    colorPalette: [
      { name: 'Charcoal Black', hex: '#18181B' },
      { name: 'Sage Green', hex: '#52796F' },
      { name: 'Off White', hex: '#F3F4F6' },
    ],
    items: [
      { name: 'Boxy Heavyweight French Terry Hoodie', category: 'top', color: 'Washed Charcoal', brandOrNote: '450 GSM' },
      { name: 'Relaxed Multi-Pocket Cargos', category: 'bottom', color: 'Sage Green', brandOrNote: 'Drawstring hem' },
      { name: 'Retro Chunky Runners', category: 'shoes', color: 'Off-White / Gray', brandOrNote: 'Cushioned sole' },
      { name: 'Crossbody Sling Bag', category: 'accessories', color: 'Matte Black', brandOrNote: 'Cordura fabric' },
    ],
    stylingTips: [
      'Balance proportions: boxy top pairs best with relaxed or straight bottoms, avoid skinny trousers.',
      'Washed or vintage fabrics add texture and depth to dark tones.',
      'Add a stainless steel chain for a subtle streetwear edge.',
    ],
    tags: ['Streetwear', 'Oversized', 'Urban', 'Cargo'],
    likesCount: 489,
  },
  {
    id: 'outfit-3',
    title: 'Modern Executive Corporate Formal',
    subCategory: 'Office & Formal Outfits',
    style: 'Formal',
    occasion: 'Work',
    season: 'All-Season',
    budget: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'High-impact professional tailoring with a structured charcoal tailored blazer, Egyptian cotton shirt, and polished Oxford shoes.',
    colorPalette: [
      { name: 'Charcoal Gray', hex: '#374151' },
      { name: 'Sky Blue', hex: '#93C5FD' },
      { name: 'Cognac Brown', hex: '#78350F' },
    ],
    items: [
      { name: 'Tailored Twill Dress Shirt', category: 'top', color: 'Light Sky Blue', brandOrNote: 'Semi-spread collar' },
      { name: 'Charcoal Wool-Blend Suit Trousers', category: 'bottom', color: 'Charcoal Gray', brandOrNote: 'Flat-front cut' },
      { name: 'Full-Grain Leather Oxford Shoes', category: 'shoes', color: 'Cognac Brown', brandOrNote: 'Blake-stitched' },
      { name: 'Single-Breasted Notch Lapel Blazer', category: 'outerwear', color: 'Charcoal', brandOrNote: 'Structured shoulders' },
      { name: 'Matching Leather Belt & Dress Watch', category: 'accessories', color: 'Cognac Brown', brandOrNote: 'Buckle matches watch' },
    ],
    stylingTips: [
      'Rule of thumb: Always match leather color tones (brown belt matches brown shoes).',
      'The shirt cuff should extend roughly half an inch beyond your jacket sleeve.',
      'Opt for a sky blue or soft lavender shirt rather than stark white for a richer executive look.',
    ],
    tags: ['Corporate', 'Formal', 'Executive', 'Sharp'],
    likesCount: 512,
  },
  {
    id: 'outfit-4',
    title: 'Smart Casual Linen & Loafers',
    subCategory: 'Smart Casual',
    style: 'Smart Casual',
    occasion: 'Date',
    season: 'Summer',
    budget: 'Mid-Range',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    description: 'Effortlessly polished smart-casual look featuring a breathable linen shirt, tailored beige trousers, and suede penny loafers.',
    colorPalette: [
      { name: 'Olive Green', hex: '#3F6212' },
      { name: 'Beige / Sand', hex: '#D6C7A1' },
      { name: 'Tobacco Brown', hex: '#854D0E' },
    ],
    items: [
      { name: 'Pure French Linen Button-Down Shirt', category: 'top', color: 'Earthy Olive', brandOrNote: 'Relaxed collar' },
      { name: 'Tailored Cropped Chinos', category: 'bottom', color: 'Warm Sand / Beige', brandOrNote: 'Pleated front' },
      { name: 'Suede Penny Loafers', category: 'shoes', color: 'Tobacco Brown', brandOrNote: 'No-show socks' },
      { name: 'Tortoiseshell Sunglasses', category: 'accessories', color: 'Amber / Brown', brandOrNote: 'Classic wayfarer shape' },
    ],
    stylingTips: [
      'Linen naturally wrinkles; embrace the relaxed texture rather than over-ironing.',
      'Keep the top two buttons unbuttoned and casually cuff sleeves twice to the forearm.',
      'Wear invisible no-show socks with loafers to maintain clean ankle lines.',
    ],
    tags: ['Smart Casual', 'Date Night', 'Summer', 'Loafers'],
    likesCount: 423,
  },
  {
    id: 'outfit-5',
    title: 'Campus Ready College Layering',
    subCategory: 'College Outfits',
    style: 'Casual',
    occasion: 'College',
    season: 'All-Season',
    budget: 'Budget-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable yet stylish campus wear featuring an open flannel overshirt, graphic or blank tee, slim denim, and canvas sneakers.',
    colorPalette: [
      { name: 'Forest Green Plaid', hex: '#14532D' },
      { name: 'Heather Gray', hex: '#9CA3AF' },
      { name: 'Washed Black', hex: '#27272A' },
    ],
    items: [
      { name: 'Classic Plaid Flannel Overshirt', category: 'outerwear', color: 'Forest Green / Black Plaid', brandOrNote: 'Brushed cotton' },
      { name: 'Heather Gray Crewneck Tee', category: 'top', color: 'Heather Gray', brandOrNote: 'Standard fit' },
      { name: 'Tapered Black Raw Denim Jeans', category: 'bottom', color: 'Washed Black', brandOrNote: '12oz stretch denim' },
      { name: 'High-Top Canvas Sneakers', category: 'shoes', color: 'Black & White', brandOrNote: 'Vintage style' },
      { name: 'Minimal Canvas Backpack', category: 'accessories', color: 'Matte Olive', brandOrNote: 'Padded laptop sleeve' },
    ],
    stylingTips: [
      'Flannels work best unbuttoned over a neutral base tee (gray, white, or black).',
      'High-top sneakers look best when the jeans sit comfortably right at the sneaker collar without excessive pooling.',
      'Great for unpredictable college temperature changes — remove the flannel when warm.',
    ],
    tags: ['College', 'Flannel', 'Casual', 'Layering'],
    likesCount: 295,
  },
  {
    id: 'outfit-6',
    title: 'Monsoon Proof Techwear & Combat Boots',
    subCategory: 'Summer, Winter & Monsoon Outfits',
    style: 'Streetwear',
    occasion: 'Daily',
    season: 'Monsoon',
    budget: 'Mid-Range',
    imageUrl: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80',
    description: 'Weather-ready tactical streetwear with a waterproof lightweight windbreaker, quick-dry joggers, and water-repellent boots.',
    colorPalette: [
      { name: 'Storm Grey', hex: '#4B5563' },
      { name: 'Pitch Black', hex: '#09090B' },
      { name: 'Neon Amber', hex: '#F59E0B' },
    ],
    items: [
      { name: 'DWR Water-Repellent Anorak Windbreaker', category: 'outerwear', color: 'Storm Grey & Black', brandOrNote: 'Sealed zippers' },
      { name: 'Moisture-Wicking Athletic Tee', category: 'top', color: 'Charcoal Black', brandOrNote: 'Anti-odor tech' },
      { name: 'Tapered Water-Resistant Cargo Joggers', category: 'bottom', color: 'Pitch Black', brandOrNote: 'Gusseted crotch' },
      { name: 'Lug-Sole Waterproof Chelsea or Combat Boots', category: 'shoes', color: 'Black', brandOrNote: 'Grippy Vibram sole' },
    ],
    stylingTips: [
      'Avoid 100% heavy cotton in monsoon — wet cotton stays damp for hours. Opt for nylon blends.',
      'Tuck jogger cuffs neatly into boots to prevent mud splatter.',
      'Carry a small compact waterproof sling bag to protect electronics.',
    ],
    tags: ['Monsoon', 'Techwear', 'Waterproof', 'Boots'],
    likesCount: 219,
  },
  {
    id: 'outfit-7',
    title: 'Earthy Monochrome Color Combination',
    subCategory: 'Color Combinations',
    style: 'Smart Casual',
    occasion: 'Daily',
    season: 'All-Season',
    budget: 'Mid-Range',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    description: 'A harmonious tonal outfit utilizing chocolate brown, camel, and cream tones to build an expensive-looking visual palette.',
    colorPalette: [
      { name: 'Camel Tan', hex: '#C29B38' },
      { name: 'Rich Cream', hex: '#FEF3C7' },
      { name: 'Espresso Brown', hex: '#451A03' },
    ],
    items: [
      { name: 'Merino Wool Knit Polo Shirt', category: 'top', color: 'Rich Cream', brandOrNote: 'Ribbed hems' },
      { name: 'Suede Trucker Jacket', category: 'outerwear', color: 'Camel Tan', brandOrNote: 'Antique brass buttons' },
      { name: 'Wool Trousers with Side Tabs', category: 'bottom', color: 'Espresso Brown', brandOrNote: 'Tailored fit' },
      { name: 'Dark Brown Leather Chelsea Boots', category: 'shoes', color: 'Dark Espresso', brandOrNote: 'Burnished toe' },
    ],
    stylingTips: [
      'Tonal styling looks most sophisticated when combining contrasting textures (knit, suede, smooth wool).',
      'Keep the lightest shade closest to your face (cream polo) to brighten your complexion.',
      'Brown shoes look significantly richer with warm earth tones than stark black shoes.',
    ],
    tags: ['Color Theory', 'Earthy Tones', 'Tonal Dressing', 'Polo'],
    likesCount: 388,
  },
  {
    id: 'outfit-8',
    title: 'The Perfect Shirt, Trouser & Shoes Formula',
    subCategory: 'Shirt, Trouser & Shoes Combinations',
    style: 'Smart Casual',
    occasion: 'Work',
    season: 'All-Season',
    budget: 'Budget-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    description: 'The golden triad formula: Crisp white Oxford cloth button-down, charcoal grey tailored trousers, and minimalist white sneakers or loafers.',
    colorPalette: [
      { name: 'Crisp White', hex: '#F9FAFB' },
      { name: 'Charcoal Grey', hex: '#374151' },
      { name: 'Tan Brown', hex: '#B45309' },
    ],
    items: [
      { name: 'Classic Oxford Cloth Button Down (OCBD)', category: 'top', color: 'White', brandOrNote: 'Medium-weight cotton' },
      { name: 'Mid-Rise Pleated Wool-Blend Trousers', category: 'bottom', color: 'Charcoal Grey', brandOrNote: 'Cropped hem' },
      { name: 'Brown Leather Horsebit Loafers', category: 'shoes', color: 'Tan Brown', brandOrNote: 'Burnished leather' },
      { name: 'Woven Brown Leather Belt', category: 'accessories', color: 'Tan Brown', brandOrNote: 'Brushed metal hardware' },
    ],
    stylingTips: [
      'The OCBD is the undisputed king of men’s versatile tops; it can be dressed up or down seamlessly.',
      'A pleated trouser with a slight taper creates a flattering V-taper frame.',
      'When in doubt about shoes, tan or dark cognac leather complements charcoal trousers better than black.',
    ],
    tags: ['Combinations', 'OCBD', 'Formula', 'Essential'],
    likesCount: 620,
  },
  {
    id: 'outfit-9',
    title: 'Weekend Casual Bomber & White Sneaker',
    subCategory: 'Casual Outfits',
    style: 'Casual',
    occasion: 'Daily',
    season: 'Winter',
    budget: 'Mid-Range',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate weekend casual look: Matte black bomber jacket layered over a textured waffle knit shirt with washed blue denim.',
    colorPalette: [
      { name: 'Matte Black', hex: '#111827' },
      { name: 'Washed Indigo', hex: '#2563EB' },
      { name: 'Clean White', hex: '#FFFFFF' },
    ],
    items: [
      { name: 'Minimalist Lightweight Bomber Jacket', category: 'outerwear', color: 'Matte Black', brandOrNote: 'Ribbed collar' },
      { name: 'Waffle-Knit Long Sleeve Henley', category: 'top', color: 'Heather Stone', brandOrNote: '3-button placket' },
      { name: 'Medium-Wash Tapered Jeans', category: 'bottom', color: 'Indigo Blue', brandOrNote: 'Subtle fading' },
      { name: 'Low-Top Clean White Leather Sneakers', category: 'shoes', color: 'White', brandOrNote: 'Gum sole accent' },
    ],
    stylingTips: [
      'A bomber jacket should hit exactly at your belt line; anything longer looks like an oversized parka.',
      'Henley buttons allow you to regulate breathability and create casual visual interest at the neck.',
      'Ensure jeans are hemmed or pin-rolled to avoid messy bunches above the sneakers.',
    ],
    tags: ['Casual', 'Bomber', 'Weekend', 'Denim'],
    likesCount: 440,
  },
  {
    id: 'outfit-10',
    title: 'Daily Inspiration: The Coffee Run Look',
    subCategory: 'Daily Outfit Inspiration',
    style: 'Athleisure',
    occasion: 'Daily',
    season: 'All-Season',
    budget: 'Budget-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&q=80',
    description: 'Elevated athleisure for quick errands, morning coffee, or casual travel. Combines tailored joggers with a clean quarter-zip pullover.',
    colorPalette: [
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Oatmeal Heather', hex: '#E5E7EB' },
      { name: 'Chalk White', hex: '#F3F4F6' },
    ],
    items: [
      { name: 'Quarter-Zip Structured Pullover', category: 'top', color: 'Oatmeal Heather', brandOrNote: 'Brushed fleece interior' },
      { name: 'Tailored Tech Joggers', category: 'bottom', color: 'Deep Navy', brandOrNote: 'Zippered pockets' },
      { name: 'Sport Lifestyle Trainers', category: 'shoes', color: 'Chalk White / Navy', brandOrNote: 'Breathable knit' },
      { name: 'Unstructured Cotton Dad Cap', category: 'accessories', color: 'Navy Blue', brandOrNote: 'Embroidered crest' },
    ],
    stylingTips: [
      'The difference between gym clothes and elevated athleisure is fit and clean silhouette.',
      'Stick to structured fabrics that hold their shape rather than baggy sweatpants.',
      'Keep your lifestyle sneakers clean and un-scuffed for an intentional appearance.',
    ],
    tags: ['Athleisure', 'Coffee Run', 'Comfort', 'Quarter-Zip'],
    likesCount: 310,
  },
  {
    id: 'outfit-11',
    title: 'Winter Tailored Wool Overcoat & Turtleneck',
    subCategory: 'Summer, Winter & Monsoon Outfits',
    style: 'Smart Casual',
    occasion: 'Date',
    season: 'Winter',
    budget: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    description: 'A commanding winter style statement pairing a camel wool overcoat with a ribbed black turtleneck and Chelsea boots.',
    colorPalette: [
      { name: 'Camel Tan', hex: '#B45309' },
      { name: 'Onyx Black', hex: '#18181B' },
      { name: 'Dark Charcoal', hex: '#27272A' },
    ],
    items: [
      { name: 'Double-Faced Wool Camel Overcoat', category: 'outerwear', color: 'Camel Brown', brandOrNote: 'Knee-length cut' },
      { name: 'Fine-Gauge Black Merino Turtleneck', category: 'top', color: 'Onyx Black', brandOrNote: 'Fitted neck' },
      { name: 'Tailored Charcoal Wool Trousers', category: 'bottom', color: 'Dark Charcoal', brandOrNote: 'Slim straight' },
      { name: 'Leather Chelsea Boots', category: 'shoes', color: 'Black Polished Leather', brandOrNote: 'Elastic gusset' },
    ],
    stylingTips: [
      'The camel overcoat creates instant high-status visual contrast against an all-black base.',
      'A fine merino turtleneck flatters the jawline and eliminates the need for a scarf.',
      'Ensure the overcoat leaves enough room in the shoulders to wear over knitwear without pulling.',
    ],
    tags: ['Winter', 'Overcoat', 'Turtleneck', 'Sophisticated'],
    likesCount: 578,
  },
  {
    id: 'outfit-12',
    title: 'Breezy Resort Summer Cuban Collar',
    subCategory: 'Summer, Winter & Monsoon Outfits',
    style: 'Casual',
    occasion: 'Travel',
    season: 'Summer',
    budget: 'Budget-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    description: 'Breezy vacation and warm summer look with an open camp-collar patterned shirt, relaxed linen drawstring pants, and woven espadrilles.',
    colorPalette: [
      { name: 'Terracotta Rust', hex: '#C2410C' },
      { name: 'Ivory White', hex: '#FFFBEB' },
      { name: 'Espadrille Jute', hex: '#D97706' },
    ],
    items: [
      { name: 'Printed Cuban / Camp Collar Shirt', category: 'top', color: 'Terracotta & Ivory Geometric', brandOrNote: 'Rayon / Tencel blend' },
      { name: 'Wide-Leg Linen Drawstring Trousers', category: 'bottom', color: 'Ivory White', brandOrNote: 'Elastic waist' },
      { name: 'Suede & Jute Sole Espadrilles', category: 'shoes', color: 'Sand Tan', brandOrNote: 'Breathable canvas interior' },
      { name: 'Woven Straw Fedora / Panama Hat', category: 'accessories', color: 'Natural Tan', brandOrNote: 'Black grosgrain band' },
    ],
    stylingTips: [
      'Camp collars sit flat against the clavicle, creating a flattering summer neckline.',
      'Tencel or Rayon fabric drapes beautifully and flows in the breeze while keeping you cool.',
      'Espadrilles can be worn with the back folded down like casual mules.',
    ],
    tags: ['Summer', 'Cuban Collar', 'Vacation', 'Resort'],
    likesCount: 395,
  },
];

