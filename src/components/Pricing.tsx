import { useState } from 'react';

interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

export default function Pricing({ isDark }: Props) {
  const [isYearly, setIsYearly] = useState(false);

  // Lifetime plan scarcity data
  const LIFETIME_CLAIMED = 33;
  const LIFETIME_TOTAL_SLOTS = 100;
  const LIFETIME_REMAINING = LIFETIME_TOTAL_SLOTS - LIFETIME_CLAIMED;
  const claimedPercent = (LIFETIME_CLAIMED / LIFETIME_TOTAL_SLOTS) * 100;

  const plans = [
    {
      name: 'Free',
      emoji: '🆓',
      badge: null,
      price: { monthly: '$0', yearly: '$0' },
      period: 'forever',
      description: 'Perfect for trying out ReplyChief',
      cta: 'Get Started Free',
      ctaHref: CHROME_STORE_URL,
      highlighted: false,
      features: [
        '10 comments per day',
        '5 basic tones',
        '1 device',
        'Basic support',
        'Free forever',
      ],
    },
    {
      name: 'Pro',
      emoji: '⚡',
      badge: 'Most Popular',
      price: { monthly: '$5.99', yearly: '$4.92' },
      yearlyTotal: '$59/year',
      period: isYearly ? '/month, billed yearly' : '/month',
      description: 'For active LinkedIn professionals',
      cta: isYearly ? 'Get Pro Yearly' : 'Get Pro Monthly',
      ctaHref: CHROME_STORE_URL,
      highlighted: true,
      features: [
        'Unlimited comments',
        'All 12 professional tones',
        '2 devices',
        'Priority support',
        'Advanced personalization',
        'Custom voice profiles',
      ],
    },
    {
      name: 'Lifetime',
      emoji: '💎',
      badge: 'Best Value',
      price: { monthly: '$149', yearly: '$149' },
      period: 'one-time payment',
      description: 'Pay once, use forever',
      cta: 'Get Lifetime Access',
      ctaHref: CHROME_STORE_URL,
      highlighted: false,
      isLifetime: true,
      features: [
        'Unlimited comments forever',
        'All current & future features',
        '5 devices',
        'Lifetime priority support',
        'All future updates included',
        'VIP early access to new features',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-[0.08] ${isDark ? 'bg-blue-600' : 'bg-blue-200'}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
          >
            Pricing
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Simple,{' '}
            <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p
            className={`text-lg max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Start free, upgrade when you're ready. All plans include a 7-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div
            className={`inline-flex items-center gap-1 p-1 rounded-xl border ${isDark ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !isYearly
                  ? 'gradient-brand text-white shadow-lg shadow-blue-500/30'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isYearly
                  ? 'gradient-brand text-white shadow-lg shadow-blue-500/30'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Yearly
              <span
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${isYearly ? 'bg-white/20 text-white' : isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}
              >
                Save 18%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`scroll-reveal relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'gradient-brand p-px shadow-2xl shadow-blue-500/30 scale-[1.02]'
                  : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`rounded-2xl p-8 h-full flex flex-col card-shine ${
                  plan.highlighted
                    ? isDark
                      ? 'bg-slate-900'
                      : 'bg-white'
                    : isDark
                    ? 'bg-slate-900 border border-white/10 hover:border-white/20'
                    : 'bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg'
                } transition-all duration-300`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{plan.emoji}</span>
                      <h3
                        className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                      >
                        {plan.name}
                      </h3>
                    </div>
                    {plan.badge && (
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          plan.badge === 'Most Popular'
                            ? 'gradient-brand text-white'
                            : isDark
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20'
                            : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.isLifetime ? (
                    /* Lifetime special pricing */
                    <div>
                      <div className="flex items-end gap-2 mb-1">
                        <span
                          className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          $149
                        </span>
                        <span className={`text-sm pb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          one-time
                        </span>
                        <span
                          className={`text-sm pb-1.5 line-through ${isDark ? 'text-slate-600' : 'text-slate-400'}`}
                        >
                          $299
                        </span>
                      </div>
                      <p className={`text-xs font-semibold text-orange-500`}>
                        ⚡ First 100 slots at $149 — then $299 forever
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-end gap-1">
                        <span
                          className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}
                        >
                          {isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        {plan.name !== 'Free' && (
                          <span
                            className={`text-sm pb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                          >
                            {plan.period}
                          </span>
                        )}
                      </div>
                      {plan.name === 'Free' && (
                        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          forever
                        </span>
                      )}
                      {isYearly && plan.yearlyTotal && (
                        <p
                          className={`text-sm mt-1 font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}
                        >
                          {plan.yearlyTotal} — Save 18%
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Scarcity bar for Lifetime plan */}
                {plan.isLifetime && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                      >
                        🔥 {LIFETIME_CLAIMED} of {LIFETIME_TOTAL_SLOTS} slots claimed
                      </span>
                      <span className="text-xs font-bold text-orange-500">
                        Only {LIFETIME_REMAINING} left!
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
                        style={{ width: `${claimedPercent}%` }}
                      />
                    </div>
                    <p
                      className={`text-xs mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                    >
                      After {LIFETIME_TOTAL_SLOTS} slots, price increases to $299 permanently.
                    </p>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 px-6 text-sm font-semibold rounded-xl text-center transition-all duration-200 ${
                    plan.highlighted
                      ? 'gradient-brand text-white hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5'
                      : plan.isLifetime
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5'
                      : isDark
                      ? 'bg-white/8 text-white border border-white/15 hover:bg-white/15 hover:-translate-y-0.5'
                      : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5'
                  }`}
                >
                  {plan.cta}
                  {plan.isLifetime && (
                    <span className="ml-1.5 text-xs opacity-80">— Lock in $149</span>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="mt-10 text-center scroll-reveal">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${isDark ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-white text-slate-600 shadow-sm'}`}
          >
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <span className="text-sm font-medium">
              7-day money-back guarantee on all paid plans — no questions asked. Payments secured by{' '}
              <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                Stripe
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
