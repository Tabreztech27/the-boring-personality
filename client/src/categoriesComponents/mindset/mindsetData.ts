export interface MindsetCategory {
  id: string;
  title: string;
  description: string;
  guidesCount: number;
  image: string;
  iconName: string;
  badge: string;
  filterKey: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
  highlightQuote?: string;
  actionChecklist?: string[];
}

export interface MindsetGuide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  categoryFilter: string;
  image: string;
  publishDate: string;
  author: string;
  featured: boolean;
  keyTakeaways: string[];
  contentSections: ContentSection[];
  reflectionPrompt: string;
}

export interface DailyMission {
  day: number;
  title: string;
  description: string;
  mission: string;
  timeCommitment: string;
  whyItWorks: string;
}

export interface MindsetQuote {
  id: string;
  quote: string;
  author: string;
  source: string;
  category: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  learned: string;
  challenged: string;
  improve: string;
  notes?: string;
  timestamp: number;
}

export const MINDSET_CATEGORIES: MindsetCategory[] = [
  {
    id: "growth-mindset",
    title: "Growth Mindset",
    description: "Develop a learning mindset, overcome limiting beliefs, and learn from failure.",
    guidesCount: 6,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    iconName: "Brain",
    badge: "Core Pillar",
    filterKey: "Growth",
  },
  {
    id: "discipline-consistency",
    title: "Discipline & Consistency",
    description: "Build routines, stop procrastinating, and stay consistent.",
    guidesCount: 8,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop",
    iconName: "Shield",
    badge: "Most Popular",
    filterKey: "Discipline",
  },
  {
    id: "emotional-control",
    title: "Emotional Control",
    description: "Understand your emotions, handle rejection, and manage overthinking.",
    guidesCount: 5,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    iconName: "Compass",
    badge: "Emotional IQ",
    filterKey: "Emotional Control",
  },
  {
    id: "focus-productivity",
    title: "Focus & Productivity",
    description: "Improve concentration, manage time, and reduce distractions.",
    guidesCount: 7,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    iconName: "Target",
    badge: "Deep Work",
    filterKey: "Focus",
  },
  {
    id: "confidence-self-worth",
    title: "Confidence & Self-Worth",
    description: "Build self-trust, overcome self-doubt, and stop unhealthy comparisons.",
    guidesCount: 6,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    iconName: "Sparkles",
    badge: "Internal Trust",
    filterKey: "Confidence",
  },
  {
    id: "goals-life-direction",
    title: "Goals & Life Direction",
    description: "Set meaningful goals and turn your vision into practical action plans.",
    guidesCount: 5,
    image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=800&auto=format&fit=crop",
    iconName: "Compass",
    badge: "Life Architecture",
    filterKey: "Goals",
  },
  {
    id: "habits-behaviour",
    title: "Habits & Behaviour",
    description: "Build positive habits and break unhelpful behavioural patterns.",
    guidesCount: 7,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    iconName: "Flame",
    badge: "Systems First",
    filterKey: "Habits",
  },
  {
    id: "success-resilience",
    title: "Success & Resilience",
    description: "Develop patience, learn from setbacks, and think long-term.",
    guidesCount: 6,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    iconName: "Award",
    badge: "Long Term",
    filterKey: "Success",
  },
];

