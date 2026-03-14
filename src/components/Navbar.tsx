import React, { useState, useEffect, useCallback, useRef } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const navItems = [
  { label: 'Home',         href: '#home',         isSection: false },
  { label: 'Features',     href: '#features',     isSection: true  },
  { label: 'How It Works', href: '#how-it-works', isSection: true  },
  { label: 'Pricing',      href: '#pricing',      isSection: true  },
  { label: 'Support',      href: '/support',      isSection: false, isPage: true },
];

const LEGAL_PATHS = ['/privacy', '/terms', '/disclaimer', '/walidhasan', '/success', '/support'];

function isSpecialPage() {
  return LEGAL_PATHS.includes(window.location.pathname);
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navigateHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
      if ((item as { isExternal?: boolean }).isExternal) return; // let mailto: open normally
      e.preventDefault();
      setMobileOpen(false);
      setActiveItem(item.href);

      if (item.href === '#home') {
        if (isSpecialPage()) {
          navigateHome();
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      // Handle page navigations (e.g. /support)
      if ((item as { isPage?: boolean }).isPage) {
        window.history.pushState({}, '', item.href);
        window.dispatchEvent(new PopStateEvent('popstate'));
        return;
      }

      if (isSpecialPage()) {
        navigateHome();
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 350);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [navigateHome]
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setMobileOpen(false);
      if (isSpecialPage()) {
        navigateHome();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [navigateHome]
  );

// ── Glassmorphism styles ──────────────────────────────────────────────────
  const navBg = scrolled
    ? isDark
      ? 'bg-slate-900/60 backdrop-blur-lg backdrop-saturate-150 shadow-md shadow-black/20'
      : 'bg-white/60 backdrop-blur-lg backdrop-saturate-150 shadow-sm shadow-slate-200/50'
    : 'bg-transparent';

  const borderBottom = scrolled
    ? isDark
      ? 'border-b border-white/10'
      : 'border-b border-slate-200/60'
    : 'border-b border-transparent';

  return (
    <>
      {/* ── Main Nav ─────────────────────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${navBg} ${borderBottom}`}
        // Fallback for Safari's Webkit engine to ensure the glass effect renders perfectly
        style={{ WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">

            {/* ── Logo ── */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 flex-shrink-0 group"
              style={{ outline: 'none' }}
            >
              <div className="relative">
                <img
                  src="https://replychief.com/asset/logo.png"
                  alt="ReplyChief"
                  className="h-8 w-8 rounded-xl object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </div>
              <span className={`text-[17px] font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Reply<span className="text-gradient">Chief</span>
              </span>
            </a>

            {/* ── Desktop nav items ── */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    style={{ outline: 'none', boxShadow: 'none' }}
                    className={`
                      relative px-4 py-2 text-[13.5px] font-medium rounded-xl
                      transition-all duration-200 select-none
                      ${isDark
                        ? `text-slate-300 hover:text-white ${isActive ? 'text-white' : ''}`
                        : `text-slate-600 hover:text-slate-900 ${isActive ? 'text-slate-900' : ''}`
                      }
                    `}
                  >
                    {/* Hover bg pill */}
                    <span className={`
                      absolute inset-0 rounded-xl transition-opacity duration-200
                      ${isDark ? 'bg-white/[0.07]' : 'bg-slate-100'}
                      opacity-0 hover:opacity-100
                    `} aria-hidden="true" />
                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* ── Right side controls ── */}
            <div className="flex items-center gap-2">

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className={`
                  relative p-2.5 rounded-xl transition-all duration-200
                  ${isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/10'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }
                `}
                style={{ outline: 'none' }}
              >
                <span className={`block transition-all duration-300 ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-75 opacity-0 absolute'}`}>
                  {/* Sun */}
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </span>
                <span className={`block transition-all duration-300 ${isDark ? 'rotate-90 scale-75 opacity-0 absolute' : 'rotate-0 scale-100'}`}>
                  {/* Moon */}
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </span>
              </button>

              {/* CTA — Desktop */}
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 btn-glow whitespace-nowrap"
                style={{ outline: 'none' }}
              >
                <ChromeIcon className="w-4 h-4 flex-shrink-0" />
                Add to Chrome — Free
              </a>

              {/* Hamburger — Mobile */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
                className={`md:hidden p-2.5 rounded-xl transition-all duration-200 ${
                  isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                }`}
                style={{ outline: 'none' }}
              >
                <span className="flex flex-col justify-center gap-[5px] w-5 h-5">
                  <span className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${isDark ? 'bg-slate-200' : 'bg-slate-700'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block h-[2px] w-full rounded-full transition-all duration-300 ${isDark ? 'bg-slate-200' : 'bg-slate-700'} ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block h-[2px] w-full rounded-full transition-all duration-300 origin-center ${isDark ? 'bg-slate-200' : 'bg-slate-700'} ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ────────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] md:hidden flex flex-col transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} ${
          isDark
            ? 'bg-slate-950 border-l border-white/[0.09]'
            : 'bg-white border-l border-slate-200'
        }`}
        style={{ boxShadow: '-20px 0 60px rgba(0,0,0,0.25)' }}
      >
        {/* Panel header */}
        <div className={`flex items-center justify-between px-5 pt-5 pb-4 border-b ${isDark ? 'border-white/8' : 'border-slate-100'}`}>
          <div className="flex items-center gap-2.5">
            <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-7 w-7 rounded-lg object-contain" />
            <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Reply<span className="text-gradient">Chief</span>
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className={`p-2 rounded-xl transition-colors ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
            style={{ outline: 'none' }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                outline: 'none',
                transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
              }}
              className={`
                flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium rounded-2xl
                transition-all duration-200
                ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                ${isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }
              `}
            >
              <span className="text-lg">{NAV_ICONS[item.label] || '•'}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className={`p-4 border-t ${isDark ? 'border-white/8' : 'border-slate-100'}`}>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 text-[15px] font-semibold text-white rounded-2xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 btn-glow"
            style={{ outline: 'none' }}
          >
            <ChromeIcon className="w-5 h-5" />
            Add to Chrome — Free
          </a>
          <p className={`text-center text-xs mt-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Free forever · No credit card needed
          </p>
        </div>
      </div>
    </>
  );
}

const NAV_ICONS: Record<string, string> = {
  'Home': '🏠',
  'Features': '✨',
  'How It Works': '⚡',
  'Pricing': '💎',
  'Support': '🎧',
};

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
    </svg>
  );
}
