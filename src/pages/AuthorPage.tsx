import { useState, useEffect } from 'react';

interface Props { isDark: boolean }

const AUTHOR_PIC = 'https://i0.wp.com/walidhasan.com/wp-content/uploads/2024/12/cropped-Md-Walid-Hasan-1.png?w=512&ssl=1';

export default function AuthorPage({ isDark }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const bg = isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900';
  const muted = isDark ? 'text-slate-400' : 'text-slate-500';
  const card = isDark
    ? 'bg-slate-900/70 border border-white/10 hover:border-blue-500/40'
    : 'bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg';
  const tag = isDark
    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
    : 'bg-blue-50 text-blue-700 border border-blue-200';

  const navBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className={`min-h-screen ${bg} relative overflow-hidden`}>
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className={`relative z-10 flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-white/8' : 'border-slate-200/60'}`}>
        <a href="/" onClick={navBack} className="flex items-center gap-2.5 group">
          <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-8 w-8 rounded-lg object-contain group-hover:scale-105 transition-transform duration-200" />
          <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Reply<span className="text-gradient">Chief</span>
          </span>
        </a>
        <a
          href="/"
          onClick={navBack}
          className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
            isDark ? 'border-white/15 text-slate-300 hover:text-white hover:bg-white/8' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          ← Back to Home
        </a>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <div className="absolute inset-0 rounded-3xl gradient-brand opacity-20 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-blue-500/20 shadow-2xl shadow-blue-500/20">
                <img
                  src={AUTHOR_PIC}
                  alt="Walid Hasan"
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              {/* Status badge */}
              <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg ${isDark ? 'bg-slate-800 border border-white/15 text-white' : 'bg-white border border-slate-200 text-slate-800 shadow-md'}`}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Available for projects
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 ${tag}`}>
              👤 Author & Builder
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Walid Hasan
            </h1>
            <p className="text-lg sm:text-xl font-medium text-gradient mb-5">
              Web Developer, Analytics Specialist & SaaS Product Builder
            </p>
            <p className={`text-base leading-relaxed max-w-xl mb-7 ${muted}`}>
              I help businesses build high-converting websites, implement accurate analytics systems, and scale with smarter tools.
            </p>
            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    isDark
                      ? 'bg-slate-800/80 border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────── */}
        <section className="mb-20 scroll-reveal">
          <SectionLabel label="About Me" />
          <div className={`rounded-2xl p-8 border backdrop-blur-sm leading-relaxed space-y-4 text-base ${isDark ? 'bg-slate-900/60 border-white/10' : 'bg-slate-50/80 border-slate-200'} ${muted}`}>
            <p>
              With <strong className={isDark ? 'text-white' : 'text-slate-900'}>6+ years of experience and 500+ projects</strong> delivered worldwide, I've worked with startups, SMBs, and established brands — turning digital ideas into scalable, revenue-generating platforms through design, data, and automation.
            </p>
            <p>
              I don't just build websites. I build <em>systems</em> that convert visitors into customers, track every meaningful interaction, and eliminate the guesswork from growth.
            </p>
            <p>
              Beyond client work, I actively develop software products — Chrome extensions and SaaS tools — that solve real workflow problems for e-commerce merchants, agencies, and procurement teams.
            </p>
          </div>
        </section>

        {/* ── SPECIALIZATIONS ──────────────────────────────────────── */}
        <section className="mb-20 scroll-reveal">
          <SectionLabel label="What I Specialize In" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPECIALIZATIONS.map((spec, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 card-shine ${card}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className={`font-bold text-base mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {spec.title}
                </h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────────────────── */}
        <section className="mb-20 scroll-reveal">
          <SectionLabel label="Products I've Built" />
          <p className={`text-base mb-8 ${muted}`}>
            I don't just work for clients — I ship my own products born from real problems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl card-shine ${card}`}
              >
                <div className="text-2xl mb-3">{p.emoji}</div>
                <h3 className={`font-bold text-base mb-2 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {p.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${muted}`}>{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500">
                  View Product
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── WHY WORK WITH ME ─────────────────────────────────────── */}
        <section className="mb-20 scroll-reveal">
          <SectionLabel label="Why Work With Me" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_ME.map((w, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${card}`}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{w.icon}</div>
                <div>
                  <h4 className={`font-bold text-sm mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{w.title}</h4>
                  <p className={`text-sm leading-relaxed ${muted}`}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────────── */}
        <section className="mb-20 scroll-reveal">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl text-center border transition-all duration-300 hover:-translate-y-1 ${card}`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{s.value}</div>
                <div className={`text-xs font-medium ${muted}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="scroll-reveal">
          <div className={`relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center ${isDark ? 'bg-slate-900/80 border border-white/10' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60'}`}>
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[60px] rounded-full" />
            </div>
            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ready to build something that actually works?
              </h2>
              <p className={`text-lg mb-8 max-w-xl mx-auto ${muted}`}>
                Whether you're launching a new brand, revamping your website, fixing broken analytics, or looking for a technical partner — I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@walidhasan.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-brand hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 btn-glow"
                >
                  📩 Let's Talk
                </a>
                <a
                  href="https://walidhasan.com/book-a-call/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    isDark
                      ? 'border-white/20 text-white hover:bg-white/8'
                      : 'border-blue-300 text-blue-700 bg-white hover:bg-blue-50'
                  }`}
                >
                  📅 Book a Call
                </a>
              </div>
              <p className={`mt-6 text-sm ${muted}`}>
                Personal website:{' '}
                <a href="https://walidhasan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">
                  walidhasan.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer note */}
      <footer className={`relative z-10 text-center py-8 mt-8 border-t ${isDark ? 'border-white/8 text-slate-500' : 'border-slate-200 text-slate-400'} text-sm`}>
        © 2026 Walid Hasan ·{' '}
        <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Inoviqa
        </a>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient inline-block">
        {label}
      </h2>
      <div className="mt-2 h-0.5 w-16 rounded-full gradient-brand" />
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/walidhasan-riyad/', icon: '💼' },
  { label: 'Behance', href: 'https://www.behance.net/walid_hasan', icon: '🎨' },
  { label: 'YouTube', href: 'https://www.youtube.com/@walidhasan-r', icon: '▶️' },
  { label: 'Facebook', href: 'https://www.facebook.com/iamwalidhasan', icon: '📘' },
  { label: 'Website', href: 'https://walidhasan.com/', icon: '🌐' },
];

const SPECIALIZATIONS = [
  { icon: '💻', title: 'Web Design & Development', desc: 'Conversion-focused websites on WordPress and Shopify — custom themes, fast performance, and mobile-first UX.' },
  { icon: '📊', title: 'Web Analytics & Tracking', desc: 'GA4 implementation, Google Tag Manager, server-side tracking, and clean data architectures you can trust.' },
  { icon: '📈', title: 'Paid Ads Tracking & Attribution', desc: 'Facebook CAPI, Google Ads conversion tracking, and measurement setups that improve your ROAS.' },
  { icon: '⚙️', title: 'SaaS & Chrome Extension Dev', desc: 'Building productivity tools that automate workflows and save hours of manual work every week.' },
  { icon: '📉', title: 'Data Visualization & Reporting', desc: 'Custom dashboards with Looker Studio that turn raw data into actionable business insights.' },
  { icon: '🚀', title: 'Conversion Rate Optimization', desc: 'Landing page optimization, A/B testing strategies, and UX improvements that reduce acquisition costs.' },
];

const PRODUCTS = [
  {
    emoji: '🔵',
    name: 'ReplyChief',
    desc: 'AI LinkedIn comment generator that streamlines professional engagement workflows.',
    href: 'https://replychief.com/',
  },
  {
    emoji: '🟣',
    name: 'AdminPalette',
    desc: 'Quick-access commands that dramatically enhance Shopify admin productivity.',
    href: 'https://adminpalette.com/',
  },
  {
    emoji: '🟠',
    name: 'RFQ AutoPilot',
    desc: 'Automates supplier RFQ processes for procurement and sourcing teams worldwide.',
    href: 'https://rfqautopilot.com/',
  },
];

const WHY_ME = [
  { icon: '🏆', title: '500+ Projects Delivered', desc: 'Proven results across industries with measurable conversion and revenue gains.' },
  { icon: '🗂️', title: 'Structured Process', desc: 'Discovery → Strategy → Design → Build → Validate → Optimize. No guesswork.' },
  { icon: '🔧', title: 'Builder Mindset', desc: 'I think like a product owner, not just a service provider. Every solution is built to scale.' },
  { icon: '💬', title: 'Clear Communication', desc: 'Transparent timelines, regular updates, and reporting that keeps you informed.' },
];

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '6+', label: 'Years Experience' },
  { value: '3', label: 'SaaS Products' },
  { value: '2K+', label: 'Tool Users' },
];
