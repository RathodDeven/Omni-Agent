'use client'
import React from 'react'
// import RainbowKitWrapper from './RainbowKitWrapper'
import UILayout from './UILayout'
import MuiThemeWrapper from './MuiThemeWrapper'
import ThemeProvider from './TailwindThemeProvider'
import { Toaster } from 'react-hot-toast'
import OnchainKitProviderWrapper from './OnchainKitProviderWrapper'
import ApolloWrapper from './ApolloWrapper'
import WagmiWrapper from './WagmiWrapper'
import WaitForMountWrapper from './WaitForMountWrapper'

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiWrapper>
      <OnchainKitProviderWrapper>
        <ThemeProvider>
          <MuiThemeWrapper>
            <ApolloWrapper>
              <WaitForMountWrapper>
                {/* <RainbowKitWrapper> */}
                <Toaster position={'top-center'} />
                <UILayout>{children}</UILayout>
                {/* </RainbowKitWrapper> */}
              </WaitForMountWrapper>
            </ApolloWrapper>
          </MuiThemeWrapper>
        </ThemeProvider>
      </OnchainKitProviderWrapper>
    </WagmiWrapper>
  )
}

export default Wrappers
