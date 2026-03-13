import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAAN — Tokenized Real Estate · Riviera Maya',
  description:
    'KAAN tokenizes luxury properties in Tulum and the Riviera Maya. Earn monthly USDC yield from real rental income. Property #001: Amira District, Tulum.',
  keywords: ['KAAN token', 'Tulum real estate', 'yield token', 'USDC yield', 'Riviera Maya', 'tokenized real estate', 'DeFi'],
  openGraph: {
    title: 'KAAN — Earn Riviera Maya. From Your Wallet.',
    description: 'Real property. Real yield. Real blockchain.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  )
}
