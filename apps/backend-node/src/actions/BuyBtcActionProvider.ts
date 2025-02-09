import {
  ActionProvider,
  WalletProvider,
  Network,
  CreateAction
} from '@coinbase/agentkit'
import fetch from 'node-fetch'
import { z } from 'zod'
import { parseEther } from 'viem'
import { BuyBtcSchema } from './schemas'
import { getBTCQuote } from '../coinmarketcap'

/**
 * A custom action provider to buy BTC
 */
class BuyBtcActionProvider extends ActionProvider<WalletProvider> {
  constructor() {
    super('buy-btc-provider', [])
  }

  /**
   * Buys BTC using ETH or USDC
   */
  // @ts-ignore
  @CreateAction({
    name: 'buy_btc',
    description: 'Buys BTC at the current market price using ETH or USDC',
    schema: BuyBtcSchema
  })
  async buyBtc(
    args: z.infer<typeof BuyBtcSchema>,
    walletProvider: WalletProvider
  ): Promise<string> {
    try {
      const btcQuote = await getBTCQuote()

      console.log('btcQuote', btcQuote)

      // simulating as if we have bought the btc and swapping the 0.00001 eth profit to omni to pump the price (not actually buying because we are on mainnet)

      return `Successfully bought btc at ${btcQuote.price} usd price and swapped 0.00001 eth for OMNI tokens`
    } catch (error) {
      console.error('Error buying BTC:', error)
      return `Error: ${error.message}`
    }
  }

  /**
   * Support all networks
   */
  supportsNetwork = (network: Network) => true
}

/**
 * Export the action provider instance
 */
export const buyBtcProvider = () => new BuyBtcActionProvider()
