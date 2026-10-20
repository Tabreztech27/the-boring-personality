import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaHeart,
  FaTimes,
  FaCheck,
  FaInfoCircle,
  FaPalette,
} from 'react-icons/fa';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import type { Outfit } from '../data/outfitData';
import {
  OUTFIT_DATA,
  OUTFIT_SUBCATEGORIES,
} from '../data/outfitData';
import { OutfitCard } from '../components/OutfitCard';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';
import { wardrobeService } from '../services/wardrobeStorage';

export const OutfitIdeasPage: React.FC = () => {
  const navigate = useNavigate();

  // State
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All Outfits');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [showOnlySaved, setShowOnlySaved] = useState<boolean>(false);

  // Favorites & Modal
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [activeModalOutfit, setActiveModalOutfit] = useState<Outfit | null>(null);

  // Load saved favorites on mount
  useEffect(() => {
    setSavedIds(wardrobeService.getFavoriteOutfitIds());
  }, []);

  const handleToggleSave = (id: string) => {
    const updated = wardrobeService.toggleFavoriteOutfit(id);
    setSavedIds(updated);
  };

  // Filter calculations
  const filteredOutfits = useMemo(() => {
    return OUTFIT_DATA.filter((outfit) => {
      // Subcategory filter
      if (selectedSubCategory !== 'All Outfits' && outfit.subCategory !== selectedSubCategory) {
        return false;
      }
      // Favorites filter
      if (showOnlySaved && !savedIds.includes(outfit.id)) {
        return false;
      }
      // Style filter
      if (selectedStyle !== 'all' && outfit.style !== selectedStyle) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'all' && outfit.occasion !== selectedOccasion) {
        return false;
      }
      // Season filter
      if (selectedSeason !== 'all' && outfit.season !== selectedSeason && outfit.season !== 'All-Season') {
        return false;
      }
      // Budget filter
      if (selectedBudget !== 'all' && outfit.budget !== selectedBudget) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = outfit.title.toLowerCase().includes(q);
        const matchesDesc = outfit.description.toLowerCase().includes(q);
        const matchesSub = outfit.subCategory.toLowerCase().includes(q);
        const matchesTags = outfit.tags.some((t) => t.toLowerCase().includes(q));
        const matchesItems = outfit.items.some((it) => it.name.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSub && !matchesTags && !matchesItems) {
          return false;
        }
      }
      return true;
    });
  }, [
    selectedSubCategory,
    showOnlySaved,
    savedIds,
    selectedStyle,
    selectedOccasion,
    selectedSeason,
    selectedBudget,
    searchQuery,
  ]);

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedSubCategory !== 'All Outfits') count++;
    if (selectedStyle !== 'all') count++;
    if (selectedOccasion !== 'all') count++;
    if (selectedSeason !== 'all') count++;
    if (selectedBudget !== 'all') count++;
    if (showOnlySaved) count++;
    if (searchQuery) count++;
    return count;
  }, [selectedSubCategory, selectedStyle, selectedOccasion, selectedSeason, selectedBudget, showOnlySaved, searchQuery]);

  const handleResetFilters = () => {
    setSelectedSubCategory('All Outfits');
    setSelectedStyle('all');
    setSelectedOccasion('all');
    setSelectedSeason('all');
    setSelectedBudget('all');
    setShowOnlySaved(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white">
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20">
        {/* Navigation Breadcrumb */}
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
            <span className="text-sm text-[#A78BFA] font-medium">Outfit Ideas & Combinations</span>
          </div>

          {/* Quick link to other dressing style pages */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/dressing-style/wardrobe-planner')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Wardrobe Planner
            </button>
            <button
              onClick={() => navigate('/dressing-style/occasion-styling')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Occasions
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] via-[#0B1120] to-[#070B1A] border border-[#1f2937] p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-semibold text-[#C4B5FD] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              Category 01 • Curated Combinations
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Outfit Ideas & <span className="text-[#8B5CF6]">Combinations</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Never stare at your closet wondering what to wear. Explore battle-tested outfit combinations
              categorized by vibe, color harmony, and occasion — with exact garment formulas and color breakdowns.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">10</span> Essential Subcategories
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">{OUTFIT_DATA.length}</span> Curated Formulas
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">{savedIds.length}</span> Saved to Favorites
              </span>
            </div>
          </div>
        </section>

        {/* Subcategories Horizontal Filter Bar */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {OUTFIT_SUBCATEGORIES.map((sub) => {
              const isActive = selectedSubCategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white shadow-lg shadow-[#8B5CF6]/20 scale-105'
                      : 'bg-[#111827] text-gray-400 hover:text-white hover:bg-[#1f2937] border border-[#1f2937]'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>

        {/* FilterBar: Search & Filters */}
        <FilterBar
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Search outfit title, tags, items (e.g. linen, chinos, bomber)..."
          activeCount={activeFiltersCount}
          onReset={handleResetFilters}
          filters={[
            {
              id: 'style',
              label: 'Style',
              value: selectedStyle,
              onChange: setSelectedStyle,
              options: [
                { label: 'All Styles', value: 'all' },
                { label: 'Casual', value: 'Casual' },
                { label: 'Smart Casual', value: 'Smart Casual' },
                { label: 'Formal', value: 'Formal' },
                { label: 'Streetwear', value: 'Streetwear' },
                { label: 'Minimalist', value: 'Minimalist' },
                { label: 'Athleisure', value: 'Athleisure' },
              ],
            },
            {
              id: 'occasion',
              label: 'Occasion',
              value: selectedOccasion,
              onChange: setSelectedOccasion,
              options: [
                { label: 'All Occasions', value: 'all' },
                { label: 'Daily', value: 'Daily' },
                { label: 'Work', value: 'Work' },
                { label: 'College', value: 'College' },
                { label: 'Date', value: 'Date' },
                { label: 'Party', value: 'Party' },
                { label: 'Travel', value: 'Travel' },
              ],
            },
            {
              id: 'season',
              label: 'Season',
              value: selectedSeason,
              onChange: setSelectedSeason,
              options: [
                { label: 'All Seasons', value: 'all' },
                { label: 'Summer', value: 'Summer' },
                { label: 'Winter', value: 'Winter' },
                { label: 'Monsoon', value: 'Monsoon' },
              ],
            },
            {
              id: 'budget',
              label: 'Budget',
              value: selectedBudget,
              onChange: setSelectedBudget,
              options: [
                { label: 'All Budgets', value: 'all' },
                { label: 'Budget-Friendly', value: 'Budget-Friendly' },
                { label: 'Mid-Range', value: 'Mid-Range' },
                { label: 'Premium', value: 'Premium' },
              ],
            },
          ]}
          extraActions={
            <button
              onClick={() => setShowOnlySaved(!showOnlySaved)}
              className={`flex items-center gap-1.5 py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                showOnlySaved
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                  : 'bg-[#0B1120] border-[#1f2937] text-gray-400 hover:text-white'
              }`}
            >
              <FaHeart size={12} className={showOnlySaved ? 'text-rose-400' : 'text-gray-500'} />
              <span>Saved ({savedIds.length})</span>
            </button>
          }
        />

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
          <p>
            Showing <span className="font-bold text-white">{filteredOutfits.length}</span> outfit formulas
            {selectedSubCategory !== 'All Outfits' && (
              <span> in <span className="text-[#A78BFA]">{selectedSubCategory}</span></span>
            )}
          </p>
        </div>

        {/* Outfits Grid */}
        {filteredOutfits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOutfits.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                isSaved={savedIds.includes(outfit.id)}
                onToggleSave={handleToggleSave}
                onViewDetails={(item) => setActiveModalOutfit(item)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Outfits Found"
            message="No outfit formulas match your current search or filter combinations. Try clearing some filters or searching with different terms."
            actionText="Reset All Filters"
            onAction={handleResetFilters}
          />
        )}
      </main>

      {/* Outfit Breakdown Modal */}
      {activeModalOutfit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0B1120] border border-[#1f2937] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#111827] to-[#0B1120] border-b border-[#1f2937] flex items-start justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30">
                  {activeModalOutfit.subCategory}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {activeModalOutfit.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Style: <span className="text-gray-200">{activeModalOutfit.style}</span> • Season:{' '}
                  <span className="text-gray-200">{activeModalOutfit.season}</span> • Budget:{' '}
                  <span className="text-gray-200">{activeModalOutfit.budget}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleSave(activeModalOutfit.id)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition ${
                    savedIds.includes(activeModalOutfit.id)
                      ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                      : 'bg-[#111827] border-[#1f2937] text-gray-400 hover:text-white'
                  }`}
                  title="Toggle Save"
                >
                  <FaHeart size={14} />
                </button>
                <button
                  onClick={() => setActiveModalOutfit(null)}
                  className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white transition"
                  title="Close modal"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Photo & Color Palette Bar */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden aspect-4/3 bg-[#111827] border border-[#1f2937]">
                  <img
                    src={activeModalOutfit.imageUrl}
                    alt={activeModalOutfit.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <FaPalette className="text-[#A78BFA]" />
                      Harmonious Color Palette
                    </h4>
                    <div className="space-y-2 mt-3">
                      {activeModalOutfit.colorPalette.map((col, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-xl bg-[#111827] border border-[#1f2937]">
                          <span
                            className="w-6 h-6 rounded-lg border border-gray-600 shadow-xs shrink-0"
                            style={{ backgroundColor: col.hex }}
                          />
                          <div>
                            <p className="text-xs font-semibold text-white">{col.name}</p>
                            <p className="text-[10px] text-gray-400 font-mono">{col.hex}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm mt-4 italic bg-[#111827]/50 p-3 rounded-xl border border-[#1f2937]">
                    "{activeModalOutfit.description}"
                  </p>
                </div>
              </div>

              {/* Exact Garment Breakdown */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  Exact Garment Combination
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeModalOutfit.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#111827] border border-[#1f2937] flex items-start justify-between"
                    >
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#A78BFA] tracking-wider block">
                          {item.category}
                        </span>
                        <p className="text-sm font-bold text-white mt-0.5">{item.name}</p>
                        <p className="text-xs text-gray-400 mt-1">Color: {item.color}</p>
                      </div>
                      {item.brandOrNote && (
                        <span className="text-[10px] px-2 py-1 rounded bg-[#0B1120] text-gray-400 border border-white/5 shrink-0 max-w-[120px] text-right truncate">
                          {item.brandOrNote}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Styling Rules */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-[#A78BFA]" />
                  Golden Styling Rules
                </h4>
                <div className="space-y-2">
                  {activeModalOutfit.stylingTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <FaCheck className="text-emerald-400 mt-1 shrink-0" size={11} />
                      <p>{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#111827] border-t border-[#1f2937] flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Found this helpful? Save it to access later in your wardrobe.
              </span>
              <button
                onClick={() => setActiveModalOutfit(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] text-white text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OutfitIdeasPage;
