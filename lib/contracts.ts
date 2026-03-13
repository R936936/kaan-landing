export const CONTRACTS = {
  kaanToken:  '0xad484Fb877D9BcE406e70749b6811C7083eB0e21' as `0x${string}`,
  mockUsdc:   '0x015fe75Eccd238CAE6193B0019AC6C4c9Ece97E7' as `0x${string}`,
  yieldVault: '0x3De4E01dE7068648d52862b79FAAE4Ab297E4B25' as `0x${string}`,
  kaanSale:   '0xEAF3CB9f8C05e8bcd67F73b88Ad6d390d0A0526b' as `0x${string}`,
}

export const KAAN_SALE_ABI = [
  {
    name: 'buyKaan',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ name: 'kaanAmount', type: 'uint256' }],
    outputs: [],
  },
  {
    name: 'saleActive',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'bool' }],
  },
  {
    name: 'totalSold',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'MAX_FOR_SALE',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
] as const

export const ERC20_ABI = [
  {
    name: 'approve',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
] as const
