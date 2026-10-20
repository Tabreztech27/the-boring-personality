import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import type { ClothingItem } from '../data/wardrobeData';

export interface ClothingItemCardProps {
  item: ClothingItem;
  onEdit?: (item: ClothingItem) => void;
  onDelete?: (id: string) => void;
  // Selection mode for outfit builder
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (item: ClothingItem) => void;
}

export const ClothingItemCard: React.FC<ClothingItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  selectable = false,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      onClick={() => selectable && onSelect && onSelect(item)}
      className={`group relative rounded-2xl overflow-hidden border bg-[#0B1120] transition-all duration-300 flex flex-col justify-between ${
        selectable ? 'cursor-pointer' : ''
      } ${
        selected
          ? 'border-[#8B5CF6] ring-2 ring-[#8B5CF6]/50 shadow-lg shadow-[#8B5CF6]/20 -translate-y-1'
          : 'border-[#1f2937] hover:border-gray-700 hover:-translate-y-1'
      }`}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-[#111827]">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Selection badge */}
        {selectable && (
          <div
            className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              selected
                ? 'bg-[#8B5CF6] text-white shadow-md'
                : 'bg-black/50 text-transparent border border-white/40'
            }`}
          >
            <FaCheck size={11} className={selected ? 'opacity-100' : 'opacity-0'} />
          </div>
        )}

        {/* Category tag */}
        <div className="absolute bottom-2 left-2.5">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-xs text-gray-300 border border-white/10">
            {item.category}
          </span>
        </div>
      </div>

      {/* Item info */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[11px] font-medium text-[#A78BFA] truncate">
              {item.brand || 'Essential'}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              {item.colorHex && (
                <span
                  title={item.color}
                  className="w-3 h-3 rounded-full border border-gray-600 inline-block shadow-xs"
                  style={{ backgroundColor: item.colorHex }}
                />
              )}
              <span className="text-[10px] text-gray-400">{item.season}</span>
            </div>
          </div>

          <h5 className="text-sm font-bold text-white group-hover:text-[#C4B5FD] transition-colors line-clamp-1">
            {item.name}
          </h5>

          {item.notes && (
            <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 italic">
              {item.notes}
            </p>
          )}
        </div>

        {/* Action buttons (only when not in selective mode or when explicitly permitted) */}
        {!selectable && (onEdit || onDelete) && (
          <div className="mt-3 pt-2.5 border-t border-[#1f2937] flex items-center justify-between">
            <span className="text-[11px] text-gray-400">
              Fit: <span className="text-gray-300">{item.fit || 'Regular'}</span>
            </span>

            <div className="flex items-center gap-2">
              {onEdit && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(item);
                  }}
                  className="p-1.5 rounded-lg bg-[#111827] hover:bg-[#1f2937] text-gray-400 hover:text-white transition"
                  title="Edit item"
                >
                  <FaEdit size={11} />
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                  className="p-1.5 rounded-lg bg-[#111827] hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition"
                  title="Delete item"
                >
                  <FaTrash size={11} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothingItemCard;
