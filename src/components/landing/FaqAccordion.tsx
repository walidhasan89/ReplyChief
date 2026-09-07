import { useEffect, useRef, useState } from 'react';
import type { FaqItem } from '../../hooks/useFaqSchema';

interface FaqAccordionProps {
  items: FaqItem[];
  isDark: boolean;
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  isDark,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isDark: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(contentRef.current.scrollHeight);
  }, [item.answer]);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? isDark
            ? 'border-blue-500/25 bg-blue-500/5'
            : 'border-blue-200/70 bg-blue-50/40'
          : isDark
          ? 'border-white/[0.07] bg-slate-800/30 hover:border-white/[0.12]'
          : 'border-slate-200/80 bg-white hover:border-slate-300/70 shadow-sm'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        style={{ outline: 'none' }}
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm sm:text-base font-semibold leading-relaxed ${
            isOpen ? (isDark ? 'text-white' : 'text-slate-900') : isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800'
          }`}
        >
          {item.question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'gradient-brand shadow-md shadow-blue-500/30' : isDark ? 'bg-white/8' : 'bg-slate-100'
          }`}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg
            className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div
        style={{
          maxHeight: isOpen ? `${height + 48}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
          overflow: 'hidden',
        }}
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className={`w-full h-px mb-4 ${isDark ? 'bg-white/8' : 'bg-slate-200/60'}`} />
          <div className={`text-sm leading-relaxed whitespace-pre-line ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items, isDark }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          isDark={isDark}
        />
      ))}
    </div>
  );
}
