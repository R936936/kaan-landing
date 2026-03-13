'use client'

interface QGoldSectionProps {
  onJoinWaitlist: () => void
}

const comparisonRows = [
  {
    feature: 'Supply Cap',
    bitcoin: '21 Million',
    qgold: '21 Million',
    bitcoinIcon: '✅',
    qgoldIcon: '✅',
    highlight: false,
  },
  {
    feature: 'Quantum Security',
    bitcoin: 'Vulnerable (ECDSA)',
    qgold: 'Protected (PQC)',
    bitcoinIcon: '❌',
    qgoldIcon: '✅',
    highlight: true,
  },
  {
    feature: 'Energy Model',
    bitcoin: 'Proof of Work',
    qgold: 'Proof of Real Asset',
    bitcoinIcon: '❌',
    qgoldIcon: '✅',
    highlight: true,
  },
  {
    feature: 'Native Yield',
    bitcoin: 'None',
    qgold: '3–21% APY (Staking)',
    bitcoinIcon: '❌',
    qgoldIcon: '✅',
    highlight: true,
  },
  {
    feature: 'Asset Backing',
    bitcoin: 'None',
    qgold: 'Real-world assets',
    bitcoinIcon: '❌',
    qgoldIcon: '✅',
    highlight: false,
  },
]

export default function QGoldSection({ onJoinWaitlist }: QGoldSectionProps) {
  return (
    <section id="qgold" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-tulum/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coming soon badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tulum/40 bg-tulum/10 text-tulum text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-tulum animate-pulse" />
            Coming Soon
          </span>
        </div>

        {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-tulum-gradient">QGOLD</span>{' '}
            <span className="text-white">— Quantum Gold</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            What Bitcoin would be if invented today.{' '}
            <span className="text-white/85 font-medium">Post-quantum secure. Mathematically scarce.</span>
          </p>
        </div>

        {/* Tagline sub-points */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['21M Supply', 'Post-Quantum Cryptography', 'Staking Yield 3–21%', '18+ Patent Applications'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-gold/8 border border-gold/20 text-gold/80 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-navy-700/80 px-4 sm:px-6 py-4 border-b border-white/8">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">Feature</span>
              <span className="text-center text-white/50 text-xs font-semibold uppercase tracking-widest">Bitcoin</span>
              <span className="text-center text-tulum text-xs font-semibold uppercase tracking-widest">QGOLD</span>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-4 sm:px-6 py-4 items-center gap-2
                  ${i % 2 === 0 ? 'bg-navy-800/50' : 'bg-navy-800/20'}
                  ${row.highlight ? 'border-l-2 border-l-gold/30' : ''}
                  hover:bg-navy-600/30 transition-colors`}
              >
                <span className="text-white/70 text-sm font-medium">{row.feature}</span>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-sm">{row.bitcoinIcon}</span>
                  <span className="text-white/40 text-xs hidden sm:block">{row.bitcoin}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-sm">{row.qgoldIcon}</span>
                  <span className="text-tulum-light text-xs font-medium hidden sm:block">{row.qgold}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/25 text-xs mt-3">
            * QGOLD specifications subject to change prior to launch
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onJoinWaitlist}
            className="px-10 py-4 rounded-xl bg-tulum text-white font-bold text-base tracking-wide
              hover:bg-tulum-light active:bg-tulum-dark transition-all duration-200
              shadow-xl shadow-tulum/20 hover:shadow-tulum/35 hover:-translate-y-0.5"
          >
            Join QGOLD Waitlist
          </button>
          <p className="text-white/30 text-xs mt-3">Early supporters get priority allocation</p>
        </div>
      </div>
    </section>
  )
}
