import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Bookmark,
  Share2,
  CheckCircle2,
  Circle,
  Sparkles,
  Quote,
  Check,
  BookOpen,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MINDSET_GUIDES } from "./mindsetData";
import ImageWithFallback from "./components/ImageWithFallback";

const BOOKMARKS_STORAGE_KEY = "tbp_mindset_bookmarks";

export const MindsetGuideDetail: React.FC = () => {
  const { guideSlug } = useParams<{ guideSlug: string }>();

  // Find the guide by slug or id
  const guide = MINDSET_GUIDES.find(
    (g) => g.slug === guideSlug || g.id === guideSlug
  );

  const [copied, setCopied] = useState(false);
  const [completedActionItems, setCompletedActionItems] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const savedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return savedBookmarks ? JSON.parse(savedBookmarks) : [];
    } catch {
      return [];
    }
  });

  const isBookmarked = guide ? bookmarkedIds.includes(guide.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [guideSlug]);

  const toggleBookmark = () => {
    if (!guide) return;
    setBookmarkedIds((prev) => {
      const nextIds = prev.includes(guide.id)
        ? prev.filter((id) => id !== guide.id)
        : [...prev, guide.id];
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(nextIds));
      } catch (err) {
        console.warn("Could not save bookmark", err);
      }
      return nextIds;
    });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn("Could not copy link", err);
    }
  };

  const toggleActionItem = (itemText: string) => {
    setCompletedActionItems((prev) =>
      prev.includes(itemText)
        ? prev.filter((t) => t !== itemText)
        : [...prev, itemText]
    );
  };

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#0B0D19] text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-32">
          <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-[#131827] border border-[#1f2937]">
            <div className="w-16 h-16 rounded-2xl bg-[#8055F5]/10 border border-[#8055F5]/30 flex items-center justify-center text-[#A78BFA] mx-auto mb-5">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-white mb-3">Guide Not Found</h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The mindset guide you are looking for does not exist or may have been relocated.
            </p>
            <Link
              to="/mindset"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8055F5] hover:bg-[#6D28D9] text-white font-semibold text-sm transition-all shadow-lg shadow-[#8055F5]/25"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Mindset Guides</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Related guides (other guides excluding current)
  const relatedGuides = MINDSET_GUIDES.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0B0D19] text-white selection:bg-[#8055F5] selection:text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#8055F5]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb Navigation & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              to="/mindset"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 text-[#A78BFA] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Mindset & Motivation</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleBookmark}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  isBookmarked
                    ? "bg-[#8055F5] border-[#8055F5] text-white"
                    : "bg-[#131827] border-[#1f2937] text-gray-300 hover:text-white hover:border-[#8055F5]/50"
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-white" : ""}`} />
                <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#131827] border border-[#1f2937] text-gray-300 hover:text-white hover:border-[#8055F5]/50 text-xs font-semibold transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article Header */}
          <header className="space-y-5 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8055F5]/10 border border-[#8055F5]/30 text-[#A78BFA]">
                {guide.category}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                {guide.readTime}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-gray-400">{guide.publishDate}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {guide.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {guide.summary}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8055F5] to-[#6366f1] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-[#8055F5]/30">
                TBP
              </div>
              <div>
                <p className="text-xs font-bold text-white">{guide.author}</p>
                <p className="text-[11px] text-gray-500">Verified Self-Development System</p>
              </div>
            </div>
          </header>

          {/* Featured Hero Thumbnail */}
          <div className="relative rounded-3xl overflow-hidden border border-[#1f2937] bg-[#131827] mb-12 shadow-2xl">
            <div className="h-64 sm:h-96 w-full relative">
              <ImageWithFallback
                src={guide.image}
                alt={guide.title}
                fallbackTitle={guide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D19] via-transparent to-black/30 pointer-events-none" />
            </div>
          </div>

          {/* Key Takeaways Highlight Box */}
          <div className="rounded-2xl border border-[#8055F5]/40 bg-gradient-to-br from-[#131827] to-[#161B30] p-6 sm:p-8 mb-12 shadow-xl shadow-black/40">
            <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-[#A78BFA] mb-4">
              <Sparkles className="w-4 h-4 text-[#8055F5]" />
              <span>Core Takeaways</span>
            </div>

            <ul className="space-y-3">
              {guide.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#8055F5]/20 text-[#A78BFA] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Content Sections */}
          <div className="space-y-12">
            {guide.contentSections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Stylized Blockquote if present */}
                {section.highlightQuote && (
                  <div className="my-6 p-6 rounded-2xl bg-[#131827] border-l-4 border-[#8055F5] border-y border-r border-y-[#1f2937] border-r-[#1f2937] relative">
                    <Quote className="w-8 h-8 text-[#8055F5]/20 absolute top-4 right-4 pointer-events-none" />
                    <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed">
                      "{section.highlightQuote}"
                    </p>
                  </div>
                )}

                {/* Interactive Action Checklist if present */}
                {section.actionChecklist && (
                  <div className="mt-6 rounded-2xl bg-[#131827] border border-[#1f2937] p-5 sm:p-6 space-y-3">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#A78BFA] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Actionable Protocol:</span>
                    </h3>

                    <div className="space-y-2.5">
                      {section.actionChecklist.map((task, tIdx) => {
                        const isDone = completedActionItems.includes(task);
                        return (
                          <div
                            key={tIdx}
                            onClick={() => toggleActionItem(task)}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              isDone
                                ? "bg-[#0B151E] border-emerald-500/30 text-gray-300"
                                : "bg-[#0B0D19] border-[#1f2937] text-white hover:border-[#8055F5]/40"
                            }`}
                          >
                            <button
                              type="button"
                              className="mt-0.5 text-gray-500 shrink-0"
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-500" />
                              )}
                            </button>
                            <span className={`text-sm ${isDone ? "line-through text-gray-400" : ""}`}>
                              {task}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Daily Reflection Prompt Box */}
          <div className="my-14 rounded-3xl bg-gradient-to-br from-[#1E1B4B]/70 to-[#131827] border border-[#8055F5]/40 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              <HelpCircle className="w-4 h-4 text-[#8055F5]" />
              <span>Today's Reflection Prompt</span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              "{guide.reflectionPrompt}"
            </p>
            <div className="pt-2">
              <Link
                to="/mindset"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8055F5] hover:bg-[#6D28D9] text-white font-semibold text-xs transition-all shadow-md shadow-[#8055F5]/25"
              >
                <span>Write in Mindset Journal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Related Guides Section */}
          <div className="pt-10 border-t border-[#1f2937]">
            <h3 className="text-xl font-black text-white mb-6">
              Continue Your Transformation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedGuides.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/mindset/${rel.slug}`}
                  className="group rounded-2xl bg-[#131827] border border-[#1f2937] hover:border-[#8055F5]/40 p-4 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#A78BFA]">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C4B5FD] transition-colors mt-1 line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#1f2937]/70 flex items-center justify-between text-xs text-gray-400">
                    <span>{rel.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A78BFA] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MindsetGuideDetail;
