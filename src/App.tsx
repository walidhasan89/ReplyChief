import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Disclaimer from './pages/Disclaimer';
import SuccessPage from './pages/SuccessPage';
import AuthorPage from './pages/AuthorPage';
import SupportPage from './pages/SupportPage';

// ─── Router ────────────────────────────────────────────────────────────────
function useRoute() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

// ─── Scroll reveal ─────────────────────────────────────────────────────────
function runScrollReveal() {
  const selectors = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right';
  const elements = document.querySelectorAll<Element>(selectors);

  // Reset all so animation replays after navigation
  elements.forEach((el) => el.classList.remove('visible'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
  );

  elements.forEach((el) => observer.observe(el));

  // Immediately reveal elements already in viewport
  requestAnimationFrame(() => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  });

  return observer;
}

// ─── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  );

  const path = useRoute();

  // Sync system preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Apply dark class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [path]);

  // Re-run scroll reveal on every route change (two-pass for reliability)
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const raf = requestAnimationFrame(() => {
      observer = runScrollReveal();
    });

    const timer = setTimeout(() => {
      observer?.disconnect();
      observer = runScrollReveal();
    }, 150);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [path]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  // ── Route matching ──────────────────────────────────────────────────────
  const isSuccess    = path === '/success';
  const isAuthor     = path === '/walidhasan';
  const isSupport    = path === '/support';
  const isLegalPaths = ['/privacy', '/terms', '/disclaimer'];
  const isLegal      = isLegalPaths.includes(path);
  // isSpecial used to guard shared nav/footer — individual checks below

  // ── Success page (no shared navbar/footer) ────────────────────────────
  if (isSuccess) {
    return (
      <div className={`transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <SuccessPage isDark={isDark} />
      </div>
    );
  }

  // ── Author page (no shared navbar/footer) ─────────────────────────────
  if (isAuthor) {
    return (
      <div className={`transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <AuthorPage isDark={isDark} />
      </div>
    );
  }

  // ── Support page ──────────────────────────────────────────────────────
  if (isSupport) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <SupportPage isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    );
  }

  // ── Legal pages ───────────────────────────────────────────────────────
  if (isLegal) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        {path === '/privacy'    && <PrivacyPolicy isDark={isDark} />}
        {path === '/terms'      && <TermsOfUse isDark={isDark} />}
        {path === '/disclaimer' && <Disclaimer isDark={isDark} />}
        <Footer isDark={isDark} />
      </div>
    );
  }

  // ── Main home page ────────────────────────────────────────────────────
  return (
    <div
      key="home-page"
      id="home"
      className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <ProblemSolution isDark={isDark} />
        <HowItWorks isDark={isDark} />
        <Features isDark={isDark} />
        <UseCases isDark={isDark} />
        <Comparison isDark={isDark} />
        <Testimonials isDark={isDark} />
        <Pricing isDark={isDark} />
        <FAQ isDark={isDark} />
        <CTA isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
