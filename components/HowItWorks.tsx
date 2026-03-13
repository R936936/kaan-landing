'use client'

import { tr, type Lang } from '@/lib/translations'

interface HowItWorksProps {
  lang: Lang
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-800/50 to-navy pointer-events-none" />
      <div className="absolute inset-0 bg-mayan-pattern opacity-40 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-tulum/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-tulum/30 bg-tulum/5 text-tulum text-xs font-semibold tracking-widest uppercase mb-4">
            {tr.howItWorks.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {tr.howItWorks.title[lang]}
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            {tr.howItWorks.subtitle[lang]}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30 z-0" />

          {tr.howItWorks.steps.map((step, i) => (
            <div key={step.title.en} className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 mb-6 w-20 h-20 rounded-full flex items-center justify-center
                bg-navy border-2 border-gold/40 group-hover:border-gold transition-colors duration-300
                shadow-lg shadow-gold/10 group-hover:shadow-gold/20">
                <span className="text-3xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-200">
                {step.title[lang]}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">{step.description[lang]}</p>
              <span className="text-tulum text-xs font-medium px-3 py-1 rounded-full bg-tulum/10 border border-tulum/20">
                {step.detail[lang]}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-navy-800 border border-white/8">
            <span className="text-2xl">🔒</span>
            <span className="text-white/60 text-sm">{tr.howItWorks.auditNote[lang]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
