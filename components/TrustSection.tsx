'use client'

import { tr, type Lang } from '@/lib/translations'

interface TrustSectionProps {
  lang: Lang
}

export default function TrustSection({ lang }: TrustSectionProps) {
  return (
    <section id="trust" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-800/40 to-navy pointer-events-none" />
      <div className="absolute inset-0 bg-mayan-pattern opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            {tr.trust.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {tr.trust.title[lang]}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {tr.trust.subtitle[lang]}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.trust.pillars.map((pillar) => (
            <div
              key={pillar.title.en}
              className="card-glow rounded-2xl bg-navy-800 border border-white/8 p-6 flex flex-col gap-4
                hover:border-white/15 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                  ${pillar.accent === 'gold' ? 'bg-gold/10 border border-gold/20' : 'bg-tulum/10 border border-tulum/20'}`}
              >
                {pillar.icon}
              </div>
              <h3 className={`font-bold text-base ${pillar.accent === 'gold' ? 'text-gold' : 'text-tulum'}`}>
                {pillar.title[lang]}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{pillar.description[lang]}</p>
            </div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <div className="mt-16 rounded-2xl border border-white/8 bg-navy-800/50 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-white/8 md:divide-y-0">
            {tr.trust.statsRow.map((item) => (
              <div key={item.label.en} className="px-8 py-6 flex flex-col items-center text-center gap-1">
                <span className="text-white font-bold text-lg">{item.value[lang]}</span>
                <span className="text-white/40 text-xs">{item.label[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
