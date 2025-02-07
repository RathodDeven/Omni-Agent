'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import React, { ReactNode } from 'react'
import { coinbaseWallet } from 'wagmi/connectors'

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit'
    })
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http()
  }
})

const OnchainKitProviderWrapper = (props: { children: ReactNode }) => {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={baseSepolia} // add baseSepolia for testing
    >
      <WagmiProvider config={wagmiConfig}>{props.children}</WagmiProvider>
    </OnchainKitProvider>
  )
}

export default OnchainKitProviderWrapper
