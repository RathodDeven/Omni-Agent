import React, { useEffect } from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import { eth, omni, POOL_ID } from '../../utils/config'

import { SwapDefault } from '@coinbase/onchainkit/swap'
import { useLiquidityPoolQuery } from '../../graphql/generated'

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

  const subtitle = `Hold $OMNI tokens and share in the profits of AI Agent Omni—flipping 
          meme coins, tokens and optimizing yields on Base, Starknet, and 
          Arbitrum. $OMNI automatically buys back tokens from the pool and 
          provides liquidity to the OMNI/ETH pair, continuously increasing 
          its price through strategic trading and yield optimization.`

  return (
    <div className="bg-p-bg text-p-text pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="font-bold text-4xl mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          $OMNI makes money for you while you sleep
        </div>
        <p className="text-2xl text-s-text mb-8 max-w-3xl mx-auto">
          {subtitle}
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

        {/* Uniswap Pool Link */}
        <div className="text-center mt-6">
          <a
            href="https://app.uniswap.org/explore/pools/base/0xaaE056f7b0e618b18ED07FD6322FB68d1B2D976a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <SwapHorizIcon />
            <span>View OMNI-WETH Pool on Uniswap</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
