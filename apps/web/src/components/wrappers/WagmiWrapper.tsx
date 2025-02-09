'use client'
import React, { ReactNode } from 'react'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit'
    })
  ],
  ssr: true,
  transports: {
    [base.id]: http()
  }
})

const queryClient = new QueryClient()

const WagmiWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default WagmiWrapper
