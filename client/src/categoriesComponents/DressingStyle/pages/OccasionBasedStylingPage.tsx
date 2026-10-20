import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaCrown,
  FaBriefcase,
  FaGlassCheers,
  FaPlane,
  FaHeart,
  FaCompass,
  FaSprayCan,
  FaPalette,
} from 'react-icons/fa';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import {
  OCCASION_DATA,
  OCCASION_CATEGORIES,
} from '../data/occasionData';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';

export const OccasionBasedStylingPage: React.FC = () => {
  const navigate = useNavigate();

  // State
  const [selectedCategory, setSelectedCategory] = useState<string>('All Occasions');
  const [selectedFormality, setSelectedFormality] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeGuideId, setActiveGuideId] = useState<string>(OCCASION_DATA[0].id);

  // Filter calculations
  const filteredGuides = useMemo(() => {
    return OCCASION_DATA.filter((guide) => {
      if (selectedCategory !== 'All Occasions' && guide.category !== selectedCategory) return false;
      if (selectedFormality !== 'all' && guide.formality !== selectedFormality) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = guide.title.toLowerCase().includes(q);
        const matchSummary = guide.summary.toLowerCase().includes(q);
        const matchTop = guide.outfitFormula.top.toLowerCase().includes(q);
        const matchShoes = guide.outfitFormula.shoes.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchTop && !matchShoes) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedFormality, searchQuery]);

  // Active guide for deep dive
  const activeGuide = useMemo(() => {
    const found = filteredGuides.find((g) => g.id === activeGuideId);
    return found || filteredGuides[0] || OCCASION_DATA[0];
  }, [filteredGuides, activeGuideId]);

  const activeCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'All Occasions') count++;
    if (selectedFormality !== 'all') count++;
    if (searchQuery) count++;
    return count;
  }, [selectedCategory, selectedFormality, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All Occasions');
    setSelectedFormality('all');
    setSearchQuery('');
  };

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
            <span className="text-sm text-[#A78BFA] font-medium">Occasion-Based Styling</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/dressing-style/outfit-ideas')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Outfit Ideas
            </button>
            <button
              onClick={() => navigate('/dressing-style/wardrobe-planner')}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#0B1120] border border-[#1f2937] transition"
            >
              Wardrobe Planner
            </button>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] via-[#0B1120] to-[#070B1A] border border-[#1f2937] p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-semibold text-[#C4B5FD] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              Category 04 • High-Status Social Navigation
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Occasion-Based <span className="text-[#8B5CF6]">Styling</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Never feel awkwardly overdressed or embarrassingly underdressed again.
              Master the exact dress codes, garment formulas, scent vibes, and non-negotiable etiquette for every life event.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <FaCrown className="text-amber-400" /> Traditional Weddings
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <FaBriefcase className="text-blue-400" /> Career & Interviews
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <FaHeart className="text-rose-400" /> First Dates
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <FaGlassCheers className="text-purple-400" /> Nightlife
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <FaPlane className="text-emerald-400" /> Long-Haul Travel
              </span>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {OCCASION_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                    : 'bg-[#111827] text-gray-400 hover:text-white border border-[#1f2937]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FilterBar */}
        <FilterBar
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Search event (e.g. interview, wedding, date night, flight)..."
          activeCount={activeCount}
          onReset={handleResetFilters}
          filters={[
            {
              id: 'formality',
              label: 'Formality Level',
              value: selectedFormality,
              onChange: setSelectedFormality,
              options: [
                { label: 'All Formality Levels', value: 'all' },
                { label: 'Casual', value: 'Casual' },
                { label: 'Smart Casual', value: 'Smart Casual' },
                { label: 'Business Formal', value: 'Business Formal' },
                { label: 'Traditional / Festive', value: 'Traditional / Festive' },
              ],
            },
          ]}
        />

        {/* Main Interactive Split Layout */}
        {filteredGuides.length > 0 ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Occasion Selector Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                Select an Event Blueprint ({filteredGuides.length})
              </h3>

              {filteredGuides.map((guide) => {
                const isSelected = activeGuide?.id === guide.id;
                return (
                  <div
                    key={guide.id}
                    onClick={() => setActiveGuideId(guide.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#111827] border-[#8B5CF6] ring-2 ring-[#8B5CF6]/40 shadow-xl shadow-[#8B5CF6]/10 -translate-x-1'
                        : 'bg-[#0B1120] border-[#1f2937] hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-xl shrink-0">
                        {guide.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A78BFA]">
                          {guide.formality}
                        </span>
                        <h4 className="text-sm font-bold text-white line-clamp-1">{guide.title}</h4>
                        <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{guide.summary}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs text-gray-500 font-mono">→</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Blueprint */}
            {activeGuide && (
              <div className="lg:col-span-7 bg-[#0B1120] border border-[#1f2937] rounded-3xl p-6 sm:p-8 shadow-2xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1f2937]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{activeGuide.icon}</span>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30">
                        {activeGuide.formality}
                      </span>
                      <span className="text-xs text-gray-500">• {activeGuide.category}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {activeGuide.title}
                    </h2>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                      {activeGuide.summary}
                    </p>
                  </div>
                </div>

                {/* Hero Photo & Color Palette */}
                <div className="grid sm:grid-cols-12 gap-5 my-6">
                  <div className="sm:col-span-7 rounded-2xl overflow-hidden aspect-16/10 bg-[#111827] border border-[#1f2937]">
                    <img
                      src={activeGuide.imageUrl}
                      alt={activeGuide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="sm:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FaPalette className="text-[#A78BFA]" /> Winning Color Palette
                      </h4>
                      <div className="space-y-1.5">
                        {activeGuide.colorPalette.map((col, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#111827] border border-[#1f2937]">
                            <span
                              className="w-4 h-4 rounded-full border border-gray-600 shrink-0"
                              style={{ backgroundColor: col.hex }}
                            />
                            <span className="text-xs font-medium text-white">{col.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#111827] border border-[#1f2937] mt-3">
                      <p className="text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <FaSprayCan size={11} /> Fragrance Note
                      </p>
                      <p className="text-xs text-gray-300">{activeGuide.outfitFormula.fragranceVibe}</p>
                    </div>
                  </div>
                </div>

                {/* The Complete Outfit Formula */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaCompass className="text-[#A78BFA]" />
                    Recommended Outfit Formula
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#111827] border border-[#1f2937]">
                      <span className="text-[10px] font-bold text-[#A78BFA] uppercase">Top / Shirt</span>
                      <p className="text-xs font-semibold text-white mt-0.5">{activeGuide.outfitFormula.top}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#111827] border border-[#1f2937]">
                      <span className="text-[10px] font-bold text-[#A78BFA] uppercase">Bottom / Trousers</span>
                      <p className="text-xs font-semibold text-white mt-0.5">{activeGuide.outfitFormula.bottom}</p>
                    </div>

                    {activeGuide.outfitFormula.outerwear && (
                      <div className="p-3.5 rounded-xl bg-[#111827] border border-[#1f2937]">
                        <span className="text-[10px] font-bold text-[#A78BFA] uppercase">Outerwear / Layer</span>
                        <p className="text-xs font-semibold text-white mt-0.5">{activeGuide.outfitFormula.outerwear}</p>
                      </div>
                    )}

                    <div className="p-3.5 rounded-xl bg-[#111827] border border-[#1f2937]">
                      <span className="text-[10px] font-bold text-[#A78BFA] uppercase">Footwear</span>
                      <p className="text-xs font-semibold text-white mt-0.5">{activeGuide.outfitFormula.shoes}</p>
                    </div>
                  </div>
                </div>

                {/* Do's and Don'ts Checklist */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#1f2937]">
                  {/* DOs */}
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <FaCheck size={11} /> Crucial Do's
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      {activeGuide.dos.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DONTs */}
                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40">
                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <FaTimes size={11} /> Critical Mistakes to Avoid
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      {activeGuide.donts.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pro Tips Footer */}
                {activeGuide.proTips.length > 0 && (
                  <div className="mt-6 p-4 rounded-2xl bg-[#111827] border border-[#1f2937]">
                    <h4 className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">
                      💡 Pro Stylist Tip
                    </h4>
                    {activeGuide.proTips.map((tip, idx) => (
                      <p key={idx} className="text-xs text-gray-300 leading-relaxed">
                        {tip}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <EmptyState
            title="No Occasion Guides Found"
            message="No occasion guide matches your search criteria. Try clearing your search term or formality filter."
            actionText="Reset Filters"
            onAction={handleResetFilters}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OccasionBasedStylingPage;
