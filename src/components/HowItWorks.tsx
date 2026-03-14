interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    accent: '#3b82f6',
    tag: '30 Second Setup',
    title: 'Install the Extension',
    description:
      'Visit the Chrome Web Store, click "Add to Chrome," and you\'re done. No sign-up. No credit card. No configuration. ReplyChief appears instantly inside your LinkedIn feed.',
    visual: <InstallVisual />,
    highlights: ['No sign-up required', 'No credit card needed', 'Instant activation'],
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
      </svg>
    ),
    accent: '#8b5cf6',
    tag: 'Zero Friction',
    title: 'Click Any LinkedIn Post',
    description:
      'Scroll your LinkedIn feed and find a post worth engaging with. Click the ReplyChief icon next to the comment box. That\'s it — the AI instantly reads the full post context.',
    visual: <ClickVisual />,
    highlights: ['Works in your live feed', 'One-click activation', 'Full context analysis'],
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    accent: '#10b981',
    tag: 'In Under 2 Seconds',
    title: 'Get AI Suggestions & Post',
    description:
      'ReplyChief generates multiple tailored comment suggestions instantly. Choose a tone, review, personalize if needed, and click Post. What took 5 minutes now takes 10 seconds.',
    visual: <SuggestVisual />,
    highlights: ['12 professional tones', 'Context-aware AI', 'One-click posting'],
  },
];

