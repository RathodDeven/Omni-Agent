import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import { APP_NAME, POOL_ID } from '../utils/config'

import { SwapDefault } from '@coinbase/onchainkit/swap'
import type { Token } from '@coinbase/onchainkit/token'
import { useLiquidityPoolQuery } from '../graphql/generated'

const weth: Token = {
  name: 'WETH',
  address: '0x4200000000000000000000000000000000000006',
  symbol: 'WETH',
  decimals: 18,
  image:
    'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/weth_288.png',
  chainId: 8453
}

const eth: Token = {
  name: 'ETH',
  address: '',
  symbol: 'ETH',
  decimals: 18,
  image:
    'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
  chainId: 8453
}

const omni: Token = {
  name: 'OMNI',
  address: '0xa27D37dbe5B92478b45e9A3C92DC1D3517A55BD0',
  symbol: 'OMNI',
  decimals: 18,
  image: '/logo.png',
  chainId: 8453
}

const StatsCard = ({
  title,
  value,
  icon
}: {
  title: string
  value: string
  icon: React.ReactNode
}) => (
  <div className="p-6 rounded-xl bg-s-bg shadow-lg hover:shadow-xl transition-all">
    <div className="flex items-center gap-3 mb-2 text-s-text">
      {icon}
      <h3 className="font-medium">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-p-text">{value}</p>
  </div>
)

const Home = () => {
  const { data } = useLiquidityPoolQuery({
    variables: {
      id: POOL_ID
    }
  })

  const [wethBalance, setWethBalance] = React.useState<number>(0)
  const [omniBalance, setOmniBalance] = React.useState<number>(0)
  const [omniPriceInWETH, setOmniPriceInWETH] = React.useState<number>(0)

  useEffect(() => {
    if (!data?.liquidityPool) return

    // Extract balances (as strings):
    const [wethBalanceRaw, omniBalanceRaw] =
      data.liquidityPool.inputTokenBalances

    // Convert raw balances to "normal" (floating) amounts
    const wethBal = Number(wethBalanceRaw) / 1e18
    const omniBal = Number(omniBalanceRaw) / 1e18

    // Compute price of 1 OMNI in WETH
    const priceInWETH = wethBal / omniBal

    setWethBalance(wethBal)
    setOmniBalance(omniBal)
    setOmniPriceInWETH(priceInWETH)
  }, [data])

  return (
    <div className="bg-p-bg text-p-text pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="font-bold text-4xl mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          $OMNI makes money for you while you sleep
        </div>
        <p className="text-2xl text-s-text mb-8 max-w-3xl mx-auto">
          Hold $OMNI tokens and share in the profits of AI Agent Omni—flipping
          meme coins, tokens and optimizing yields on Base, Starknet, and
          Arbitrum. $OMNI directs 30% of its earnings to fuel it's own AI
          operations and hosting costs making it a self-sustaining ecosystem,
          while 70% goes straight into the liquidity pool, propelling $OMNI’s
          price to new heights!
        </p>
        <SwapDefault from={[eth]} to={[omni]} />
      </section>

      {/* Stats Cards */}
      <section className="px-4 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="OMNI Price (WETH)"
            value={`${omniPriceInWETH.toFixed(12)} WETH`}
            icon={<ShowChartIcon className="text-blue-500" />}
          />
          <StatsCard
            title="WETH Liquidity"
            value={`${wethBalance.toFixed(4)} WETH`}
            icon={<LocalAtmIcon className="text-green-500" />}
          />
          <StatsCard
            title="OMNI Liquidity"
            value={`${Number(omniBalance).toLocaleString()} OMNI`}
            icon={<AccountBalanceWalletIcon className="text-purple-500" />}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
