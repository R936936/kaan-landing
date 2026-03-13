'use client'

import { tr, type Lang } from '@/lib/translations'

interface PropertiesSectionProps {
  lang: Lang
}

export default function PropertiesSection({ lang }: PropertiesSectionProps) {
  const { properties } = tr.properties

  return (
    <section id="properties" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 bg-mayan-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            {tr.properties.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-white">{tr.properties.title[lang]}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {tr.properties.subtitle[lang]}
          </p>
        </div>

        {/* Property cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((prop) => {
            const isActive = prop.status === 'active'
            return (
              <div
                key={prop.number}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 group
                  ${isActive
                    ? 'border-gold/30 bg-navy-800 hover:border-gold/50 hover:-translate-y-1 shadow-xl shadow-gold/5'
                    : 'border-white/8 bg-navy-800/50'
                  }`}
              >
                {/* Property image placeholder */}
                <div
                  className={`relative h-48 flex items-center justify-center
                    ${isActive
                      ? 'bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800'
                      : 'bg-navy-800/60'
                    }`}
                >
                  <span className="text-6xl">{isActive ? '🏖️' : '🔒'}</span>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {tr.properties.active[lang]}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/40 text-xs font-semibold">
                        {tr.properties.comingSoon[lang]}
                      </span>
                    )}
                  </div>

                  {/* Property number */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold tracking-widest px-2 py-1 rounded
                      ${isActive ? 'text-gold bg-gold/10' : 'text-white/30 bg-white/5'}`}>
                      {tr.properties.propertyNumber[lang]} {prop.number}
                    </span>
                  </div>

                  {/* Blur overlay for coming soon */}
                  {!isActive && (
                    <div className="absolute inset-0 backdrop-blur-sm bg-navy/40" />
                  )}
                </div>

                {/* Card content */}
                <div className={`p-6 ${!isActive ? 'opacity-50' : ''}`}>
                  <h3 className={`text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {prop.name[lang]}
                  </h3>
                  <p className={`text-sm mb-4 ${isActive ? 'text-tulum' : 'text-white/30'}`}>
                    {prop.location[lang]}
                  </p>

                  <div className={`text-sm mb-5 flex items-center gap-2 ${isActive ? 'text-white/60' : 'text-white/25'}`}>
                    <span>🏠</span>
                    <span>{prop.details[lang]}</span>
                  </div>

                  {isActive ? (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/8">
                      <div>
                        <p className="text-white/40 text-xs mb-1">Value</p>
                        <p className="text-gold font-bold text-sm">{prop.value}</p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1">Yield</p>
                        <p className="text-green-400 font-bold text-sm">{prop.apy[lang]}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-white/25 text-xs text-center">{tr.properties.comingSoon[lang]}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
