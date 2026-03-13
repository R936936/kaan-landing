'use client'

import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { tr, type Lang } from '@/lib/translations'
import type { ModalContext } from '@/app/page'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
  context: ModalContext
  lang: Lang
}

function saveEmail(email: string, context: ModalContext) {
  try {
    const existing = JSON.parse(localStorage.getItem('kaan_waitlist') ?? '[]') as { email: string; context: string; ts: string }[]
    const already = existing.some((e) => e.email.toLowerCase() === email.toLowerCase())
    if (!already) {
      existing.push({ email, context, ts: new Date().toISOString() })
      localStorage.setItem('kaan_waitlist', JSON.stringify(existing))
    }
  } catch {
    // localStorage unavailable
  }
}

export default function EmailModal({ isOpen, onClose, context, lang }: EmailModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const copy = tr.modal[context]

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setStatus('idle')
      setEmail('')
      setErrorMsg('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setErrorMsg(tr.modal.errorMsg[lang])
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    saveEmail(email, context)
    setStatus('success')
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className={clsx(
          'relative w-full max-w-md rounded-2xl bg-navy-800 border border-white/12',
          'shadow-2xl shadow-black/60',
          'animate-slide-up',
          'overflow-hidden'
        )}
      >
        {/* Top gold accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center
            text-white/40 hover:text-white hover:border-white/30 transition-all"
          aria-label="Close modal"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="text-6xl mb-4">🌴</div>
              <h3 className="text-2xl font-bold text-white mb-2">{tr.modal.success.title[lang]}</h3>
              <p className="text-white/55 text-sm mb-6">{tr.modal.success.subtitle[lang]}</p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-gold text-navy font-bold text-sm hover:bg-gold-light transition-colors"
              >
                {tr.modal.success.button[lang]}
              </button>
            </div>
          ) : (
            <>
              <span className="inline-block text-xs font-semibold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-5">
                {copy.tag[lang]}
              </span>

              <h2 id="modal-title" className="text-2xl font-extrabold text-white mb-3">
                {copy.title[lang]}
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-7">{copy.subtitle[lang]}</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label htmlFor="modal-email" className="block text-white/60 text-xs font-medium mb-2 tracking-wide uppercase">
                    {tr.modal.emailLabel[lang]}
                  </label>
                  <input
                    ref={inputRef}
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setErrorMsg('')
                    }}
                    placeholder={tr.modal.emailPlaceholder[lang]}
                    className={clsx(
                      'w-full px-4 py-3.5 rounded-xl bg-navy border text-white placeholder-white/25 text-sm outline-none transition-all',
                      errorMsg
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/15 focus:border-gold/60 focus:ring-1 focus:ring-gold/20'
                    )}
                    disabled={status === 'loading'}
                    autoComplete="email"
                  />
                  {errorMsg && <p className="text-red-400 text-xs mt-2">{errorMsg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={clsx(
                    'w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200',
                    status === 'loading'
                      ? 'bg-gold/50 text-navy/50 cursor-not-allowed'
                      : 'bg-gold text-navy hover:bg-gold-light active:bg-gold-dark shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5'
                  )}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {tr.modal.loading[lang]}
                    </span>
                  ) : copy.button[lang]}
                </button>
              </form>

              <p className="text-white/25 text-xs text-center mt-5 leading-relaxed">
                {tr.modal.noSpam[lang]}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
