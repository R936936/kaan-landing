'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { tr, type Lang } from '@/lib/translations'

interface FAQProps {
  lang: Lang
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={clsx(
      'rounded-xl border transition-all duration-300',
      open ? 'border-gold/25 bg-navy-800/60' : 'border-white/8 bg-navy-800/30 hover:border-white/15'
    )}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-sm sm:text-base leading-snug">{question}</span>
        <span className={clsx(
          'shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300',
          open ? 'border-gold bg-gold/10 text-gold rotate-45' : 'border-white/20 text-white/40'
        )}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={clsx(
        'overflow-hidden transition-all duration-300',
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <p className="px-6 pb-5 text-white/55 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ lang }: FAQProps) {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-navy relative">
      <div className="section-divider mb-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            {tr.faq.badge[lang]}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {tr.faq.title[lang]}
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {tr.faq.items.map((faq) => (
            <FAQItem
              key={faq.question.en}
              question={faq.question[lang]}
              answer={faq.answer[lang]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
