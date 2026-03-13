'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { tr, type Lang } from '@/lib/translations'

interface NavbarProps {
  onGetAccess: () => void
  lang: Lang
  setLang: (l: Lang) => void
}

export default function Navbar({ onGetAccess, lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#kaan', label: tr.nav.kaan[lang] },
    { href: '#investment-models', label: tr.nav.howToInvest[lang] },
    { href: '#properties', label: tr.nav.properties[lang] },
    { href: '#how-it-works', label: tr.nav.howItWorks[lang] },
    { href: '#faq', label: tr.nav.faq[lang] },
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold text-gold-gradient tracking-widest group-hover:opacity-90 transition-opacity">
            KAAN
          </span>
          <span className="text-tulum text-lg select-none" title="Quantum symbol" aria-label="Quantum symbol">
            ⟨ψ⟩
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-white/15 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={clsx(
                'px-3 py-1.5 transition-colors duration-200',
                lang === 'en'
                  ? 'bg-gold text-navy'
                  : 'text-white/50 hover:text-white'
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={clsx(
                'px-3 py-1.5 transition-colors duration-200',
                lang === 'es'
                  ? 'bg-gold text-navy'
                  : 'text-white/50 hover:text-white'
              )}
            >
              ES
            </button>
          </div>
          <button
            onClick={onGetAccess}
            className="px-5 py-2.5 rounded-lg bg-gold text-navy font-semibold text-sm tracking-wide
              hover:bg-gold-light active:bg-gold-dark transition-colors duration-200
              shadow-lg shadow-gold/20 animate-pulse-gold"
          >
            {tr.nav.getEarlyAccess[lang]}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={clsx('w-6 h-0.5 bg-white transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-navy/98 backdrop-blur-md border-b border-gold/10',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-white/80 hover:text-gold transition-colors py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Mobile lang toggle */}
          <li className="flex items-center gap-2 pt-1">
            <span className="text-white/40 text-xs">Language:</span>
            <div className="flex items-center rounded-lg border border-white/15 overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={clsx(
                  'px-3 py-1.5 transition-colors duration-200',
                  lang === 'en' ? 'bg-gold text-navy' : 'text-white/50'
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={clsx(
                  'px-3 py-1.5 transition-colors duration-200',
                  lang === 'es' ? 'bg-gold text-navy' : 'text-white/50'
                )}
              >
                ES
              </button>
            </div>
          </li>
          <li className="pt-2">
            <button
              onClick={() => { setMenuOpen(false); onGetAccess() }}
              className="w-full px-5 py-3 rounded-lg bg-gold text-navy font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              {tr.nav.getEarlyAccess[lang]}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
