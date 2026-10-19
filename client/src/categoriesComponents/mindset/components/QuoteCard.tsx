import React, { useState } from "react";
import { Quote, RotateCcw, Copy, Check, Sparkles, BookOpen } from "lucide-react";
import { MINDSET_QUOTES } from "../mindsetData";

export const QuoteCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const currentQuote = MINDSET_QUOTES[currentIndex];

  const handleNextQuote = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MINDSET_QUOTES.length);
      setIsFlipping(false);
    }, 200);
  };

  const handleCopyQuote = async () => {
    const textToCopy = `"${currentQuote.quote}" — ${currentQuote.author} (${currentQuote.source})`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn("Failed to copy to clipboard", err);
    }
  };

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#8055F5]/30 bg-gradient-to-br from-[#131827] via-[#101424] to-[#171A2E] p-8 sm:p-12 shadow-2xl shadow-black/60 group">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8055F5]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6366f1]/10 blur-3xl rounded-full pointer-events-none" />

          {/* Large Quote Mark Background Icon */}
          <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#8055F5]/10 rotate-180 pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
            {/* Header: Badge & Category */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8055F5]/10 border border-[#8055F5]/25 text-xs font-semibold text-[#A78BFA]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Daily Wisdom</span>
              </div>

              <span className="text-xs text-gray-400 font-medium">
                {currentQuote.category}
              </span>
            </div>

            {/* Quote Body with smooth transition */}
            <div
              className={`transition-opacity duration-200 ${
                isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white leading-relaxed">
                "{currentQuote.quote}"
              </blockquote>

              {/* Author & Source Verification */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-bold text-[#A78BFA] tracking-wide">
                  — {currentQuote.author}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 italic flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                  {currentQuote.source}
                </span>
              </div>
            </div>

            {/* Bottom Actions: New Quote & Copy */}
            <div className="mt-8 pt-6 border-t border-[#1f2937]/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                Verified Stoic & Growth Literature
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                    copied
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                      : "bg-[#0B0D19] border-[#1f2937] text-gray-300 hover:text-white hover:border-[#8055F5]/50"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Quote</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleNextQuote}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#8055F5] hover:bg-[#6D28D9] text-white text-xs font-semibold shadow-md shadow-[#8055F5]/25 transition-all duration-200 active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Another Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;

