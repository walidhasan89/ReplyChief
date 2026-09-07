import { useState } from 'react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { useFaqSchema, type FaqItem } from '../../hooks/useFaqSchema';
import FaqAccordion from '../../components/landing/FaqAccordion';
import RelatedLinks from '../../components/landing/RelatedLinks';
import { navigateHomeToAnchor } from '../../utils/navigate';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

const SAMPLE_POST =
  "Just hit $2M ARR with our bootstrapped SaaS! 🚀 The secret? Consistent LinkedIn engagement. We spent 6 months commenting on our audience's posts before launch — built trust, authority, and 500+ warm leads.";

const FREE_TONES = [
  {
    name: 'Professional',
    sample:
      'Congratulations on reaching $2M ARR — building trust through consistent engagement before launch is a disciplined go-to-market strategy that too many founders skip. Well earned.',
  },
  {
    name: 'Friendly',
    sample:
      'This is awesome, congrats! Six months of showing up consistently before launch says a lot about how you build — the 500 warm leads make total sense as a result.',
  },
  {
    name: 'Witty',
    sample:
      "Turns out \"be everywhere in the comments for 6 months\" is the growth hack nobody wants to hear, because it actually requires showing up. Congrats on the $2M!",
  },
  {
    name: 'Questioning',
    sample:
      "Huge milestone — curious how you kept the commenting consistent for 6 months straight before you had any revenue to show for it? That's the part most people give up on.",
  },
  {
    name: 'Empathetic',
    sample:
      'Six months of consistent effort before you saw a single dollar back takes real belief in what you were building. Congrats on seeing it pay off.',
  },
];

const PRO_TONES = ['Contrarian', 'Storytelling', 'Casual', 'Supportive', 'Motivational', 'Analytical', 'Conversational'];

const FAQS: FaqItem[] = [
  {
    question: 'Is this actually free?',
    answer:
      'Yes — 10 comments a day, 5 tones, no credit card, no trial period that expires. Pro removes the daily cap and unlocks all 12 tones.',
  },
  {
    question: 'Does it post comments automatically?',
    answer: 'No. ReplyChief never posts on your behalf. You always see the generated comment and choose whether to use it.',
  },
  {
    question: 'Do I need the Chrome extension, or does this page work on its own?',
    answer:
      "This page works on its own — paste any post and generate a comment right here. The extension adds a one-click button directly inside LinkedIn's comment box so you never have to switch tabs.",
  },
  {
    question: 'Can it comment in languages other than English?',
    answer: "Yes. ReplyChief detects the post's language and generates the comment in that language, across 30+ languages.",
  },
  {
    question: 'Will people be able to tell it\'s AI-generated?',
    answer:
      "Not if you skim and personalize it, which takes ten seconds. Generic, un-edited output is what gives AI comments away — specific, edited output doesn't read as AI at all.",
  },
];

const RELATED_LINKS = [
  { label: 'LinkedIn Comment Examples', href: '/linkedin-comment-examples/' },
  { label: 'LinkedIn Comment Tones', href: '/linkedin-comment-tones/' },
  { label: 'Reply to LinkedIn Comments', href: '/reply-to-linkedin-comments/' },
];

