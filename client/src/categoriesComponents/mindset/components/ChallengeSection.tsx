import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  Flame,
  Award,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { DAILY_MISSIONS } from "../mindsetData";
import type { DailyMission } from "../mindsetData";

const CHALLENGE_STORAGE_KEY = "tbp_mindset_challenge_progress_v1";

export const ChallengeSection: React.FC = () => {
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(CHALLENGE_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sync to localStorage whenever completedDays change
  const toggleDayCompletion = (dayNumber: number) => {
    const updated = completedDays.includes(dayNumber)
      ? completedDays.filter((d) => d !== dayNumber)
      : [...completedDays, dayNumber].sort((a, b) => a - b);

    try {
      localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(updated));
      setCompletedDays(updated);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (err) {
      console.error("Failed to save challenge progress to localStorage", err);
      setSaveStatus("error");
      // Even if storage failed, keep local state active
      setCompletedDays(updated);
    }
  };

  const handleResetChallenge = () => {
    try {
      localStorage.removeItem(CHALLENGE_STORAGE_KEY);
      setCompletedDays([]);
      setShowResetConfirm(false);
      setExpandedDay(1);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch {
      setSaveStatus("error");
    }
  };

  // Find next incomplete day
  const nextIncompleteDay =
    DAILY_MISSIONS.find((m) => !completedDays.includes(m.day))?.day || null;

  const completedCount = completedDays.length;
  const totalDays = DAILY_MISSIONS.length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);
  const isFullyCompleted = completedCount === totalDays;

  return (
    <section id="challenge-section" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8055F5]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Challenge Card Container */}
        <div className="rounded-3xl border border-[#1f2937] bg-[#131827] p-6 sm:p-10 shadow-2xl shadow-black/60">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#1f2937]/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8055F5]/10 border border-[#8055F5]/30 text-xs font-bold text-[#A78BFA] uppercase tracking-wider mb-3">
                <Flame className="w-4 h-4 text-[#8055F5]" />
                <span>Habit Reprogramming</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Build Your Discipline —{" "}
                <span className="text-[#8055F5]">7-Day Challenge</span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
                Transform passive ambition into structured consistency. Complete one daily mission to rewire mental resistance and build unstoppable momentum.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {nextIncompleteDay ? (
                <button
                  onClick={() => setExpandedDay(nextIncompleteDay)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8055F5] to-[#6366f1] text-white font-semibold text-sm shadow-lg shadow-[#8055F5]/25 hover:shadow-[#8055F5]/40 hover:scale-[1.02] transition-all"
                >
                  Continue: Day {nextIncompleteDay}
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>Challenge Completed!</span>
                </div>
              )}

              {completedCount > 0 && (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="px-4 py-3 rounded-xl bg-[#0B0D19] border border-[#1f2937] text-gray-400 hover:text-white hover:border-red-500/40 text-xs font-medium transition-all"
                  title="Reset challenge progress"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Reset Confirmation Dialog */}
          {showResetConfirm && (
            <div className="my-6 p-4 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-red-300 text-sm">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>Are you sure you want to reset your 7-day challenge progress to Day 1?</span>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#131827] text-gray-300 text-xs hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleResetChallenge}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold"
                >
                  Yes, Reset
                </button>
              </div>
            </div>
          )}

          {/* Progress Bar & Status */}
          <div className="py-6 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-white">
                Challenge Progress:{" "}
                <span className="text-[#A78BFA]">
                  {completedCount} of {totalDays} days completed
                </span>
              </span>
              <span className="font-mono text-xs font-bold text-[#A78BFA] bg-[#0B0D19] px-2.5 py-1 rounded-lg border border-[#1f2937]">
                {progressPercent}%
              </span>
            </div>

            {/* Visual Bar */}
            <div className="w-full h-3 rounded-full bg-[#0B0D19] border border-[#1f2937] overflow-hidden p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8055F5] to-[#6366f1] transition-all duration-500 ease-out shadow-sm shadow-[#8055F5]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Storage status notification */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {saveStatus === "saved"
                    ? "Progress saved automatically to your device"
                    : saveStatus === "error"
                    ? "Note: Could not access local storage, progress may reset on refresh"
                    : "Progress saved locally on this browser"}
                </span>
              </div>
              {isFullyCompleted && (
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 7-Day Discipline Master
                </span>
              )}
            </div>
          </div>

          {/* Congratulations Card when fully completed */}
          {isFullyCompleted && (
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#8055F5]/20 via-[#131827] to-[#6366f1]/20 border border-[#8055F5]/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#8055F5] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#8055F5]/40">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                Discipline Master — Mission Completed!
              </h3>
              <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
                You maintained consistency through all 7 daily protocols. Discipline is no longer an abstract idea; it is a demonstrated habit. Continue applying these systems into your regular weekly rhythm.
              </p>
            </div>
          )}

          {/* Daily Missions List */}
          <div className="space-y-4 pt-2">
            {DAILY_MISSIONS.map((mission: DailyMission) => {
              const isDone = completedDays.includes(mission.day);
              const isExpanded = expandedDay === mission.day;

              return (
                <div
                  key={mission.day}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isDone
                      ? "border-emerald-500/30 bg-[#0B151E]/60"
                      : isExpanded
                      ? "border-[#8055F5]/60 bg-[#171E32]"
                      : "border-[#1f2937] bg-[#0B0D19]/60 hover:border-[#1f2937]/90"
                  }`}
                >
                  {/* Mission Summary Header */}
                  <div className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none">
                    <div
                      className="flex items-center gap-3 sm:gap-4 flex-1"
                      onClick={() => setExpandedDay(isExpanded ? null : mission.day)}
                    >
                      {/* Checkbox Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDayCompletion(mission.day);
                        }}
                        aria-label={`Mark Day ${mission.day} as ${isDone ? "incomplete" : "complete"}`}
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all shrink-0 ${
                          isDone
                            ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/20"
                            : "bg-[#131827] border-[#1f2937] text-gray-500 hover:border-[#8055F5] hover:text-[#A78BFA]"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>

                      {/* Day Label & Title */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono font-bold uppercase tracking-wider ${
                              isDone ? "text-emerald-400" : "text-[#A78BFA]"
                            }`}
                          >
                            Day {mission.day}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-[11px] text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-500" />
                            {mission.timeCommitment}
                          </span>
                        </div>
                        <h4
                          className={`text-base sm:text-lg font-bold truncate mt-0.5 ${
                            isDone ? "text-gray-300 line-through decoration-emerald-500/40" : "text-white"
                          }`}
                        >
                          {mission.title}
                        </h4>
                      </div>
                    </div>

                    {/* Expand/Collapse Chevron */}
                    <button
                      onClick={() => setExpandedDay(isExpanded ? null : mission.day)}
                      aria-label={isExpanded ? "Collapse mission" : "Expand mission"}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Mission Details */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#1f2937]/50 sm:pl-18 space-y-3 text-sm">
                      <div className="bg-[#131827] rounded-xl p-4 border border-[#1f2937]/70 space-y-2">
                        <p className="font-semibold text-[#C4B5FD] text-xs uppercase tracking-wider">
                          Daily Action Mission:
                        </p>
                        <p className="text-gray-200 leading-relaxed">
                          {mission.mission}
                        </p>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-gray-400 bg-[#0B0D19]/40 p-3 rounded-lg border border-[#1f2937]/40">
                        <span className="text-[#8055F5] font-bold">Why it works:</span>
                        <span>{mission.whyItWorks}</span>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => toggleDayCompletion(mission.day)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-all ${
                            isDone
                              ? "bg-[#131827] border border-[#1f2937] text-gray-400 hover:text-white"
                              : "bg-[#8055F5] hover:bg-[#6D28D9] text-white shadow-md shadow-[#8055F5]/20"
                          }`}
                        >
                          {isDone ? (
                            <>
                              <RotateCcw className="w-3.5 h-3.5" /> Mark Incomplete
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Mark Day {mission.day} as Completed
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
