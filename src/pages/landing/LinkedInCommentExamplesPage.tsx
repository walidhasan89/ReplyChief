import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateTo } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

interface ExampleGroup {
  title: string;
  quotes: string[];
  note: string;
}

const EXAMPLE_GROUPS: ExampleGroup[] = [
  {
    title: 'Comments for a new job or promotion',
    quotes: [
      "Congratulations on the Head of Design role — you've been quietly shaping the product's design language for two years, so this is overdue recognition, not a surprise.",
      'This is a great move for [Company] — your work on [specific thing] made it obvious you were ready for more scope. Excited to see what you build next.',
    ],
    note: 'Why these work: they name the specific role and reference something the person actually did, instead of reacting to "news" in the abstract.',
  },
  {
    title: 'Comments for a work anniversary',
    quotes: [
      "Three years and still the person people go to when a launch is falling apart — that says everything about the trust you've built on the team.",
    ],
    note: '',
  },
  {
    title: 'Comments for a funding announcement',
    quotes: [
      'Congrats on the round — raising in this environment for a product this early is a real signal that investors believe in the team, not just the market timing.',
    ],
    note: '',
  },
  {
    title: 'Comments engaging with thought leadership',
    quotes: [
      "Strongly agree on the 'ship weekly' point — we made that switch eight months ago and the biggest unlock wasn't speed, it was that smaller releases forced us to write better acceptance criteria.",
      'Curious how this plays out for teams under 10 people — does the framework still hold, or does it assume a scale where specialization is already possible?',
    ],
    note: 'Why these work: the first adds a concrete result from direct experience; the second asks a genuinely open question the poster will want to answer.',
  },
  {
    title: 'Comments disagreeing respectfully',
    quotes: [
      "Disagree on one part of this — cold outreach isn't dead, low-effort cold outreach is. We booked 12 meetings last quarter from cold email that referenced something specific about the prospect's business.",
    ],
    note: 'Why it works: leads with the disagreement plainly, then earns it with a number.',
  },
  {
    title: 'Comments on a difficult or sensitive post',
    quotes: [
      "Sorry you're going through this. Layoffs after a strong quarter are especially disorienting because they don't map onto anything you did wrong. If it's useful, happy to make an intro to [specific type of contact].",
    ],
    note: 'Why it works: no forced positivity, no "everything happens for a reason." Acknowledges the situation and offers something concrete instead of platitudes.',
  },
  {
    title: "Comments on a prospect's post (without pitching)",
    quotes: [
      "The point about onboarding friction matches almost exactly what we hear from teams your size — curious whether you've tried breaking the first session into two shorter ones?",
    ],
    note: 'Why it works: genuinely useful, mentions no product, no pitch. The comment earns attention; the DM comes later, separately.',
  },
];

const ANATOMY_STEPS = [
  { label: 'A specific opening', desc: 'not "Great post," but a reaction to one actual thing in it.' },
  { label: 'A value-add', desc: 'a fact, a counter-point, or a one-line story from your own experience.' },
  { label: 'An optional question', desc: "turns a comment into a conversation, which is worth more than a comment that just sits there." },
];

const FAQS: FaqItem[] = [
  {
    question: 'Are these examples safe to copy word for word?',
    answer:
      "You can, but a comment that's clearly copy-pasted (especially if someone else copies the same line) reads as fake fast. Use them as structure, swap in your own specific detail.",
  },
  {
    question: "What's the single biggest mistake in LinkedIn comments?",
    answer: 'Praise with no content — "Great post," "So true," "Love this." It signals you didn\'t actually engage with what was said.',
  },
  {
    question: 'How long should a good comment be?',
    answer: "40–120 words is the sweet spot. Long enough to add something real, short enough that someone actually reads the whole thing.",
  },
];

const RELATED_LINKS = [
  { label: 'Congratulations Comments', href: '/linkedin-congratulations-comments/' },
  { label: 'Reply to LinkedIn Comments', href: '/reply-to-linkedin-comments/' },
  { label: 'LinkedIn Comment Tones', href: '/linkedin-comment-tones/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
  { label: 'LinkedIn Commenting Strategy', href: '/linkedin-commenting-strategy/' },
];

export default function LinkedInCommentExamplesPage({ isDark }: Props) {
  useDocumentMeta({
    title: '50+ LinkedIn Comment Examples for Every Situation (2026)',
    description:
      'Copyable LinkedIn comment examples for new jobs, promotions, thought leadership, and disagreements — plus the formula that makes any comment land.',
    canonicalPath: '/linkedin-comment-examples/',
  });
  useFaqSchema(FAQS);

  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';
  const quoteClass = isDark ? 'bg-slate-800/60 border border-white/8 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-800';

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className={`relative pt-28 pb-16 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            Comment Examples
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            LinkedIn Comment Examples for Every Situation
          </h1>
          <p className={`text-lg leading-relaxed mb-6 ${mutedText}`}>
            You don't need to be a better writer. You need a template your brain can adapt in ten seconds, for the specific
            situation in front of you. Below are 50+ real comment examples, grouped by situation, each with a note on why it
            works — so you're not just copying words, you're learning the pattern.
          </p>
          <a
            href="/linkedin-comment-generator/"
            onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            Try the free comment generator →
          </a>
        </div>
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────── */}
      <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The anatomy of a comment that gets noticed
          </h2>
          <p className={`text-base leading-relaxed mb-6 ${mutedText}`}>
            Every comment that actually lands has three parts, in this order:
          </p>
          <div className="space-y-4 mb-6">
            {ANATOMY_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDark ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {i + 1}
                </span>
                <p className={`text-base leading-relaxed pt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <strong className={isDark ? 'text-white' : 'text-slate-900'}>{step.label}</strong> — {step.desc}
                </p>
              </div>
            ))}
          </div>
          <p className={`text-base leading-relaxed font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Skip the praise. Praise is what everyone else writes, which is exactly why it doesn't work.
          </p>
        </div>
      </section>

      {/* ── Example groups ──────────────────────────────────────────────── */}
      {EXAMPLE_GROUPS.map((group, gi) => (
        <section
          key={group.title}
          className={`py-16 ${gi % 2 === 0 ? (isDark ? 'bg-slate-950' : 'bg-white') : (isDark ? 'bg-slate-900' : 'bg-slate-50')}`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
            <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {group.title}
            </h2>
            <div className="space-y-3 mb-4">
              {group.quotes.map((quote) => (
                <blockquote key={quote} className={`p-4 rounded-xl text-sm leading-relaxed ${quoteClass}`}>
                  "{quote}"
                </blockquote>
              ))}
            </div>
            {group.note && <p className={`text-sm italic leading-relaxed ${mutedText}`}>{group.note}</p>}
          </div>
        </section>
      ))}

      {/* ── Turning into your own voice ─────────────────────────────────── */}
      <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Turning any of these into your own voice
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Swap the specific detail for your own. Read it out loud — if you wouldn't say it to the person's face, rewrite
            it. And if you'd rather not adapt a template by hand,{' '}
            <a
              href="/linkedin-comment-generator/"
              onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
              className="text-blue-500 hover:underline font-medium"
            >
              paste the actual post into the generator
            </a>{' '}
            and get a comment written specifically for it.
          </p>
        </div>
      </section>

      {/* ── Mid-page CTA banner ─────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 text-center ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Don't adapt a template — generate a comment for your exact post
            </p>
            <a
              href="/linkedin-comment-generator/"
              onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Try the generator free →
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
              Don't adapt a template — generate a comment for your exact post
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get ReplyChief free
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
