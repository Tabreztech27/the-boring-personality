import React from 'react';
import { FaHeart, FaRegHeart, FaEye, FaLayerGroup } from 'react-icons/fa';
import type { Outfit } from '../data/outfitData';

export interface OutfitCardProps {
  outfit: Outfit;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  onViewDetails?: (outfit: Outfit) => void;
}

export const OutfitCard: React.FC<OutfitCardProps> = ({
  outfit,
  isSaved = false,
  onToggleSave,
  onViewDetails,
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-[#1f2937] bg-[#0B1120] hover:border-[#8B5CF6]/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#8B5CF6]/15 transition-all duration-300 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative aspect-4/5 overflow-hidden bg-[#111827]">
        <img
          src={outfit.imageUrl}
          alt={outfit.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-black/30" />

        {/* Top badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B1120]/80 backdrop-blur-md text-[#C4B5FD] border border-[#8B5CF6]/30 shadow-md">
            {outfit.subCategory}
          </span>

          {onToggleSave && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(outfit.id);
              }}
              className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-md ${
                isSaved
                  ? 'bg-rose-500/90 text-white scale-110'
                  : 'bg-[#0B1120]/70 text-gray-300 hover:text-rose-400 hover:bg-[#0B1120]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save outfit'}
            >
              {isSaved ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
            </button>
          )}
        </div>

        {/* Floating Quick Stats on hover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[11px]">
            <FaLayerGroup className="text-[#A78BFA]" size={10} />
            <span>{outfit.items.length} Pieces</span>
          </div>

          <span className="px-2 py-0.5 rounded-md bg-[#8B5CF6]/40 backdrop-blur-sm text-[11px] font-medium text-white">
            {outfit.season}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Color palette indicator */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Palette:</span>
            <div className="flex items-center gap-1">
              {outfit.colorPalette.map((col, idx) => (
                <span
                  key={idx}
                  title={col.name}
                  className="w-3.5 h-3.5 rounded-full border border-gray-600 shadow-xs inline-block"
                  style={{ backgroundColor: col.hex }}
                />
              ))}
            </div>
            <span className="ml-auto text-[11px] text-gray-400 font-medium">
              {outfit.budget}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C4B5FD] transition-colors line-clamp-1">
            {outfit.title}
          </h4>

          <p className="text-gray-400 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
            {outfit.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {outfit.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-md bg-[#111827] text-gray-400 border border-[#1f2937]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 pt-3 border-t border-[#1f2937] flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Style: <span className="text-gray-200 font-medium">{outfit.style}</span>
          </span>

          {onViewDetails && (
            <button
              onClick={() => onViewDetails(outfit)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#A78BFA] hover:text-white transition group/btn"
            >
              <span>Breakdown</span>
              <FaEye size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
