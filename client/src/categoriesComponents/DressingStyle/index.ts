// Re-export main hub landing page
import DressingStyleLanding from './DressingStyleLanding';
export { DressingStyleLanding };
export default DressingStyleLanding;

// Re-export Category Pages
export { OutfitIdeasPage } from './pages/OutfitIdeasPage';
export { WardrobePlannerPage } from './pages/WardrobePlannerPage';
export { BudgetFashionShoppingPage } from './pages/BudgetFashionShoppingPage';
export { OccasionBasedStylingPage } from './pages/OccasionBasedStylingPage';

// Re-export Components
export * from './components/OutfitCard';
export * from './components/CategoryCard';
export * from './components/FilterBar';
export * from './components/ClothingItemCard';
export * from './components/ProductCard';
export * from './components/EmptyState';

// Re-export Data & Types
export * from './data/outfitData';
export * from './data/wardrobeData';
export * from './data/shoppingData';
export * from './data/occasionData';

// Re-export Storage Service
export * from './services/wardrobeStorage';

