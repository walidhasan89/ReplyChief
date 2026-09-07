import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const PRICE_ROWS = [
  { label: 'Free tier', replychief: '10 comments/day, 5 tones', engageAi: 'Limited free comment suggestions' },
  { label: 'Paid', replychief: '$5.99/mo or $59/yr', engageAi: '~$12.90–$80/mo depending on tier' },
  { label: 'Lifetime option', replychief: '$149 one-time', engageAi: 'Not offered' },
];

const FAQS: FaqItem[] = [
  {
    question: 'Is ReplyChief actually cheaper than Engage AI?',
    answer:
      "Yes, substantially — ReplyChief's Pro tier is $5.99/month against Engage AI's paid tiers starting around $12.90/month and running up to $80/month for higher usage.",
  },
  {
    question: 'Does ReplyChief have prospect monitoring like Engage AI?',
    answer:
      "Not currently. If tracking specific accounts' posts is central to your workflow, Engage AI covers that today and ReplyChief doesn't.",
  },
  {
    question: 'Can I use both at the same time?',
    answer:
      'Yes — both are Chrome extensions with no account lock-in beyond your login, so trying ReplyChief doesn\'t require dropping your current tool first.',
  },
];

const RELATED_LINKS = [
  { label: 'Best LinkedIn Comment Generators', href: '/best-linkedin-comment-generators/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function EngageAiAlternativePage({ isDark }: Props) {
  useDocumentMeta({
    title: 'Engage AI Alternative: ReplyChief vs Engage AI (Honest Comparison)',
    description:
      'Looking for an Engage AI alternative? Side-by-side on price, tones, and languages — including where Engage AI is still the better choice.',
    canonicalPath: '/alternatives/engage-ai/',
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
            Comparison
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ReplyChief vs Engage AI: An Honest Comparison
          </h1>
          <div className={`rounded-2xl p-6 text-left ${isDark ? 'bg-blue-500/5 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Quick verdict</p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              If you want the cheapest way to get thoughtful LinkedIn comment drafts and don't need prospect monitoring or
              CRM integrations, ReplyChief covers the core job at a fraction of the price. If you're running structured
              outbound and need to track specific prospects' posts, Engage AI's monitoring features go further than
              ReplyChief does today.
            </p>
          </div>
        </div>
      </section>

      {/* ── Price table ─────────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Price, side by side</h2>
          <div className={`table-wrapper rounded-2xl border overflow-hidden ${isDark ? 'border-white/[0.06]' : 'border-slate-200/70'} shadow-sm`}>
            <table className={`w-full ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ minWidth: '480px' }}>
              <thead>
                <tr className={`border-b ${isDark ? 'border-white/[0.06]' : 'border-slate-100'}`}>
                  <th className={`text-left p-4 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}></th>
                  <th className={`p-4 text-sm font-bold ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>ReplyChief</th>
                  <th className={`p-4 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Engage AI</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row) => (
                  <tr key={row.label} className={`border-b ${isDark ? 'border-white/[0.05]' : 'border-slate-100/80'}`}>
                    <td className={`p-4 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.label}</td>
                    <td className={`p-4 text-sm ${isDark ? 'bg-blue-500/3 text-white' : 'bg-blue-50/30 text-slate-900'}`}>{row.replychief}</td>
                    <td className={`p-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.engageAi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${mutedText}`}>
            ReplyChief's monthly price is roughly a fifth of Engage AI's entry paid tier, and the lifetime option has no
            equivalent on the other side.
          </p>
        </div>
      </section>

      {/* ── Tones and language ──────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-reveal">
          <div>
            <h2 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Tones and output</h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              ReplyChief ships 12 named tones (Professional, Witty, Contrarian, Empathetic, and more) so the same tool can
              write a congratulations comment and a respectful disagreement without sounding like the same voice.
            </p>
          </div>
          <div>
            <h2 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Language support</h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              ReplyChief generates comments in the language of the original post, across 30+ languages.
              This is a meaningful difference if you comment across a multilingual network.
            </p>
          </div>
        </div>
      </section>

      {/* ── Where Engage AI wins ────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Where Engage AI is the stronger pick
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Prospect monitoring — tracking specific people's posts and getting alerted when they publish — is a genuine
            Engage AI strength that ReplyChief doesn't currently offer. If your workflow depends on watching a target list
            of accounts, that's a real reason to choose Engage AI over ReplyChief.
          </p>
        </div>
      </section>

      {/* ── Account safety ──────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Account safety: both are human-in-the-loop
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Neither tool auto-posts. Both draft a comment and require you to review and publish it yourself, which keeps
            both well clear of the automation risk that has gotten heavier tools flagged.
          </p>
        </div>
      </section>

      {/* ── Switching over ──────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 ${cardClass}`}>
            <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Switching over</h2>
            <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
              Uninstall isn't required to try ReplyChief alongside your current tool — install the free extension, test it
              on your next few posts, and see whether the tone range and price make the switch worthwhile.
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Try ReplyChief free — no card, 10 comments a day
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
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
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="scroll-reveal">
            <RelatedLinks links={RELATED_LINKS} isDark={isDark} />
          </div>
          <div className={`rounded-2xl p-8 sm:p-10 text-center scroll-reveal ${isDark ? 'bg-slate-800/60 border border-white/8' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Try ReplyChief free — no card, 10 comments a day
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Install free
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
