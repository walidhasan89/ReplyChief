import { useState } from 'react';

interface Props {
  isDark: boolean;
}

const useCases = [
  {
    emoji: '🚀',
    title: 'Founders & Entrepreneurs',
    subtitle: 'Build Authority, Attract Investors',
    description:
      'Founders use ReplyChief to build personal brand authority, stay visible in their industry, and attract investors, partners, and early customers — without spending hours per day in their LinkedIn feed.',
    highlight:
      'Comment engagement is one of the highest-ROI activities for early-stage founders, and ReplyChief makes it sustainable.',
    metrics: [
      { label: 'Time Saved', value: '10+ hrs/wk' },
      { label: 'Engagement', value: '5x more' },
    ],
    color: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.15)',
    accentColor: '#8b5cf6',
    link: 'https://replychief.com/linkedin-comment-generator-for-founders',
  },
  {
    emoji: '💼',
    title: 'Sales Professionals',
    subtitle: 'Warm Up Leads, Close More Deals',
    description:
      "Sales reps and SDRs use ReplyChief to comment on prospects' posts, warm up leads before outreach, and stay top-of-mind in their accounts' feeds — engaging with 5–10x more prospects per day.",
    highlight:
      'Social selling on LinkedIn starts with meaningful engagement. ReplyChief makes it scalable.',
    metrics: [
      { label: 'Prospect Reach', value: '10x more' },
      { label: 'Outreach Warm', value: 'Pre-warmed' },
    ],
    color: 'from-blue-500 to-cyan-600',
    glowColor: 'rgba(59,130,246,0.15)',
    accentColor: '#3b82f6',
    link: 'https://replychief.com/linkedin-commenting-tool-for-sales',
  },
  {
    emoji: '📣',
    title: 'Marketing Teams',
    subtitle: 'Amplify Brand Presence at Scale',
    description:
      'Marketing professionals use ReplyChief to amplify brand presence, engage with industry conversations, and support employee advocacy programs with consistent brand voice across all commenters.',
    highlight:
      '3x increase in profile visits reported by marketing teams using ReplyChief with custom voice profiles.',
    metrics: [
      { label: 'Profile Visits', value: '3x more' },
      { label: 'Voice Profiles', value: 'Unlimited' },
    ],
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249,115,22,0.15)',
    accentColor: '#f97316',
    link: 'https://replychief.com/ai-writing-assistant-for-linkedin',
  },
  {
    emoji: '✍️',
    title: 'LinkedIn Creators',
    subtitle: 'Boost Reach, Dominate the Algorithm',
    description:
      "The LinkedIn algorithm rewards comments as much as posts. Creators use ReplyChief to stay actively engaged in their niche, respond faster, and participate in trending conversations — all boosting content reach.",
    highlight:
      "Stay in the algorithm's good graces by engaging consistently across your niche with minimal effort.",
    metrics: [
      { label: 'Algorithm', value: 'Boosted' },
      { label: 'Response Time', value: '10x faster' },
    ],
    color: 'from-green-500 to-emerald-600',
    glowColor: 'rgba(34,197,94,0.15)',
    accentColor: '#22c55e',
    link: 'https://replychief.com/linkedin-personal-branding-ai-tool',
  },
  {
    emoji: '🏅',
    title: 'Personal Branding Experts',
    subtitle: 'The #1 Tool Coaches Recommend',
    description:
      'Personal branding coaches use ReplyChief for their own engagement and as a recommended tool for their clients. It helps individuals build consistent commenting habits — the #1 advice every LinkedIn coach gives.',
    highlight:
      'Recommended by top personal branding coaches globally as the essential LinkedIn engagement tool.',
    metrics: [
      { label: 'Habit Building', value: 'Consistent' },
      { label: 'Client Results', value: 'Proven' },
    ],
    color: 'from-yellow-500 to-orange-500',
    glowColor: 'rgba(234,179,8,0.15)',
    accentColor: '#eab308',
    link: 'https://replychief.com/linkedin-personal-branding-ai-tool',
  },
];

export default function UseCases({ isDark }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="use-cases"
      className={`py-28 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'opacity-5' : 'opacity-[0.04]'}`}
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
          >
            Use Cases
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Who Uses{' '}
            <span className="text-gradient">ReplyChief</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Trusted by professionals across industries who understand that{' '}
            <a
              href="https://replychief.com/best-linkedin-engagement-tools-2026"
              className="text-blue-500 hover:underline"
            >
              LinkedIn engagement
            </a>{' '}
            is a strategic growth channel.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`scroll-reveal group relative rounded-2xl overflow-hidden border cursor-pointer ${
                isDark
                  ? 'bg-slate-800/40 border-white/8'
                  : 'bg-white border-slate-200 shadow-sm'
              } ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease',
                transform: hoveredIndex === i ? 'translateY(-10px) scale(1.015)' : 'translateY(0) scale(1)',
                boxShadow:
                  hoveredIndex === i
                    ? `0 24px 60px -12px ${uc.glowColor}, 0 0 0 1px ${uc.accentColor}30`
                    : isDark
                    ? '0 4px 20px rgba(0,0,0,0.3)'
                    : '0 2px 12px rgba(0,0,0,0.06)',
                borderColor:
                  hoveredIndex === i
                    ? uc.accentColor + '50'
                    : isDark
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgb(226,232,240)',
              }}
            >
              {/* Animated gradient top bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${uc.color} transition-all duration-500`}
                style={{
                  transform: hoveredIndex === i ? 'scaleX(1)' : 'scaleX(0.85)',
                  transformOrigin: 'left',
                  opacity: hoveredIndex === i ? 1 : 0.7,
                }}
              />

              {/* Glow blob on hover */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${uc.glowColor} 0%, transparent 60%)`,
                  opacity: hoveredIndex === i ? 1 : 0,
                }}
              />

              <div className="p-7 relative z-10">
                {/* Top row: icon + metrics */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${uc.color} shadow-lg transition-all duration-500`}
                    style={{
                      transform: hoveredIndex === i ? 'rotate(-6deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      boxShadow: hoveredIndex === i ? `0 8px 20px ${uc.glowColor}` : undefined,
                    }}
                  >
                    {uc.emoji}
                  </div>
                  <div className="flex gap-4">
                    {uc.metrics.map((m, j) => (
                      <div key={j} className="text-right">
                        <p
                          className="text-sm font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${uc.accentColor}, ${uc.accentColor}cc)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {m.value}
                        </p>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtitle */}
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{
                    background: `linear-gradient(135deg, ${uc.accentColor}, ${uc.accentColor}99)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {uc.subtitle}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {uc.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  {uc.description}
                </p>

                {/* Highlight quote */}
                <div
                  className={`p-3.5 rounded-xl text-xs font-medium italic leading-relaxed transition-all duration-300 ${
                    isDark ? 'bg-white/5 text-slate-300 border border-white/8' : 'bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                  style={{
                    borderColor: hoveredIndex === i ? uc.accentColor + '30' : undefined,
                    background:
                      hoveredIndex === i
                        ? isDark
                          ? `linear-gradient(135deg, ${uc.glowColor}, rgba(255,255,255,0.03))`
                          : `linear-gradient(135deg, ${uc.glowColor}, rgba(255,255,255,0.9))`
                        : undefined,
                  }}
                >
                  "{uc.highlight}"
                </div>

                {/* Learn more link — appears on hover */}
                <div
                  className="mt-4 flex items-center gap-1 text-xs font-semibold transition-all duration-300"
                  style={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(6px)',
                    color: uc.accentColor,
                  }}
                >
                  <a href={uc.link} className="hover:underline">
                    Learn more
                  </a>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