export default function HowItWorks({ isDark }: Props) {
  return (
    <section
      id="how-it-works"
      className={`relative py-28 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-[0.06] ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 scroll-reveal">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${
              isDark
                ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            How It Works
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            From Feed to Posted Comment{' '}
            <span className="text-gradient">in 10 Seconds</span>
          </h2>
          <p
            className={`text-lg max-w-xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            No learning curve. No tab switching. No friction. Just install, click, and engage.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0 relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 pointer-events-none">
            <div
              className={`h-full w-full ${
                isDark
                  ? 'bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0'
                  : 'bg-gradient-to-b from-blue-300/0 via-blue-300/50 to-blue-300/0'
              }`}
            />
          </div>

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`scroll-reveal lg:flex lg:items-center lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* ── Text side ── */}
                <div className="flex-1 lg:max-w-[46%]">
                  <div
                    className={`relative p-7 sm:p-9 rounded-2xl border card-shine group transition-all duration-500 hover:-translate-y-1 ${
                      isDark
                        ? 'bg-slate-900 border-white/8 hover:border-blue-500/30 shadow-xl shadow-black/30'
                        : 'bg-white border-slate-200 hover:border-blue-200 shadow-lg shadow-slate-100/80 hover:shadow-blue-50'
                    }`}
                  >
                    {/* Step number watermark */}
                    <div
                      className="absolute top-5 right-5 text-6xl font-black opacity-[0.05] select-none"
                      style={{ color: step.accent }}
                    >
                      {step.number}
                    </div>

                    {/* Icon + tag */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${step.accent}22 0%, ${step.accent}11 100%)`,
                          border: `1px solid ${step.accent}33`,
                          color: step.accent,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: step.accent }}
                        >
                          Step {step.number}
                        </span>
                        <div
                          className={`text-xs font-semibold mt-0.5 px-2 py-0.5 rounded-full inline-block ml-2 ${
                            isDark ? 'bg-white/8 text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {step.tag}
                        </div>
                      </div>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                      {step.highlights.map((h, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2"
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${step.accent}22`, border: `1px solid ${step.accent}44` }}
                          >
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke={step.accent}
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Animated bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                    />
                  </div>
                </div>

                {/* ── Center connector dot (desktop only) ── */}
                <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-12">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-lg z-10"
                    style={{
                      background: isDark ? '#0f172a' : '#fff',
                      borderColor: step.accent,
                      boxShadow: `0 0 20px ${step.accent}44`,
                    }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: step.accent }}
                    />
                  </div>
                </div>

                {/* ── Visual side ── */}
                <div className="flex-1 lg:max-w-[46%] mt-6 lg:mt-0">
                  <div
                    className={`relative rounded-2xl overflow-hidden border p-5 sm:p-6 ${
                      isDark
                        ? 'bg-slate-900/60 border-white/8 backdrop-blur-sm'
                        : 'bg-white/70 border-slate-200 backdrop-blur-sm shadow-sm'
                    }`}
                  >
                    {step.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 scroll-reveal">
          <div
            className={`inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl border ${
              isDark
                ? 'bg-slate-900 border-blue-500/20 shadow-xl shadow-black/20'
                : 'bg-white border-blue-100 shadow-xl shadow-blue-50'
            }`}
          >
            <div className="text-left">
              <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to try it yourself?
              </p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Free forever · No credit card · Installs in 30 seconds
              </p>
            </div>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
              </svg>
              Add to Chrome — Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Step Visual Components ──────────────────────────────────────────────── */

function InstallVisual() {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Chrome Web Store</p>
      {/* Extension card */}
      <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border border-blue-500/20">
        <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="w-12 h-12 rounded-xl shadow-md flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-blue-600 dark:text-blue-400">ReplyChief</p>
          <p className="text-xs text-slate-500 mt-0.5">LinkedIn AI Comment Generator</p>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex text-yellow-400 text-xs">★★★★★</div>
            <span className="text-xs text-slate-400">2,000+ users</span>
          </div>
        </div>
        <button className="px-3 py-1.5 text-xs font-bold text-white rounded-lg gradient-brand shadow-md shadow-blue-500/30 flex-shrink-0 hover:-translate-y-0.5 transition-transform">
          Add to Chrome
        </button>
      </div>
      {/* Progress steps */}
      <div className="space-y-2 pt-1">
        {[
          { done: true, text: 'Extension downloaded' },
          { done: true, text: 'Permissions granted' },
          { done: true, text: 'ReplyChief activated in feed' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? 'bg-green-500' : 'bg-slate-300'}`}>
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-300">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClickVisual() {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Your LinkedIn Feed</p>
      {/* Fake post */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden">
        <div className="p-3 flex items-center gap-2.5 bg-white dark:bg-slate-800">
          <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold flex-shrink-0">TK</div>
          <div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Tom Keller</p>
            <p className="text-[10px] text-slate-400">Product Lead · 1h</p>
          </div>
        </div>
        <div className="px-3 pb-3 bg-white dark:bg-slate-800">
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-slate-100 dark:bg-white/10 w-full" />
            <div className="h-2 rounded bg-slate-100 dark:bg-white/10 w-4/5" />
            <div className="h-2 rounded bg-slate-100 dark:bg-white/10 w-3/5" />
          </div>
        </div>
        {/* Comment row with RC button */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-slate-100 dark:border-white/8 bg-slate-50 dark:bg-slate-800/80">
          <div className="flex-1 h-8 rounded-full bg-slate-200 dark:bg-white/10 text-xs flex items-center px-3 text-slate-400">
            Add a comment...
          </div>
          {/* ReplyChief trigger button with pulse animation */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30 scale-110" />
            <button className="relative w-8 h-8 rounded-full gradient-brand flex items-center justify-center shadow-lg shadow-blue-500/40">
              <img src="https://replychief.com/asset/logo.png" alt="RC" className="w-5 h-5 rounded-full" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-slate-400">
        ↑ Click the <span className="font-semibold text-blue-500">ReplyChief button</span> to generate AI comments
      </p>
    </div>
  );
}

function SuggestVisual() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">AI Suggestions Ready</p>
        <span className="flex items-center gap-1 text-[10px] text-green-500 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          1.8s
        </span>
      </div>
      {/* Tone selector */}
      <div className="flex gap-1.5 flex-wrap mb-1">
        {['💡 Insightful', '👏 Supportive', '🔥 Contrarian', '😄 Witty'].map((tone, i) => (
          <span key={tone} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer transition-all ${
            i === 0
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
              : 'bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
          }`}>
            {tone}
          </span>
        ))}
      </div>
      {/* Suggestions */}
      {[
        { text: 'This is exactly the kind of thinking that separates great product leaders from the rest. The data-first approach to user empathy is underrated — congrats on the milestone!', selected: true },
        { text: 'Powerful insight. I\'d add that the key is measuring the right signals — not just volume, but quality of user intent. What metrics matter most to your team right now?', selected: false },
      ].map((s, i) => (
        <div
          key={i}
          className={`p-3 rounded-xl text-xs leading-relaxed cursor-pointer transition-all duration-200 ${
            s.selected
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/8 border border-transparent hover:border-slate-200 dark:hover:border-white/10'
          }`}
        >
          {s.text}
        </div>
      ))}
      <button className="w-full py-2.5 text-xs font-bold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 mt-1">
        ✓ Post This Comment
      </button>
    </div>
  );
}
