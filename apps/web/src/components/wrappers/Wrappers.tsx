'use client'
import React from 'react'
// import RainbowKitWrapper from './RainbowKitWrapper'
import UILayout from './UILayout'
import MuiThemeWrapper from './MuiThemeWrapper'
import ThemeProvider from './TailwindThemeProvider'
import { Toaster } from 'react-hot-toast'
import OnchainKitProviderWrapper from './OnchainKitProviderWrapper'

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <MuiThemeWrapper>
        <OnchainKitProviderWrapper>
          {/* <RainbowKitWrapper> */}
          <Toaster position={'top-center'} />
          <UILayout>{children}</UILayout>
          {/* </RainbowKitWrapper> */}
        </OnchainKitProviderWrapper>
      </MuiThemeWrapper>
    </ThemeProvider>
  )
}

export default Wrappers
