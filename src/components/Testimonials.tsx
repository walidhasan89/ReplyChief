interface Props {
  isDark: boolean;
}

const testimonials = [
  {
    stars: 5,
    quote: "ReplyChief cut my LinkedIn engagement time from 2 hours to 15 minutes per day. The comments it generates are scarily good — most of the time I post them with just a small tweak.",
    name: "Sarah M.",
    title: "SaaS Founder",
    avatar: "SM",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    stars: 5,
    quote: "As a non-native English speaker, I always struggled to write comments that sounded natural. ReplyChief changed that overnight. Now I engage confidently in English and Spanish.",
    name: "Carlos R.",
    title: "Sales Manager",
    avatar: "CR",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    stars: 5,
    quote: "I recommend ReplyChief to every client in my personal branding program. It removes the biggest barrier to LinkedIn consistency — actually knowing what to say.",
    name: "Jennifer L.",
    title: "Personal Brand Coach",
    avatar: "JL",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    stars: 5,
    quote: "Our marketing team of 8 uses ReplyChief with custom voice profiles. Consistent brand voice across all our commenters, and we've seen a 3x increase in profile visits.",
    name: "David K.",
    title: "Marketing Director",
    avatar: "DK",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Testimonials({ isDark }: Props) {
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5 ${isDark ? 'bg-blue-500' : 'bg-blue-300'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400' : 'bg-yellow-50 border border-yellow-200 text-yellow-700'}`}>
            ⭐ Reviews
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            What Our{' '}
            <span className="text-gradient">Users Say</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Trusted by 2,000+ professionals worldwide. Here's what they're saying.
          </p>

          {/* Stars row */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className={`ml-2 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>4.9/5 from 2,000+ users</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`scroll-reveal rounded-2xl p-7 border transition-all duration-300 card-3d ${
                isDark
                  ? 'bg-slate-800/60 border-white/8 hover:border-white/20'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-100'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <span className={`text-3xl font-serif leading-none mr-1 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>"</span>
                {t.quote}
                <span className={`text-3xl font-serif leading-none ml-1 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 bg-gradient-to-br ${t.gradient}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</p>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t.title}</p>
                </div>
                <div className="ml-auto">
                  <svg className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
