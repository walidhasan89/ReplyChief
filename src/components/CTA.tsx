interface Props {
  isDark: boolean;
}

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig";

export default function CTA({ isDark }: Props) {
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-5" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full blur-3xl opacity-15 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
        {/* Animated grid */}
        <div
          className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(59,130,246,1)' : 'rgba(59,130,246,1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(59,130,246,1)' : 'rgba(59,130,246,1)'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 scroll-reveal ${isDark ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-50 border border-blue-200 text-blue-600'}`}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          🟢 Install ReplyChief Free in 30 Seconds
        </div>

        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight scroll-reveal ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Start Writing Better LinkedIn<br />
          <span className="text-gradient">Comments Today</span>
        </h2>

        <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 scroll-reveal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Join 2,000+ professionals who use ReplyChief as their{' '}
          <a href="https://replychief.com/free-linkedin-comment-generator" className="text-blue-400 hover:underline">
            free LinkedIn comment generator
          </a>{' '}
          to save time, boost engagement, and grow their presence — without the burnout.
        </p>

        {/* Checkmarks */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 scroll-reveal">
          {[
            'No credit card required',
            'No LinkedIn password needed',
            'Works instantly after install',
            'Free plan available forever',
          ].map((item) => (
            <span key={item} className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <div className="w-4 h-4 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              {item}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="scroll-reveal">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 text-lg font-bold text-white rounded-2xl gradient-brand hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/>
            </svg>
            Add ReplyChief to Chrome — Free
          </a>
        </div>

        {/* Social proof below CTA */}
        <div className="mt-8 scroll-reveal">
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Available on Chrome Web Store ·{' '}
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>{' '}
            Rated by 2,000+ users · Works in 30+ languages
          </p>
        </div>
      </div>
    </section>
  );
}
