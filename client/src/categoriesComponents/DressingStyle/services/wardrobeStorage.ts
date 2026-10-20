import type {
  ClothingItem,
  SavedWardrobeOutfit,
  DayOutfitPlan,
  EssentialChecklistItem,
} from '../data/wardrobeData';
import {
  INITIAL_WARDROBE_ITEMS,
  INITIAL_SAVED_OUTFITS,
  INITIAL_WEEKLY_CALENDAR,
  INITIAL_WARDROBE_ESSENTIALS,
} from '../data/wardrobeData';

const STORAGE_KEYS = {
  WARDROBE_ITEMS: 'tbp_wardrobe_items',
  SAVED_OUTFITS: 'tbp_saved_outfits',
  WEEKLY_CALENDAR: 'tbp_weekly_calendar',
  CHECKLIST: 'tbp_wardrobe_checklist',
  FAVORITE_OUTFITS: 'tbp_favorite_outfits',
  SHOPPING_WISHLIST: 'tbp_shopping_wishlist',
};

// Safe localStorage wrapper
function getStoredJson<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return fallback;
  }
}

function setStoredJson<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error writing localStorage key "${key}":`, error);
  }
}

export const wardrobeService = {
  // Wardrobe Items
  getItems(): ClothingItem[] {
    return getStoredJson<ClothingItem[]>(STORAGE_KEYS.WARDROBE_ITEMS, INITIAL_WARDROBE_ITEMS);
  },

  addItem(item: Omit<ClothingItem, 'id' | 'createdAt'>): ClothingItem {
    const items = this.getItems();
    const newItem: ClothingItem = {
      ...item,
      id: `custom-item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newItem, ...items];
    setStoredJson(STORAGE_KEYS.WARDROBE_ITEMS, updated);
    return newItem;
  },

  updateItem(id: string, updates: Partial<ClothingItem>): ClothingItem | null {
    const items = this.getItems();
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return null;
    const updatedItem = { ...items[index], ...updates };
    items[index] = updatedItem;
    setStoredJson(STORAGE_KEYS.WARDROBE_ITEMS, items);
    return updatedItem;
  },

  deleteItem(id: string): boolean {
    const items = this.getItems();
    const filtered = items.filter((i) => i.id !== id);
    setStoredJson(STORAGE_KEYS.WARDROBE_ITEMS, filtered);
    return true;
  },

  resetItems(): ClothingItem[] {
    setStoredJson(STORAGE_KEYS.WARDROBE_ITEMS, INITIAL_WARDROBE_ITEMS);
    return INITIAL_WARDROBE_ITEMS;
  },

  // Saved Outfits
  getSavedOutfits(): SavedWardrobeOutfit[] {
    return getStoredJson<SavedWardrobeOutfit[]>(STORAGE_KEYS.SAVED_OUTFITS, INITIAL_SAVED_OUTFITS);
  },

  saveOutfit(outfit: Omit<SavedWardrobeOutfit, 'id' | 'createdAt'>): SavedWardrobeOutfit {
    const list = this.getSavedOutfits();
    const newOutfit: SavedWardrobeOutfit = {
      ...outfit,
      id: `outfit-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newOutfit, ...list];
    setStoredJson(STORAGE_KEYS.SAVED_OUTFITS, updated);
    return newOutfit;
  },

  deleteSavedOutfit(id: string): boolean {
    const list = this.getSavedOutfits();
    const filtered = list.filter((o) => o.id !== id);
    setStoredJson(STORAGE_KEYS.SAVED_OUTFITS, filtered);
    return true;
  },

  // Weekly Calendar
  getWeeklyCalendar(): DayOutfitPlan[] {
    return getStoredJson<DayOutfitPlan[]>(STORAGE_KEYS.WEEKLY_CALENDAR, INITIAL_WEEKLY_CALENDAR);
  },

  updateDayPlan(day: string, plan: Partial<DayOutfitPlan>): DayOutfitPlan[] {
    const calendar = this.getWeeklyCalendar();
    const updated = calendar.map((d) => (d.day === day ? { ...d, ...plan } : d));
    setStoredJson(STORAGE_KEYS.WEEKLY_CALENDAR, updated);
    return updated;
  },

  // Wardrobe Essentials Checklist
  getChecklist(): EssentialChecklistItem[] {
    return getStoredJson<EssentialChecklistItem[]>(STORAGE_KEYS.CHECKLIST, INITIAL_WARDROBE_ESSENTIALS);
  },

  toggleChecklistItem(id: string): EssentialChecklistItem[] {
    const list = this.getChecklist();
    const updated = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setStoredJson(STORAGE_KEYS.CHECKLIST, updated);
    return updated;
  },

  // Favorite Outfit Ideas
  getFavoriteOutfitIds(): string[] {
    return getStoredJson<string[]>(STORAGE_KEYS.FAVORITE_OUTFITS, ['outfit-1', 'outfit-3']);
  },

  toggleFavoriteOutfit(outfitId: string): string[] {
    const favs = this.getFavoriteOutfitIds();
    const updated = favs.includes(outfitId) ? favs.filter((id) => id !== outfitId) : [...favs, outfitId];
    setStoredJson(STORAGE_KEYS.FAVORITE_OUTFITS, updated);
    return updated;
  },

  // Shopping Wishlist
  getWishlist(): string[] {
    return getStoredJson<string[]>(STORAGE_KEYS.SHOPPING_WISHLIST, ['prod-1', 'prod-6']);
  },

  toggleWishlistItem(productId: string): string[] {
    const list = this.getWishlist();
    const updated = list.includes(productId) ? list.filter((id) => id !== productId) : [...list, productId];
    setStoredJson(STORAGE_KEYS.SHOPPING_WISHLIST, updated);
    return updated;
  },
};
