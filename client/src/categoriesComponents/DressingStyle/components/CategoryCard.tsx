import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export interface CategoryCardProps {
  title: string;
  icon: React.ReactNode | string;
  desc: string;
  badge?: string;
  tag?: string;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  desc,
  badge = 'Interactive Guide',
  tag,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#1f2937] bg-[#0B1120] p-6 hover:border-[#8B5CF6]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8B5CF6]/15 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#8B5CF6]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-2xl text-[#A78BFA] group-hover:scale-110 group-hover:bg-[#8B5CF6]/20 transition-all duration-300 shadow-lg shadow-[#8B5CF6]/5">
            {typeof icon === 'string' ? <span>{icon}</span> : icon}
          </div>

          {tag && (
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30">
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mt-2.5 min-h-12.5">
          {desc}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-between mt-6 pt-5 border-t border-[#1f2937]/70">
        <div>
          <p className="text-xs font-semibold text-[#A78BFA] tracking-wide">
            {badge}
          </p>
          <p className="text-[11px] text-gray-500 mt-0.5">Explore Category</p>
        </div>

        <div className="w-10 h-10 rounded-xl bg-[#111827] border border-[#1f2937] flex items-center justify-center text-[#A78BFA] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 shadow-md">
          <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

