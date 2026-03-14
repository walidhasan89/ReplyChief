interface Props {
  isDark: boolean;
}

const LAST_UPDATED = 'January 1, 2026';

export default function PrivacyPolicy({ isDark }: Props) {
  const prose = isDark ? 'text-slate-300' : 'text-slate-600';
  const heading = isDark ? 'text-white' : 'text-slate-900';
  const subheading = isDark ? 'text-slate-100' : 'text-slate-800';
  const card = isDark
    ? 'bg-slate-900 border border-white/8'
    : 'bg-white border border-slate-200 shadow-sm';

  return (
    <main className={`pt-28 pb-24 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}
          >
            Legal
          </div>
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${heading}`}>
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className={`text-sm ${prose}`}>Last updated: {LAST_UPDATED}</p>
        </div>

        <div className={`rounded-2xl p-8 sm:p-10 space-y-10 ${card}`}>
          {/* Intro */}
          <div>
            <p className={`text-base leading-relaxed ${prose}`}>
              ReplyChief ("we", "our", or "us"), a product of{' '}
              <a href="https://inoviqa.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Inoviqa
              </a>
              , is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard information when you use the ReplyChief Chrome extension and website
              at{' '}
              <a href="https://replychief.com" className="text-blue-500 hover:underline">
                replychief.com
              </a>
              . By using ReplyChief, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect only the minimum information necessary to provide the ReplyChief service:

**Account Information:** When you create an account, we collect your email address and payment information (processed securely via Stripe — we never store card numbers).

**Usage Data:** We collect anonymized, aggregated usage statistics to improve the extension (e.g., how many comments are generated, which tones are most popular). This data cannot be linked to individual users.

**Extension Activity:** ReplyChief reads the content of LinkedIn posts you interact with solely to generate AI comment suggestions. This content is processed in real-time and is never stored on our servers. We do not log, save, or share individual post content.

**Device Information:** We may collect browser type and version for compatibility purposes only.`,
            },
            {
              title: '2. Information We Do NOT Collect',
              content: `We are privacy-first by design:

• We do NOT collect or store your LinkedIn credentials or password.
• We do NOT harvest, sell, or share your personal data with third parties for advertising.
• We do NOT track your browsing activity outside of LinkedIn.
• We do NOT store the content of LinkedIn posts you view.
• We do NOT perform any automated actions on your LinkedIn account.`,
            },
            {
              title: '3. How We Use Information',
              content: `Information we collect is used solely to:

• Provide and improve the ReplyChief service
• Process payments and manage subscriptions
• Send service-related emails (account confirmation, billing receipts)
• Diagnose technical issues and improve extension performance
• Comply with legal obligations

We do not use your information for advertising, profiling, or data brokerage.`,
            },
            {
              title: '4. Data Storage & Security',
              content: `Your data is stored on secure servers with encryption at rest and in transit. We use industry-standard security measures including TLS/SSL encryption and access controls.

LinkedIn post content processed by ReplyChief is handled entirely in-session and is never written to our databases. Payment data is processed by Stripe — a PCI-DSS Level 1 certified payment processor. We never have access to your full card details.`,
            },
            {
              title: '5. Third-Party Services',
              content: `ReplyChief integrates with the following third-party services:

• **Stripe** (stripe.com) — Payment processing. Stripe's Privacy Policy governs data they collect.
• **Chrome Web Store** (chrome.google.com/webstore) — Extension distribution and updates.
• **OpenAI / AI providers** — AI comment generation. Data is sent in anonymized, non-identifiable format. No user profile data is transmitted.

We encourage you to review the privacy policies of these services.`,
            },
            {
              title: '6. LinkedIn Compliance',
              content: `ReplyChief is designed to be fully compliant with LinkedIn's User Agreement (linkedin.com/legal/user-agreement). The extension:

• Never auto-posts or performs automated actions on LinkedIn
• Never accesses your LinkedIn login credentials
• Operates purely as a writing assistant — you always review and post comments manually
• Does not scrape or store LinkedIn data

Since launch, ReplyChief has had zero reported LinkedIn account restrictions.`,
            },
            {
              title: '7. Cookies',
              content: `The ReplyChief website uses minimal cookies for:

• Session management (keeping you logged in)
• Preference storage (e.g., theme preferences)
• Analytics (anonymized, aggregated visitor data)

We do not use third-party advertising cookies. You can disable cookies in your browser settings, though this may affect functionality.`,
            },
            {
              title: '8. Your Rights (GDPR / CCPA)',
              content: `Depending on your location, you may have the right to:

• **Access** the personal data we hold about you
• **Correct** inaccurate personal data
• **Delete** your personal data ("right to be forgotten")
• **Port** your data to another service
• **Object** to certain types of data processing

To exercise any of these rights, email us at support@replychief.com. We will respond within 30 days.`,
            },
            {
              title: '9. Data Retention',
              content: `We retain your account data for as long as your account is active. If you delete your account, we will erase your personal data within 30 days, except where we are required by law to retain it (e.g., billing records for 7 years in some jurisdictions).`,
            },
            {
              title: '10. Children\'s Privacy',
              content: `ReplyChief is not directed to children under 16. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
            },
            {
              title: '11. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify registered users of material changes via email. Continued use of ReplyChief after changes constitutes your acceptance of the updated policy.`,
            },
            {
              title: '12. Contact Us',
              content: `If you have questions about this Privacy Policy or how we handle your data:

**Email:** support@replychief.com
**Address:** 375/12 Mirpur, Dhaka, Bangladesh
**Company:** Inoviqa (inoviqa.com)`,
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className={`text-xl font-bold mb-3 ${subheading}`}>{section.title}</h2>
              <div className={`text-sm leading-relaxed whitespace-pre-line ${prose}`}>
                {section.content.split('\n').map((line, j) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={j} className={`font-semibold ${subheading} mb-1`}>
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  // Handle inline bold
                  const parts = line.split(/(\*\*[^*]+\*\*)/g);
                  if (parts.length > 1) {
                    return (
                      <p key={j} className="mb-1.5">
                        {parts.map((part, k) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={k} className={subheading}>
                                {part.replace(/\*\*/g, '')}
                              </strong>
                            );
                          }
                          return <span key={k}>{part}</span>;
                        })}
                      </p>
                    );
                  }
                  return line ? (
                    <p key={j} className="mb-1.5">
                      {line}
                    </p>
                  ) : (
                    <br key={j} />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
