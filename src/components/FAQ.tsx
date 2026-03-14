import { useState, useRef, useEffect } from 'react';

interface Props {
  isDark: boolean;
}

const faqs = [
  {
    question: 'What is ReplyChief?',
    answer:
      "ReplyChief is an AI-powered LinkedIn comment generator that works as a Chrome browser extension. It sits directly inside your LinkedIn feed and helps you generate thoughtful, context-aware, professional comments on any LinkedIn post in seconds. It's designed to help professionals save time on LinkedIn engagement while maintaining high-quality, authentic interactions. ReplyChief is trusted by over 2,000 users worldwide.",
  },
  {
    question: 'Is ReplyChief safe for my LinkedIn account?',
    answer:
      "Yes. ReplyChief is 100% safe for your LinkedIn account. It operates as a writing assistant — it suggests comments, but it never auto-posts, never accesses your LinkedIn credentials, and never performs any automated actions on your behalf. You always review and post comments manually. This approach is fully compliant with LinkedIn's Terms of Service. Since launch, there have been zero reported account restrictions from using ReplyChief.",
  },
  {
    question: 'How much does ReplyChief cost?',
    answer:
      'ReplyChief offers three pricing tiers:\n\n• Free Plan: $0 forever — includes 10 comments/day, 5 basic tones, and 1 device.\n• Pro Plan: $5.99/month or $59/year — includes unlimited comments, all 12 tones, 2 devices, priority support, and advanced personalization.\n• Lifetime Plan: $149 one-time payment (first 100 slots only — 33 claimed, 67 remaining, then $299 forever) — includes unlimited comments forever, all future features and updates, 5 devices, and VIP access.\n\nAll paid plans include a 7-day money-back guarantee.',
  },
  {
    question: 'Does ReplyChief work in other languages?',
    answer:
      'Yes. ReplyChief supports 30+ languages including English, Spanish, French, German, Portuguese, Hindi, Arabic, Japanese, Chinese (Simplified & Traditional), Korean, Dutch, Italian, Russian, Turkish, Polish, and many more. The AI automatically detects the language of the LinkedIn post and generates comments in the matching language. You can also manually select your preferred output language.',
  },
  {
    question: 'How is ReplyChief different from ChatGPT?',
    answer:
      'ChatGPT is a general-purpose AI chatbot that requires you to manually copy a LinkedIn post, switch to a separate tab, write a prompt, wait for a response, then copy and paste the comment back into LinkedIn. This process takes 30–60 seconds per comment.\n\nReplyChief is a purpose-built LinkedIn comment tool that works directly inside your LinkedIn feed as a Chrome extension. It automatically reads the full context of any post and generates tailored comment suggestions in 2 seconds — without leaving LinkedIn. It also offers 12 professional tones, custom voice profiles, multi-language auto-detection, and a LinkedIn-safe architecture.',
  },
  {
    question: "Can I customize the AI's writing style?",
    answer:
      'Absolutely. ReplyChief lets you create custom voice profiles where you define your communication style, industry focus, level of formality, and key areas of expertise. Every comment the AI generates will reflect your unique professional voice. You can create multiple profiles for different contexts or clients.',
  },
  {
    question: 'Does ReplyChief work on LinkedIn Sales Navigator?',
    answer:
      'Yes. ReplyChief works anywhere you see a LinkedIn post or comment box — including your main feed, LinkedIn Sales Navigator, LinkedIn group posts, and individual profile activity pages.',
  },
  {
    question: 'Is there a limit on the free plan?',
    answer:
      "The free plan includes 10 AI-generated comments per day, access to 5 basic tones, and support for 1 device. This is a generous free tier designed to let you experience ReplyChief's value before upgrading. There's no time limit — the free plan is free forever.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  isDark,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  isDark: boolean;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? isDark
            ? 'border-blue-500/25 bg-blue-500/5 shadow-lg shadow-blue-500/5'
            : 'border-blue-200/70 bg-blue-50/40 shadow-md shadow-blue-100/50'
          : isDark
          ? 'border-white/[0.07] bg-slate-800/30 hover:border-white/[0.12] hover:bg-slate-800/50'
          : 'border-slate-200/80 bg-white hover:border-slate-300/70 shadow-sm hover:shadow-md'
      }`}
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors duration-200 ${
            isOpen
              ? isDark
                ? 'text-white'
                : 'text-slate-900'
              : isDark
              ? 'text-slate-200 group-hover:text-white'
              : 'text-slate-800 group-hover:text-slate-900'
          }`}
        >
          {faq.question}
        </span>

        {/* Animated icon */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-out ${
            isOpen
              ? 'gradient-brand shadow-md shadow-blue-500/30'
              : isDark
              ? 'bg-white/8 group-hover:bg-white/15'
              : 'bg-slate-100 group-hover:bg-slate-200'
          }`}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {/* Smooth animated content */}
      <div
        style={{
          maxHeight: isOpen ? `${height + 48}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
          overflow: 'hidden',
        }}
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div
            className={`w-full h-px mb-4 ${isDark ? 'bg-white/8' : 'bg-slate-200/60'}`}
          />
          <div
            className={`text-sm leading-relaxed whitespace-pre-line ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ isDark }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className={`py-24 relative ${isDark ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
          >
            FAQ
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about ReplyChief.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 scroll-reveal">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              isDark={isDark}
              index={i}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center scroll-reveal">
          <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Still have questions?
          </p>
          <a
            href="mailto:support@replychief.com"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Contact support@replychief.com
          </a>
        </div>
      </div>
    </section>
  );
}
