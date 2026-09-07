import { navigateTo } from '../../utils/navigate';

interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  isDark: boolean;
  title?: string;
}

export default function RelatedLinks({ links, isDark, title = 'Keep exploring' }: RelatedLinksProps) {
  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
        {title}
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              navigateTo(link.href);
            }}
            className={`group flex items-center justify-between gap-3 px-5 py-4 rounded-xl border text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? 'bg-slate-900/60 border-white/8 text-slate-200 hover:border-blue-500/30 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:border-blue-200 hover:text-slate-900 shadow-sm hover:shadow-md'
            }`}
          >
            {link.label}
            <svg
              className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
