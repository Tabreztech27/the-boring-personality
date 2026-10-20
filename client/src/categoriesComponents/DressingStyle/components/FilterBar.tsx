import React from 'react';
import { FaSearch, FaTimes, FaUndo } from 'react-icons/fa';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  id: string;
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filters?: FilterConfig[];
  activeCount?: number;
  onReset?: () => void;
  extraActions?: React.ReactNode;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search outfits, styles, items...',
  filters = [],
  activeCount = 0,
  onReset,
  extraActions,
}) => {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-md border border-[#1f2937] rounded-2xl p-4 mb-8 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <FaSearch size={14} />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#0B1120] border border-[#1f2937] text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
          />
          {searchValue && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition"
              title="Clear search"
            >
              <FaTimes size={13} />
            </button>
          )}
        </div>

        {/* Filters and Extras */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {filters.map((filter) => (
            <div key={filter.id} className="relative">
              <select
                aria-label={filter.label}
                value={filter.value}
                onChange={(e) => filter.onChange(e.target.value)}
                className={`py-2 px-3 text-xs sm:text-sm rounded-xl border appearance-none pr-8 cursor-pointer transition-all ${
                  filter.value !== '' && filter.value !== 'all' && filter.value !== 'All'
                    ? 'bg-[#8B5CF6]/15 border-[#8B5CF6] text-white font-medium'
                    : 'bg-[#0B1120] border-[#1f2937] text-gray-300 hover:border-gray-600'
                }`}
              >
                {filter.options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#111827] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          ))}

          {/* Reset button if active */}
          {activeCount > 0 && onReset && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#1f2937] hover:bg-[#374151] text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition"
              title="Reset all filters"
            >
              <FaUndo size={11} className="text-[#A78BFA]" />
              <span>Reset ({activeCount})</span>
            </button>
          )}

          {/* Extra action slots like toggle view or add button */}
          {extraActions}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

