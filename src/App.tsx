import { useState, useEffect, useCallback, type ComponentType } from 'react';
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
import LinkedInCommentGeneratorPage from './pages/landing/LinkedInCommentGeneratorPage';
import LinkedInCommentExamplesPage from './pages/landing/LinkedInCommentExamplesPage';
import CongratulationsCommentsPage from './pages/landing/CongratulationsCommentsPage';
import ReplyToCommentsPage from './pages/landing/ReplyToCommentsPage';
import EngageAiAlternativePage from './pages/landing/EngageAiAlternativePage';
import BestCommentGeneratorsPage from './pages/landing/BestCommentGeneratorsPage';
import CommentingStrategyPage from './pages/landing/CommentingStrategyPage';
import CommentTonesPage from './pages/landing/CommentTonesPage';
import CommentsForSalesPage from './pages/landing/CommentsForSalesPage';

interface LandingPageProps {
  isDark: boolean;
}

// ─── SEO landing pages ───────────────────────────────────────────────────────
// Table-driven so adding a page is one line here (+ the footer link) rather than
// another branch in the route-matching logic below.
const LANDING_PAGES: { path: string; Component: ComponentType<LandingPageProps> }[] = [
  { path: '/linkedin-comment-generator/', Component: LinkedInCommentGeneratorPage },
  { path: '/linkedin-comment-examples/', Component: LinkedInCommentExamplesPage },
  { path: '/linkedin-congratulations-comments/', Component: CongratulationsCommentsPage },
  { path: '/reply-to-linkedin-comments/', Component: ReplyToCommentsPage },
  { path: '/alternatives/engage-ai/', Component: EngageAiAlternativePage },
  { path: '/best-linkedin-comment-generators/', Component: BestCommentGeneratorsPage },
  { path: '/linkedin-commenting-strategy/', Component: CommentingStrategyPage },
  { path: '/linkedin-comment-tones/', Component: CommentTonesPage },
  { path: '/linkedin-comments-for-sales/', Component: CommentsForSalesPage },
];

function normalizePath(path: string) {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

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

// ─── Theme persistence ──────────────────────────────────────────────────────
const THEME_STORAGE_KEY = 'replychief-theme';

function getStoredTheme(): boolean | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  return null;
}

// ─── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = getStoredTheme();
    if (stored !== null) return stored;
    return typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  });

  const path = useRoute();

  // Follow system preference changes, but only until the user makes an explicit choice
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (getStoredTheme() === null) setIsDark(e.matches);
    };
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

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      window.localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
      return next;
    });
  }, []);

  // ── Route matching ──────────────────────────────────────────────────────
  const isSuccess    = path === '/success';
  const isAuthor     = path === '/walidhasan';
  const isSupport    = path === '/support';
  const isLegalPaths = ['/privacy', '/terms', '/disclaimer'];
  const isLegal      = isLegalPaths.includes(path);
  const landingPage  = LANDING_PAGES.find((p) => normalizePath(p.path) === normalizePath(path));
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

  // ── SEO landing pages ──────────────────────────────────────────────────
  if (landingPage) {
    const { Component } = landingPage;
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Component isDark={isDark} />
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
