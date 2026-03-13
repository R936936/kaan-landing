'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import KaanSection from '@/components/KaanSection'
import InvestmentModels from '@/components/InvestmentModels'
import HowItWorks from '@/components/HowItWorks'
import PropertiesSection from '@/components/PropertiesSection'
import PortfolioCTA from '@/components/PortfolioCTA'
import TrustSection from '@/components/TrustSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import EmailModal from '@/components/EmailModal'
import BuyKaanModal from '@/components/BuyKaanModal'
import type { Lang } from '@/lib/translations'

export type ModalContext = 'kaan' | 'portfolio' | 'general'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContext, setModalContext] = useState<ModalContext>('general')
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)

  const openModal = (context: ModalContext = 'general') => {
    setModalContext(context)
    setIsModalOpen(true)
  }

  return (
    <>
      <Navbar onGetAccess={() => openModal('general')} lang={lang} setLang={setLang} />
      <main>
        <Hero onBuyKaan={() => setIsBuyModalOpen(true)} lang={lang} />
        <KaanSection onBuyKaan={() => setIsBuyModalOpen(true)} lang={lang} />
        <InvestmentModels lang={lang} onJoinWaitlist={() => openModal('portfolio')} />
        <HowItWorks lang={lang} />
        <PropertiesSection lang={lang} />
        <PortfolioCTA onJoinWaitlist={() => openModal('portfolio')} lang={lang} />
        <TrustSection lang={lang} />
        <FAQ lang={lang} />
      </main>
      <Footer onGetAccess={() => openModal('general')} lang={lang} />
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        context={modalContext}
        lang={lang}
      />
      <BuyKaanModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
      />
    </>
  )
}