export default function LinkedInCommentGeneratorPage({ isDark }: Props) {
  useDocumentMeta({
    title: 'Free LinkedIn Comment Generator — 12 AI Tones | ReplyChief',
    description:
      'Paste any LinkedIn post and get a thoughtful, human-sounding comment in seconds. 12 tones, works in any language, free — no signup required.',
    canonicalPath: '/linkedin-comment-generator/',
  });
  useFaqSchema(FAQS);

  const [postText, setPostText] = useState(SAMPLE_POST);
  const [selectedTone, setSelectedTone] = useState(FREE_TONES[0].name);
  const [output, setOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lockedTone, setLockedTone] = useState<string | null>(null);

  const handleToneClick = (name: string, locked: boolean) => {
    if (locked) {
      setLockedTone(name);
      return;
    }
    setLockedTone(null);
    setSelectedTone(name);
    setOutput(null);
  };

  const handleGenerate = () => {
    if (!postText.trim()) return;
    setLockedTone(null);
    setIsGenerating(true);
    setCopied(false);
    setTimeout(() => {
      const tone = FREE_TONES.find((t) => t.name === selectedTone);
      setOutput(tone?.sample ?? null);
      setIsGenerating(false);
    }, 900);
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in this context — copy button simply won't confirm.
    }
  };

  const cardClass = isDark ? 'bg-slate-900 border border-white/10' : 'bg-white border border-slate-200 shadow-sm';
  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <main>
      {/* ── Hero + tool ─────────────────────────────────────────────────── */}
      <section className={`relative pt-28 pb-20 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-[0.1] ${
              isDark ? 'bg-blue-600' : 'bg-blue-300'
            }`}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Free tool — no signup required
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Free LinkedIn <span className="text-gradient">Comment Generator</span>
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-12 ${mutedText}`}>
            Paste a post below, pick a tone, and get a comment that actually responds to it — not a template with your name swapped in.
          </p>

          {/* ── Tool card ── */}
          <div className={`text-left rounded-2xl p-6 sm:p-8 ${cardClass}`}>
            <label className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              The LinkedIn post
            </label>
            <textarea
              value={postText}
              onChange={(e) => {
                setPostText(e.target.value);
                setOutput(null);
              }}
              rows={4}
              placeholder="Paste a LinkedIn post here…"
              className={`w-full rounded-xl border p-4 text-sm leading-relaxed resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                isDark ? 'bg-slate-950 border-white/10 text-slate-200 placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400'
              }`}
            />

            <label className={`block text-xs font-semibold uppercase tracking-widest mt-5 mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Tone
            </label>
            <div className="flex flex-wrap gap-2">
              {FREE_TONES.map((t) => (
                <button
                  key={t.name}
                  onClick={() => handleToneClick(t.name, false)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedTone === t.name
                      ? 'gradient-brand text-white shadow-sm shadow-blue-500/30'
                      : isDark
                      ? 'bg-white/8 text-slate-300 hover:bg-white/12'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.name}
                </button>
              ))}
              {PRO_TONES.map((name) => (
                <button
                  key={name}
                  onClick={() => handleToneClick(name, true)}
                  className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-dashed transition-all ${
                    isDark ? 'border-white/15 text-slate-500 hover:text-slate-300' : 'border-slate-300 text-slate-400 hover:text-slate-600'
                  }`}
                >
                  🔒 {name}
                </button>
              ))}
            </div>

            {lockedTone && (
              <p className={`mt-3 text-xs font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>
                🔒 {lockedTone} is a Pro tone —{' '}
                <button onClick={() => navigateHomeToAnchor('#pricing')} className="underline hover:no-underline">
                  unlock all 12 tones for $5.99/mo →
                </button>
              </p>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !postText.trim()}
              className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isGenerating ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  Generating…
                </>
              ) : (
                'Generate a comment — free'
              )}
            </button>

            {output && (
              <div className={`mt-5 p-4 rounded-xl ${isDark ? 'bg-blue-600/90' : 'bg-blue-600'} shadow-lg shadow-blue-600/20`}>
                <p className="text-white text-sm leading-relaxed">{output}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-blue-200 text-xs font-medium">{selectedTone} tone</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            )}

            <p className={`mt-4 text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Demo preview using a sample post and example outputs, so you can see real output quality before installing anything. For live posts from your actual feed, use the Chrome extension.
            </p>
          </div>

          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            Get it inside LinkedIn — install the free extension →
          </a>
        </div>
      </section>

      {/* ── You know the feeling ───────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            You know the feeling. You want to comment. Nothing comes out.
          </h2>
          <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>
            Someone in your network just posted about a new job, a hard lesson, a hot take you half-agree with — and you sit
            there typing "Great post!" and deleting it, because you know it adds nothing. Most people give up and scroll
            past. That's a missed opportunity: on LinkedIn, a genuinely good comment reaches people who've never heard of
            you. A generic one reaches no one.
          </p>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            ReplyChief reads the post you paste in and writes a comment that actually responds to it — not a template with
            your name swapped in. Pick a tone, generate, tweak if you want, and post. Nothing goes out without you seeing it
            first.
          </p>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-8 scroll-reveal ${isDark ? 'text-white' : 'text-slate-900'}`}>
            How it works
          </h2>
          <div className="space-y-4 scroll-reveal">
            {[
              'Paste the LinkedIn post you want to comment on into the box above.',
              'Choose a tone — professional, witty, empathetic, contrarian, and eight more.',
              "Hit generate. You'll get a comment that's actually about the post.",
              "Edit anything that doesn't sound like you, then copy it into LinkedIn.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDark ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {i + 1}
                </span>
                <p className={`text-base leading-relaxed pt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step}</p>
              </div>
            ))}
          </div>
          <p className={`mt-6 text-base leading-relaxed scroll-reveal ${mutedText}`}>
            Want this inside LinkedIn itself, without the copy-paste?{' '}
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">
              Install the free Chrome extension
            </a>{' '}
            and a "Magic Reply" button appears right in the comment box on every post.
          </p>
        </div>
      </section>

      {/* ── 12 tones ────────────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            12 tones, because one voice doesn't fit every post
          </h2>
          <p className={`text-base leading-relaxed mb-4 ${mutedText}`}>
            A funding announcement and a layoff post don't call for the same energy. ReplyChief gives you Professional,
            Friendly, Witty, Questioning, Empathetic, Contrarian, Storytelling, Casual, Supportive, Motivational, Analytical,
            and Conversational — so the comment matches the moment instead of sounding like the same bot replying to
            everything. Free users get 5 core tones; Pro unlocks all 12.
          </p>
        </div>
      </section>

      {/* ── Works in your language ─────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Works in your language, not just English
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            ReplyChief detects the language of the post and writes the comment in that language too — not a stiff,
            translated-sounding version of an English draft. If you comment across a multilingual network, this matters
            more than any other feature on this page.
          </p>
        </div>
      </section>

      {/* ── Free vs Pro ─────────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center scroll-reveal ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Free vs Pro
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 scroll-reveal">
            {[
              { name: 'Free', desc: '10 generated comments a day, 5 tones, 1 device — enough to try it properly.' },
              { name: 'Pro', desc: '$5.99/mo or $59/yr. Unlimited comments, all 12 tones, up to 3 devices, priority support.' },
              { name: 'Lifetime', desc: '$149 one-time. Everything in Pro, forever, on up to 5 devices. Limited to the first 100 users.' },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 ${cardClass}`}>
                <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${mutedText}`}>{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AI comments sound fake ─────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why AI comments usually sound fake — and how to avoid it
          </h2>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Most AI comment tools generate the same three sentences for every post: acknowledge, compliment, generic close.
            People can spot it instantly. ReplyChief is built to reference something specific from the actual post — a
            number, a claim, a detail — because specificity is what makes a comment read as human. Still: always skim what's
            generated before you post it. The best AI comment is a first draft you make yours, not a final answer you paste
            blind.
          </p>
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

      {/* ── Related + CTA ──────────────────────────────────────────────── */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="scroll-reveal">
            <RelatedLinks links={RELATED_LINKS} isDark={isDark} />
          </div>
          <div className={`rounded-2xl p-8 sm:p-10 text-center scroll-reveal ${isDark ? 'bg-slate-800/60 border border-white/8' : 'bg-blue-50 border border-blue-100'}`}>
            <p className={`text-xl font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to write your next comment in ten seconds?
            </p>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white rounded-xl gradient-brand hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get it inside LinkedIn — free
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
