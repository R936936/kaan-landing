'use client'

import { useState } from 'react'
import { createPublicClient, createWalletClient, custom, parseEther, formatEther } from 'viem'
import { sepolia } from 'viem/chains'
import { CONTRACTS, KAAN_SALE_ABI, ERC20_ABI } from '@/lib/contracts'

interface BuyKaanModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BuyKaanModal({ isOpen, onClose }: BuyKaanModalProps) {
  const [amount, setAmount] = useState('100')
  const [status, setStatus] = useState<'idle' | 'approving' | 'buying' | 'success' | 'error'>('idle')
  const [txHash, setTxHash] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  if (!isOpen) return null

  const usdcCost = Number(amount) || 0

  async function handleBuy() {
    try {
      setStatus('approving')
      setErrorMsg('')

      if (!(window as unknown as { ethereum?: unknown }).ethereum) {
        setErrorMsg('MetaMask no encontrado. Por favor instala MetaMask.')
        setStatus('error')
        return
      }

      const walletClient = createWalletClient({
        chain: sepolia,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transport: custom((window as any).ethereum),
      })

      const [address] = await walletClient.requestAddresses()
      const kaanAmount = parseEther(amount)
      const usdcAmount = BigInt(usdcCost) * BigInt(1e6) // USDC has 6 decimals

      // Step 1: Approve USDC
      const approveHash = await walletClient.writeContract({
        address: CONTRACTS.mockUsdc,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [CONTRACTS.kaanSale, usdcAmount],
        account: address,
      })

      // Wait for approve
      const publicClient = createPublicClient({ chain: sepolia, transport: custom((window as any).ethereum) })
      await publicClient.waitForTransactionReceipt({ hash: approveHash })

      // Step 2: Buy KAAN
      setStatus('buying')
      const buyHash = await walletClient.writeContract({
        address: CONTRACTS.kaanSale,
        abi: KAAN_SALE_ABI,
        functionName: 'buyKaan',
        args: [kaanAmount],
        account: address,
      })

      await publicClient.waitForTransactionReceipt({ hash: buyHash })
      setTxHash(buyHash)
      setStatus('success')
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Error desconocido'
      setErrorMsg(msg.includes('user rejected') ? 'Transacción cancelada.' : msg.slice(0, 120))
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#0d1117] border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Buy KAAN</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white text-2xl">✕</button>
        </div>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-green-400 text-xl font-bold mb-2">¡Compra exitosa!</p>
            <p className="text-white/70 text-sm mb-4">Recibiste {amount} KAAN en tu wallet</p>
            <a
              href={`https://sepolia.etherscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 text-sm underline"
            >
              Ver en Etherscan →
            </a>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white/5 rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm text-white/60 mb-1">
                <span>Red</span>
                <span className="text-amber-400">Sepolia Testnet</span>
              </div>
              <div className="flex justify-between text-sm text-white/60 mb-1">
                <span>Precio</span>
                <span className="text-white">1 USDC = 1 KAAN</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Disponibles</span>
                <span className="text-white">90,000 KAAN</span>
              </div>
            </div>

            <label className="block text-white/70 text-sm mb-2">Cantidad de KAAN</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-lg mb-2 focus:outline-none focus:border-amber-400"
              placeholder="100"
              min="1"
            />
            <p className="text-white/50 text-sm mb-6">Costo: {usdcCost} USDC (testnet)</p>

            {errorMsg && (
              <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-3 mb-4 text-red-300 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              onClick={handleBuy}
              disabled={status !== 'idle' && status !== 'error'}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl text-lg transition-all"
            >
              {status === 'approving' && '⏳ Aprobando USDC...'}
              {status === 'buying' && '⏳ Comprando KAAN...'}
              {(status === 'idle' || status === 'error') && `Comprar ${amount || 0} KAAN`}
            </button>

            <p className="text-white/30 text-xs text-center mt-4">
              Necesitas MetaMask + USDC de testnet para comprar
            </p>
          </>
        )}
      </div>
    </div>
  )
}
