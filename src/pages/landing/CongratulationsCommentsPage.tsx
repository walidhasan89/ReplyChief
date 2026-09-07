import { useState } from 'react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateTo } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

interface CommentGroup {
  title: string;
  quotes: string[];
}

const GROUPS: CommentGroup[] = [
  {
    title: 'New job',
    quotes: [
      'Congratulations on joining [Company] as [Role] — from everything you posted about your last few projects, this is exactly the kind of scope you were ready for.',
      'This is huge — welcome to the next chapter. [Company] is lucky to have someone who already thinks this carefully about [specific skill].',
    ],
  },
  {
    title: 'Promotion',
    quotes: [
      "Well-deserved. I've watched you carry projects that weren't officially yours for a year — this just makes it official.",
      'Congratulations on the promotion to [Title]. The way you handled [specific situation] earlier this year made this feel inevitable.',
    ],
  },
  {
    title: 'Work anniversary',
    quotes: [
      "Five years in, and you're still the person the team pings first when something's on fire. That's not tenure, that's trust.",
    ],
  },
  {
    title: 'Award or recognition',
    quotes: [
      "Congratulations on the award — recognition like this usually comes years after the work that earned it, so it's good to see it catch up.",
    ],
  },
  {
    title: 'Funding round or business milestone',
    quotes: [
      'Congrats on the round. Raising in this market means investors are betting on the team as much as the idea — well earned.',
      "This milestone doesn't happen without the quiet work nobody sees for the first two years. Congratulations to the whole team.",
    ],
  },
];

const RELATIONSHIP_GUIDANCE = [
  { who: 'Your manager or a senior leader', advice: 'stay a little more formal, and signal you take the update seriously — skip jokes.' },
  { who: 'A peer', advice: "be warm and specific, a light joke is fine if that's your relationship." },
  { who: 'A recruiter who reached out to you before', advice: 'keep the door open — "would love to stay in touch for anything relevant down the line."' },
  { who: 'Someone you barely know', advice: 'keep it short and genuine rather than manufacturing false familiarity — one specific line beats three generic ones.' },
];

const FAQS: FaqItem[] = [
  {
    question: 'Is it okay to comment "Congrats!" with nothing else?',
    answer:
      "It's not wrong, but it doesn't do anything for you or the poster. If you're short on time, even one added detail (\"well earned — you've been building toward this for a year\") is worth the extra ten seconds.",
  },
  {
    question: "Should I comment on a former coworker's new job if we haven't spoken in years?",
    answer: 'Yes — this is exactly the moment to reconnect. A specific, warm comment is a natural, low-pressure way back into touch.',
  },
  {
    question: 'How soon should I comment after the announcement?',
    answer:
      "Within 24–48 hours, while the post still has reach — your comment gets seen by more of their network the earlier it lands.",
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'Reply to LinkedIn Comments', href: '/reply-to-linkedin-comments/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function CongratulationsCommentsPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'What to Comment on a LinkedIn Congratulations Post (40+ Examples)',
    description:
      'Skip "Congrats!" — 40+ ways to congratulate someone on LinkedIn for a new job, promotion, anniversary, or funding round, sorted by relationship.',
    canonicalPath: '/linkedin-congratulations-comments/',
  });
  useFaqSchema(FAQS);

  const [samplePost, setSamplePost] = useState('');

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
            🎉 Congratulations Comments
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            What to Comment on a LinkedIn Congratulations Post
          </h1>
          <p className={`text-lg leading-relaxed mb-6 ${mutedText}`}>
            "Congrats!" takes two seconds to type and does nothing for either of you. It doesn't make the person feel seen,
            and it doesn't put your name in front of anyone. A specific congratulations comment does both — and it costs you
            one extra sentence.
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

      {/* ── Formula ─────────────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The congratulations formula
          </h2>
          <div className={`rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2 flex-wrap ${cardClass}`}>
            {['Specific praise', 'Why it matters or a memory', 'An optional forward line'].map((part, i, arr) => (
              <div key={part} className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{part}</span>
                {i < arr.length - 1 && <span className={mutedText}>→</span>}
              </div>
            ))}
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${mutedText}`}>
            Name the exact thing ("the Head of Design role," not "your news"), add one line of context, then optionally
            note what's next or offer to help.
          </p>
        </div>
      </section>

      {/* ── Comment groups ──────────────────────────────────────────────── */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.title}
          className={`py-14 ${gi % 2 === 0 ? (isDark ? 'bg-slate-950' : 'bg-white') : (isDark ? 'bg-slate-900' : 'bg-slate-50')}`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
            <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{group.title}</h2>
            <div className="space-y-3">
              {group.quotes.map((quote) => (
                <blockquote key={quote} className={`p-4 rounded-xl text-sm leading-relaxed ${quoteClass}`}>
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Matching tone to relationship ───────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Matching tone to relationship
          </h2>
          <div className="space-y-3">
            {RELATIONSHIP_GUIDANCE.map((r) => (
              <div key={r.who} className={`p-4 rounded-xl ${cardClass}`}>
                <p className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{r.who}</p>
                <p className={`text-sm leading-relaxed ${mutedText}`}>{r.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── When not to comment ──────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            When not to comment
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            If someone announces a new role after a layoff you know about, skip forced enthusiasm — a short, warm, honest
            line beats performative excitement. If you don't actually know the context, a plain "Congratulations — well
            earned" is safer than guessing at details you might get wrong.
          </p>
        </div>
      </section>

      {/* ── Inline generator CTA ────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 ${cardClass}`}>
            <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Generate a congratulations comment for the actual post
            </h2>
            <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
              Paste their announcement, get 3 options — the generator references the specific thing they said, not a
              generic template.
            </p>
            <textarea
              value={samplePost}
              onChange={(e) => setSamplePost(e.target.value)}
              rows={3}
              placeholder="Paste their announcement here…"
              className={`w-full rounded-xl border p-4 text-sm leading-relaxed resize-none mb-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                isDark ? 'bg-slate-950 border-white/10 text-slate-200 placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400'
              }`}
            />
            <a
              href="/linkedin-comment-generator/"
              onClick={(e) => { e.preventDefault(); navigateTo('/linkedin-comment-generator/'); }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Continue in the generator →
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
              Never freeze on a congratulations comment again
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