export const MINDSET_GUIDES: MindsetGuide[] = [
  {
    id: "stop-overthinking",
    slug: "how-to-stop-overthinking",
    title: "How to Stop Overthinking",
    summary: "Break the chronic loop of rumination, reframe intrusive thought spirals, and ground yourself firmly in physical, actionable reality.",
    readTime: "6 min read",
    category: "Emotional Control",
    categoryFilter: "Emotional Control",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop",
    publishDate: "Updated Recently",
    author: "TBP Mindset Lab",
    featured: true,
    keyTakeaways: [
      "Overthinking is not problem solving; it is an anxiety defense mechanism disguised as intelligence.",
      "The 5-4-3-2-1 grounding technique interrupts the default mode network in under 90 seconds.",
      "Action is the antidote to paralysis — moving your body shifts your cognitive biochemistry.",
      "Learn to separate solvable problems from hypothetical scenarios that have not occurred.",
    ],
    contentSections: [
      {
        heading: "1. The Illusion of Mental Control",
        body: [
          "Most high-achieving individuals believe that thinking about a challenge repeatedly will yield the optimal answer. In psychology, this is known as catastrophic rumination. Your brain loops across catastrophic edge cases because it seeks absolute certainty in an inherently uncertain world.",
          "When you replay a conversation or obsess over a future presentation, you aren't finding solutions; you are exhausting your prefrontal cortex. Recognizing that rumination is a stress reaction rather than productive analysis is step one.",
        ],
        highlightQuote: "Overthinking creates problems that never existed, while action eliminates the friction of reality.",
        actionChecklist: [
          "Write down the exact worry on paper to externalize it from your working memory.",
          "Ask yourself: 'Is this actionable in the next 15 minutes?' If no, schedule a dedicated 10-minute worry window for tomorrow.",
          "Engage in physical movement (e.g. 20 pushups, brisk walk) to release accumulated cortisol.",
        ],
      },
      {
        heading: "2. The 90-Second Physical Grounding Protocol",
        body: [
          "Neuroscientist Jill Bolte Taylor discovered that the physiological lifespan of an emotion inside your bloodstream is roughly 90 seconds. Any anger, anxiety, or compulsive overthinking lasting longer is continually self-stimulated by your own ongoing inner monologue.",
          "When you notice an intrusive loop starting, shift from cognitive processing to somatic awareness. Feel your feet flat on the floor, observe temperature against your skin, and exhale twice as long as you inhale to activate your parasympathetic nervous system.",
        ],
        actionChecklist: [
          "Practice box breathing: Inhale 4s, hold 4s, exhale 4s, hold 4s.",
          "Name 3 neutral physical objects around you to anchor in the present environment.",
          "State clearly: 'I am experiencing an anxious thought, but I am not my thoughts.'",
        ],
      },
      {
        heading: "3. Shifting from Deliberation to Micro-Execution",
        body: [
          "Deliberation has diminishing returns. Once you have 70% of the information, any additional time spent thinking is merely procrastination dressed as diligence.",
          "Lower the activation energy. If you are terrified of writing a project draft or reaching out to someone, commit to writing just one imperfect sentence or sending one brief email. Momentum always follows motion.",
        ],
      },
    ],
    reflectionPrompt: "What is one situation you have been obsessively overthinking, and what is the single smallest physical action you can take right now to resolve it?",
  },
  {
    id: "build-unbreakable-discipline",
    slug: "build-unbreakable-discipline",
    title: "Build Unbreakable Discipline",
    summary: "Why motivation is an unreliable emotion and how to build friction-free operating systems that keep you consistent every single day.",
    readTime: "8 min read",
    category: "Discipline & Consistency",
    categoryFilter: "Discipline",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    publishDate: "Editor's Choice",
    author: "TBP Discipline Systems",
    featured: true,
    keyTakeaways: [
      "Motivation gets you started on day one; structural systems keep you executing on day one hundred.",
      "Remove decision fatigue by designing default choices the evening before.",
      "The 'Two-Day Rule': Never skip an essential habit two consecutive days.",
      "Self-discipline is fundamentally self-respect manifested through delayed gratification.",
    ],
    contentSections: [
      {
        heading: "1. The Myth of the Inspired Genius",
        body: [
          "Amateurs wait for inspiration; professionals sit down and work regardless of mood. Motivation is a neurochemical spike driven by dopamine. It fluctuates with your sleep, diet, caffeine intake, and weather. Building your career or health on motivation is like building a house on shifting sand.",
          "True discipline is the capacity to execute the scheduled mission whether you feel ecstatic, bored, or exhausted. It is an emotional contract with your future self.",
        ],
        highlightQuote: "Discipline is choosing between what you want now and what you want most.",
        actionChecklist: [
          "Define your non-negotiable daily core trio (3 tasks that MUST be finished).",
          "Decide the exact start time and location for tomorrow's hardest task before going to sleep.",
          "Commit to doing the first 5 minutes of work even if resistance feels overwhelming.",
        ],
      },
      {
        heading: "2. Environmental Design Over Willpower",
        body: [
          "Willpower is an exhaustible battery. Every time you resist checking your phone, eating junk food, or opening social media, you deplete mental energy. People who appear to have superhuman discipline actually structure environments where temptation is nearly non-existent.",
          "If your smartphone is in the other room while studying or working, your focus increases by up to 26% even if the phone is turned off. Protect your focus with physical barriers.",
        ],
        actionChecklist: [
          "Charge your phone outside your bedroom to eliminate morning scrolling.",
          "Keep high-focus workspace clear of visual clutter.",
          "Use site blockers to make mindless browsing painfully inconvenient.",
        ],
      },
      {
        heading: "3. The Identity Shift: Becoming Reliable to Yourself",
        body: [
          "Every broken promise you make to yourself erodes your self-esteem. Conversely, every time you keep a small promise — waking up without hitting snooze, hitting the gym on a rainy evening — you cast a vote for your new identity as a dependable person.",
        ],
      },
    ],
    reflectionPrompt: "Where in your routine are you currently relying on willpower instead of designing a smarter environment?",
  },
  {
    id: "growth-mindset-blueprint",
    slug: "how-to-develop-a-growth-mindset",
    title: "How to Develop a Growth Mindset",
    summary: "Shift from fixed talent limitations to neuroplastic capability. Learn how to reframe failure, criticism, and setbacks as high-octane data.",
    readTime: "7 min read",
    category: "Growth Mindset",
    categoryFilter: "Growth",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
    publishDate: "Essential Guide",
    author: "TBP Cognitive Science",
    featured: true,
    keyTakeaways: [
      "Fixed mindset views ability as static; growth mindset understands skill is malleable through deliberate practice.",
      "The power of 'YET': Adding this one word transforms impossible walls into temporary benchmarks.",
      "Mistakes are metabolic signals for neural restructuring — errors trigger neuroplastic adaptation.",
      "Learn to seek honest critical feedback rather than hollow ego-stroking praise.",
    ],
    contentSections: [
      {
        heading: "1. The Biology of Learning",
        body: [
          "Pioneered by Stanford psychologist Dr. Carol Dweck, mindset theory illustrates how beliefs about intelligence govern human potential. In a fixed mindset, effort is seen as proof of lack of talent. In a growth mindset, effort is the exact engine that triggers myelin formation around neural circuits.",
          "When you struggle with a hard mathematical problem, code bug, or tough conversation, your brain releases acetylcholine and epinephrine. That discomfort is literally the chemical trigger required for your synaptic pathways to adapt.",
        ],
        highlightQuote: "You are not bad at this; you are simply encountering the friction required for your brain to upgrade.",
        actionChecklist: [
          "Whenever you say 'I can't do this', append the word '...yet'.",
          "Identify one skill where you previously believed 'I am just not naturally gifted' and audit that limiting assumption.",
          "Deconstruct a recent setback into 3 neutral, tactical lessons.",
        ],
      },
      {
        heading: "2. Reinterpreting Criticism as Free Coaching",
        body: [
          "People with a fragile ego hear criticism as an existential attack on their self-worth. People with a growth mindset view criticism as an expedited shortcut to mastery. Even unfair or poorly delivered critique usually contains a 5% grain of actionable truth.",
        ],
      },
    ],
    reflectionPrompt: "What is an area of your life where you have avoided challenging yourself because you feared looking foolish or unskilled?",
  },
  {
    id: "stop-comparing-yourself",
    slug: "stop-comparing-yourself-to-others",
    title: "Stop Comparing Yourself to Others",
    summary: "Escape the psychological prison of the digital comparison trap. Establish an internal scorecard and find peace in your unique trajectory.",
    readTime: "5 min read",
    category: "Confidence & Self-Worth",
    categoryFilter: "Confidence",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
    publishDate: "Popular",
    author: "TBP Psychology",
    featured: true,
    keyTakeaways: [
      "You are comparing your unfiltered behind-the-scenes reality with someone else's curated highlight reel.",
      "Comparison is the thief of joy, but envy can be decoded into an authentic compass of your desires.",
      "Shift from an external scorecard (validation, applause) to an internal scorecard (integrity, effort).",
      "Your only valid competitor is who you were twelve months ago.",
    ],
    contentSections: [
      {
        heading: "1. The Social Media Funhouse Mirror",
        body: [
          "Human beings evolved in small tribes of 50 to 150 people. Today, your smartphone exposes you daily to the top 0.001% most attractive, wealthy, and seemingly successful individuals on earth. Your evolutionary status instincts misinterpret this as your immediate peer group.",
          "The entrepreneur celebrating a multimillion exit rarely posts about their chronic insomnia, relationship breakdown, or panic attacks. When you envy someone's outcome, you must ask yourself: Would I also trade my health, relationships, and childhood for their exact life? If the answer is no, stop comparing.",
        ],
        highlightQuote: "Do not measure your progress using someone else's ruler.",
        actionChecklist: [
          "Mute or unfollow accounts that trigger feelings of inadequacy or cynical comparison.",
          "Perform a daily 3-item gratitude log focusing on non-material personal blessings.",
          "Notice feelings of envy and ask: 'What unmet goal of my own is this pointing towards?'",
        ],
      },
      {
        heading: "2. Building Warren Buffett's Internal Scorecard",
        body: [
          "Warren Buffett famously asks: 'Would you rather be the world's greatest lover, but have everyone think you are the worst? Or the world's worst lover, but have everyone think you are the greatest?'",
          "Living by an internal scorecard means your daily sense of pride comes from whether you adhered to your own values, did honest work, and treated people with respect — regardless of whether anyone applauded.",
        ],
      },
    ],
    reflectionPrompt: "If nobody on social media could ever know about your achievements, how would your daily priorities change?",
  },
  {
    id: "master-your-focus",
    slug: "master-your-focus",
    title: "Master Your Focus",
    summary: "Deep work rituals, digital minimalism, and cognitive pacing to sustain razor-sharp concentration in an attention-starved economy.",
    readTime: "9 min read",
    category: "Focus & Productivity",
    categoryFilter: "Focus",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    publishDate: "Deep Dive",
    author: "TBP Productivity Lab",
    featured: true,
    keyTakeaways: [
      "Attention is your most valuable asset; multi-tasking is a neurological myth that costs 40% efficiency.",
      "The 90-minute ultradian rhythm aligns work sprints with natural biological peak alertness.",
      "Context switching leaves 'attention residue' that muddles problem-solving for up to 25 minutes.",
      "Boredom tolerance is the fundamental superpower of the 21st century knowledge worker.",
    ],
    contentSections: [
      {
        heading: "1. The High Cost of Attention Residue",
        body: [
          "Dr. Sophie Leroy's research proved that when you switch from Task A to check an email or message for 10 seconds and return to Task A, your brain does not immediately return. A significant portion of your cognitive capacity remains stuck on the distraction for up to 25 minutes.",
          "Constantly glancing at notifications keeps your brain in an agitated, shallow state. You feel busy and exhausted, yet produce zero meaningful intellectual output by evening.",
        ],
        highlightQuote: "The ability to perform deep work is becoming increasingly rare at the exact same time it is becoming increasingly valuable.",
        actionChecklist: [
          "Batch email and messaging into two scheduled 30-minute windows per day.",
          "Use full-screen mode on a single app during 60-minute deep work blocks.",
          "Resist the urge to check your phone while waiting in queues or elevators; re-train boredom tolerance.",
        ],
      },
      {
        heading: "2. The Ultradian Deep Work Protocol",
        body: [
          "Human physiology operates in 90-to-120 minute cycles of peak alertness followed by natural energy dips. Instead of trying to maintain mediocre 8-hour focus, structure your day into two high-intensity 90-minute sprints separated by true active recovery (walking, hydration, resting your eyes).",
        ],
      },
    ],
    reflectionPrompt: "What is your biggest daily source of micro-distractions, and how will you eliminate it tomorrow morning?",
  },
  {
    id: "build-confidence-through-action",
    slug: "build-confidence-through-action",
    title: "Build Confidence Through Action",
    summary: "Confidence is the byproduct of competence and courage, not passive affirmations. Learn how to construct self-trust with micro-bravery.",
    readTime: "6 min read",
    category: "Confidence & Self-Worth",
    categoryFilter: "Confidence",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    publishDate: "High Impact",
    author: "TBP Coaching",
    featured: true,
    keyTakeaways: [
      "You cannot think yourself into self-confidence; you must act your way into self-belief.",
      "Courage always precedes confidence — you must be willing to feel uncomfortable first.",
      "Self-trust is built by collecting a undeniable stack of evidence that you do what you promise.",
      "Reframe nervousness as physiological readiness: excitement and anxiety share identical biology.",
    ],
    contentSections: [
      {
        heading: "1. The Confidence Competence Loop",
        body: [
          "Pop psychology sells the myth that you need to feel confident before you take the leap. In reality, the cycle works in reverse: First comes Action. Action yields Experience. Experience develops Competence. And Competence creates enduring, unshakeable Confidence.",
          "Waiting until you feel ready is a trap. The willingness to look clumsy while learning is the price of admission to high self-worth.",
        ],
        highlightQuote: "Confidence is not 'they will like me'. Confidence is 'I will be completely fine even if they don't.'",
        actionChecklist: [
          "Take one social micro-risk today: hold eye contact, speak up first in a meeting, or give a sincere compliment.",
          "Keep an 'Evidence Journal' documenting 3 challenges you successfully navigated in the past.",
          "Adopt expansive posture: open your shoulders, breathe low into the belly, and ground your stance.",
        ],
      },
      {
        heading: "2. The Reframe: Anxious or Excited?",
        body: [
          "Harvard Business School research shows that telling yourself 'I am calm' when heart is racing rarely works. Instead, reframe the elevated heart rate and adrenaline by saying 'I am excited and ready to execute'. Your body is simply preparing you to perform at your peak.",
        ],
      },
    ],
    reflectionPrompt: "What is one conversation or decision you are delaying because you are waiting to feel confident first?",
  },
  {
    id: "identity-habit-architecture",
    slug: "identity-based-habit-architecture",
    title: "Identity-Based Habit Architecture",
    summary: "Why changing who you believe you are makes positive habits effortless and dissolves negative behavioural patterns at the root.",
    readTime: "7 min read",
    category: "Habits & Behaviour",
    categoryFilter: "Habits",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    publishDate: "Foundational",
    author: "TBP Behavioral Science",
    featured: false,
    keyTakeaways: [
      "Outcome goals (e.g. 'run a marathon') are fragile; identity goals ('I am an athlete') are resilient.",
      "Habit stacking anchors new behaviors onto established automatic neurological routines.",
      "Reduce friction for good habits to under 20 seconds; increase friction for vices.",
      "Small 1% daily optimizations compound into a 37x transformation over twelve months.",
    ],
    contentSections: [
      {
        heading: "1. The Three Layers of Behavior Change",
        body: [
          "Most people focus on the outer layer: Outcomes (losing 10kg, earning $10k/mo). Some focus on the middle layer: Processes (going to gym 4x/week). The masters focus on the core: Identity (I am the type of person who does not miss workouts).",
          "When you identify as a reader, you don't need willpower to pick up a book; reading is simply an expression of your essence.",
        ],
        highlightQuote: "You do not rise to the level of your goals; you fall to the level of your systems.",
        actionChecklist: [
          "Fill in the blank: 'I am the type of person who __________.'",
          "Apply the 2-Minute Rule: Scale any new habit down so it takes under 120 seconds to begin.",
          "Stack the new habit right after an existing anchor habit (e.g., 'After I pour morning coffee, I will write 3 priorities').",
        ],
      },
    ],
    reflectionPrompt: "What is one limiting identity label you have repeated to yourself, and how will you rewrite it today?",
  },
  {
    id: "stoic-resilience-blueprint",
    slug: "the-stoic-resilience-blueprint",
    title: "The Stoic Resilience Blueprint",
    summary: "The dichotomy of control, voluntary discomfort, and how to maintain profound inner tranquility in the midst of chaotic circumstances.",
    readTime: "8 min read",
    category: "Success & Resilience",
    categoryFilter: "Success",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    publishDate: "Classic Wisdom",
    author: "TBP Philosophy",
    featured: false,
    keyTakeaways: [
      "Divide every event into two buckets: what is within your control and what is not.",
      "Amor Fati: Do not merely tolerate adversity; love it as the raw fuel for character development.",
      "Premeditatio Malorum: Mentally rehearsing potential obstacles eliminates surprise and panic.",
      "Tranquility is not freedom from storms; it is being the anchor within the storm.",
    ],
    contentSections: [
      {
        heading: "1. The Dichotomy of Control",
        body: [
          "Epictetus began his Discourses with the fundamental rule of peace: 'Some things are in our control and others not.' Your opinions, desires, actions, and judgments are yours. The weather, economic shifts, opinions of colleagues, and past events are completely outside your direct power.",
          "Suffering occurs whenever you attach your happiness to outcomes outside your circle of control.",
        ],
        highlightQuote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
        actionChecklist: [
          "Draw two columns: 'In My Control' vs 'Outside My Control' for any current crisis.",
          "Pour 100% of your energy exclusively into the 'In My Control' column.",
          "Practice intentional discomfort (cold shower, skipping dessert) to train resilience.",
        ],
      },
    ],
    reflectionPrompt: "What current frustration are you expending emotional energy on that you cannot directly change?",
  },
  {
    id: "reverse-engineered-goals",
    slug: "reverse-engineered-goal-mastery",
    title: "Reverse-Engineered Goal Mastery",
    summary: "Bridge the chasm between a 5-year grand vision and today's 3 priority tasks using backward milestone mapping and lead metrics.",
    readTime: "6 min read",
    category: "Goals & Life Direction",
    categoryFilter: "Goals",
    image: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=800&auto=format&fit=crop",
    publishDate: "Strategic Systems",
    author: "TBP Strategy Lab",
    featured: false,
    keyTakeaways: [
      "Vague aspirations yield vague execution; specificity produces relentless traction.",
      "Distinguish between Lag measures (results) and Lead measures (daily controllable actions).",
      "Deconstruct 1-year goals into 12-week execution sprints.",
      "Review milestones weekly to correct course before drifting off course.",
    ],
    contentSections: [
      {
        heading: "1. The Backward Milestone Funnel",
        body: [
          "A goal without a backward breakdown is merely a daydream. Start with the 3-year vision. Ask: Where must I be in 12 months for that to be possible? Then: Where must I be in 90 days? Then: What must I accomplish this week? And finally: What single task moves the needle today?",
        ],
        highlightQuote: "A dream written down with a date becomes a goal. A goal broken down into steps becomes a plan. A plan backed by action becomes reality.",
        actionChecklist: [
          "Identify your single #1 priority for the next 90 days.",
          "Select the primary daily lead metric you can control 100%.",
          "Schedule a 20-minute Sunday review session to audit weekly progress.",
        ],
      },
    ],
    reflectionPrompt: "What is your primary lead metric this week — the single action you must take every day regardless of results?",
  },
];

