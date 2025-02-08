'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import React, { ReactNode } from 'react'
import { coinbaseWallet } from 'wagmi/connectors'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { APP_NAME } from '../../utils/config'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

const defaultChains = [base]

const defaultTransports = {
  [base.id]: http()
}

const config = getDefaultConfig({
  appName: APP_NAME,
  projectId: String(process.env.NEXT_PUBLIC_RAINBOW_KIT_PROJECT_ID),
  // @ts-ignore
  chains: defaultChains,
  transports: defaultTransports,
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit'
    })
  ],
  ssr: true
})

// Create a client
const queryClient = new QueryClient()

const OnchainKitProviderWrapper = (props: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
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
