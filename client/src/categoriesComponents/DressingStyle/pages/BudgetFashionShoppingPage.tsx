import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaHeart,
  FaCalculator,
  FaExternalLinkAlt,
  FaTimes,
  FaCheck,
  FaLightbulb,
} from 'react-icons/fa';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import type { ShoppingProduct } from '../data/shoppingData';
import {
  SHOPPING_PRODUCTS,
  BUDGET_TIERS,
  PRODUCT_CATEGORIES,
  SHOPPING_TIPS,
} from '../data/shoppingData';
import { ProductCard } from '../components/ProductCard';
import { FilterBar } from '../components/FilterBar';
import { EmptyState } from '../components/EmptyState';
import { wardrobeService } from '../services/wardrobeStorage';

export const BudgetFashionShoppingPage: React.FC = () => {
  const navigate = useNavigate();

  // State
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showOnlyWishlist, setShowOnlyWishlist] = useState<boolean>(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [activeModalProduct, setActiveModalProduct] = useState<ShoppingProduct | null>(null);

  // Cost Per Wear Calculator State
  const [cpwPrice, setCpwPrice] = useState<number>(2499);
  const [cpwWearsPerMonth, setCpwWearsPerMonth] = useState<number>(4);
  const [cpwYears, setCpwYears] = useState<number>(2);

  // Load wishlist from storage on mount
  useEffect(() => {
    setWishlistIds(wardrobeService.getWishlist());
  }, []);

  const handleToggleWishlist = (id: string) => {
    const updated = wardrobeService.toggleWishlistItem(id);
    setWishlistIds(updated);
  };

  // Filter calculations
  const filteredProducts = useMemo(() => {
    return SHOPPING_PRODUCTS.filter((prod) => {
      if (selectedTier !== 'all' && prod.budgetTier !== selectedTier) return false;
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) return false;
      if (showOnlyWishlist && !wishlistIds.includes(prod.id)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = prod.title.toLowerCase().includes(q);
        const matchBrand = prod.brand.toLowerCase().includes(q);
        const matchStore = prod.store.toLowerCase().includes(q);
        const matchTags = prod.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchBrand && !matchStore && !matchTags) return false;
      }
      return true;
    });
  }, [selectedTier, selectedCategory, showOnlyWishlist, wishlistIds, searchQuery]);

  // Active filters count
  const activeCount = useMemo(() => {
    let count = 0;
    if (selectedTier !== 'all') count++;
    if (selectedCategory !== 'all') count++;
    if (showOnlyWishlist) count++;
    if (searchQuery) count++;
    return count;
  }, [selectedTier, selectedCategory, showOnlyWishlist, searchQuery]);

  const handleResetFilters = () => {
    setSelectedTier('all');
    setSelectedCategory('all');
    setShowOnlyWishlist(false);
    setSearchQuery('');
  };

  // CPW Calculation
  const totalWears = Math.max(1, cpwWearsPerMonth * 12 * cpwYears);
  const costPerWear = Math.round(cpwPrice / totalWears);

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
            <span className="text-sm text-[#A78BFA] font-medium">Budget Fashion & Smart Shopping</span>
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
              Category 03 • Smart Financial Style
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Budget Fashion & <span className="text-[#8B5CF6]">Smart Shopping</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Looking premium does not require spending millions. Learn the art of high-value curations,
              cost-per-wear arithmetic, and hand-picked wardrobe investments under every budget bracket.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">{BUDGET_TIERS.length}</span> Budget Tiers
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">{SHOPPING_PRODUCTS.length}</span> Value Curations
              </span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#A78BFA] font-bold">{wishlistIds.length}</span> In Wishlist
              </span>
            </div>
          </div>
        </section>

        {/* Cost Per Wear Interactive Calculator Widget */}
        <div className="rounded-3xl bg-gradient-to-r from-[#111827] to-[#0B1120] border border-[#1f2937] p-6 sm:p-8 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">
                <FaCalculator />
                <span>Interactive Cost-Per-Wear (CPW) Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Calculate the True Value of Any Garment
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                A cheap ₹800 shirt worn 2 times costs ₹400/wear. A ₹3,000 classic jacket worn 100 times costs only ₹30/wear.
                Slide the numbers to see if a purchase is truly an asset.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Garment Price (₹)</label>
                  <input
                    type="number"
                    value={cpwPrice}
                    onChange={(e) => setCpwPrice(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B1120] border border-[#1f2937] text-sm text-white font-mono focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Estimated Wears / Month</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={cpwWearsPerMonth}
                    onChange={(e) => setCpwWearsPerMonth(Number(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B1120] border border-[#1f2937] text-sm text-white font-mono focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Lifespan in Years</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={cpwYears}
                    onChange={(e) => setCpwYears(Number(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0B1120] border border-[#1f2937] text-sm text-white font-mono focus:outline-none focus:border-[#8B5CF6]"
                  />
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="bg-[#070B1A] border border-[#8B5CF6]/30 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center min-w-[240px] shadow-lg shadow-[#8B5CF6]/10">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                True Cost Per Wear
              </span>
              <span className="text-4xl sm:text-5xl font-black text-[#A78BFA] my-2">
                ₹{costPerWear}
              </span>
              <span className="text-xs text-gray-400">
                over {totalWears} lifetime wears
              </span>

              <div className="mt-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                {costPerWear <= 50 ? '🌟 High-Value Masterpiece' : costPerWear <= 150 ? '👍 Good Sound Investment' : '⚠️ Occasion-Specific Piece'}
              </div>
            </div>
          </div>
        </div>

        {/* Budget Tiers Bar */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                selectedTier === 'all'
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                  : 'bg-[#111827] text-gray-400 hover:text-white border border-[#1f2937]'
              }`}
            >
              All Price Tiers
            </button>
            {BUDGET_TIERS.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedTier === tier
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20'
                    : 'bg-[#111827] text-gray-400 hover:text-white border border-[#1f2937]'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* FilterBar: Search & Filters */}
        <FilterBar
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder="Search products by brand, fabric, or keyword (e.g. linen, supima, sneakers)..."
          activeCount={activeCount}
          onReset={handleResetFilters}
          filters={[
            {
              id: 'category',
              label: 'Category',
              value: selectedCategory,
              onChange: setSelectedCategory,
              options: [
                { label: 'All Garments', value: 'all' },
                ...PRODUCT_CATEGORIES.map((c) => ({ label: c, value: c })),
              ],
            },
          ]}
          extraActions={
            <button
              onClick={() => setShowOnlyWishlist(!showOnlyWishlist)}
              className={`flex items-center gap-1.5 py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                showOnlyWishlist
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                  : 'bg-[#0B1120] border-[#1f2937] text-gray-400 hover:text-white'
              }`}
            >
              <FaHeart size={12} className={showOnlyWishlist ? 'text-rose-400' : 'text-gray-500'} />
              <span>Wishlist ({wishlistIds.length})</span>
            </button>
          }
        />

        {/* Product Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
            <p>
              Showing <span className="font-bold text-white">{filteredProducts.length}</span> curated items
              {selectedTier !== 'all' && <span> under <span className="text-[#A78BFA]">{selectedTier}</span></span>}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlistIds.includes(product.id)}
                  onToggleWishlist={handleToggleWishlist}
                  onViewProduct={(p) => setActiveModalProduct(p)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Products Found"
              message="No products match your current search and price filter criteria. Try adjusting your budget filter or search term."
              actionText="Reset Filters"
              onAction={handleResetFilters}
            />
          )}
        </div>

        {/* Smart Shopper Rules Section */}
        <section className="mt-16 pt-10 border-t border-[#1f2937]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-2">
            <FaLightbulb />
            <span>The Smart Shopper Codex</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            4 Golden Rules to Never Waste Money on Clothes Again
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHOPPING_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B1120] border border-[#1f2937] hover:border-[#8B5CF6]/40 transition duration-300"
              >
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="font-bold text-white text-base mb-1.5">{tip.title}</h3>
                <p className="text-xs font-semibold text-[#A78BFA] mb-2">{tip.summary}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1120] border border-[#1f2937] p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-start justify-between pb-4 border-b border-[#1f2937] mb-6">
              <div>
                <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider">
                  {activeModalProduct.brand} • {activeModalProduct.store}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModalProduct.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="text-gray-400 hover:text-white p-1"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden aspect-square bg-[#111827] border border-[#1f2937]">
                <img
                  src={activeModalProduct.imageUrl}
                  alt={activeModalProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">
                      ₹{activeModalProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{activeModalProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                      {activeModalProduct.discountPercentage}% OFF
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes</p>
                </div>

                <div className="p-3 rounded-xl bg-[#111827] border border-[#1f2937]">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Fabric Spec</p>
                  <p className="text-xs text-gray-200 mt-0.5">{activeModalProduct.fabric}</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FaCheck size={10} /> Why It Earned Our Recommendation
                  </p>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{activeModalProduct.whyItWorks}</p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => handleToggleWishlist(activeModalProduct.id)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition ${
                      wishlistIds.includes(activeModalProduct.id)
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                        : 'bg-[#111827] border-[#1f2937] text-gray-300 hover:text-white'
                    }`}
                  >
                    <FaHeart size={12} />
                    <span>{wishlistIds.includes(activeModalProduct.id) ? 'In Wishlist' : 'Save to Wishlist'}</span>
                  </button>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Redirecting to verified partner store: ${activeModalProduct.store}`);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-[#8B5CF6] to-[#6366f1] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition"
                  >
                    <span>Check Store</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BudgetFashionShoppingPage;
