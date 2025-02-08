'use client'

import { base } from 'wagmi/chains'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import React, { ReactNode } from 'react'

const OnchainKitProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
    >
      {children}
    </OnchainKitProvider>
  )
}

export default OnchainKitProviderWrapper
