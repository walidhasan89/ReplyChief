import { useEffect, useState } from 'react';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig';

interface Props { isDark: boolean }

export default function SuccessPage({ isDark }: Props) {
  const [step, setStep] = useState(0);
  const [confetti, setConfetti] = useState<Particle[]>([]);

  // Stagger the step cards in
  useEffect(() => {
    const timers = [0, 350, 650, 950].map((delay, i) =>
      setTimeout(() => setStep(i + 1), delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Confetti particles
  useEffect(() => {
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#1d4ed8', '#a5f3fc', '#fbbf24', '#34d399'];
    const particles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      speed: 1.5 + Math.random() * 2,
      drift: (Math.random() - 0.5) * 2,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }));
    setConfetti(particles);
  }, []);

  const bg = isDark
    ? 'bg-slate-950 text-white'
    : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-slate-900';

  const card = isDark
    ? 'bg-slate-900/80 border border-white/10'
    : 'bg-white border border-slate-200/80 shadow-xl shadow-blue-100/50';

  const stepCard = isDark
    ? 'bg-slate-800/60 border border-white/8 hover:border-blue-500/40'
    : 'bg-blue-50/60 border border-blue-100 hover:border-blue-300';

  const muted = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`min-h-screen flex flex-col ${bg} relative overflow-hidden`}>
      {/* Confetti */}
      <ConfettiLayer particles={confetti} />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* Nav bar */}
      <nav className={`relative z-10 flex items-center justify-between px-6 py-4 ${isDark ? 'border-b border-white/8' : 'border-b border-slate-200/60'}`}>
        <a
          href="/"
          onClick={e => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
          className="flex items-center gap-2.5 group"
        >
          <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-8 w-8 rounded-lg object-contain group-hover:scale-105 transition-transform duration-200" />
          <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Reply<span className="text-gradient">Chief</span>
          </span>
        </a>
        <span className={`text-sm font-medium ${muted}`}>Payment Successful</span>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl mx-auto">

          {/* Hero card */}
          <div className={`rounded-3xl p-8 sm:p-12 text-center mb-8 ${card} backdrop-blur-xl success-card-enter`}>
            {/* Animated checkmark */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full gradient-brand flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-glow success-icon-enter">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="success-check" />
                  </svg>
                </div>
                {/* Ring pulse */}
                <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" style={{ animationDuration: '2s' }} />
              </div>
            </div>

            {/* Emoji + heading */}
            <div className="text-5xl mb-4 success-text-enter" style={{ animationDelay: '0.15s' }}>🎉</div>
            <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 success-text-enter ${isDark ? 'text-white' : 'text-slate-900'}`} style={{ animationDelay: '0.2s' }}>
              Welcome to ReplyChief Pro!
            </h1>
            <p className={`text-lg sm:text-xl font-medium mb-2 success-text-enter ${isDark ? 'text-blue-400' : 'text-blue-600'}`} style={{ animationDelay: '0.3s' }}>
              Your payment was successful.
            </p>
            <p className={`text-base success-text-enter ${muted}`} style={{ animationDelay: '0.4s' }}>
              🔐 License has been activated for your account.
            </p>

            {/* Divider */}
            <div className={`my-8 h-px ${isDark ? 'bg-white/10' : 'bg-slate-200'} success-text-enter`} style={{ animationDelay: '0.45s' }} />

            {/* What's Next heading */}
            <h2 className={`text-xl font-bold mb-6 success-text-enter ${isDark ? 'text-white' : 'text-slate-900'}`} style={{ animationDelay: '0.5s' }}>
              What's Next?
            </h2>

            {/* Steps */}
            <div className="space-y-4 text-left">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-500 ${stepCard} ${
                    step > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-lg">{s.icon}</span>
                      <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {s.title}
                      </p>
                    </div>
                    <p className={`text-sm leading-relaxed ${muted}`}>{s.desc}</p>
                  </div>
                  {/* Check indicator */}
                  {step > i && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Open Extension CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 success-text-enter" style={{ animationDelay: '0.7s' }}>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white rounded-2xl gradient-brand hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 btn-glow"
              >
                <ChromeIcon className="w-5 h-5" />
                Open Extension
              </a>
              <a
                href="/"
                onClick={e => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/8'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                ← Back to Home
              </a>
            </div>
          </div>

          {/* Need Help */}
          <div className={`rounded-2xl p-6 text-center ${isDark ? 'bg-slate-900/50 border border-white/8' : 'bg-white border border-slate-200/60 shadow-md'} success-text-enter`} style={{ animationDelay: '0.8s' }}>
            <p className={`text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              🙋 Need Help?
            </p>
            <p className={`text-sm ${muted}`}>
              Our support team is here for you.{' '}
              <a
                href="mailto:support@replychief.com"
                className="text-blue-500 hover:text-blue-400 font-medium underline underline-offset-2 transition-colors"
              >
                support@replychief.com
              </a>
            </p>
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/8' : 'border-slate-100'} flex items-center justify-center gap-6 text-xs ${muted}`}>
              <span>✅ License Active</span>
              <span>🔒 Secure Payment</span>
              <span>7-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    icon: '🧩',
    title: 'Open the ReplyChief extension',
    desc: 'Click the extension icon in your Chrome toolbar — it\'s already installed and ready.',
  },
  {
    icon: '✉️',
    title: 'Login with your email',
    desc: 'Use the same email address you used during payment to activate your Pro license.',
  },
  {
    icon: '🚀',
    title: 'Your Pro features are ready!',
    desc: 'Enjoy unlimited AI comments, all 12 professional tones, and advanced personalization.',
  },
];

// ── Confetti ──────────────────────────────────────────────────────────────────
interface Particle {
  id: number; x: number; y: number; size: number; color: string;
  rotation: number; speed: number; drift: number; shape: string;
}

function ConfettiLayer({ particles }: { particles: Particle[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute confetti-fall"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.shape === 'rect' ? p.size * 0.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animationDuration: `${2.5 + p.speed}s`,
            animationDelay: `${p.id * 0.03}s`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
    </svg>
  );
}
