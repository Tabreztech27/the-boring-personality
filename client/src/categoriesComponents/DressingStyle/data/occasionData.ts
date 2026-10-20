export type FormalityLevel = 'Casual' | 'Smart Casual' | 'Business Casual' | 'Business Formal' | 'Black Tie' | 'Traditional / Festive';

export interface OccasionGuide {
  id: string;
  title: string;
  category: 'Weddings & Festive' | 'Career & Interviews' | 'Dating & Social' | 'Parties & Nightlife' | 'Travel & Casual';
  formality: FormalityLevel;
  icon: string;
  summary: string;
  imageUrl: string;
  outfitFormula: {
    top: string;
    bottom: string;
    outerwear?: string;
    shoes: string;
    accessories: string[];
    fragranceVibe: string;
  };
  colorPalette: { name: string; hex: string }[];
  dos: string[];
  donts: string[];
  proTips: string[];
}

export const OCCASION_CATEGORIES = [
  'All Occasions',
  'Weddings & Festive',
  'Career & Interviews',
  'Dating & Social',
  'Parties & Nightlife',
  'Travel & Casual',
] as const;

export const OCCASION_DATA: OccasionGuide[] = [
  {
    id: 'occ-1',
    title: 'Indian Wedding Reception & Cocktail Night',
    category: 'Weddings & Festive',
    formality: 'Traditional / Festive',
    icon: '👑',
    summary: 'A refined fusion of modern tailoring and royal elegance without outshining the groom.',
    imageUrl: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Tailored Bandhgala (Jodhpuri Suit) or Silk Kurta with asymmetric hem',
      bottom: 'Churidar or slim-cut tapered trousers in matching or contrasting tone',
      outerwear: 'Embroidered Nehru Jacket or Velvet Sherwani jacket',
      shoes: 'Handcrafted Mojaris or Burnished Leather Monk Straps',
      accessories: ['Pocket square in raw silk', 'Antique silver or brass brooch', 'Classic dress watch'],
      fragranceVibe: 'Rich Oud, Saffron, Amber, and Smoky Cardamom',
    },
    colorPalette: [
      { name: 'Midnight Blue', hex: '#0F172A' },
      { name: 'Emerald Green', hex: '#064E3B' },
      { name: 'Royal Gold', hex: '#D97706' },
      { name: 'Deep Burgundy', hex: '#881337' },
    ],
    dos: [
      'Iron or steam raw silk and velvet to maintain royal drape.',
      'Wear leather soles on formal shoes or traditional juttis.',
      'Coordinate the metal finishes of your brooch, watch buckle, and cufflinks.',
    ],
    donts: [
      'Avoid wearing plain white or loud bright red as an attendee (often reserved for the wedding couple).',
      'Never wear everyday casual loafers or sneakers with traditional ethnic wear.',
      'Avoid excessive glitter or synthetic polyester shiny fabrics.',
    ],
    proTips: [
      'A deep midnight blue or wine velvet Nehru jacket over an ivory silk kurta is universally flattering and photograph-friendly.',
      'Ensure the shoulder seam of your Bandhgala sits squarely on your shoulder point.',
    ],
  },
  {
    id: 'occ-2',
    title: 'High-Stakes Job Interview & Corporate Pitch',
    category: 'Career & Interviews',
    formality: 'Business Formal',
    icon: '💼',
    summary: 'Transmit confidence, competence, and reliability from the first 5 seconds you enter the room.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Crisp White or Sky Blue Spread-Collar Twill Dress Shirt',
      bottom: 'Charcoal Grey or Dark Navy Tailored Wool Trousers',
      outerwear: 'Single-breasted 2-button Navy or Charcoal Blazer',
      shoes: 'Cap-toe Leather Oxford Shoes (Black or Dark Brown)',
      accessories: ['Silk knit tie (subtle burgundy or navy)', 'Full-grain matching belt', 'Minimal dial watch'],
      fragranceVibe: 'Clean Vetiver, Citrus Bergamot, or Crisp Cedar (Light application)',
    },
    colorPalette: [
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Charcoal Grey', hex: '#374151' },
      { name: 'Sky Blue', hex: '#93C5FD' },
      { name: 'Crisp White', hex: '#F9FAFB' },
    ],
    dos: [
      'Ensure shirt collar points stay crisp using metal collar stays.',
      'Shine your leather shoes the night before.',
      'Leave the bottom button of your suit jacket unbuttoned at all times.',
    ],
    donts: [
      'Do not wear loud novelty ties, crazy patterned socks, or heavy cologne.',
      'Never wear a black suit for daytime corporate interviews unless it is finance law.',
      'Avoid unbuttoned shirt collars when wearing a blazer in a conservative interview.',
    ],
    proTips: [
      'Navy communicates trust and team cooperation; charcoal communicates analytical authority.',
      'Tailor the trouser hem to a "half break" so the fabric lightly rests on your shoe laces.',
    ],
  },
  {
    id: 'occ-3',
    title: 'First Date & Intimate Evening Dinner',
    category: 'Dating & Social',
    formality: 'Smart Casual',
    icon: '🍷',
    summary: 'Approachably stylish, touchable fabrics, and understated masculine magnetism.',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Knit Polo with open spread collar or soft textured Linen Shirt',
      bottom: 'Clean-cut Charcoal Chinos or Dark Indigo Slim Denim',
      outerwear: 'Suede Trucker Jacket or unstructured Chore Coat',
      shoes: 'Cognac Suede Penny Loafers or pristine White Leather Sneakers',
      accessories: ['Understated leather strap watch', 'Subtle silver wrist cuff or ring'],
      fragranceVibe: 'Warm Tonka Bean, Vanilla, Cardamom, or Tobacco Leather',
    },
    colorPalette: [
      { name: 'Warm Olive', hex: '#3F6212' },
      { name: 'Sand Khaki', hex: '#D6C7A1' },
      { name: 'Chocolate Brown', hex: '#451A03' },
      { name: 'Cream', hex: '#FEF3C7' },
    ],
    dos: [
      'Wear tactile fabrics (suede, waffle knit, linen) that feel natural and inviting.',
      'Roll sleeves to your mid-forearm to display forearms and watch subtly.',
      'Apply 2-3 sprays of fragrance on pulse points (neck, wrists) 30 minutes before meeting.',
    ],
    donts: [
      'Do not wear stiff formal suits — it creates unnecessary emotional distance.',
      'Avoid loud brand logos plastered across your chest.',
      'Never wear gym athletic sneakers to an evening dinner venue.',
    ],
    proTips: [
      'An unbuttoned textured suede jacket over a cream knit polo strikes the perfect balance between relaxed and high-effort.',
      'Ensure clean, trimmed fingernails and well-groomed facial hair.',
    ],
  },
  {
    id: 'occ-4',
    title: 'Weekend Brunch & Café Hangout',
    category: 'Travel & Casual',
    formality: 'Casual',
    icon: '☕',
    summary: 'Effortless daytime relaxed aesthetics with curated color harmony and breezy comfort.',
    imageUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Camp-collar patterned short sleeve or heavyweight cream tee',
      bottom: 'Relaxed linen trousers or pleated gurkha shorts',
      shoes: 'Clean retro court sneakers or canvas espadrilles',
      accessories: ['Wayfarer or round tortoiseshell sunglasses', 'Canvas tote bag or mini crossbody'],
      fragranceVibe: 'Crisp Citrus, Neroli, Aquatic Sea Salt, and Mint',
    },
    colorPalette: [
      { name: 'Terracotta', hex: '#C2410C' },
      { name: 'Off-White', hex: '#F3F4F6' },
      { name: 'Washed Sage', hex: '#84A98C' },
      { name: 'Mocha', hex: '#78350F' },
    ],
    dos: [
      'Embrace light color palettes like off-white, olive, sage, and pale blue in natural daylight.',
      'Wear sunglasses that flatter your face shape.',
      'Ensure casual shorts hit 1-2 inches above the knee.',
    ],
    donts: [
      'Avoid heavy black leather boots or thick wool coats in daytime brunch settings.',
      'Do not wear cargo boardshorts or baggy gym sweatpants.',
    ],
    proTips: [
      'A short-sleeve camp collar shirt left unbuttoned over a white ribbed tank top is the ultimate modern summer flex.',
    ],
  },
  {
    id: 'occ-5',
    title: 'High-Energy Club, Lounge & Nightlife',
    category: 'Parties & Nightlife',
    formality: 'Smart Casual',
    icon: '🍸',
    summary: 'Bold, dark, textured styling built to handle dim moody lighting and crowd energy.',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Silk-blend or viscose patterned dark shirt with 2 buttons unbuttoned',
      bottom: 'Slim cropped Black Trousers or Coated Black Denim',
      outerwear: 'Black Leather Biker Jacket or Slim Matte Bomber',
      shoes: 'Polished Black Leather Chelsea Boots',
      accessories: ['Layered silver chains', 'Statement signet ring', 'Black dial watch'],
      fragranceVibe: 'Spicy Amber, Cinnamon, Leather, or Boozy Vanilla (Long-lasting projection)',
    },
    colorPalette: [
      { name: 'Onyx Black', hex: '#09090B' },
      { name: 'Gunmetal Silver', hex: '#94A3B8' },
      { name: 'Deep Crimson', hex: '#991B1B' },
      { name: 'Dark Plum', hex: '#581C87' },
    ],
    dos: [
      'Opt for dark monochromatic tones with pops of silver metallic hardware.',
      'Choose breathable fabrics like viscose/tencel because clubs get hot quickly.',
      'Wear Chelsea boots with a slim leg opening for elongated silhouettes.',
    ],
    donts: [
      'Avoid light cream or white trousers that easily get stained by spilled drinks.',
      'Avoid sandals, flip-flops, or running sneakers that fail club dress codes.',
    ],
    proTips: [
      'A black leather biker jacket instantly elevates posture and creates wide shoulder visual geometry.',
    ],
  },
  {
    id: 'occ-6',
    title: 'Long-Haul Flight & Airport Travel Look',
    category: 'Travel & Casual',
    formality: 'Casual',
    icon: '✈️',
    summary: 'First-class aesthetics with maximum long-haul seating mobility and temperature versatility.',
    imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&q=80',
    outfitFormula: {
      top: 'Breathable Heavyweight Cotton Tee under a Quarter-Zip Pullover',
      bottom: 'Tailored Tech Joggers or Stretch Travel Chinos with drawstring',
      outerwear: 'Lightweight Packable Down Vest or Bomber Jacket',
      shoes: 'Slip-on Leather Loafers or Easy-to-remove Lifestyle Trainers',
      accessories: ['Noise-cancelling headphones', 'Quality leather weekender bag', 'Passport holder'],
      fragranceVibe: 'Clean subtle Musk or Soap-fresh Iris (Avoid heavy projection on planes)',
    },
    colorPalette: [
      { name: 'Heather Charcoal', hex: '#374151' },
      { name: 'Navy Blue', hex: '#1E293B' },
      { name: 'Oatmeal', hex: '#E5E7EB' },
    ],
    dos: [
      'Wear easily removable slip-on shoes for airport security checkpoints.',
      'Dress in 3 layers (tee, sweater, light jacket) to adjust to cold airplane cabin AC.',
      'Choose wrinkle-resistant stretch travel fabrics.',
    ],
    donts: [
      'Never wear stiff raw denim or tight belts for flights longer than 2 hours.',
      'Avoid bulky metallic accessories that repeatedly trigger metal detectors.',
    ],
    proTips: [
      'Tailored tech joggers with tapered cuffs keep you feeling like you are in sweatpants while looking like tailored trousers.',
    ],
  },
];

