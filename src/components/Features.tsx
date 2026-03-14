interface Props {
  isDark: boolean;
}

const tones = [
  { emoji: '💡', name: 'Insightful', desc: 'Adding depth to thought leadership posts' },
  { emoji: '👏', name: 'Supportive', desc: 'Celebrating wins and milestones' },
  { emoji: '🤔', name: 'Thought-Provoking', desc: 'Asking smart questions that spark discussion' },
  { emoji: '😄', name: 'Witty', desc: 'Light-hearted engagement that stands out' },
  { emoji: '📊', name: 'Analytical', desc: 'Data-driven and industry-specific posts' },
  { emoji: '🤝', name: 'Agreeable', desc: 'Building rapport and affirming shared views' },
  { emoji: '🔥', name: 'Contrarian', desc: 'Respectfully offering an alternative perspective' },
  { emoji: '📖', name: 'Storytelling', desc: 'Sharing a brief personal anecdote' },
  { emoji: '🎯', name: 'Direct', desc: 'Concise, no-fluff professional responses' },
  { emoji: '💬', name: 'Conversational', desc: 'Casual and approachable engagement' },
  { emoji: '🏆', name: 'Motivational', desc: 'Encouraging and inspiring responses' },
  { emoji: '🧩', name: 'Connector', desc: 'Bridging ideas and tagging relevant themes' },
];

const mainFeatures = [
  {
    icon: '🧠',
    gradient: 'from-purple-500 to-blue-500',
    title: 'Context-Aware AI Generation',
    description: 'ReplyChief\'s AI engine reads the full context of every LinkedIn post — including topic, author\'s industry, sentiment, and key arguments — before generating a comment. Every comment is unique, relevant, and specific to the conversation.',
    tag: 'Core AI',
  },
  {
    icon: '🗣️',
    gradient: 'from-blue-500 to-cyan-500',
    title: 'Custom Voice Profiles',
    description: 'Your LinkedIn comments should sound like you, not a robot. Create custom voice profiles that capture your unique communication style, industry terminology, and personal brand voice. Set it once — every comment reflects your personality.',
    tag: 'Personalization',
  },
  {
    icon: '🌍',
    gradient: 'from-green-500 to-emerald-500',
    title: '30+ Languages Supported',
    description: 'LinkedIn is a global platform. ReplyChief auto-detects the language of any post and generates comments in the same language — or any language you choose. Perfect for multilingual professionals and global teams.',
    tag: 'Global',
  },
  {
    icon: '🔒',
    gradient: 'from-orange-500 to-red-500',
    title: 'LinkedIn-Safe & Privacy-First',
    description: 'No automation. No stored credentials. No data harvesting. ReplyChief operates as a writing assistant only — fully compliant with LinkedIn\'s Terms of Service. Trusted by 2,000+ professionals with zero reported account issues.',
    tag: 'Security',
  },
];

export default function Features({ isDark }: Props) {
  return (
    <section id="features" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${isDark ? 'bg-blue-600' : 'bg-blue-200'}`} />
        <div className={`absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8 ${isDark ? 'bg-purple-600' : 'bg-purple-100'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}>
            Key Features
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Purpose-Built for{' '}
            <span className="text-gradient">LinkedIn Professionals</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Every feature designed specifically for how professionals actually use LinkedIn — inside the feed, in real time, with zero friction.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainFeatures.map((feature, i) => (
            <div
              key={i}
              className={`scroll-reveal rounded-2xl p-8 border transition-all duration-300 card-3d card-shine ${
                isDark
                  ? 'bg-slate-900/60 border-white/8 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-50/50'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>{feature.tag}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 12 Tones Section */}
        <div className={`rounded-2xl p-8 md:p-10 border scroll-reveal ${isDark ? 'bg-slate-900/60 border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🎭</span>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>12 Professional Tones</h3>
            </div>
            <p className={`text-sm max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Different posts call for different responses. Always strike the right note with 12 carefully crafted professional tones.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {tones.map((tone, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl border text-center transition-all duration-200 hover:-translate-y-0.5 cursor-default ${
                  isDark
                    ? 'bg-slate-800/60 border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-200 hover:bg-blue-50/50'
                }`}
              >
                <span className="text-xl block mb-1">{tone.emoji}</span>
                <p className={`text-xs font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{tone.name}</p>
                <p className={`text-xs leading-tight ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{tone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
