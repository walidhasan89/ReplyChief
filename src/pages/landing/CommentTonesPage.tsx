import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateTo } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

const TONES = [
  { name: 'Professional', when: 'industry updates, work announcements, anything client-facing might see.' },
  { name: 'Friendly', when: 'most everyday posts from people you know.' },
  { name: 'Witty', when: "light content, industry humor, posts that are themselves a little playful." },
  { name: 'Questioning', when: 'posts that raise something genuinely debatable; keeps a conversation open.' },
  { name: 'Empathetic', when: 'layoffs, setbacks, difficult personal news.' },
  { name: 'Contrarian', when: 'respectful disagreement on a claim you think is wrong.' },
  { name: 'Storytelling', when: 'when your own experience adds real weight to the point.' },
  { name: 'Casual', when: 'close connections, informal communities.' },
  { name: 'Supportive', when: 'someone taking a risk, launching something, asking for encouragement.' },
  { name: 'Motivational', when: 'milestones, comebacks, someone who clearly needs the lift.' },
  { name: 'Analytical', when: 'data-heavy or technical posts where a sharp, logical addition stands out.' },
  { name: 'Conversational', when: 'general back-and-forth, replies inside a thread.' },
];

const FAQS: FaqItem[] = [
  {
    question: "What's the safest default tone if I'm not sure?",
    answer: 'Professional or Friendly — both work across the widest range of posts without risking a tonal misfire.',
  },
  {
    question: 'How do I disagree on LinkedIn without seeming rude?',
    answer: 'Address the specific claim, not the person; state your reasoning plainly; and end with a genuine question rather than a closing jab.',
  },
  {
    question: 'Should I use the same tone for every comment I write?',
    answer: 'No — matching tone to the post is what separates a comment that lands from one that reads as tone-deaf, even when the underlying point is fine.',
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'LinkedIn Commenting Strategy', href: '/linkedin-commenting-strategy/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function CommentTonesPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'LinkedIn Comment Tones: When to Be Professional, Witty, or Contrarian',
    description: 'How to pick the right tone for a LinkedIn comment — including how to disagree politely without damaging the relationship.',
    canonicalPath: '/linkedin-comment-tones/',
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
            🎭 Comment Tones
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Choosing the Right Tone for a LinkedIn Comment
          </h1>
          <p className={`text-lg leading-relaxed ${mutedText}`}>
            The same fact, said in the wrong tone, can read as cold, try-hard, or tone-deaf. A funding announcement and a
            layoff post are not the same room, and a comment that doesn't read the room costs you more than staying silent
            would have.
          </p>
        </div>
      </section>

      {/* ── Why tone matters ─────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why tone matters more than wording
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Two comments can make an identical point and land completely differently depending on tone — one professional
            and measured, the other warm and personal. Neither is wrong; the post determines which one fits.
          </p>
        </div>
      </section>

      {/* ── 12 tones grid ────────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The 12 tones, and when each lands
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {TONES.map((tone) => (
              <div key={tone.name} className={`p-4 rounded-xl ${cardClass}`}>
                <p className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{tone.name}</p>
                <p className={`text-sm leading-relaxed ${mutedText}`}>{tone.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disagreeing / reading the room / industry ───────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-reveal">
          <div>
            <h2 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Disagreeing without damaging the relationship
            </h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              Lead with the specific point of disagreement, not a personal read on the poster. "Disagree on the second
              point — the data I've seen shows X" reads as engaged; "this doesn't make sense" reads as dismissive. State
              your reasoning, invite theirs, and stop there — you don't need the last word.
            </p>
          </div>
          <div>
            <h2 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Reading the room on sensitive posts
            </h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              If someone's sharing a layoff, a health issue, or a hard year, skip wit and skip motivation-poster energy.
              Empathetic, specific, and brief beats anything trying to be clever.
            </p>
          </div>
          <div>
            <h2 className={`text-xl font-bold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Matching tone to your industry
            </h2>
            <p className={`text-base leading-relaxed ${mutedText}`}>
              Finance and legal audiences generally read Professional and Analytical as the safe defaults. Creative and
              startup-adjacent audiences tolerate — often reward — Witty and Casual more readily. When in doubt, match the
              tone of the post itself.
            </p>
          </div>
        </div>
      </section>

      {/* ── Switch tone CTA ──────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 text-center ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Switching tone in one click</p>
            <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
              The generator lets you regenerate the same post in a different tone instantly, so you can compare a
              Professional draft against a Witty one before deciding which fits.
            </p>
            <a
              href="/linkedin-comment-generator/"
              onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Try all 12 tones on your next comment — free
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
              Try all 12 tones on your next comment
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
