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
    question: 'Should I reply to every single comment on my post?',
    answer:
      'Ideally yes, especially in the first few hours while the post has reach. If volume makes that impossible, prioritize business-relevant commenters first.',
  },
  {
    question: 'Is it bad to reply with the same "Thanks!" to everyone?',
    answer:
      "It's not damaging, but it's a missed opportunity — a slightly personalized reply costs a few more seconds and meaningfully increases the odds the exchange continues.",
  },
  {
    question: 'How do I handle a genuinely negative or hostile comment?',
    answer:
      "Respond calmly, address the substance if there is any, and don't escalate. If it's pure hostility with no point being made, a short, neutral reply (or no reply) is usually better than engaging further.",
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'Congratulations Comments', href: '/linkedin-congratulations-comments/' },
  { label: 'LinkedIn Commenting Strategy', href: '/linkedin-commenting-strategy/' },
  { label: 'LinkedIn Comment Generator', href: '/linkedin-comment-generator/' },
];

export default function ReplyToCommentsPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'How to Reply to LinkedIn Comments (Without Saying "Thanks!" 40 Times)',
    description:
      "Your post got 40 comments. Here's how to reply to all of them meaningfully — plus a tool that drafts threaded replies right inside LinkedIn.",
    canonicalPath: '/reply-to-linkedin-comments/',
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
            Reply to Comments
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How to Reply to Comments on Your LinkedIn Post
          </h1>
          <p className={`text-lg leading-relaxed ${mutedText}`}>
            Replies are worth more than likes — LinkedIn's algorithm weights a genuine back-and-forth in a comment thread
            more heavily than a single comment sitting alone. But when your post takes off and 40 people comment, replying
            to each one starts to feel like a part-time job, and most people either burn an hour on it or give up after the
            first ten.
          </p>
        </div>
      </section>

      {/* ── Reply that starts vs ends a conversation ────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            The reply that starts a conversation vs. the reply that ends it
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            "Thanks!" ends the exchange. A reply that references what the person actually said, and adds one more thought
            or a question, keeps it going — and every reply in a thread is another chance for someone new to see your name.
          </p>
        </div>
      </section>

      {/* ── Replying to congratulations ──────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Replying to congratulations without repeating yourself
          </h2>
          <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>
            You don't need 40 different sentences. You need 4–5 variations you rotate, each slightly personalized:
          </p>
          <div className="space-y-3">
            {[
              'Thank you, [Name] — means a lot coming from someone who\'s built [specific thing] themselves.',
              "Appreciate it! Curious what you're working on these days — feels like it's been a minute since we caught up.",
            ].map((quote) => (
              <blockquote key={quote} className={`p-4 rounded-xl text-sm leading-relaxed ${quoteClass}`}>
                "{quote}"
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Replying to a disagreement ──────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Replying to a disagreement in your own comments
          </h2>
          <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>
            Don't get defensive, and don't cave just to end it. Acknowledge the specific point, then either concede it or
            explain your reasoning in one more sentence:
          </p>
          <blockquote className={`p-4 rounded-xl text-sm leading-relaxed ${quoteClass}`}>
            "Fair point on [specific detail] — I was thinking about this from the [X] angle, but you're right that it looks
            different from [Y]. What made you land there?"
          </blockquote>
        </div>
      </section>

      {/* ── Replying to a prospect ───────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Replying to a prospect who commented
          </h2>
          <blockquote className={`p-4 rounded-xl text-sm leading-relaxed ${quoteClass}`}>
            "Glad this was useful — sounds like you're dealing with exactly the [specific problem] we talked about. Happy
            to send over the resource I mentioned if that'd help."
          </blockquote>
        </div>
      </section>

      {/* ── How many to reply to ────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How many comments should you actually reply to?
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            All of them if the volume is manageable. Past 15–20, prioritize: reply first to anyone with genuine business
            relevance (prospects, people in your target audience, industry peers), then batch-reply to the rest with a
            shorter but still specific line — never a copy-pasted identical "Thanks!" repeated 30 times, which reads as
            low-effort in a visible thread.
          </p>
        </div>
      </section>

      {/* ── Extension CTA ────────────────────────────────────────────────── */}
      <section className={`py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className={`rounded-2xl p-8 ${cardClass}`}>
            <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Replying inside the thread with ReplyChief
            </h2>
            <p className={`text-sm leading-relaxed mb-5 ${mutedText}`}>
              The extension's Magic Reply button works inside comment threads specifically — it reads the comment you're
              replying to (not just the original post) and drafts a response that continues that exact conversation,
              rather than restating the post.
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Reply to every comment in half the time — install free
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
              Reply to every comment in half the time
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
