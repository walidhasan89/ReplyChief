import { useState, useEffect } from 'react';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const faqs = [
  {
    category: 'Getting Started',
    icon: '🚀',
    items: [
      {
        q: 'How do I install ReplyChief?',
        a: 'Visit the Chrome Web Store and click "Add to Chrome". The extension installs in under 30 seconds — no account required to start. Once installed, open LinkedIn and you\'ll see the ReplyChief button appear next to every comment box.',
      },
      {
        q: 'Do I need to create an account?',
        a: 'No account is needed to start using ReplyChief on the free plan. Simply install the extension and start generating comments. An account is only required if you upgrade to Pro or Lifetime to manage your subscription.',
      },
      {
        q: 'Which browsers are supported?',
        a: 'ReplyChief is a Chrome extension and works on Google Chrome and all Chromium-based browsers including Microsoft Edge, Brave, Arc, and Opera.',
      },
    ],
  },
  {
    category: 'Account & Billing',
    icon: '💳',
    items: [
      {
        q: 'How do I upgrade to Pro?',
        a: 'Click the ReplyChief icon in your Chrome toolbar, then click "Upgrade to Pro". You\'ll be taken to our secure checkout powered by Stripe. After payment, your Pro features activate immediately.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, and local payment methods. All payments are securely processed via Stripe.',
      },
      {
        q: 'How does the 7-day money-back guarantee work?',
        a: 'If you\'re not satisfied within 7 days of your purchase, email us at support@replychief.com and we\'ll issue a full refund — no questions asked. The refund typically appears within 3–5 business days.',
      },
      {
        q: 'Can I cancel my subscription?',
        a: 'Yes, you can cancel anytime from your account dashboard or by emailing support@replychief.com. Cancellation takes effect at the end of your current billing period. You\'ll retain access to Pro features until then.',
      },
    ],
  },
  {
    category: 'Features & Usage',
    icon: '⚡',
    items: [
      {
        q: 'Why aren\'t comments appearing in my feed?',
        a: 'Make sure the extension is enabled (click the Chrome puzzle icon and check ReplyChief is toggled on). Try refreshing your LinkedIn page. If the issue persists, disable and re-enable the extension from chrome://extensions.',
      },
      {
        q: 'How do I switch between tones?',
        a: 'When the ReplyChief panel opens on a post, you\'ll see tone pills at the top of the panel. Click any tone to instantly regenerate the suggestions in that style. Free users have access to 5 tones; Pro users get all 12.',
      },
      {
        q: 'Does ReplyChief work with LinkedIn Sales Navigator?',
        a: 'Yes! ReplyChief works on LinkedIn Sales Navigator, LinkedIn groups, individual profile pages, and your main feed — anywhere you see a LinkedIn comment box.',
      },
      {
        q: 'Can I use ReplyChief on multiple devices?',
        a: 'Free plan: 1 device. Pro plan: 2 devices. Lifetime plan: 5 devices. Simply install the extension and log in on each device.',
      },
    ],
  },
  {
    category: 'Privacy & Safety',
    icon: '🔒',
    items: [
      {
        q: 'Is ReplyChief safe for my LinkedIn account?',
        a: 'Absolutely. ReplyChief is a writing assistant — it suggests comments but never auto-posts. You always click "Post" manually. We never access your LinkedIn credentials, and all post data is processed locally and never stored. This is fully compliant with LinkedIn\'s Terms of Service.',
      },
      {
        q: 'What data does ReplyChief collect?',
        a: 'ReplyChief processes the text of the LinkedIn post you\'re engaging with to generate comment suggestions. This data is sent to our AI engine and immediately discarded — nothing is stored on our servers. We do not collect personal data, browsing history, or LinkedIn account information.',
      },
    ],
  },
];

const contactOptions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    accent: '#3b82f6',
    title: 'Email Support',
    desc: 'Send us a message and get a response within 24 hours on business days.',
    cta: 'support@replychief.com',
    href: 'mailto:support@replychief.com',
    badge: '< 24h response',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    accent: '#8b5cf6',
    title: 'Documentation',
    desc: 'Browse our guides, tutorials, and FAQs to find answers quickly.',
    cta: 'Browse Help Docs',
    href: '#faq-section',
    badge: 'Instant access',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    accent: '#10b981',
    title: 'Chrome Web Store',
    desc: 'Report extension issues or leave a review directly on the Chrome Store.',
    cta: 'Open Chrome Store',
    href: CHROME_STORE_URL,
    badge: 'Rate & review',
  },
];

const guides = [
  { icon: '⚡', title: 'Quick Start Guide', desc: 'Get up and running in 60 seconds', time: '2 min read' },
  { icon: '🎭', title: 'Mastering AI Tones', desc: 'When and how to use all 12 tones', time: '3 min read' },
  { icon: '🗣️', title: 'Setting Up Voice Profiles', desc: 'Make the AI sound like you', time: '4 min read' },
  { icon: '🌍', title: 'Multi-Language Mode', desc: 'Engaging globally in 30+ languages', time: '2 min read' },
  { icon: '💎', title: 'Pro Tips & Power Features', desc: 'Getting the most out of ReplyChief', time: '5 min read' },
  { icon: '🔒', title: 'Privacy & LinkedIn Safety', desc: 'How we keep your account safe', time: '3 min read' },
];

