interface Props {
  isDark: boolean;
}

const LAST_UPDATED = 'January 1, 2026';

export default function Disclaimer({ isDark }: Props) {
  const prose = isDark ? 'text-slate-300' : 'text-slate-600';
  const heading = isDark ? 'text-white' : 'text-slate-900';
  const subheading = isDark ? 'text-slate-100' : 'text-slate-800';
  const card = isDark
    ? 'bg-slate-900 border border-white/8'
    : 'bg-white border border-slate-200 shadow-sm';

  const sections = [
    {
      title: '1. General Disclaimer',
      content: `The information provided by ReplyChief (operated by Inoviqa) on this website and through the ReplyChief Chrome extension is for general informational and productivity purposes only. While we strive to maintain accurate, current, and useful content and services, we make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, completeness, or suitability of any information or functionality provided.

Your use of ReplyChief is entirely at your own risk.`,
    },
    {
      title: '2. AI-Generated Content Disclaimer',
      content: `ReplyChief uses artificial intelligence to generate LinkedIn comment suggestions. Please be aware that:

• AI-generated content may not always be accurate, appropriate, contextually perfect, or reflective of your personal views.
• You are solely responsible for reviewing, editing, and deciding whether to post any AI-generated content.
• We strongly recommend reviewing all AI-generated suggestions before posting to ensure they align with your intended message, professional standards, and LinkedIn community guidelines.
• ReplyChief does not guarantee that AI-generated comments will result in engagement, follower growth, business opportunities, or any specific outcome.

Always exercise your own professional judgment when using AI-assisted writing tools.`,
    },
    {
      title: '3. LinkedIn & Third-Party Platform Disclaimer',
      content: `ReplyChief is an independent product and is not affiliated with, endorsed by, sponsored by, or officially connected to LinkedIn Corporation or Microsoft Corporation in any way.

LinkedIn's platform, policies, and Terms of Service are subject to change at any time and without notice. While ReplyChief is designed to function within LinkedIn's guidelines at the time of writing, we cannot guarantee continued compliance if LinkedIn changes its policies or platform behavior.

We are not responsible for any changes LinkedIn makes to its platform, API, or interface that may affect ReplyChief's functionality.

References to LinkedIn's User Agreement or Help Center (linkedin.com/help) are provided for informational purposes only.`,
    },
    {
      title: '4. Chrome Extension Disclaimer',
      content: `ReplyChief is distributed through the Chrome Web Store (chrome.google.com/webstore), governed by Google's Developer Program Policies. We make no representations that ReplyChief will be continuously available on the Chrome Web Store or that it will remain compatible with all future versions of Chrome or other Chromium-based browsers.

For information about Chrome extensions, you may refer to Google's Chrome Extension documentation at developer.chrome.com/docs/extensions.`,
    },
    {
      title: '5. Results Disclaimer',
      content: `Any testimonials, case studies, statistics, or example results referenced on this website (such as "10+ hours saved per week," "2,000+ users," or "3x increase in profile visits") represent individual experiences and are not guarantees of typical or future results.

Your results will vary depending on your industry, use case, LinkedIn activity, audience, content quality, and many other factors outside our control. We do not guarantee any specific outcome from using ReplyChief.`,
    },
    {
      title: '6. Financial & Business Disclaimer',
      content: `ReplyChief is a productivity tool, not a financial, legal, or business advisory service. Nothing on this website or within the extension constitutes financial, legal, investment, or business advice.

Any business decisions made based on ReplyChief's output or this website's content are made at your own risk.`,
    },
    {
      title: '7. External Links Disclaimer',
      content: `This website and extension may contain links to third-party websites, including LinkedIn, Stripe, Google's Chrome Web Store, and others. These links are provided for your convenience and informational purposes only.

We have no control over the content, privacy practices, or availability of third-party websites. Inclusion of any link does not imply endorsement, approval, or responsibility for the linked site or its content.`,
    },
    {
      title: '8. Availability & Uptime',
      content: `We strive to maintain ReplyChief's availability at all times; however, we do not guarantee uninterrupted access to the service. Planned or unplanned maintenance, technical issues, or circumstances beyond our control may cause temporary service interruptions.

We are not liable for any losses or damages resulting from service interruptions or downtime.`,
    },
    {
      title: '9. Changes to This Disclaimer',
      content: `We reserve the right to modify this Disclaimer at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of ReplyChief after changes constitutes your acceptance of the updated Disclaimer.`,
    },
    {
      title: '10. Contact Us',
      content: `If you have questions or concerns about this Disclaimer, please contact us:

Email: support@replychief.com
Address: 375/12 Mirpur, Dhaka, Bangladesh
Company: Inoviqa — inoviqa.com`,
    },
  ];

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
            <span className="text-gradient">Disclaimer</span>
          </h1>
          <p className={`text-sm ${prose}`}>Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Important notice box */}
        <div
          className={`mb-8 p-5 rounded-2xl border flex gap-4 ${isDark ? 'bg-amber-500/8 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}
        >
          <svg
            className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
            <strong>Important:</strong> ReplyChief is an AI writing assistant tool. Always review
            AI-generated content before posting. You are solely responsible for the content you post
            on LinkedIn and any other platform.
          </p>
        </div>

        <div className={`rounded-2xl p-8 sm:p-10 space-y-10 ${card}`}>
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className={`text-xl font-bold mb-3 ${subheading}`}>{section.title}</h2>
              <div className={`text-sm leading-relaxed ${prose}`}>
                {section.content.split('\n').map((line, j) => {
                  const parts = line.split(/(\*\*[^*]+\*\*)/g);
                  if (parts.length > 1) {
                    return (
                      <p key={j} className="mb-1.5">
                        {parts.map((part, k) =>
                          part.startsWith('**') && part.endsWith('**') ? (
                            <strong key={k} className={subheading}>
                              {part.replace(/\*\*/g, '')}
                            </strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
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
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
