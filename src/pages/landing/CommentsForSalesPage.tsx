import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const FAQS: FaqItem[] = [
  {
    question: 'How many prospect posts should I comment on before reaching out?',
    answer: 'Two to three genuine comments over a few weeks is usually enough to become a recognizable name without looking like you\'re only there to sell.',
  },
  {
    question: 'Is it okay to comment and then DM the same day?',
    answer: "It's better to let a little time pass — commenting and immediately DMing in the same session can read as transactional rather than genuine interest.",
  },
  {
    question: 'Will an AI-drafted comment come across as insincere to a prospect?',
    answer: "Not if you edit it to sound like you and keep it specific to their post — the risk isn't the tool, it's posting an unedited generic draft.",
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Commenting Strategy', href: '/linkedin-commenting-strategy/' },
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function CommentsForSalesPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'LinkedIn Comments for Sales: How to Warm Up Prospects Before You Pitch',
    description:
      'How to use LinkedIn comments to build trust with prospects before outreach — what to say, what to avoid, and how to move from comment to conversation.',
    canonicalPath: '/linkedin-comments-for-sales/',
  });
  useFaqSchema(FAQS);

  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const quoteClass = isDark ? 'bg-slate-800/60 border border-white/8 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-800';
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
            For Sales Teams
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How to Use LinkedIn Comments to Warm Up Prospects
          </h1>
          <p className={`text-lg leading-relaxed ${mutedText}`}>
            A cold DM to someone who's never seen your name converts poorly. A DM to someone who's already noticed you
            leave a genuinely useful comment on their post converts far better — because you're no longer a stranger,
            you're someone who was paying attention.
          </p>
        </div>
      </section>

      {/* ── Why commenting beats cold DMs ────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why commenting beats cold DMs
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Comments are public, low-pressure, and visible to the prospect's whole network — meaning you're building
            recognition with people beyond your immediate target, too. A DM asks for a reply immediately; a comment asks
            for nothing and often gets one anyway.
          </p>
        </div>
      </section>

      {/* ── Finding the right posts ──────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Finding the right posts
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Track the specific people on your prospect list and watch for posts where they're discussing a real problem —
            not just company news. A post about a challenge your product addresses is a far better entry point than a
            generic "excited to announce" post.
          </p>
        </div>
      </section>

      {/* ── What to comment / never comment ─────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            What to comment on a prospect's post
          </h2>
          <blockquote className={`p-4 rounded-xl text-sm leading-relaxed mb-3 ${quoteClass}`}>
            "This matches almost exactly what we hear from teams your size — have you tried [specific approach]? Curious
            whether it's come up."
          </blockquote>
          <p className={`text-sm leading-relaxed ${mutedText}`}>
            Specific, relevant, no pitch. It signals you understand their problem without asking for anything.
          </p>
        </div>
      </section>

      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>What never to comment</h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Don't mention your product, don't drop a link, and don't pivot the comment into a pitch — a comment that reads
            as a thinly-disguised ad gets ignored by the poster and looks bad to everyone else reading the thread.
          </p>
        </div>
      </section>

      {/* ── Comment → DM sequence ────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The comment → DM sequence
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Comment genuinely on 2–3 of their posts over a few weeks before reaching out directly. By the time you send a
            DM, you're a familiar name, not a cold contact — and you can reference the earlier exchange naturally.
          </p>
        </div>
      </section>

      {/* ── Automation risk ──────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 ${cardClass}`}>
            <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Doing this without automation risk
            </h2>
            <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
              Tools that auto-comment at scale across hundreds of prospects have gotten accounts flagged and banned. A
              human-reviewed tool that drafts a comment for you to check and post yourself — which is how ReplyChief
              works — keeps you clear of that risk while still saving the time of writing from a blank page.
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              10 free comments a day — no card required
            </a>
          </div>
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
              Warm up your next prospect with a comment, not a cold DM
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
