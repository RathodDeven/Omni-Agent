'use client'
import React from 'react'
// import RainbowKitWrapper from './RainbowKitWrapper'
import UILayout from './UILayout'
import MuiThemeWrapper from './MuiThemeWrapper'
import ThemeProvider from './TailwindThemeProvider'
import { Toaster } from 'react-hot-toast'
import OnchainKitProviderWrapper from './OnchainKitProviderWrapper'
import ApolloWrapper from './ApolloWrapper'

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <OnchainKitProviderWrapper>
      <ThemeProvider>
        <MuiThemeWrapper>
          <ApolloWrapper>
            {/* <RainbowKitWrapper> */}
            <Toaster position={'top-center'} />
            <UILayout>{children}</UILayout>
            {/* </RainbowKitWrapper> */}
          </ApolloWrapper>
        </MuiThemeWrapper>
      </ThemeProvider>
    </OnchainKitProviderWrapper>
  )
}

export default Wrappers
