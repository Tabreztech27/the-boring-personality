import React, { useState } from "react";
import {
  PenLine,
  Save,
  CheckCircle2,
  Lock,
  Calendar,
  History,
  Trash2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import type { JournalEntry } from "../mindsetData";

const JOURNAL_STORAGE_KEY = "tbp_mindset_journal_entries_v1";

export const JournalSection: React.FC = () => {
  const [learned, setLearned] = useState("");
  const [challenged, setChallenged] = useState("");
  const [improve, setImprove] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const stored = localStorage.getItem(JOURNAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [showHistory, setShowHistory] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!learned.trim() && !challenged.trim() && !improve.trim()) {
      setStatusMessage("Please fill in at least one reflection prompt before saving.");
      setSaveStatus("error");
      return;
    }

    setSaveStatus("saving");

    const newEntry: JournalEntry = {
      id: "journal_" + Date.now(),
      date: currentDate,
      learned: learned.trim(),
      challenged: challenged.trim(),
      improve: improve.trim(),
      timestamp: Date.now(),
    };

    try {
      const updatedEntries = [newEntry, ...entries];
      localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
      setSaveStatus("saved");
      const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setStatusMessage(`Saved to local journal • Today at ${timeStr}`);

      // Clear current form fields after save
      setLearned("");
      setChallenged("");
      setImprove("");
    } catch (err) {
      console.error("Failed to save journal entry to localStorage", err);
      setSaveStatus("error");
      setStatusMessage("Failed to save entry. Browser storage quota may be exceeded.");
    }
  };

  const handleDeleteEntry = (id: string) => {
    try {
      const updated = entries.filter((e) => e.id !== id);
      localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(updated));
      setEntries(updated);
    } catch (err) {
      console.warn("Could not delete journal entry", err);
    }
  };

  return (
    <section id="journal-section" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#1f2937] bg-[#131827] p-6 sm:p-10 shadow-2xl shadow-black/60">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#1f2937]/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8055F5]/10 border border-[#8055F5]/30 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2">
                <PenLine className="w-3.5 h-3.5" />
                <span>Daily Introspection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Mindset <span className="text-[#8055F5]">Journal</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 flex items-center gap-1.5 bg-[#0B0D19] px-3.5 py-2 rounded-xl border border-[#1f2937]">
                <Calendar className="w-3.5 h-3.5 text-[#A78BFA]" />
                {currentDate}
              </span>

              {entries.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowHistory(!showHistory)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B0D19] border border-[#1f2937] text-xs font-medium text-gray-300 hover:text-white hover:border-[#8055F5]/40 transition-colors"
                >
                  <History className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Past Entries ({entries.length})</span>
                  {showHistory ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Privacy Notice Badge */}
          <div className="my-5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0B0D19]/80 border border-[#1f2937] text-xs text-gray-400">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-gray-300">Private by default:</strong> Your journal entries are stored strictly inside your local browser storage. No data is transmitted or shared.
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-6 pt-2">
            {/* Prompt 1 */}
            <div className="space-y-2">
              <label
                htmlFor="prompt-learned"
                className="block text-sm font-semibold text-gray-200 flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-md bg-[#8055F5]/20 text-[#A78BFA] text-xs flex items-center justify-center font-bold">
                  1
                </span>
                What did I learn today?
              </label>
              <textarea
                id="prompt-learned"
                rows={3}
                value={learned}
                onChange={(e) => setLearned(e.target.value)}
                placeholder="A key realization, a book takeaway, or an observation about human behavior..."
                className="w-full p-4 rounded-xl bg-[#0B0D19] border border-[#1f2937] focus:border-[#8055F5] focus:ring-1 focus:ring-[#8055F5] text-white text-sm placeholder-gray-500 outline-none transition-colors resize-y"
              />
            </div>

            {/* Prompt 2 */}
            <div className="space-y-2">
              <label
                htmlFor="prompt-challenged"
                className="block text-sm font-semibold text-gray-200 flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-md bg-[#8055F5]/20 text-[#A78BFA] text-xs flex items-center justify-center font-bold">
                  2
                </span>
                What challenged me today?
              </label>
              <textarea
                id="prompt-challenged"
                rows={3}
                value={challenged}
                onChange={(e) => setChallenged(e.target.value)}
                placeholder="An emotional trigger, an unexpected obstacle, or moment of self-doubt..."
                className="w-full p-4 rounded-xl bg-[#0B0D19] border border-[#1f2937] focus:border-[#8055F5] focus:ring-1 focus:ring-[#8055F5] text-white text-sm placeholder-gray-500 outline-none transition-colors resize-y"
              />
            </div>

            {/* Prompt 3 */}
            <div className="space-y-2">
              <label
                htmlFor="prompt-improve"
                className="block text-sm font-semibold text-gray-200 flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-md bg-[#8055F5]/20 text-[#A78BFA] text-xs flex items-center justify-center font-bold">
                  3
                </span>
                What is one thing I can improve tomorrow?
              </label>
              <textarea
                id="prompt-improve"
                rows={3}
                value={improve}
                onChange={(e) => setImprove(e.target.value)}
                placeholder="A specific tactical adjustment: earlier bedtime, 1 fewer distraction, calmer response..."
                className="w-full p-4 rounded-xl bg-[#0B0D19] border border-[#1f2937] focus:border-[#8055F5] focus:ring-1 focus:ring-[#8055F5] text-white text-sm placeholder-gray-500 outline-none transition-colors resize-y"
              />
            </div>

            {/* Footer Row: Save Button & Status */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs">
                {saveStatus === "saved" && (
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {statusMessage}
                  </span>
                )}
                {saveStatus === "error" && (
                  <span className="text-red-400 flex items-center gap-1.5 font-medium">
                    <AlertCircle className="w-4 h-4" />
                    {statusMessage}
                  </span>
                )}
                {saveStatus === "idle" && (
                  <span className="text-gray-500">
                    Entries remain safely stored on this computer.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={saveStatus === "saving"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#8055F5] to-[#6366f1] text-white text-sm font-semibold shadow-lg shadow-[#8055F5]/25 hover:shadow-[#8055F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>Save Entry</span>
              </button>
            </div>
          </form>

          {/* Past Entries Drawer */}
          {showHistory && (
            <div className="mt-8 pt-8 border-t border-[#1f2937]/80 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <History className="w-4 h-4 text-[#A78BFA]" />
                <span>Previous Journal Entries ({entries.length})</span>
              </h3>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-800">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0B0D19] border border-[#1f2937] space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#A78BFA] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {entry.date}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteEntry(entry.id)}
                        aria-label="Delete entry"
                        className="text-gray-500 hover:text-red-400 p-1 transition-colors"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {entry.learned && (
                      <div className="text-xs space-y-1">
                        <span className="text-gray-400 font-semibold">1. Learned:</span>
                        <p className="text-gray-200 pl-2 border-l border-[#8055F5]/40">
                          {entry.learned}
                        </p>
                      </div>
                    )}

                    {entry.challenged && (
                      <div className="text-xs space-y-1">
                        <span className="text-gray-400 font-semibold">2. Challenged by:</span>
                        <p className="text-gray-200 pl-2 border-l border-[#8055F5]/40">
                          {entry.challenged}
                        </p>
                      </div>
                    )}

                    {entry.improve && (
                      <div className="text-xs space-y-1">
                        <span className="text-gray-400 font-semibold">3. Tomorrow's Improvement:</span>
                        <p className="text-gray-200 pl-2 border-l border-[#8055F5]/40">
                          {entry.improve}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
