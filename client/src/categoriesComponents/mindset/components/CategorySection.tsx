import React from "react";
import { MINDSET_CATEGORIES } from "../mindsetData";
import type { MindsetCategory } from "../mindsetData";
import CategoryCard from "./CategoryCard";
import { Layers } from "lucide-react";

interface CategorySectionProps {
  activeCategory: string;
  onSelectCategory: (category: MindsetCategory) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories-section" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131827] border border-[#1f2937] text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Architect Your Mind</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Mindset{" "}
              <span className="text-[#8055F5]">Categories</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Select any core pillar below to filter comprehensive guides, actionable frameworks, and tactical exercises.
            </p>
          </div>

          <div className="text-xs text-gray-400 flex items-center gap-2 bg-[#131827] border border-[#1f2937] px-4 py-2.5 rounded-xl self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#8055F5] animate-pulse" />
            <span>Click any category card to filter guides below</span>
          </div>
        </div>

        {/* Responsive Grid: 4 cols on xl/large desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINDSET_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.filterKey}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
