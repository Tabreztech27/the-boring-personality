import React, { useState } from "react";
import { Search, X, Sparkles, BookOpen, RotateCcw } from "lucide-react";
import { MINDSET_GUIDES } from "../mindsetData";
import type { MindsetGuide } from "../mindsetData";
import GuideCard from "./GuideCard";

interface GuidesSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CATEGORY_FILTERS = [
  "All",
  "Growth",
  "Discipline",
  "Emotional Control",
  "Focus",
  "Confidence",
  "Habits",
  "Success",
  "Goals",
];

const BOOKMARKS_STORAGE_KEY = "tbp_mindset_bookmarks";

export const GuidesSection: React.FC<GuidesSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleToggleBookmark = (guideId: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(guideId)
        ? prev.filter((id) => id !== guideId)
        : [...prev, guideId];
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn("Could not save bookmark to localStorage", err);
      }
      return next;
    });
  };

  // Filter guides by active category and search query
  const filteredGuides = MINDSET_GUIDES.filter((guide: MindsetGuide) => {
    const matchesCategory =
      selectedCategory === "All" ||
      guide.categoryFilter.toLowerCase() === selectedCategory.toLowerCase() ||
      guide.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      guide.title.toLowerCase().includes(query) ||
      guide.summary.toLowerCase().includes(query) ||
      guide.category.toLowerCase().includes(query) ||
      guide.keyTakeaways.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    onCategoryChange("All");
  };

  return (
    <section id="guides-section" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131827] border border-[#1f2937] text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practical Curated Knowledge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Your{" "}
            <span className="bg-gradient-to-r from-[#8055F5] to-[#A78BFA] bg-clip-text text-transparent">
              Mindset
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            High-leverage mental models, stoic strategies, and psychological frameworks tested to overcome self-sabotage and build unshakeable discipline.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5 text-[#8055F5]" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides by title, keyword, or problem (e.g. overthinking, discipline, focus)..."
              aria-label="Search mindset guides"
              className="w-full pl-12 pr-12 py-4 bg-[#131827] border border-[#1f2937] focus:border-[#8055F5] focus:ring-2 focus:ring-[#8055F5]/20 rounded-2xl text-white placeholder-gray-500 text-sm sm:text-base transition-all duration-200 outline-none shadow-lg shadow-black/40"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-800">
            {CATEGORY_FILTERS.map((category) => {
              const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#8055F5] text-white shadow-lg shadow-[#8055F5]/30 border border-[#8055F5]"
                      : "bg-[#131827] border border-[#1f2937] text-gray-400 hover:text-white hover:border-[#8055F5]/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Result Count and Active Filters Notice */}
          <div className="flex items-center justify-between text-xs text-gray-400 max-w-7xl mx-auto px-1">
            <span>
              Showing <span className="text-white font-semibold">{filteredGuides.length}</span>{" "}
              {filteredGuides.length === 1 ? "guide" : "guides"}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-[#A78BFA] hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Guides Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGuides.map((guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                isBookmarked={bookmarkedIds.includes(guide.id)}
                onToggleBookmark={handleToggleBookmark}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="max-w-md mx-auto text-center py-16 px-6 rounded-3xl bg-[#131827] border border-[#1f2937]">
            <div className="w-14 h-14 rounded-2xl bg-[#8055F5]/10 border border-[#8055F5]/20 flex items-center justify-center text-[#A78BFA] mx-auto mb-4">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Guides Found</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We couldn't find any mindset guides matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8055F5] hover:bg-[#6D28D9] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#8055F5]/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuidesSection;
