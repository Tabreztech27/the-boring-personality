import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, Compass, Flame } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface HeroSectionProps {
  onExploreClick: () => void;
  onChallengeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onChallengeClick,
}) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pb-24 border-b border-[#1f2937]/60">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8055F5]/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#6366f1]/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#A78BFA] group-hover:-translate-x-1 transition-transform" />
            <span>All Categories</span>
            <span className="text-gray-600">/</span>
            <span className="text-[#A78BFA] font-medium">Mindset & Motivation</span>
          </Link>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#131827] border border-[#1f2937] shadow-lg shadow-black/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8055F5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8055F5]"></span>
              </span>
              <span className="text-xs uppercase tracking-[3px] font-semibold text-[#A78BFA]">
                MINDSET & PERSONAL GROWTH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Train Your Mind.{" "}
              <span className="bg-gradient-to-r from-[#8055F5] via-[#A78BFA] to-[#6366f1] bg-clip-text text-transparent">
                Transform Your Life.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Build discipline, master your emotions, develop powerful habits, and become the person you want to be.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8055F5] to-[#6366f1] shadow-xl shadow-[#8055F5]/25 hover:shadow-[#8055F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Explore Guides</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onChallengeClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-gray-200 bg-[#131827] border border-[#1f2937] hover:border-[#8055F5]/50 hover:bg-[#182035] hover:text-white transition-all duration-300"
              >
                <Flame className="w-4 h-4 text-[#A78BFA]" />
                <span>Start 7-Day Challenge</span>
              </button>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1f2937]/70 max-w-lg">
              <div>
                <p className="text-2xl font-black text-white">8</p>
                <p className="text-xs text-gray-400 mt-0.5">Core Pillars</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#A78BFA]">9+</p>
                <p className="text-xs text-gray-400 mt-0.5">In-Depth Guides</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">7-Day</p>
                <p className="text-xs text-gray-400 mt-0.5">Discipline Mission</p>
              </div>
            </div>
          </div>

          {/* Right Column: Striking Mountain Sunrise Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Backplate Glow */}
            <div className="absolute inset-0 bg-[#8055F5]/20 blur-[90px] rounded-3xl" />

            {/* Image Container Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-[28px] overflow-hidden border border-[#1f2937] bg-[#131827] shadow-2xl shadow-black/80 group">
              {/* Cinematic Image of a person standing on a mountain at sunrise */}
              <div className="relative h-[420px] sm:h-[460px] w-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                  alt="Person standing on a mountain at sunrise symbolizing growth and ambition"
                  fallbackTitle="Mountain Sunrise Peak"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay to blend seamlessly with #0B0D19 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-[#0B0D19]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D19]/40 via-transparent to-[#0B0D19]/40 pointer-events-none" />
              </div>

              {/* Floating Overlay Badge (Bottom) */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-[#0B0D19]/90 backdrop-blur-md border border-[#1f2937] rounded-2xl p-4.5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                      <span className="text-[11px] uppercase tracking-wider text-[#A78BFA] font-bold">
                        Self-Discovery & Mastery
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      Higher Perspectives. Daily Execution.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#8055F5]/10 border border-[#8055F5]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

