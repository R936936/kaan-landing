'use client'

import { useState } from 'react'
import { tr, type Lang } from '@/lib/translations'

interface PortfolioCTAProps {
  onJoinWaitlist: () => void
  lang: Lang
}

function saveEmail(email: string) {
  try {
    const existing = JSON.parse(localStorage.getItem('kaan_portfolio_waitlist') ?? '[]') as { email: string; ts: string }[]
    const already = existing.some((e) => e.email.toLowerCase() === email.toLowerCase())
    if (!already) {
      existing.push({ email, ts: new Date().toISOString() })
      localStorage.setItem('kaan_portfolio_waitlist', JSON.stringify(existing))
    }
  } catch {
    // localStorage unavailable
  }
}

export default function PortfolioCTA({ onJoinWaitlist, lang }: PortfolioCTAProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 700))
    saveEmail(email)
    setStatus('success')
  }

  return (
    <section id="portfolio-cta" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-tulum/4 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-mayan-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/8 text-gold text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {tr.portfolio.badge[lang]}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto">
          <span className="text-white">{tr.portfolio.title[lang]}</span>
        </h2>

        <p className="text-white/55 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {tr.portfolio.subtitle[lang]}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10 max-w-2xl mx-auto mb-14">
          {tr.portfolio.stats.map((stat) => (
            <div
              key={stat.label.en}
              className="bg-navy-800/80 backdrop-blur-sm px-4 py-5 flex flex-col items-center text-center gap-1"
            >
              <span className="text-gold font-bold text-2xl sm:text-3xl tracking-tight">{stat.value}</span>
              <span className="text-white/45 text-xs sm:text-sm font-medium">{stat.label[lang]}</span>
            </div>
          ))}
        </div>

        {/* Inline email form */}
        <div className="max-w-lg mx-auto">
          <p className="text-white/60 text-sm mb-4 font-medium">{tr.portfolio.emailLabel[lang]}</p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-green-500/10 border border-green-500/30">
              <span className="text-2xl">🌴</span>
              <p className="text-green-400 font-semibold text-sm">
                {lang === 'en' ? "You're on the list!" : '¡Estás en la lista!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                placeholder={tr.portfolio.emailPlaceholder[lang]}
                className={`flex-1 px-4 py-3.5 rounded-xl bg-navy-800 border text-white placeholder-white/25 text-sm outline-none transition-all
                  ${status === 'error'
                    ? 'border-red-500/60 focus:border-red-500'
                    : 'border-white/15 focus:border-gold/60 focus:ring-1 focus:ring-gold/20'
                  }`}
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 px-6 py-3.5 rounded-xl bg-gold text-navy font-bold text-sm tracking-wide
                  hover:bg-gold-light active:bg-gold-dark transition-all duration-200
                  shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? tr.modal.loading[lang]
                  : tr.portfolio.emailButton[lang]}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-xs mt-2 text-left">{tr.modal.errorMsg[lang]}</p>
          )}

          <p className="text-white/25 text-xs mt-4">{tr.portfolio.note[lang]}</p>
        </div>

        {/* Or use modal */}
        <div className="mt-8">
          <button
            onClick={onJoinWaitlist}
            className="text-white/40 text-sm hover:text-gold transition-colors underline underline-offset-4"
          >
            {lang === 'en' ? 'Or join via our full access form →' : 'O únete con nuestro formulario completo →'}
          </button>
        </div>
      </div>
    </section>
  )
}
