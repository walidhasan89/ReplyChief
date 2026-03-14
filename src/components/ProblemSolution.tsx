interface Props {
  isDark: boolean;
}

export default function ProblemSolution({ isDark }: Props) {
  const problems = [
    "You scroll your feed and find a great post worth engaging with.",
    "You freeze. What do you say that adds value and doesn't sound generic?",
    "You spend 3–5 minutes crafting something decent — or worse, you type \"Great post!\" and move on.",
    "Multiply that by 20–30 posts per day if you're serious about LinkedIn growth.",
    "The result? Hours lost. Inconsistent engagement. Missed opportunities.",
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-full ${isDark ? 'bg-gradient-to-b from-blue-500/20 via-transparent to-transparent' : 'bg-gradient-to-b from-blue-200/60 via-transparent to-transparent'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-orange-500/10 border border-orange-500/20 text-orange-400' : 'bg-orange-50 border border-orange-200 text-orange-600'}`}>
            The Problem
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Save{' '}
            <span className="text-gradient">10+ Hours Per Week</span>{' '}
            on LinkedIn Engagement
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            LinkedIn engagement is the #1 organic growth lever for professionals in 2026. The{' '}
            <a href="https://replychief.com/linkedin-engagement-chrome-extension" className="text-blue-500 hover:underline">
              best LinkedIn engagement tools
            </a>{' '}
            make this effortless. But doing it manually? That's a time sink most professionals can't afford.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem side */}
          <div className="scroll-reveal-left">
            <div className={`rounded-2xl p-8 border ${isDark ? 'bg-red-500/5 border-red-500/20' : 'bg-red-50 border-red-100'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-red-500/20' : 'bg-red-100'}`}>
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>The Problem with Manual Commenting</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
                      {i + 1}
                    </span>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{problem}</p>
                  </div>
                ))}
              </div>
              <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-100 border border-red-200'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                  😩 Manual LinkedIn commenting is one of the most time-consuming, mentally draining parts of any LinkedIn strategy. Most professionals give up within weeks.
                </p>
              </div>
            </div>
          </div>

          {/* Solution side */}
          <div className="scroll-reveal-right">
            <div className={`rounded-2xl p-8 border ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center gradient-brand`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>How ReplyChief Solves It</h3>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { icon: '🧠', text: 'Reads the full context of any LinkedIn post — topic, tone, industry, and author' },
                  { icon: '⚡', text: 'Generates thoughtful, human-sounding comment suggestions in under 2 seconds' },
                  { icon: '🎯', text: 'No tab-switching. No copying from ChatGPT. No robotic output.' },
                  { icon: '✅', text: 'Click, review, personalize, and post. 3–5 minutes → 10 seconds.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className={`p-4 rounded-xl gradient-brand`}>
                <p className="text-white text-sm font-semibold">
                  🚀 ReplyChief gives you back 10+ hours per week so you can focus on building real relationships, closing deals, and growing your brand on LinkedIn.
                </p>
              </div>

              {/* Time comparison */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
                  <p className={`text-2xl font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>3–5 min</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Manual comment</p>
                </div>
                <div className={`p-4 rounded-xl text-center ${isDark ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
                  <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>10 sec</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>With ReplyChief</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
