interface Props {
  isDark: boolean;
}

const features = [
  { label: 'Built for LinkedIn', replychief: true, chatgpt: false, engageAI: true, generic: 'partial' },
  { label: 'Chrome Extension', replychief: true, chatgpt: false, engageAI: true, generic: true },
  { label: 'Context-Aware AI', replychief: true, chatgpt: false, engageAI: 'partial', generic: 'partial' },
  { label: '12 Professional Tones', replychief: true, chatgpt: false, engageAI: 'partial', generic: 'partial' },
  { label: 'Custom Voice Profiles', replychief: true, chatgpt: false, engageAI: false, generic: false },
  { label: '30+ Languages', replychief: true, chatgpt: true, engageAI: 'partial', generic: 'partial' },
  { label: 'Privacy-First', replychief: true, chatgpt: 'partial', engageAI: 'partial', generic: 'partial' },
  { label: 'LinkedIn-Safe (No Auto-Post)', replychief: true, chatgpt: 'na', engageAI: 'partial', generic: 'partial' },
  { label: 'Free Plan', replychief: true, chatgpt: false, engageAI: true, generic: true },
  { label: 'Speed (In-Feed)', replychief: true, chatgpt: false, engageAI: true, generic: true },
  { label: 'Multi-Device Support', replychief: true, chatgpt: 'na', engageAI: 'partial', generic: 'partial' },
];

type CellValue = boolean | string;

function Cell({ value, isDark }: { value: CellValue; isDark: boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isDark ? 'bg-red-500/20' : 'bg-red-50'}`}>
          <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isDark ? 'bg-yellow-500/20' : 'bg-yellow-50'}`}>
          <span className="text-yellow-500 text-xs font-bold">~</span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>N/A</span>
    </div>
  );
}

export default function Comparison({ isDark }: Props) {
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}>
            Comparison
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why ReplyChief Wins{' '}
            <span className="text-gradient">Every Time</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Not all AI LinkedIn tools are created equal. Here's how we compare to the most common alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`scroll-reveal table-wrapper rounded-2xl border ${isDark ? 'border-white/[0.06]' : 'border-slate-200/70'} shadow-sm overflow-hidden`}>
          <table className={`w-full ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ minWidth: '700px' }}>
            <thead>
              <tr className={`border-b ${isDark ? 'border-white/[0.06]' : 'border-slate-100'}`}>
                <th className={`text-left p-5 text-sm font-semibold w-48 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Feature</th>
                {/* ReplyChief column - highlighted */}
                <th className="p-5 text-center w-36">
                  <div className={`rounded-xl px-4 py-3 ${isDark ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
                    <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="w-6 h-6 rounded mx-auto mb-1" />
                    <p className="text-gradient font-bold text-sm">ReplyChief</p>
                    <p className={`text-xs ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>Purpose-built</p>
                  </div>
                </th>
                <th className={`p-5 text-center w-36 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  ChatGPT<br /><span className={`text-xs font-normal ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Manual</span>
                </th>
                <th className={`p-5 text-center w-36 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Engage AI<br /><span className={`text-xs font-normal ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Competitor</span>
                </th>
                <th className={`p-5 text-center w-36 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Generic AI<br /><span className={`text-xs font-normal ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Extensions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b transition-colors duration-150 ${
                    isDark
                      ? 'border-white/[0.05] hover:bg-white/[0.02]'
                      : 'border-slate-100/80 hover:bg-slate-50/50'
                  }`}
                >
                  <td className={`p-4 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{row.label}</td>
                  <td className={`p-4 ${isDark ? 'bg-blue-500/3' : 'bg-blue-50/30'}`}>
                    <Cell value={row.replychief} isDark={isDark} />
                  </td>
                  <td className="p-4"><Cell value={row.chatgpt} isDark={isDark} /></td>
                  <td className="p-4"><Cell value={row.engageAI} isDark={isDark} /></td>
                  <td className="p-4"><Cell value={row.generic} isDark={isDark} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom note */}
        <div className={`mt-8 p-6 rounded-2xl border scroll-reveal ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <strong className={isDark ? 'text-white' : 'text-slate-900'}>Bottom line:</strong> ChatGPT is a general-purpose AI — you have to switch tabs, copy the post, write a prompt, then paste the result back. That friction adds up to 30–60 seconds per comment. ReplyChief eliminates it entirely as a purpose-built{' '}
            <a href="https://replychief.com/linkedin-comment-automation-tool/" className="text-blue-500 hover:underline">LinkedIn comment automation tool</a>{' '}
            — an in-feed <a href="https://replychief.com/ai-linkedin-comment-generator" className="text-blue-500 hover:underline">AI LinkedIn comment generator</a> that generates comments in <strong className="text-gradient">under 2 seconds</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
