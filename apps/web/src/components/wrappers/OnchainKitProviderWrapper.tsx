'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import React, { ReactNode } from 'react'
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

// Create a client
const queryClient = new QueryClient()

const OnchainKitProviderWrapper = (props: { children: ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base} // add baseSepolia for testing
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default OnchainKitProviderWrapper
