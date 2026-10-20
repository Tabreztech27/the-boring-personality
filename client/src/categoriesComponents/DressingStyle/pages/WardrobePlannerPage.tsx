import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPlus,
  FaTshirt,
  FaCalendarAlt,
  FaCheckSquare,
  FaMagic,
  FaBookmark,
  FaTimes,
  FaSearch,
  FaTrash,
  FaSave,
} from 'react-icons/fa';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import type {
  ClothingItem,
  ClothingCategory,
  SavedWardrobeOutfit,
  DayOutfitPlan,
  EssentialChecklistItem,
  DayOfWeek,
  SeasonType,
} from '../data/wardrobeData';
import {
  WARDROBE_CATEGORIES,
} from '../data/wardrobeData';
import { ClothingItemCard } from '../components/ClothingItemCard';
import { EmptyState } from '../components/EmptyState';
import { wardrobeService } from '../services/wardrobeStorage';

type ActiveTab = 'wardrobe' | 'builder' | 'saved' | 'calendar' | 'checklist';

const PRESET_SAMPLE_IMAGES: { label: string; url: string; category: ClothingCategory }[] = [
  { label: 'White Crewneck Tee', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80', category: 'tops' },
  { label: 'Blue Oxford Shirt', url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80', category: 'tops' },
  { label: 'Navy Chinos', url: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80', category: 'bottoms' },
  { label: 'Dark Raw Denim', url: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80', category: 'bottoms' },
  { label: 'White Low-Tops', url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80', category: 'shoes' },
  { label: 'Brown Loafers', url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80', category: 'shoes' },
  { label: 'Navy Blazer', url: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=80', category: 'outerwear' },
  { label: 'Black Bomber', url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80', category: 'outerwear' },
  { label: 'Steel Watch', url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80', category: 'accessories' },
];

export const WardrobePlannerPage: React.FC = () => {
  const navigate = useNavigate();

  // Active Tab
  const [activeTab, setActiveTab] = useState<ActiveTab>('wardrobe');

  // Core Data loaded from Service
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [savedOutfits, setSavedOutfits] = useState<SavedWardrobeOutfit[]>([]);
  const [calendar, setCalendar] = useState<DayOutfitPlan[]>([]);
  const [checklist, setChecklist] = useState<EssentialChecklistItem[]>([]);

  // Filtering & Search in Wardrobe
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [seasonFilter, setSeasonFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Add / Edit Item Modal
  const [isItemModalOpen, setIsItemModalOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<ClothingItem | null>(null);
  const [itemForm, setItemForm] = useState<{
    name: string;
    category: ClothingCategory;
    color: string;
    colorHex: string;
    season: SeasonType;
    imageUrl: string;
    brand: string;
    fit: string;
    notes: string;
  }>({
    name: '',
    category: 'tops',
    color: 'White',
    colorHex: '#FFFFFF',
    season: 'All-Season',
    imageUrl: '',
    brand: '',
    fit: 'Regular Fit',
    notes: '',
  });

  // Outfit Builder State
  const [builderTop, setBuilderTop] = useState<ClothingItem | null>(null);
  const [builderBottom, setBuilderBottom] = useState<ClothingItem | null>(null);
  const [builderShoes, setBuilderShoes] = useState<ClothingItem | null>(null);
  const [builderOuterwear, setBuilderOuterwear] = useState<ClothingItem | null>(null);
  const [builderName, setBuilderName] = useState<string>('');
  const [builderOccasion, setBuilderOccasion] = useState<string>('Casual');

  // Assign to Day Modal
  const [assigningDay, setAssigningDay] = useState<DayOfWeek | null>(null);
  const [selectedOutfitToAssign, setSelectedOutfitToAssign] = useState<string>('');
  const [dayNoteInput, setDayNoteInput] = useState<string>('');

  // Initial Data Load
  useEffect(() => {
    setItems(wardrobeService.getItems());
    setSavedOutfits(wardrobeService.getSavedOutfits());
    setCalendar(wardrobeService.getWeeklyCalendar());
    setChecklist(wardrobeService.getChecklist());
  }, []);

  // Filtered wardrobe items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
      if (seasonFilter !== 'all' && item.season !== seasonFilter && item.season !== 'All-Season') return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBrand = (item.brand || '').toLowerCase().includes(q);
        const matchesColor = item.color.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesColor) return false;
      }
      return true;
    });
  }, [items, categoryFilter, seasonFilter, searchQuery]);

  // Open modal for new item
  const handleOpenAddModal = () => {
    setEditingItem(null);
    setItemForm({
      name: '',
      category: 'tops',
      color: 'White',
      colorHex: '#FFFFFF',
      season: 'All-Season',
      imageUrl: PRESET_SAMPLE_IMAGES[0].url,
      brand: '',
      fit: 'Regular Fit',
      notes: '',
    });
    setIsItemModalOpen(true);
  };

  // Open modal to edit existing item
  const handleOpenEditModal = (item: ClothingItem) => {
    setEditingItem(item);
    setItemForm({
      name: item.name,
      category: item.category,
      color: item.color,
      colorHex: item.colorHex || '#FFFFFF',
      season: item.season,
      imageUrl: item.imageUrl,
      brand: item.brand || '',
      fit: item.fit || 'Regular Fit',
      notes: item.notes || '',
    });
    setIsItemModalOpen(true);
  };

  // Save item (add or update)
  const handleSaveItemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemForm.name.trim()) return;

    const imgToUse = itemForm.imageUrl.trim() || PRESET_SAMPLE_IMAGES[0].url;

    if (editingItem) {
      wardrobeService.updateItem(editingItem.id, {
        ...itemForm,
        imageUrl: imgToUse,
      });
    } else {
      wardrobeService.addItem({
        ...itemForm,
        imageUrl: imgToUse,
      });
    }

    setItems(wardrobeService.getItems());
    setIsItemModalOpen(false);
  };

  // Delete item
  const handleDeleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this clothing item?')) {
      wardrobeService.deleteItem(id);
      setItems(wardrobeService.getItems());
    }
  };

  // Outfit builder: Save custom outfit
  const handleSaveCustomOutfit = () => {
    if (!builderName.trim()) {
      alert('Please enter a name for this outfit combination.');
      return;
    }
    if (!builderTop && !builderBottom) {
      alert('Please select at least a top or a bottom to build an outfit.');
      return;
    }

    wardrobeService.saveOutfit({
      name: builderName,
      topId: builderTop?.id,
      bottomId: builderBottom?.id,
      shoesId: builderShoes?.id,
      outerwearId: builderOuterwear?.id,
      occasion: builderOccasion,
    });

    setSavedOutfits(wardrobeService.getSavedOutfits());
    setBuilderName('');
    alert(`Outfit "${builderName}" saved to your collection!`);
    setActiveTab('saved');
  };

  // Delete saved outfit
  const handleDeleteSavedOutfit = (id: string) => {
    if (window.confirm('Delete this saved outfit?')) {
      wardrobeService.deleteSavedOutfit(id);
      setSavedOutfits(wardrobeService.getSavedOutfits());
    }
  };

  // Assign to day
  const handleConfirmDayAssignment = () => {
    if (!assigningDay) return;
    const outfit = savedOutfits.find((o) => o.id === selectedOutfitToAssign);

    wardrobeService.updateDayPlan(assigningDay, {
      outfitId: outfit?.id,
      topId: outfit?.topId,
      bottomId: outfit?.bottomId,
      shoesId: outfit?.shoesId,
      outerwearId: outfit?.outerwearId,
      note: dayNoteInput,
    });

    setCalendar(wardrobeService.getWeeklyCalendar());
    setAssigningDay(null);
    setSelectedOutfitToAssign('');
    setDayNoteInput('');
  };

  // Toggle checklist item
  const handleToggleChecklist = (id: string) => {
    const updated = wardrobeService.toggleChecklistItem(id);
    setChecklist(updated);
  };

  // Checklist score
  const completedCount = checklist.filter((i) => i.checked).length;
  const checklistPercentage = Math.round((completedCount / (checklist.length || 1)) * 100);

  // Helper to find clothing item by ID
  const getItemById = (id?: string) => items.find((i) => i.id === id);

  return (
    <div className="min-h-screen bg-[#070B1A] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/dressing-style')}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group py-1.5 px-3 rounded-xl bg-[#111827] border border-[#1f2937]"
            >
              <FaArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Dressing Style Hub</span>
            </button>
            <span className="text-gray-600">/</span>
            <span className="text-sm text-[#A78BFA] font-medium">Wardrobe Planner</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/dressing-style/outfit-ideas')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Outfit Ideas
            </button>
            <button
              onClick={() => navigate('/dressing-style/budget-shopping')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Budget Shopping
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] via-[#0B1120] to-[#070B1A] border border-[#1f2937] p-6 sm:p-10 mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-semibold text-[#C4B5FD] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                Category 02 • Interactive Wardrobe OS
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Wardrobe <span className="text-[#8B5CF6]">Planner</span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                Digitize your entire wardrobe, build cohesive outfits piece-by-piece, organize your weekly 7-day
                outfit schedule, and track essential baseline garments.
              </p>
            </div>

            <button
              onClick={handleOpenAddModal}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white font-semibold text-sm shadow-xl shadow-[#8B5CF6]/25 hover:scale-105 transition-all duration-300 shrink-0"
            >
              <FaPlus size={13} />
              <span>Add Clothing Item</span>
            </button>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#1f2937] scrollbar-none">
          <button
            onClick={() => setActiveTab('wardrobe')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'wardrobe'
                ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#111827]'
            }`}
          >
            <FaTshirt size={14} />
            <span>My Wardrobe ({items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'builder'
                ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#111827]'
            }`}
          >
            <FaMagic size={14} />
            <span>Outfit Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'saved'
                ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#111827]'
            }`}
          >
            <FaBookmark size={13} />
            <span>Saved Outfits ({savedOutfits.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#111827]'
            }`}
          >
            <FaCalendarAlt size={13} />
            <span>Weekly Calendar (7 Days)</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                : 'text-gray-400 hover:text-white hover:bg-[#111827]'
            }`}
          >
            <FaCheckSquare size={13} />
            <span>Essentials Checklist ({checklistPercentage}%)</span>
          </button>
        </div>

        {/* TAB 1: MY WARDROBE */}
        {activeTab === 'wardrobe' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  categoryFilter === 'all'
                    ? 'bg-[#8B5CF6]/20 border border-[#8B5CF6] text-white'
                    : 'bg-[#111827] border border-[#1f2937] text-gray-400 hover:text-white'
                }`}
              >
                All Categories ({items.length})
              </button>
              {WARDROBE_CATEGORIES.map((cat) => {
                const count = items.filter((i) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                      categoryFilter === cat.id
                        ? 'bg-[#8B5CF6]/20 border border-[#8B5CF6] text-white'
                        : 'bg-[#111827] border border-[#1f2937] text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-gray-400 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Search and Secondary Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <div className="relative flex-1 w-full">
                <FaSearch size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search wardrobe by item name, brand, or color..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <select
                aria-label="Filter by season"
                value={seasonFilter}
                onChange={(e) => setSeasonFilter(e.target.value)}
                className="py-2 px-3.5 text-xs sm:text-sm rounded-xl bg-[#111827] border border-[#1f2937] text-gray-300 w-full sm:w-auto"
              >
                <option value="all">All Seasons</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Monsoon">Monsoon</option>
                <option value="All-Season">All-Season</option>
              </select>
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredItems.map((item) => (
                  <ClothingItemCard
                    key={item.id}
                    item={item}
                    onEdit={handleOpenEditModal}
                    onDelete={handleDeleteItem}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Clothing Items Found"
                message="No items match your filter criteria. Add your first item to build a digital twin of your closet!"
                actionText="Add New Item"
                onAction={handleOpenAddModal}
              />
            )}
          </div>
        )}

        {/* TAB 2: OUTFIT BUILDER */}
        {activeTab === 'builder' && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Live Preview Panel */}
            <div className="lg:col-span-5 bg-[#0B1120] border border-[#1f2937] rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FaMagic className="text-[#A78BFA]" />
                    Outfit Combination Preview
                  </h3>
                  <button
                    onClick={() => {
                      setBuilderTop(null);
                      setBuilderBottom(null);
                      setBuilderShoes(null);
                      setBuilderOuterwear(null);
                    }}
                    className="text-xs text-gray-400 hover:text-white"
                  >
                    Clear Slots
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Outerwear Slot */}
                  <div className="p-3 rounded-2xl bg-[#111827] border border-[#1f2937] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/40 overflow-hidden shrink-0 border border-white/5 flex items-center justify-center text-gray-500">
                        {builderOuterwear ? (
                          <img src={builderOuterwear.imageUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          '🧥'
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A78BFA] font-bold uppercase">Outerwear (Optional)</span>
                        <p className="text-sm font-semibold text-white">
                          {builderOuterwear ? builderOuterwear.name : 'Select a jacket/blazer below'}
                        </p>
                      </div>
                    </div>
                    {builderOuterwear && (
                      <button onClick={() => setBuilderOuterwear(null)} className="text-gray-500 hover:text-white p-1">
                        <FaTimes size={12} />
                      </button>
                    )}
                  </div>

                  {/* Top Slot */}
                  <div className="p-3 rounded-2xl bg-[#111827] border border-[#1f2937] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/40 overflow-hidden shrink-0 border border-white/5 flex items-center justify-center text-gray-500">
                        {builderTop ? (
                          <img src={builderTop.imageUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          '👕'
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A78BFA] font-bold uppercase">Top / Shirt / Tee</span>
                        <p className="text-sm font-semibold text-white">
                          {builderTop ? builderTop.name : 'Select a top below'}
                        </p>
                      </div>
                    </div>
                    {builderTop && (
                      <button onClick={() => setBuilderTop(null)} className="text-gray-500 hover:text-white p-1">
                        <FaTimes size={12} />
                      </button>
                    )}
                  </div>

                  {/* Bottom Slot */}
                  <div className="p-3 rounded-2xl bg-[#111827] border border-[#1f2937] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/40 overflow-hidden shrink-0 border border-white/5 flex items-center justify-center text-gray-500">
                        {builderBottom ? (
                          <img src={builderBottom.imageUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          '👖'
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A78BFA] font-bold uppercase">Bottom / Jeans / Chinos</span>
                        <p className="text-sm font-semibold text-white">
                          {builderBottom ? builderBottom.name : 'Select bottoms below'}
                        </p>
                      </div>
                    </div>
                    {builderBottom && (
                      <button onClick={() => setBuilderBottom(null)} className="text-gray-500 hover:text-white p-1">
                        <FaTimes size={12} />
                      </button>
                    )}
                  </div>

                  {/* Shoes Slot */}
                  <div className="p-3 rounded-2xl bg-[#111827] border border-[#1f2937] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black/40 overflow-hidden shrink-0 border border-white/5 flex items-center justify-center text-gray-500">
                        {builderShoes ? (
                          <img src={builderShoes.imageUrl} alt="" className="w-full h-full object-cover" />
                        ) : (
                          '👟'
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A78BFA] font-bold uppercase">Footwear</span>
                        <p className="text-sm font-semibold text-white">
                          {builderShoes ? builderShoes.name : 'Select shoes below'}
                        </p>
                      </div>
                    </div>
                    {builderShoes && (
                      <button onClick={() => setBuilderShoes(null)} className="text-gray-500 hover:text-white p-1">
                        <FaTimes size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Save Form */}
              <div className="mt-6 pt-5 border-t border-[#1f2937] space-y-3">
                <input
                  type="text"
                  value={builderName}
                  onChange={(e) => setBuilderName(e.target.value)}
                  placeholder="Name this outfit (e.g. Sharp Date Night)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />

                <div className="flex items-center gap-3">
                  <select
                    aria-label="Outfit Occasion"
                    value={builderOccasion}
                    onChange={(e) => setBuilderOccasion(e.target.value)}
                    className="py-2.5 px-3 rounded-xl bg-[#111827] border border-[#1f2937] text-xs text-white"
                  >
                    <option value="Casual">Casual</option>
                    <option value="Smart Casual">Smart Casual</option>
                    <option value="Work">Work / Corporate</option>
                    <option value="Date">Date Night</option>
                    <option value="Party">Party</option>
                    <option value="College">College</option>
                  </select>

                  <button
                    onClick={handleSaveCustomOutfit}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition"
                  >
                    <FaSave size={12} />
                    <span>Save to Wardrobe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Closet Picker Panel */}
            <div className="lg:col-span-7">
              <h3 className="text-base font-bold text-white mb-2">Select Items from Your Wardrobe</h3>
              <p className="text-xs text-gray-400 mb-4">Click any piece to slot it into your live outfit combination.</p>

              {/* Tops Picker */}
              <div className="mb-6">
                <p className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">1. Choose Top</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.filter((i) => i.category === 'tops').map((top) => (
                    <ClothingItemCard
                      key={top.id}
                      item={top}
                      selectable
                      selected={builderTop?.id === top.id}
                      onSelect={(item) => setBuilderTop(item)}
                    />
                  ))}
                </div>
              </div>

              {/* Bottoms Picker */}
              <div className="mb-6">
                <p className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">2. Choose Bottom</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.filter((i) => i.category === 'bottoms').map((bot) => (
                    <ClothingItemCard
                      key={bot.id}
                      item={bot}
                      selectable
                      selected={builderBottom?.id === bot.id}
                      onSelect={(item) => setBuilderBottom(item)}
                    />
                  ))}
                </div>
              </div>

              {/* Shoes Picker */}
              <div className="mb-6">
                <p className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">3. Choose Shoes</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.filter((i) => i.category === 'shoes').map((shoe) => (
                    <ClothingItemCard
                      key={shoe.id}
                      item={shoe}
                      selectable
                      selected={builderShoes?.id === shoe.id}
                      onSelect={(item) => setBuilderShoes(item)}
                    />
                  ))}
                </div>
              </div>

              {/* Outerwear Picker */}
              <div>
                <p className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">4. Choose Outerwear (Optional)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.filter((i) => i.category === 'outerwear').map((out) => (
                    <ClothingItemCard
                      key={out.id}
                      item={out}
                      selectable
                      selected={builderOuterwear?.id === out.id}
                      onSelect={(item) => setBuilderOuterwear(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SAVED OUTFITS */}
        {activeTab === 'saved' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Your Saved Outfits</h3>
                <p className="text-xs text-gray-400 mt-1">Pre-built ready-to-wear outfits saved from your wardrobe.</p>
              </div>

              <button
                onClick={() => setActiveTab('builder')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD] text-xs font-semibold hover:bg-[#8B5CF6] hover:text-white transition"
              >
                <FaPlus size={11} />
                <span>Build New Outfit</span>
              </button>
            </div>

            {savedOutfits.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {savedOutfits.map((outfit) => {
                  const top = getItemById(outfit.topId);
                  const bottom = getItemById(outfit.bottomId);
                  const shoes = getItemById(outfit.shoesId);
                  const outerwear = getItemById(outfit.outerwearId);

                  return (
                    <div
                      key={outfit.id}
                      className="rounded-2xl bg-[#0B1120] border border-[#1f2937] p-5 flex flex-col justify-between hover:border-[#8B5CF6]/40 transition shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30">
                            {outfit.occasion || 'Casual'}
                          </span>
                          <button
                            onClick={() => handleDeleteSavedOutfit(outfit.id)}
                            className="text-gray-500 hover:text-rose-400 p-1 transition"
                            title="Delete outfit"
                          >
                            <FaTrash size={12} />
                          </button>
                        </div>

                        <h4 className="text-lg font-bold text-white">{outfit.name}</h4>

                        {/* Visual pieces row */}
                        <div className="grid grid-cols-4 gap-2 my-4">
                          {[top, bottom, shoes, outerwear].map((p, idx) => (
                            <div
                              key={idx}
                              className="aspect-square rounded-xl bg-[#111827] border border-white/5 overflow-hidden flex items-center justify-center"
                            >
                              {p ? (
                                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" title={p.name} />
                              ) : (
                                <span className="text-xs text-gray-600">—</span>
                              )}
                            </div>
                          ))}
                        </div>

                        <ul className="text-xs space-y-1 text-gray-400">
                          {top && <li>• <span className="text-gray-300">{top.name}</span></li>}
                          {bottom && <li>• <span className="text-gray-300">{bottom.name}</span></li>}
                          {shoes && <li>• <span className="text-gray-300">{shoes.name}</span></li>}
                          {outerwear && <li>• <span className="text-gray-300">{outerwear.name}</span></li>}
                        </ul>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#1f2937] flex items-center justify-between">
                        <span className="text-[10px] text-gray-500">Created {outfit.createdAt}</span>
                        <button
                          onClick={() => {
                            setSelectedOutfitToAssign(outfit.id);
                            setAssigningDay('Monday');
                          }}
                          className="text-xs font-semibold text-[#A78BFA] hover:text-white transition flex items-center gap-1"
                        >
                          <FaCalendarAlt size={11} />
                          <span>Assign to Week</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptyState
                title="No Saved Outfits Yet"
                message="Use the Outfit Builder to combine your shirts, pants, and shoes into saved outfits ready for any occasion."
                actionText="Go to Outfit Builder"
                onAction={() => setActiveTab('builder')}
              />
            )}
          </div>
        )}

        {/* TAB 4: WEEKLY CALENDAR */}
        {activeTab === 'calendar' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Weekly Outfit Calendar</h3>
                <p className="text-xs text-gray-400 mt-1">Plan your outfits Monday through Sunday to eliminate morning decision fatigue.</p>
              </div>

              <div className="text-xs text-[#A78BFA] bg-[#8B5CF6]/10 px-3 py-1.5 rounded-xl border border-[#8B5CF6]/20">
                ✨ 100% of your outfits are planned ahead
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {calendar.map((plan) => {
                const outfit = savedOutfits.find((o) => o.id === plan.outfitId);
                const top = getItemById(plan.topId);
                const bottom = getItemById(plan.bottomId);
                const shoes = getItemById(plan.shoesId);
                const outerwear = getItemById(plan.outerwearId);

                return (
                  <div
                    key={plan.day}
                    className="rounded-2xl bg-[#0B1120] border border-[#1f2937] p-4 flex flex-col justify-between hover:border-[#8B5CF6]/40 transition min-h-[300px]"
                  >
                    <div>
                      {/* Day Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#1f2937]">
                        <h4 className="font-bold text-white text-sm">{plan.day}</h4>
                        <button
                          onClick={() => {
                            setAssigningDay(plan.day);
                            setSelectedOutfitToAssign(plan.outfitId || '');
                            setDayNoteInput(plan.note || '');
                          }}
                          className="text-[11px] text-[#A78BFA] hover:text-white transition font-medium"
                        >
                          Edit
                        </button>
                      </div>

                      {/* Outfit title */}
                      <p className="text-xs font-semibold text-white mt-2 truncate">
                        {outfit ? outfit.name : 'Custom Selection'}
                      </p>

                      {/* Mini visual thumbnails */}
                      <div className="grid grid-cols-2 gap-1.5 my-3">
                        <div className="aspect-square rounded-lg bg-[#111827] overflow-hidden flex items-center justify-center">
                          {top ? <img src={top.imageUrl} alt="" className="w-full h-full object-cover" /> : '👕'}
                        </div>
                        <div className="aspect-square rounded-lg bg-[#111827] overflow-hidden flex items-center justify-center">
                          {bottom ? <img src={bottom.imageUrl} alt="" className="w-full h-full object-cover" /> : '👖'}
                        </div>
                        <div className="aspect-square rounded-lg bg-[#111827] overflow-hidden flex items-center justify-center">
                          {shoes ? <img src={shoes.imageUrl} alt="" className="w-full h-full object-cover" /> : '👟'}
                        </div>
                        <div className="aspect-square rounded-lg bg-[#111827] overflow-hidden flex items-center justify-center">
                          {outerwear ? <img src={outerwear.imageUrl} alt="" className="w-full h-full object-cover" /> : '🧥'}
                        </div>
                      </div>

                      {/* Notes */}
                      {plan.note && (
                        <p className="text-[11px] text-gray-400 italic bg-[#111827] p-2 rounded-lg border border-white/5">
                          "{plan.note}"
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setAssigningDay(plan.day);
                        setSelectedOutfitToAssign(plan.outfitId || '');
                        setDayNoteInput(plan.note || '');
                      }}
                      className="w-full mt-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#1f2937] text-gray-300 text-[11px] font-medium transition"
                    >
                      Change Look
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: ESSENTIALS CHECKLIST */}
        {activeTab === 'checklist' && (
          <div className="max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="p-6 rounded-3xl bg-[#0B1120] border border-[#1f2937] mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Classic Men’s Wardrobe Essentials</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    The 12 timeless anchor garments that allow you to build 100+ interchangeable outfits.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#A78BFA]">{checklistPercentage}%</span>
                  <p className="text-[11px] text-gray-500">{completedCount} of {checklist.length} items collected</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 rounded-full bg-[#111827] overflow-hidden border border-[#1f2937]">
                <div
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] transition-all duration-500 rounded-full"
                  style={{ width: `${checklistPercentage}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleToggleChecklist(item.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    item.checked
                      ? 'bg-[#111827]/70 border-[#8B5CF6]/40'
                      : 'bg-[#0B1120] border-[#1f2937] hover:border-gray-600'
                  }`}
                >
                  <div
                    className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      item.checked
                        ? 'bg-[#8B5CF6] text-white shadow-md'
                        : 'border border-gray-600 bg-[#111827]'
                    }`}
                  >
                    {item.checked && <FaCheckSquare size={13} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm sm:text-base font-bold ${item.checked ? 'text-white line-through opacity-70' : 'text-white'}`}>
                        {item.title}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          item.priority === 'Must-Have'
                            ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                            : item.priority === 'Recommended'
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ADD / EDIT CLOTHING ITEM */}
      {isItemModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1120] border border-[#1f2937] shadow-2xl p-6 sm:p-8 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#1f2937] mb-6">
              <h3 className="text-xl font-bold text-white">
                {editingItem ? 'Edit Clothing Item' : 'Add Clothing Item'}
              </h3>
              <button
                onClick={() => setIsItemModalOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveItemSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Garment Name *
                </label>
                <input
                  type="text"
                  required
                  value={itemForm.name}
                  onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                  placeholder="e.g. Heavyweight White Supima Tee"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              {/* Category & Season */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Category *
                  </label>
                  <select
                    value={itemForm.category}
                    onChange={(e) => setItemForm({ ...itemForm, category: e.target.value as ClothingCategory })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                  >
                    <option value="tops">Tops & Shirts</option>
                    <option value="bottoms">Jeans & Trousers</option>
                    <option value="shoes">Shoes</option>
                    <option value="outerwear">Jackets & Outerwear</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Season *
                  </label>
                  <select
                    value={itemForm.season}
                    onChange={(e) => setItemForm({ ...itemForm, season: e.target.value as SeasonType })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                  >
                    <option value="All-Season">All-Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Monsoon">Monsoon</option>
                  </select>
                </div>
              </div>

              {/* Color & Color Picker */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Color Name
                  </label>
                  <input
                    type="text"
                    value={itemForm.color}
                    onChange={(e) => setItemForm({ ...itemForm, color: e.target.value })}
                    placeholder="e.g. Navy Blue, Beige, Olive"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Color Swatch
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={itemForm.colorHex}
                      onChange={(e) => setItemForm({ ...itemForm, colorHex: e.target.value })}
                      className="w-10 h-10 rounded-xl bg-transparent border-0 cursor-pointer p-0"
                    />
                    <span className="text-xs text-gray-400 font-mono">{itemForm.colorHex}</span>
                  </div>
                </div>
              </div>

              {/* Brand & Fit */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Brand (Optional)
                  </label>
                  <input
                    type="text"
                    value={itemForm.brand}
                    onChange={(e) => setItemForm({ ...itemForm, brand: e.target.value })}
                    placeholder="e.g. Uniqlo, Levi's"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Fit (Optional)
                  </label>
                  <input
                    type="text"
                    value={itemForm.fit}
                    onChange={(e) => setItemForm({ ...itemForm, fit: e.target.value })}
                    placeholder="e.g. Slim, Oversized, Tapered"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
              </div>

              {/* Image URL & Preset Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Image URL
                </label>
                <input
                  type="url"
                  value={itemForm.imageUrl}
                  onChange={(e) => setItemForm({ ...itemForm, imageUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />

                <p className="text-[10px] text-gray-500 mt-1 mb-2">Or click a preset photo:</p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {PRESET_SAMPLE_IMAGES.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setItemForm({ ...itemForm, imageUrl: preset.url })}
                      className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10 hover:border-[#8B5CF6] transition"
                      title={preset.label}
                    >
                      <img src={preset.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Notes
                </label>
                <input
                  type="text"
                  value={itemForm.notes}
                  onChange={(e) => setItemForm({ ...itemForm, notes: e.target.value })}
                  placeholder="e.g. Needs gentle cold wash, perfect for dates"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#111827] border border-[#1f2937] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsItemModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#111827] text-gray-400 text-xs font-semibold hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white text-xs font-semibold hover:shadow-lg transition"
                >
                  {editingItem ? 'Save Changes' : 'Add Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ASSIGN TO WEEKLY CALENDAR */}
      {assigningDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl bg-[#0B1120] border border-[#1f2937] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f2937] mb-4">
              <h3 className="text-lg font-bold text-white">Assign Outfit to {assigningDay}</h3>
              <button onClick={() => setAssigningDay(null)} className="text-gray-400 hover:text-white">
                <FaTimes size={14} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Select Saved Outfit
                </label>
                <select
                  value={selectedOutfitToAssign}
                  onChange={(e) => setSelectedOutfitToAssign(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white"
                >
                  <option value="">-- Choose an outfit --</option>
                  {savedOutfits.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.name} ({o.occasion || 'Casual'})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Day Event / Weather Note
                </label>
                <input
                  type="text"
                  value={dayNoteInput}
                  onChange={(e) => setDayNoteInput(e.target.value)}
                  placeholder="e.g. Afternoon client presentation & rain forecast"
                  className="w-full p-2.5 rounded-xl bg-[#111827] border border-[#1f2937] text-sm text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setAssigningDay(null)}
                  className="px-4 py-2 rounded-xl bg-[#111827] text-gray-400 text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDayAssignment}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white text-xs font-semibold"
                >
                  Save Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WardrobePlannerPage;
