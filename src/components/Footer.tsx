import React from 'react';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const products = [
  {
    name: 'ReplyChief',
    tagline: 'LinkedIn AI Comment Generator',
    url: CHROME_STORE_URL,
    emoji: '💬',
    gradient: 'from-blue-500 to-blue-700',
    badge: 'You are here',
  },
  {
    name: 'AdminPalette',
    tagline: 'Shopify Admin Enhancement',
    url: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
    emoji: '🎨',
    gradient: 'from-violet-500 to-purple-700',
    badge: null,
  },
  {
    name: 'RFQ Autopilot',
    tagline: 'RFQ Automation Tool',
    url: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
    emoji: '🤖',
    gradient: 'from-green-500 to-emerald-700',
    badge: null,
  },
];

// Internal SEO links — placed naturally in footer
const internalLinks = [
  { label: 'LinkedIn Comment Automation Tool', href: 'https://replychief.com/linkedin-comment-automation-tool/' },
  { label: 'AI LinkedIn Comment Generator', href: 'https://replychief.com/ai-linkedin-comment-generator' },
  { label: 'LinkedIn Engagement Chrome Extension', href: 'https://replychief.com/linkedin-engagement-chrome-extension' },
  { label: 'AI Writing Assistant for LinkedIn', href: 'https://replychief.com/ai-writing-assistant-for-linkedin' },
  { label: 'LinkedIn Commenting Tool for Sales', href: 'https://replychief.com/linkedin-commenting-tool-for-sales' },
  { label: 'LinkedIn Personal Branding AI Tool', href: 'https://replychief.com/linkedin-personal-branding-ai-tool' },
  { label: 'Best LinkedIn Engagement Tools 2026', href: 'https://replychief.com/best-linkedin-engagement-tools-2026' },
  { label: 'LinkedIn AI Reply Suggestions', href: 'https://replychief.com/linkedin-ai-reply-suggestions' },
  { label: 'LinkedIn Comment Generator for Founders', href: 'https://replychief.com/linkedin-comment-generator-for-founders' },
  { label: 'Free LinkedIn Comment Generator', href: 'https://replychief.com/free-linkedin-comment-generator' },
];

export default function Footer({ isDark }: Props) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t ${isDark ? 'bg-slate-950 border-white/8' : 'bg-white border-slate-200'}`}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="https://replychief.com" className="flex items-center gap-2.5 mb-4 group">
              <img
                src="https://replychief.com/asset/logo.png"
                alt="ReplyChief"
                className="h-9 w-9 rounded-xl object-contain group-hover:scale-105 transition-transform duration-200"
              />
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Reply<span className="text-gradient">Chief</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-6 max-w-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The{' '}
              <a
                href="https://replychief.com/ai-linkedin-comment-generator"
                className="text-blue-500 hover:underline"
              >
                AI LinkedIn comment generator
              </a>{' '}
              that helps professionals write thoughtful, engaging comments in seconds. Trusted by 2,000+ users worldwide.
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
              </svg>
              Add to Chrome — Free
            </a>

            {/* Status badges */}
            <div className="mt-6 flex flex-col gap-2.5">
              {/* All Systems Operational */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit ${isDark ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-green-50 border border-green-200 text-green-700'}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                All Systems Operational
              </div>
              {/* 60s Setup */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Setup in 60 seconds — No config needed
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home', internal: true },
                { label: 'How It Works', href: '#how-it-works', internal: true },
                { label: 'Features', href: '#features', internal: true },
                { label: 'Use Cases', href: '#use-cases', internal: true },
                { label: 'Pricing', href: '#pricing', internal: true },
                { label: 'FAQ', href: '#faq', internal: true },
                { label: 'Blog', href: 'https://replychief.com/blog', internal: false },
                { label: 'Contact', href: 'mailto:support@replychief.com', internal: false },
              ].map((item) => (
                <li key={item.label}>
                  {item.internal ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, item.href)}
                      className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-4">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Our Products
            </h4>
            <div className="space-y-3">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 group ${
                    isDark
                      ? 'border-white/8 bg-slate-900/60 hover:border-white/20 hover:bg-slate-800/60'
                      : 'border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${product.gradient} shadow-sm flex-shrink-0`}
                  >
                    {product.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {product.name}
                      </p>
                      {product.badge && (
                        <span className="px-1.5 py-0.5 rounded text-xs font-bold gradient-brand text-white">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {product.tagline}
                    </p>
                  </div>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Support */}
          <div className="lg:col-span-2">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => navigateTo(e, item.href)}
                    className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@replychief.com"
                  className={`text-sm transition-colors duration-200 flex items-center gap-1.5 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  support@replychief.com
                </a>
              </li>
              <li>
                <a
                  href="https://replychief.com/walidhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Author
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  About Inoviqa
                </a>
              </li>
              {/* LinkedIn Help — external link */}
              <li>
                <a
                  href="https://www.linkedin.com/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  LinkedIn Help Center
                </a>
              </li>
              {/* Chrome extensions docs */}
              <li>
                <a
                  href="https://developer.chrome.com/docs/extensions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Chrome Extension Docs
                </a>
              </li>
              {/* Chrome browser */}
              <li>
                <a
                  href="https://support.google.com/chrome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Chrome Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Internal SEO links section */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/[0.06]' : 'border-slate-100'}`}>
          <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Explore ReplyChief
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {internalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`text-xs transition-colors duration-200 hover:underline underline-offset-2 ${isDark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t ${isDark ? 'border-white/[0.05]' : 'border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              © 2026 ReplyChief. A Product of{' '}
              <a
                href="https://inoviqa.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium hover:underline transition-colors duration-200 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Inoviqa
              </a>
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs transition-colors duration-200 flex items-center gap-1 ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
                </svg>
                Chrome Web Store
              </a>
              <span className={`text-xs ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>·</span>
              {/* External: LinkedIn user agreement */}
              <a
                href="https://www.linkedin.com/legal/user-agreement"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs transition-colors duration-200 ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}
              >
                LinkedIn Terms
              </a>
              <span className={`text-xs ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>·</span>
              <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Built with ❤️ for LinkedIn professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
