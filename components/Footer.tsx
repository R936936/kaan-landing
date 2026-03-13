'use client'

import { tr, type Lang } from '@/lib/translations'

interface FooterProps {
  onGetAccess: () => void
  lang: Lang
}

export default function Footer({ onGetAccess, lang }: FooterProps) {
  return (
    <footer className="bg-navy-800 border-t border-white/8">
      {/* Pre-footer CTA band */}
      <div className="border-b border-white/8 py-12 bg-gradient-to-r from-navy via-navy-600/30 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">{tr.footer.cta.title[lang]}</p>
            <p className="text-white/50 text-sm mt-1">{tr.footer.cta.subtitle[lang]}</p>
          </div>
          <button
            onClick={onGetAccess}
            className="shrink-0 px-8 py-3.5 rounded-xl bg-gold text-navy font-bold text-sm tracking-wide
              hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30"
          >
            {tr.footer.cta.button[lang]}
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-gold-gradient tracking-widest">KAAN</span>
              <span className="text-tulum text-base">⟨ψ⟩</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {tr.footer.description[lang]}
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">{tr.footer.tokensTitle[lang]}</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '#kaan', label: tr.footer.links.kaanToken[lang] },
                { href: '#properties', label: tr.footer.links.properties[lang] },
                { href: '#how-it-works', label: tr.footer.links.howItWorks[lang] },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">{tr.footer.companyTitle[lang]}</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '#faq', label: tr.footer.links.faq[lang] },
                { href: '#trust', label: tr.footer.links.about[lang] },
                { href: '#', label: tr.footer.links.contact[lang] },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">{tr.footer.legalTitle[lang]}</h4>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                { href: '#', label: tr.footer.links.privacy[lang] },
                { href: '#', label: tr.footer.links.terms[lang] },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-tulum hover:border-tulum/30 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.01-1.67 7.87c-.12.55-.45.68-.91.42l-2.52-1.86-1.22 1.17c-.13.13-.25.25-.51.25l.18-2.57 4.65-4.2c.2-.18-.04-.28-.31-.1L8.12 14.74l-2.46-.77c-.54-.17-.55-.54.11-.8l9.61-3.71c.45-.17.84.1.69.54z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/8 pt-8">
          <p className="text-white/25 text-xs leading-relaxed max-w-4xl">
            ⚠️ <strong className="text-white/35">Disclaimer:</strong> {tr.footer.disclaimer[lang]}
          </p>
          <p className="text-white/20 text-xs mt-4">
            © {new Date().getFullYear()} KAAN. {tr.footer.copyright[lang]}
          </p>
        </div>
      </div>
    </footer>
  )
}
