'use client'

import { tr, type Lang } from '@/lib/translations'

interface KaanSectionProps {
  onBuyKaan: () => void
  lang: Lang
}

export default function KaanSection({ onBuyKaan, lang }: KaanSectionProps) {
  return (
    <section id="kaan" className="py-24 lg:py-32 bg-navy relative">
      <div className="section-divider mb-0" />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            {tr.kaan.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-gold-gradient">KAAN</span>{' '}
            <span className="text-white">{tr.kaan.title2[lang]}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {tr.kaan.subtitle[lang]}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tr.kaan.features.map((f) => (
            <div
              key={f.title.en}
              className="card-glow rounded-2xl bg-navy-800 border border-white/8 p-8 flex flex-col gap-4 transition-all duration-300 hover:border-gold/20 group"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                {f.title[lang]}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.description[lang]}</p>
            </div>
          ))}
        </div>

        {/* Tokenomics */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {tr.kaan.tokenomics[lang]}
          </h3>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {tr.kaan.tokenomicsRows.map((row, i) => (
              <div
                key={row.label.en}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? 'bg-navy-800/60' : 'bg-navy-800/30'
                } hover:bg-navy-600/40 transition-colors`}
              >
                <span className="text-white/60 text-sm font-medium">{row.label[lang]}</span>
                <span className="text-white font-semibold text-sm sm:text-base">{row.value}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button
              onClick={onBuyKaan}
              className="px-10 py-4 rounded-xl bg-gold text-navy font-bold text-base tracking-wide
                hover:bg-gold-light active:bg-gold-dark transition-all duration-200
                shadow-xl shadow-gold/20 hover:shadow-gold/35 hover:-translate-y-0.5 animate-pulse-gold"
            >
              {tr.kaan.cta[lang]}
            </button>
            <p className="text-white/30 text-xs mt-3">
              {tr.kaan.disclaimer[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
