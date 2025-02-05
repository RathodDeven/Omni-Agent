import React from 'react'
import { Button } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import { APP_NAME } from '../utils/config'

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
  return (
    <div className="min-h-screen bg-p-bg text-p-text">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:max-w-6xl mx-auto text-center">
        <div className="font-bold text-4xl mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          $OMNI makes money for you while you sleep
        </div>
        <p className="text-2xl text-s-text mb-8 max-w-2xl mx-auto">
          Hold $OMNI tokens and share in the profits as our AI agents trade meme
          coins and flip tokens. 30% of profits sustain AI operations and
          hosting, while 70% are added to the liquidity pool, driving the token
          price higher.
        </p>
        <Button
          variant="contained"
          size="large"
          startIcon={<LocalAtmIcon />}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Buy Now
        </Button>
      </section>

      {/* Stats Cards */}
      <section className="px-4 max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="OMNI Price"
            value="$1.234"
            icon={<ShowChartIcon className="text-blue-500" />}
          />
          <StatsCard
            title="ROI (Last 30d)"
            value="+15.7%"
            icon={<TrendingUpIcon className="text-green-500" />}
          />
          <StatsCard
            title="Active Trades"
            value="142"
            icon={<SwapHorizIcon className="text-purple-500" />}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
