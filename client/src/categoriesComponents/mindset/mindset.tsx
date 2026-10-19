import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import GuidesSection from "./components/GuidesSection";
import ChallengeSection from "./components/ChallengeSection";
import QuoteCard from "./components/QuoteCard";
import JournalSection from "./components/JournalSection";
import type { MindsetCategory } from "./mindsetData";

export const MindsetPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExploreGuides = () => {
    const el = document.getElementById("guides-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStartChallenge = () => {
    const el = document.getElementById("challenge-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (category: MindsetCategory) => {
    setSelectedCategory(category.filterKey);
    const el = document.getElementById("guides-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D19] text-white selection:bg-[#8055F5] selection:text-white flex flex-col font-sans">
      {/* Existing App Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={handleExploreGuides}
          onChallengeClick={handleStartChallenge}
        />

        {/* 2. Mindset Categories (8 Categories) */}
        <CategorySection
          activeCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 3. Daily Mindset Quote */}
        <QuoteCard />

        {/* 4. Featured Mindset Guides & Live Search / Filters */}
        <GuidesSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 5. Interactive 7-Day Discipline Challenge */}
        <ChallengeSection />

        {/* 6. Mindset Journal */}
        <JournalSection />
      </main>

      {/* Existing App Footer */}
      <Footer />
    </div>
  );
};

export default MindsetPage;
