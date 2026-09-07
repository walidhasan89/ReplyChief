import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateTo } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

const SECTIONS = [
  {
    title: 'Why commenting outperforms posting for most people',
    body: "Posting requires an audience to already be watching. Commenting requires only that you find the right post — one that's already getting traction with people who'd be interested in what you do. If you're starting from a small following, comments compound faster than posts do.",
  },
  {
    title: 'How the algorithm treats comments in 2026',
    body: 'Comments and the replies they generate carry meaningfully more weight in distribution than a like does — a real back-and-forth in a thread signals to the algorithm that content is worth showing to more people. This rewards specific, conversation-starting comments over quick reactions.',
  },
  {
    title: 'Choosing which posts to comment on',
    body: "Look for posts from people whose audience overlaps your target audience — industry peers, potential clients, people one or two steps outside your immediate network. A post already gaining traction (visible from comment count climbing) extends your reach further than commenting on a post nobody's seeing yet.",
  },
  {
    title: 'How many comments a day',
    body: 'Five to ten substantive comments a day, each actually adding something, outperforms fifty generic ones. Quality compounds; volume without quality just gets ignored or flagged as spam-like behavior.',
  },
  {
    title: 'Timing',
    body: 'Commenting in the hour or two before you plan to post yourself signals activity to the algorithm and can improve your own post\'s initial reach — sometimes called "warming the feed."',
  },
  {
    title: 'What a high-value comment actually contains',
    body: 'A specific reaction to the post (not generic praise), one added piece of value — a fact, a counter-point, or a short relevant story — and, where it fits naturally, a genuine question that invites a reply.',
  },
  {
    title: 'Using AI without sounding like AI',
    body: "AI tools speed up the blank-page problem, but a comment that's obviously unedited AI output reads worse than no comment at all. Generate a draft, then adjust anything that doesn't sound like something you'd actually say, and add one detail only you would know. That edit takes ten seconds and changes how the comment reads entirely.",
  },
  {
    title: 'Measuring whether it\'s working',
    body: 'Track profile views and new connection requests over a few weeks of consistent, quality commenting — these usually respond faster and more visibly than follower count does.',
  },
];

const FAQS: FaqItem[] = [
  {
    question: 'Does commenting really help the LinkedIn algorithm favor you?',
    answer: 'Yes — engagement that generates further replies is treated as a stronger signal than passive likes, and shows up in wider distribution over time.',
  },
  {
    question: 'Is there a real risk of commenting too much?',
    answer: "Volume itself isn't usually the issue — low-quality, repetitive, or clearly automated-looking comments are what gets flagged, not a high number of thoughtful ones.",
  },
  {
    question: 'Should I comment or post if I only have 15 minutes a day?',
    answer: "If you're early-stage with a small following, commenting on the right posts usually returns more visibility per minute spent than writing your own post.",
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'LinkedIn Comment Tones', href: '/linkedin-comment-tones/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function CommentingStrategyPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'The LinkedIn Commenting Strategy That Actually Grows Your Reach',
    description:
      'How commenting builds visibility faster than posting — how many comments a day, which posts to pick, and what actually moves the algorithm.',
    canonicalPath: '/linkedin-commenting-strategy/',
  });
  useFaqSchema(FAQS);

  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';

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
            Strategy
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How to Grow on LinkedIn by Commenting
          </h1>
          <p className={`text-lg leading-relaxed ${mutedText}`}>
            Most people treat commenting as an afterthought to posting. That's backwards. A thoughtful comment on someone
            else's post — especially a post already getting reach — puts your name in front of an audience you haven't
            built yet, for the cost of one paragraph. Posting builds an audience you already have; commenting borrows one
            you don't.
          </p>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────────────────────── */}
      {SECTIONS.map((s, i) => (
        <section
          key={s.title}
          className={`py-14 ${i % 2 === 0 ? (isDark ? 'bg-slate-900' : 'bg-slate-50') : (isDark ? 'bg-slate-950' : 'bg-white')}`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
            <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.title}</h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>{s.body}</p>
          </div>
        </section>
      ))}

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

      {/* ── Related + soft end CTA ──────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="scroll-reveal">
            <RelatedLinks links={RELATED_LINKS} isDark={isDark} />
          </div>
          <div className="text-center scroll-reveal">
            <p className={`text-base mb-4 ${mutedText}`}>Make every comment count.</p>
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
