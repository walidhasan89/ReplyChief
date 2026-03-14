import { useEffect, useRef } from 'react';

interface HeroProps {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

export default function Hero({ isDark }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('[data-hero-anim]');
    const timers: ReturnType<typeof setTimeout>[] = [];
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(28px)';
      const delay = parseInt(item.dataset.heroAnim || '0', 10) + i * 80;
      timers.push(
        setTimeout(() => {
          item.style.transition =
            'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen w-full flex flex-col justify-center overflow-hidden noise-overlay ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-3xl opacity-10 ${
            isDark ? 'bg-indigo-500' : 'bg-indigo-300'
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-3xl opacity-[0.08] ${
            isDark ? 'bg-blue-800' : 'bg-sky-200'
          }`}
        />
        {/* Grid */}
        <div
          className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage: `linear-gradient(${
              isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
            } 1px, transparent 1px), linear-gradient(90deg, ${
              isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
            } 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div
            data-hero-anim="0"
            style={{ marginTop: '50px' }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 ${
              isDark
                ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            Trusted by 2,000+ professionals worldwide
          </div>

          {/* Headline */}
          <h1
            data-hero-anim="80"
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-5xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            AI LinkedIn Comment Generator{' '}
            <span className="text-gradient">Write Engaging</span>{' '}
            Comments in Seconds
          </h1>

          {/* Subheadline */}
          <p
            data-hero-anim="160"
            className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mb-10 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Stop staring at a blank comment box. ReplyChief generates thoughtful, relevant, and
            professional LinkedIn comments in one click — so you can grow your network and save
            hours every week.
          </p>

          {/* Trust chips */}
          <div
            data-hero-anim="240"
            className={`flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium mb-10 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">⚡</span>
              Installs in 30 seconds
            </span>
            <span className="flex items-center gap-1.5">
              <span>🌍</span>
              Works in 30+ languages
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">⭐</span>
              Trusted by 2,000+ professionals
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            data-hero-anim="320"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white rounded-2xl gradient-brand hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform duration-200"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
              </svg>
              Add to Chrome — It's Free
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#how-it-works')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto ${
                isDark
                  ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Watch Demo (45s)
            </a>
          </div>

          {/* ── Hero Product UI ── */}
          <div data-hero-anim="400" className="mt-16 sm:mt-20 w-full max-w-4xl">
            <HeroProductUI isDark={isDark} />
          </div>

          {/* Stats row */}
          <div data-hero-anim="480" className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 w-full max-w-3xl">
            {[
              { label: 'Comments Generated', value: '2M+' },
              { label: 'Time Saved / Week', value: '10+ hrs' },
              { label: 'Languages Supported', value: '30+' },
              { label: 'Active Users', value: '2,000+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`px-4 py-3 rounded-xl border text-center transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-slate-900/80 border-white/10 backdrop-blur-sm'
                    : 'bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm'
                }`}
              >
                <p className="text-xl font-bold text-gradient">{stat.value}</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Premium Hero Dashboard UI ─────────────────────────────────────────── */
function HeroProductUI({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        className={`absolute inset-x-8 top-12 bottom-0 rounded-3xl blur-3xl opacity-25 pointer-events-none ${
          isDark ? 'bg-blue-600' : 'bg-blue-300'
        }`}
      />

      {/* ── Browser Frame ── */}
      <div
        className={`relative rounded-2xl overflow-hidden ${
          isDark
            ? 'border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]'
            : 'border border-slate-200/80 shadow-[0_40px_100px_rgba(0,0,0,0.1)]'
        }`}
        style={{ background: isDark ? '#0f172a' : '#f8fafc' }}
      >
        {/* Browser chrome bar */}
        <div
          className={`flex items-center gap-3 px-5 py-3.5 border-b ${
            isDark ? 'bg-slate-900 border-white/8' : 'bg-slate-100/90 border-slate-200'
          }`}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {/* Address bar */}
          <div
            className={`flex items-center gap-2 flex-1 max-w-xs mx-auto px-3 py-1.5 rounded-lg text-xs ${
              isDark ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500 shadow-sm'
            }`}
          >
            <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
            <span className="font-mono truncate">linkedin.com/feed</span>
          </div>
          {/* Extension icon */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${isDark ? 'bg-slate-800' : 'bg-white shadow-sm border border-slate-200'}`}>
              <img src="https://replychief.com/asset/logo.png" alt="RC" className="w-3.5 h-3.5 rounded-sm" />
              <span className={`text-[10px] font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>RC</span>
            </div>
          </div>
        </div>

        {/* ── Main Content Area ── */}
        <div className={`${isDark ? 'bg-[#1b2535]' : 'bg-[#f0f2f5]'} p-4 sm:p-6`}>
          <div className="max-w-2xl mx-auto">

            {/* LinkedIn Top Nav */}
            <div className={`flex items-center justify-between mb-5 px-2`}>
              <div className="flex items-center gap-1">
                {/* LinkedIn logo */}
                <svg className="w-8 h-8 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                {['Home', 'My Network', 'Jobs', 'Messaging'].map((item, i) => (
                  <div key={item} className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium cursor-pointer ${
                    i === 0
                      ? isDark ? 'text-white border-b-2 border-white' : 'text-slate-800 border-b-2 border-slate-800'
                      : isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={`w-7 h-7 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold`}>
                Y
              </div>
            </div>

            {/* Feed layout: sidebar + main */}
            <div className="flex gap-4">

              {/* Left sidebar — hidden on mobile */}
              <div className="hidden lg:flex flex-col gap-3 w-44 flex-shrink-0">
                <div className={`rounded-xl overflow-hidden border ${isDark ? 'bg-slate-800 border-white/8' : 'bg-white border-slate-200'}`}>
                  <div className="h-12 gradient-brand" />
                  <div className="px-3 pb-3 -mt-5 text-center">
                    <div className="w-10 h-10 rounded-full border-2 border-white gradient-brand mx-auto flex items-center justify-center text-white text-xs font-bold shadow">Y</div>
                    <p className={`text-xs font-bold mt-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>You</p>
                    <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Your Profile</p>
                  </div>
                  <div className={`border-t px-3 py-2 ${isDark ? 'border-white/8' : 'border-slate-100'}`}>
                    <div className="flex justify-between text-[10px]">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Connections</span>
                      <span className="text-blue-500 font-semibold">847</span>
                    </div>
                    <div className="flex justify-between text-[10px] mt-1">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Profile views</span>
                      <span className="text-blue-500 font-semibold">1.2k</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main feed */}
              <div className="flex-1 min-w-0 space-y-3">

                {/* ── Post Card ── */}
                <div className={`rounded-xl overflow-hidden border ${
                  isDark ? 'bg-slate-800 border-white/[0.08] shadow-lg' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  {/* Post header */}
                  <div className="p-4 pb-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full gradient-brand flex-shrink-0 flex items-center justify-center shadow-md shadow-blue-500/20">
                        <span className="text-white text-sm font-bold">SJ</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sarah Johnson</p>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>2nd</span>
                        </div>
                        <p className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>VP Marketing at GrowthStack · 2h · 🌐</p>
                      </div>
                      <button className={`text-[11px] font-bold px-3 py-1 rounded-full border flex-shrink-0 ${
                        isDark ? 'border-blue-400 text-blue-400' : 'border-blue-600 text-blue-600'
                      }`}>+ Follow</button>
                    </div>

                    {/* Post text */}
                    <div className={`mt-3 text-xs sm:text-[13px] leading-relaxed pb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Just hit{' '}
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$2M ARR</span>{' '}
                      with our bootstrapped SaaS! 🚀 The secret? Consistent LinkedIn engagement.
                      We spent 6 months commenting on our audience's posts before launch — built trust,
                      authority, and{' '}
                      <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>500+ warm leads</span>.
                    </div>

                    {/* Reactions */}
                    <div className={`flex items-center gap-2 py-2.5 border-t text-[11px] ${
                      isDark ? 'border-white/[0.07] text-slate-400' : 'border-slate-100 text-slate-500'
                    }`}>
                      <div className="flex -space-x-0.5">
                        <span className="text-sm">👍</span>
                        <span className="text-sm">❤️</span>
                        <span className="text-sm">💡</span>
                      </div>
                      <span>847</span>
                      <span className="ml-auto">94 comments · 12 reposts</span>
                    </div>
                  </div>

                  {/* ── ReplyChief Integrated Panel ── */}
                  <div className={`mx-3 mb-3 rounded-xl border overflow-hidden ${
                    isDark
                      ? 'bg-slate-900/80 border-blue-500/20'
                      : 'bg-gradient-to-b from-blue-50/60 to-white border-blue-100'
                  }`}>
                    {/* RC header bar */}
                    <div className={`flex items-center gap-2.5 px-3 py-2.5 border-b ${
                      isDark ? 'bg-blue-500/10 border-blue-500/15' : 'bg-blue-500/5 border-blue-100/80'
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <img src="https://replychief.com/asset/logo.png" alt="RC" className="w-3.5 h-3.5 rounded" />
                        <span className={`text-[11px] font-bold tracking-wide ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                          ReplyChief AI
                        </span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        {[
                          { label: '💡 Insightful', active: true },
                          { label: '👏 Supportive', active: false },
                          { label: '🔥 Bold', active: false },
                        ].map((tone) => (
                          <span
                            key={tone.label}
                            className={`hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold cursor-pointer ${
                              tone.active
                                ? 'bg-blue-600 text-white'
                                : isDark
                                ? 'bg-white/8 text-slate-300 border border-white/10'
                                : 'bg-white text-slate-600 border border-slate-200'
                            }`}
                          >
                            {tone.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Comment suggestions */}
                    <div className="p-3 space-y-2">
                      {/* Selected suggestion */}
                      <div className={`relative p-3 rounded-lg ${isDark ? 'bg-blue-600/90' : 'bg-blue-600'} shadow-lg shadow-blue-600/20`}>
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </div>
                          <p className="text-white text-[11px] leading-relaxed">
                            This is the exact playbook I wish more founders followed. Authentic engagement before launch builds something ads can't buy — real trust. Congrats on $2M ARR, Sarah! What was your daily commenting routine during those 6 months?
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-blue-200 text-[10px] font-medium">✓ Selected · Suggestion 1/3</span>
                          <div className="flex items-center gap-1 text-[10px] text-blue-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            1.8s
                          </div>
                        </div>
                      </div>

                      {/* Alt suggestion */}
                      <div className={`p-3 rounded-lg text-[11px] leading-relaxed cursor-pointer transition-all hover:border-blue-300 ${
                        isDark
                          ? 'bg-white/[0.04] text-slate-300 border border-white/8 hover:bg-white/8'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-200'
                      }`}>
                        Incredible journey! 6 months of intentional commenting before launch = 500 warm leads. The ROI of authentic LinkedIn engagement is unbeatable. This is the 2026 growth playbook. 🙌
                      </div>

                      {/* Action row */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div className={`flex items-center gap-1.5 text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                          </svg>
                          AI-generated · context-aware
                        </div>
                        <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold text-white rounded-lg gradient-brand hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5">
                          Post Comment
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Second Post (partial, faded) ── */}
                <div className={`rounded-xl border p-4 opacity-50 ${
                  isDark ? 'bg-slate-800 border-white/[0.06]' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white ${isDark ? 'bg-violet-600' : 'bg-violet-500'}`}>MR</div>
                    <div className="flex-1">
                      <p className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Marcus Reid</p>
                      <p className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Head of Growth · 4h</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className={`h-2 rounded-full w-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                    <div className={`h-2 rounded-full w-4/5 ${isDark ? 'bg-white/7' : 'bg-slate-150'}`} />
                    <div className={`h-2 rounded-full w-3/5 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
