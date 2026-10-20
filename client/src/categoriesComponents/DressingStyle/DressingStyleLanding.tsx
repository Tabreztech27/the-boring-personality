import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaTshirt,
  FaCalendarCheck,
  FaShoppingBag,
  FaSuitcase,
  FaCheckCircle,
  FaMagic,
} from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CategoryCard } from './components/CategoryCard';

export const DressingStyleLanding: React.FC = () => {
  const navigate = useNavigate();

  const mainCategories = [
    {
      title: 'Outfit Ideas & Combinations',
      icon: <FaTshirt />,
      desc: 'Discover 10 rich subcategories: casual, college, corporate formal, streetwear, color harmony, and daily formulas.',
      badge: '10 Subcategories • 35+ Formulas',
      tag: 'Curated Outfits',
      path: '/dressing-style/outfit-ideas',
    },
    {
      title: 'Wardrobe Planner & Digital Closet',
      icon: <FaCalendarCheck />,
      desc: 'Digitize your closet, construct personalized outfits, schedule your 7-day weekly calendar, and complete essential basics.',
      badge: 'Digital Closet • 7-Day Scheduler',
      tag: 'Interactive Tool',
      path: '/dressing-style/wardrobe-planner',
    },
    {
      title: 'Budget Fashion & Smart Shopping',
      icon: <FaShoppingBag />,
      desc: 'Look high-status on a realistic budget. Filter by price tiers, calculate cost-per-wear, and unlock insider shopping rules.',
      badge: 'Under ₹999 to Premium • CPW Engine',
      tag: 'Budget Hacks',
      path: '/dressing-style/budget-shopping',
    },
    {
      title: 'Occasion-Based Styling',
      icon: <FaSuitcase />,
      desc: 'Never worry about dress codes. Complete blueprints for weddings, job interviews, first dates, nightlife, and flights.',
      badge: 'Formality Scale • Do’s & Don’ts',
      tag: 'Social Confidence',
      path: '/dressing-style/occasion-styling',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <div className="relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#8B5CF6]/20 blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
          {/* Back button */}
          <button
            onClick={() => navigate('/categories')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm mb-8 group"
          >
            <FaArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" />
            <span>All Categories</span>
          </button>

          {/* Hero Header */}
          <div className="flex items-start gap-4 sm:gap-6 mb-12">
            <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-[#111827] border border-[#1f2937] flex items-center justify-center text-2xl sm:text-3xl text-[#8B5CF6] shrink-0 shadow-xl shadow-[#8B5CF6]/15">
              <FaTshirt />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-xs text-[#A78BFA] font-semibold mb-2">
                <FaMagic size={11} />
                <span>The Complete Dressing Style System</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white">
                Dressing Style & <span className="text-[#8B5CF6]">Personal Aesthetics</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
                Upgrade your visual presence with foolproof outfit combinations, digital wardrobe planning,
                smart cost-per-wear budgeting, and razor-sharp occasion dress codes.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#A78BFA]">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> 4 Dedicated Style Modules
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> Full Browser Persistence
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-400" /> Real Fabric & Value Guidance
                </span>
              </div>
            </div>
          </div>

          {/* 4 Main Categories Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {mainCategories.map((item, index) => (
              <CategoryCard
                key={index}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
                badge={item.badge}
                tag={item.tag}
                onClick={() => navigate(item.path)}
              />
            ))}
          </div>

          {/* Quick Value Pillars */}
          <div className="mt-16 pt-10 border-t border-[#1f2937] grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#0B1120] border border-[#1f2937]">
              <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider block mb-1">
                Pillar 01
              </span>
              <h4 className="text-base font-bold text-white mb-1">Proportions & Fit First</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                A ₹1,000 shirt tailored to your shoulder frame looks more premium than a ₹15,000 designer shirt that droops.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1120] border border-[#1f2937]">
              <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider block mb-1">
                Pillar 02
              </span>
              <h4 className="text-base font-bold text-white mb-1">Capsule Interchangeability</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                By investing in neutral cohesive basics, 12 core wardrobe items produce more than 80 distinct outfits effortlessly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1120] border border-[#1f2937]">
              <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider block mb-1">
                Pillar 03
              </span>
              <h4 className="text-base font-bold text-white mb-1">Zero Morning Decision Fatigue</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Organize your week in 5 minutes every Sunday night with the 7-day outfit calendar and look intentional every single day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DressingStyleLanding;