export const DAILY_MISSIONS: DailyMission[] = [
  {
    day: 1,
    title: "Define Your Top Three Priorities",
    description: "Clarify your non-negotiable leverage points and eliminate low-value busywork.",
    mission: "Sit down with pen and paper. List everything demanding your time, then ruthlessly circle the top 3 high-impact tasks for your week. Intentionally defer or say no to the rest.",
    timeCommitment: "15 minutes",
    whyItWorks: "Clarity precedes mastery. When everything is important, nothing is important.",
  },
  {
    day: 2,
    title: "Complete One Important Task Without Distractions",
    description: "Protect a 50-minute deep work block with zero interruptions.",
    mission: "Put your phone in another room or turn on airplane mode. Close all unnecessary browser tabs. Set a timer for 50 minutes and work continuously on your #1 priority task until the bell rings.",
    timeCommitment: "50 minutes",
    whyItWorks: "Builds focus stamina and proves you can enter flow state on command.",
  },
  {
    day: 3,
    title: "Create a Simple Morning Routine",
    description: "Replace reactive morning phone scrolling with proactive grounding rituals.",
    mission: "Design a 3-step morning sequence: 1) Drink a large glass of water, 2) 5 minutes of stretching or walking, 3) Review your 3 priorities before opening email or social media.",
    timeCommitment: "15 minutes",
    whyItWorks: "The first hour sets the psychological tone and baseline stress for the entire day.",
  },
  {
    day: 4,
    title: "Spend 10 Minutes Reflecting in a Journal",
    description: "Externalize mental noise and extract wisdom from daily experiences.",
    mission: "Open the Mindset Journal section below. Answer the 3 daily prompts honestly: What did I learn? What challenged me? What is one thing I can improve tomorrow?",
    timeCommitment: "10 minutes",
    whyItWorks: "Unexamined experiences are quickly forgotten; journaled reflection creates permanent growth.",
  },
  {
    day: 5,
    title: "Identify and Reduce One Recurring Distraction",
    description: "Audit your sensory environment and eliminate an unconscious energy leak.",
    mission: "Audit your screen time or workspace. Delete or time-limit one addictive app, turn off all non-human notifications, or organize your desk so friction is removed.",
    timeCommitment: "10 minutes",
    whyItWorks: "Willpower is finite; restructuring your physical and digital space protects mental energy automatically.",
  },
  {
    day: 6,
    title: "Complete a Task You Have Been Postponing",
    description: "Slay the lingering dragon of procrastination that drains background attention.",
    mission: "Identify the uncomfortable email, phone call, application, or task you have avoided for days. Schedule it as the very first thing you do today and finish it before noon.",
    timeCommitment: "20-45 minutes",
    whyItWorks: "Eliminates attention residue and provides a massive surge of dopamine and self-respect.",
  },
  {
    day: 7,
    title: "Review Your Progress and Create a Plan for Next Week",
    description: "Consolidate your week's discipline gains and design the upcoming cycle.",
    mission: "Celebrate completing the 7-day challenge! Review which habits brought the greatest clarity. Write down your top 3 objectives for the upcoming 7 days.",
    timeCommitment: "20 minutes",
    whyItWorks: "Sustainable discipline is built through iterative weekly reflection cycles, not one-time bursts.",
  },
];

export const MINDSET_QUOTES: MindsetQuote[] = [
  {
    id: "quote-1",
    quote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    source: "Meditations",
    category: "Stoicism & Resilience",
  },
  {
    id: "quote-2",
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Letters from a Stoic",
    category: "Emotional Control",
  },
  {
    id: "quote-3",
    quote: "In the growth mindset, failure can be a painful experience. But it doesn't define you. It's a problem to be faced, dealt with, and learned from.",
    author: "Dr. Carol S. Dweck",
    source: "Mindset: The New Psychology of Success",
    category: "Growth Mindset",
  },
  {
    id: "quote-4",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    author: "James Clear",
    source: "Atomic Habits",
    category: "Discipline & Systems",
  },
  {
    id: "quote-5",
    quote: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
    author: "Viktor E. Frankl",
    source: "Man's Search for Meaning",
    category: "Self-Mastery",
  },
  {
    id: "quote-6",
    quote: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
    source: "Discourses",
    category: "Identity & Action",
  },
  {
    id: "quote-7",
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    source: "Twilight of the Idols",
    category: "Purpose & Resilience",
  },
  {
    id: "quote-8",
    quote: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
    author: "Leo Babauta",
    source: "The Power of Less",
    category: "Focus & Clarity",
  },
];