function FAQItem({ q, a, isDark }: { q: string; a: string; isDark: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? open
            ? 'border-blue-500/30 bg-blue-500/5'
            : 'border-white/8 bg-slate-900/60 hover:border-white/15'
          : open
          ? 'border-blue-200 bg-blue-50/60'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer"
        style={{ outline: 'none' }}
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {q}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
            open
              ? 'bg-blue-500 text-white rotate-180'
              : isDark
              ? 'bg-white/10 text-slate-400'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      {/* Smooth accordion */}
      <div
        style={{
          maxHeight: open ? '400px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
        }}
      >
        <div className={`px-5 pb-5 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function SupportPage({ isDark }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  // Page entrance animation
  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setTimeout(() => setMounted(true), 20);
    });
    return () => cancelAnimationFrame(t);
  }, []);

  const categories = ['all', ...faqs.map((f) => f.category)];
  const filteredFaqs =
    activeCategory === 'all' ? faqs : faqs.filter((f) => f.category === activeCategory);

  const navigateHome = (hash?: string) => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <div
      className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
        willChange: 'opacity, transform',
      }}
    >
      {/* ── Hero ── */}
      <section
        className={`relative pt-28 pb-20 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-15 ${
              isDark ? 'bg-blue-600' : 'bg-blue-300'
            }`}
          />
          <div
            className={`absolute inset-0 ${isDark ? 'opacity-[0.025]' : 'opacity-[0.035]'}`}
            style={{
              backgroundImage: `linear-gradient(${
                isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
              } 1px, transparent 1px), linear-gradient(90deg, ${
                isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
              } 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
              isDark
                ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Support Center
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            How Can We{' '}
            <span className="text-gradient">Help You?</span>
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Find answers, guides, and get in touch. Our team is here to help you get the
            most out of ReplyChief.
          </p>

          {/* Search bar (decorative but polished) */}
          <div
            className={`relative max-w-xl mx-auto rounded-2xl border overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40 ${
              isDark
                ? 'bg-slate-900 border-white/12 shadow-xl shadow-black/20'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-100'
            }`}
          >
            <div className="flex items-center gap-3 px-5 py-4">
              <svg
                className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Search for answers... (e.g. 'how to install', 'billing', 'tones')"
                className={`flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              />
              <button className="px-4 py-1.5 text-xs font-bold text-white rounded-xl gradient-brand flex-shrink-0 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['Installation', 'Billing', 'LinkedIn Safety', 'Tones & Voices', 'Languages', 'Refunds'].map((tag) => (
              <button
                key={tag}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-white/8 text-slate-300 hover:bg-white/12 border border-white/8'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Options ── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Get in Touch
            </h2>
            <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {contactOptions.map((opt, i) => (
              <a
                key={i}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl border card-shine transition-all duration-300 hover:-translate-y-1 block ${
                  isDark
                    ? 'bg-slate-800 border-white/8 hover:border-white/18 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-100 hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                <div
                  className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${opt.accent}20`, color: opt.accent }}
                >
                  {opt.badge}
                </div>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                  style={{
                    background: `${opt.accent}15`,
                    border: `1px solid ${opt.accent}30`,
                    color: opt.accent,
                  }}
                >
                  {opt.icon}
                </div>
                <h3
                  className={`font-bold text-base mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {opt.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {opt.desc}
                </p>
                <div
                  className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: opt.accent }}
                >
                  {opt.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${opt.accent}, transparent)` }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guides / Popular Articles ── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Popular Guides
            </h2>
            <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Step-by-step help articles for common topics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g, i) => (
              <div
                key={i}
                className={`group p-5 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900 border-white/8 hover:border-blue-500/25 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                      isDark ? 'bg-white/8' : 'bg-slate-100'
                    }`}
                  >
                    {g.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm mb-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {g.title}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {g.desc}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-semibold mt-2 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {g.time}
                      <svg
                        className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section
        id="faq-section"
        className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Find answers to the most common questions
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                  activeCategory === cat
                    ? 'gradient-brand text-white shadow-lg shadow-blue-500/30'
                    : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/8'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                style={{ outline: 'none' }}
              >
                {cat === 'all' ? '🔍 All Topics' : `${faqs.find((f) => f.category === cat)?.icon} ${cat}`}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="space-y-6">
            {filteredFaqs.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{group.icon}</span>
                  <h3
                    className={`font-bold text-base ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {group.category}
                  </h3>
                  <div className={`flex-1 h-px ml-2 ${isDark ? 'bg-white/8' : 'bg-slate-200'}`} />
                </div>
                <div className="space-y-2">
                  {group.items.map((item, j) => (
                    <FAQItem key={j} q={item.q} a={item.a} isDark={isDark} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still need help? */}
          <div
            className={`mt-12 p-8 rounded-2xl border text-center ${
              isDark
                ? 'bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border-blue-500/20'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Still need help?
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Can't find what you're looking for? Our support team responds within 24 hours.
            </p>
            <a
              href="mailto:support@replychief.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email support@replychief.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Status & System Info ── */}
      <section className={`py-12 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
            isDark ? 'bg-slate-900 border-white/8' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/40 animate-pulse" />
              </div>
              <div>
                <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  All Systems Operational
                </p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  ReplyChief AI engine · Chrome Extension · Payment processing
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'AI Engine', status: '99.9% uptime' },
                { label: 'Extension', status: 'Healthy' },
                { label: 'Payments', status: 'Operational' },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`px-4 py-2 rounded-xl border text-center ${
                    isDark
                      ? 'bg-slate-800 border-white/8'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {s.label}
                  </p>
                  <p className="text-xs font-bold text-green-500 mt-0.5">{s.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Back to home ── */}
      <div className={`pb-16 text-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <button
          onClick={() => navigateHome()}
          className={`inline-flex items-center gap-2 text-sm font-medium transition-all hover:-translate-x-0.5 ${
            isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to ReplyChief Home
        </button>
      </div>
    </div>
  );
}
