'use client'

import { tr, type Lang } from '@/lib/translations'

interface InvestmentModelsProps {
  lang: Lang
  onJoinWaitlist: () => void
}

export default function InvestmentModels({ lang, onJoinWaitlist }: InvestmentModelsProps) {
  const s = tr.investmentModels

  const categories = [
    {
      data: s.yield,
      accentBorder: 'border-gold/40',
      accentBg: 'bg-gold/8',
      accentText: 'text-gold',
      badgeBg: 'bg-gold/15 border-gold/30 text-gold',
      stepNumBg: 'bg-gold text-navy',
      metricColor: 'text-gold',
      glowClass: 'shadow-gold/10',
      tagBg: 'bg-gold/10 border-gold/20 text-gold',
      ctaClass: 'bg-gold hover:bg-gold-light text-navy shadow-gold/20',
      onCta: onJoinWaitlist,
    },
    {
      data: s.equity,
      accentBorder: 'border-tulum/40',
      accentBg: 'bg-tulum/8',
      accentText: 'text-tulum',
      badgeBg: 'bg-tulum/15 border-tulum/30 text-tulum',
      stepNumBg: 'bg-tulum text-navy',
      metricColor: 'text-tulum',
      glowClass: 'shadow-tulum/10',
      tagBg: 'bg-tulum/10 border-tulum/20 text-tulum',
      ctaClass: 'bg-tulum hover:bg-tulum-light text-navy shadow-tulum/20',
      onCta: onJoinWaitlist,
    },
  ]

  return (
    <section id="investment-models" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy to-navy-800 pointer-events-none" />
      <div className="absolute inset-0 bg-mayan-pattern opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-tulum/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            {s.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {s.title[lang]}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {s.subtitle[lang]}
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const d = cat.data
            return (
              <div
                key={idx}
                className={`relative rounded-2xl border ${cat.accentBorder} bg-navy-800 shadow-2xl ${cat.glowClass}
                  flex flex-col overflow-hidden hover:scale-[1.01] transition-transform duration-300`}
              >
                {/* Top accent strip */}
                <div className={`h-1 w-full ${idx === 0 ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light' : 'bg-gradient-to-r from-tulum-dark via-tulum to-tulum-light'}`} />

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Badge + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide ${cat.badgeBg}`}>
                      {d.badge[lang]}
                    </span>
                    <span className="text-4xl">{d.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-3xl font-extrabold ${cat.accentText} mb-1`}>
                    {d.title[lang]}
                  </h3>
                  <p className="text-white/60 text-sm mb-6">{d.subtitle[lang]}</p>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {d.description[lang]}
                  </p>

                  {/* How it works steps */}
                  <div className="mb-8">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                      {lang === 'en' ? 'How It Works' : 'Cómo Funciona'}
                    </p>
                    <div className="flex flex-col gap-3">
                      {d.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full ${cat.stepNumBg} text-xs font-bold flex items-center justify-center mt-0.5`}>
                            {i + 1}
                          </span>
                          <span className="text-white/65 text-sm leading-relaxed">{step[lang]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key metric */}
                  <div className={`rounded-xl border ${cat.accentBorder} ${cat.accentBg} px-6 py-4 mb-8`}>
                    <div className={`text-3xl font-extrabold ${cat.metricColor} mb-1`}>
                      {d.metric[lang]}
                    </div>
                    <div className="text-white/50 text-xs">{d.metricLabel[lang]}</div>
                  </div>

                  {/* Bottom row: tag + CTA */}
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${cat.tagBg}`}>
                      {d.tag[lang]}
                    </span>
                    <button
                      onClick={cat.onCta}
                      className={`px-5 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-colors duration-200 shadow-lg ${cat.ctaClass}`}
                    >
                      {d.cta[lang]}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs max-w-lg mx-auto">
            {lang === 'en'
              ? 'Both categories are powered by Ethereum smart contracts. All distributions are on-chain and auditable.'
              : 'Ambas categorías funcionan con contratos inteligentes de Ethereum. Todas las distribuciones son on-chain y auditables.'}
          </p>
        </div>
      </div>
    </section>
  )
}
