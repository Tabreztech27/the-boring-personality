import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Bookmark } from "lucide-react";
import type { MindsetGuide } from "../mindsetData";
import ImageWithFallback from "./ImageWithFallback";

interface GuideCardProps {
  guide: MindsetGuide;
  isBookmarked: boolean;
  onToggleBookmark: (guideId: string) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#1f2937] bg-[#131827] hover:border-[#8055F5]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8055F5]/10 transition-all duration-300 flex flex-col justify-between">
      {/* Glow on hover */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#8055F5]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Thumbnail Image Header */}
        <div className="relative h-48 w-full overflow-hidden bg-[#0B0D19]">
          <ImageWithFallback
            src={guide.image}
            alt={guide.title}
            fallbackTitle={guide.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131827] via-transparent to-black/30 pointer-events-none" />

          {/* Category Pill */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0B0D19]/80 backdrop-blur-md border border-[#1f2937] text-[#A78BFA]">
              {guide.category}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleBookmark(guide.id);
            }}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark guide"}
            className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-200 ${
              isBookmarked
                ? "bg-[#8055F5] border-[#8055F5] text-white"
                : "bg-[#0B0D19]/80 border-[#1f2937] text-gray-400 hover:text-white hover:border-[#8055F5]/50"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          {/* Metadata Row: Read Time & Author */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A78BFA]" />
              {guide.readTime}
            </span>
            <span>•</span>
            <span>{guide.author}</span>
          </div>

          {/* Guide Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors leading-snug line-clamp-2">
            <Link to={`/mindset/${guide.slug}`}>{guide.title}</Link>
          </h3>

          {/* Guide Summary */}
          <p className="text-gray-400 text-sm mt-3 leading-relaxed line-clamp-3">
            {guide.summary}
          </p>
        </div>
      </div>

      {/* Footer / Read Guide CTA */}
      <div className="p-5 sm:p-6 pt-0">
        <Link
          to={`/mindset/${guide.slug}`}
          className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0B0D19] border border-[#1f2937] text-sm font-semibold text-gray-200 group-hover:text-white group-hover:border-[#8055F5] group-hover:bg-[#8055F5]/10 transition-all duration-300"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-4 h-4 text-[#A78BFA] group-hover:translate-x-1 group-hover:text-white transition-all" />
        </Link>
      </div>
    </article>
  );
};

export default GuideCard;
