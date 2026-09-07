import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateTo } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

const TOOL_ROWS = [
  { tool: 'ReplyChief', bestFor: 'Cheapest option, most tones, multilingual', price: 'Free / $5.99/mo', isUs: true },
  { tool: 'Engage AI', bestFor: 'Prospect monitoring, sales workflows', price: 'Free / ~$12.90/mo', isUs: false },
  { tool: 'Commenter.ai', bestFor: 'Multi-platform beyond LinkedIn', price: '~$27/mo', isUs: false },
  { tool: 'Planable', bestFor: 'Free tool bundled with social scheduling', price: 'Free (part of suite)', isUs: false },
  { tool: 'LigoSocial', bestFor: 'Free tool + strong supporting content', price: 'Free', isUs: false },
  { tool: 'Taplio', bestFor: 'Full LinkedIn growth suite (posts + comments)', price: '~$39+/mo', isUs: false },
];

const CATEGORY_WINNERS = [
  { title: 'Best free option: ReplyChief or LigoSocial', body: 'Both offer genuinely free, no-signup-required comment generation. ReplyChief adds more tone options and multilingual output; LigoSocial pairs its tool with a strong content library if you want to learn the underlying strategy as well.' },
  { title: 'Best for tone control: ReplyChief', body: 'Twelve distinct tones is more than any other tool in this category currently offers — most cap out at 3–5.' },
  { title: 'Best for non-English comments: ReplyChief', body: 'If your network includes non-English posts, this is presently the clearest differentiator in the category.' },
  { title: 'Best for sales prospecting (not us): Engage AI or Extrovert', body: 'If your job is structured outbound with a target account list, tools built specifically for prospect monitoring and CRM integration will serve that workflow better than a comment generator alone.' },
  { title: 'Best for full LinkedIn growth, not just comments (not us): Taplio', body: 'If you also want post scheduling, analytics, and content ideation in the same tool, Taplio is built for that broader job; ReplyChief is deliberately focused on comments only.' },
];

const FAQS: FaqItem[] = [
  {
    question: 'Is it safe to use any AI LinkedIn comment tool?',
    answer:
      'Tools that keep a human reviewing and posting each comment (which is most of the tools above) carry minimal risk. Tools that auto-post at volume carry real account-flagging risk.',
  },
  {
    question: 'Do free tools produce worse comments than paid ones?',
    answer:
      'Not necessarily on quality — the free tiers of ReplyChief and LigoSocial produce solid drafts. The paid difference is usually usage limits and tone range, not raw comment quality.',
  },
  {
    question: 'Which tool is cheapest overall?',
    answer: 'ReplyChief, at $5.99/month or $149 lifetime, is the lowest-priced paid option in this comparison by a wide margin.',
  },
];

const RELATED_LINKS = [
  { label: 'Engage AI Alternative', href: '/alternatives/engage-ai/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function BestCommentGeneratorsPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'Best LinkedIn Comment Generators in 2026 (Tested and Priced)',
    description:
      'Nine LinkedIn AI comment tools compared on price, tone control, language support, and account safety. We make one of them — and we say so upfront.',
    canonicalPath: '/best-linkedin-comment-generators/',
  });
  useFaqSchema(FAQS);

  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardClass = isDark ? 'bg-slate-900 border border-white/10' : 'bg-white border border-slate-200 shadow-sm';

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className={`relative pt-28 pb-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            2026 Comparison
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The Best LinkedIn Comment Generators in 2026
          </h1>
          <div className={`rounded-2xl p-6 text-left ${isDark ? 'bg-yellow-500/5 border border-yellow-500/20' : 'bg-yellow-50 border border-yellow-200'}`}>
            <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
              Our bias, disclosed upfront
            </p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              We make ReplyChief, so take our inclusion of it with that in mind. We've tried to be straight about where
              other tools do things better — a comparison that only ever ranks itself first isn't useful to you, and it
              isn't credible either.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick comparison table ──────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick comparison</h2>
          <div className={`table-wrapper rounded-2xl border overflow-hidden ${isDark ? 'border-white/[0.06]' : 'border-slate-200/70'} shadow-sm`}>
            <table className={`w-full ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ minWidth: '520px' }}>
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/[0.06]' : 'border-slate-100'}`}>
                  <th className={`text-left p-4 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Tool</th>
                  <th className={`text-left p-4 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Best for</th>
                  <th className={`text-left p-4 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Starting price</th>
                </tr>
              </thead>
              <tbody>
                {TOOL_ROWS.map((row) =>
                  row.isUs ? (
                    <tr key={row.tool}>
                      <td colSpan={3} className="p-0">
                        <a
                          href="/linkedin-comment-generator/"
                          onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
                          className={`flex items-center gap-4 p-4 transition-colors ${
                            isDark ? 'bg-blue-500/10 hover:bg-blue-500/15' : 'bg-blue-50 hover:bg-blue-100/70'
                          }`}
                        >
                          <span className={`flex-1 text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{row.tool} →</span>
                          <span className={`flex-1 text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{row.bestFor}</span>
                          <span className={`flex-1 text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{row.price}</span>
                        </a>
                      </td>
                    </tr>
                  ) : (
                    <tr key={row.tool} className={`border-b ${isDark ? 'border-white/[0.05]' : 'border-slate-100/80'}`}>
                      <td className={`p-4 text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{row.tool}</td>
                      <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.bestFor}</td>
                      <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.price}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Category winners ────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-reveal">
          {CATEGORY_WINNERS.map((c) => (
            <div key={c.title} className={`p-6 rounded-2xl ${cardClass}`}>
              <h2 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{c.title}</h2>
              <p className={`text-sm leading-relaxed ${mutedText}`}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Automation caution ───────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            A caution on full automation tools
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Some tools in this category post comments automatically at volume. That carries real account risk — LinkedIn
            has cracked down on automated engagement patterns, and losing your account isn't worth the time saved. Every
            tool listed above except full-automation platforms keeps a human reviewing each comment before it posts, which
            we'd recommend prioritizing regardless of which tool you choose.
          </p>
        </div>
      </section>

      {/* ── How to choose ───────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>How to choose</h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            If price and tone variety matter most, start with ReplyChief's free tier. If you need prospect tracking, look
            at Engage AI. If you want comments as one piece of a broader content strategy, Taplio is worth the higher
            price.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-8 scroll-reveal ${isDark ? 'text-white' : 'text-slate-900'}`}>
            FAQ
          </h2>
          <div className="scroll-reveal">
            <FaqAccordion items={FAQS} isDark={isDark} />
          </div>
        </div>
      </section>

      {/* ── Related + end CTA ───────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="scroll-reveal">
            <RelatedLinks links={RELATED_LINKS} isDark={isDark} />
          </div>
          <div className={`rounded-2xl p-8 sm:p-10 text-center scroll-reveal ${isDark ? 'bg-slate-800/60 border border-white/8' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              See why ReplyChief tops this list — try it free
            </p>
            <a
              href="/linkedin-comment-generator/"
              onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Try the generator free
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
