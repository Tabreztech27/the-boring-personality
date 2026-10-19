import React from "react";
import {
  Brain,
  Shield,
  Compass,
  Target,
  Sparkles,
  Flame,
  Award,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MindsetCategory } from "../mindsetData";
import ImageWithFallback from "./ImageWithFallback";

interface CategoryCardProps {
  category: MindsetCategory;
  isActive: boolean;
  onSelect: (category: MindsetCategory) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Shield,
  Compass,
  Target,
  Sparkles,
  Flame,
  Award,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isActive,
  onSelect,
}) => {
  const IconComponent = iconMap[category.iconName] || Brain;

  return (
    <div
      onClick={() => onSelect(category)}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
        isActive
          ? "border-[#8055F5] bg-[#171E32] shadow-xl shadow-[#8055F5]/20 -translate-y-1"
          : "border-[#1f2937] bg-[#131827] hover:border-[#8055F5]/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#8055F5]/10"
      }`}
    >
      {/* Ambient hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8055F5]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card Header with Image Thumbnail & Icon */}
      <div className="relative">
        <div className="h-40 w-full overflow-hidden relative">
          <ImageWithFallback
            src={category.image}
            alt={category.title}
            fallbackTitle={category.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient overlay on thumbnail so text and icon pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131827] via-[#131827]/40 to-transparent" />

          {/* Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#0B0D19]/80 backdrop-blur-md border border-[#1f2937] text-[#A78BFA]">
            {category.badge}
          </span>
        </div>

        {/* Floating Icon overlapping thumbnail bottom */}
        <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-xl bg-[#131827] border border-[#1f2937] group-hover:border-[#8055F5]/50 flex items-center justify-center text-[#A78BFA] shadow-lg group-hover:scale-110 group-hover:text-white group-hover:bg-[#8055F5] transition-all duration-300">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 pt-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-[#C4B5FD] transition-colors leading-snug">
            {category.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-5 pt-4 border-t border-[#1f2937]/70 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#A78BFA]">
            {category.guidesCount} Guides
          </span>

          <div
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
              isActive
                ? "bg-[#8055F5] text-white border-[#8055F5]"
                : "bg-[#0B0D19] border-[#1f2937] text-gray-400 group-hover:bg-[#8055F5] group-hover:text-white group-hover:border-[#8055F5]"
            }`}
          >
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
