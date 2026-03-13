'use client'

import { tr, type Lang } from '@/lib/translations'

interface HeroProps {
  onBuyKaan: () => void
  lang: Lang
}

export default function Hero({ onBuyKaan, lang }: HeroProps) {
  const stats = tr.hero.stats

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Mayan geometric background pattern */}
      <div className="absolute inset-0 bg-mayan-pattern opacity-60" />

      {/* Radial glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-tulum/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-tulum/4 blur-3xl pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Eyebrow tag */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {tr.hero.eyebrow[lang]}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none mb-6">
          <span className="text-white">{tr.hero.headline1[lang]}</span>
          <br />
          <span className="text-gold-gradient">{tr.hero.headline2[lang]}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg sm:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {tr.hero.subheadlinePre[lang]}{' '}
          <span className="text-white/80 font-medium">{tr.hero.subheadlineHighlight[lang]}</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onBuyKaan}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold text-navy font-bold text-base tracking-wide
              hover:bg-gold-light active:bg-gold-dark transition-all duration-200
              shadow-xl shadow-gold/25 hover:shadow-gold/40 hover:-translate-y-0.5
              animate-pulse-gold"
          >
            {tr.hero.buyKaan[lang]}
          </button>
          <a
            href="#kaan"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-base
              hover:border-gold/40 hover:bg-white/10 hover:-translate-y-0.5
              transition-all duration-200 text-center backdrop-blur-sm"
          >
            {tr.hero.learnMore[lang]}
          </a>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label.en}
                className="bg-navy-800/80 backdrop-blur-sm px-6 py-5 flex flex-col items-center text-center gap-1 hover:bg-navy-600/60 transition-colors"
              >
                <span className="text-gold font-bold text-xl sm:text-2xl tracking-tight">{stat.value}</span>
                <span className="text-white/50 text-xs sm:text-sm font-medium">{stat.label[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 animate-bounce opacity-40">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-gold">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
