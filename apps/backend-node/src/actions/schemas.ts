import { z } from 'zod'

/**
 * Input schema for buying Bitcoin (BTC)
 */
export const BuyBtcSchema = z
  .object({
    amount: z
      .custom<bigint>()
      .describe('The amount of ETH or USDC to use for purchasing BTC'),
    fromAssetId: z
      .enum(['ETH', 'USDC'])
      .describe('The asset being spent to buy BTC'),
    exchange: z.string().describe('The exchange or DEX to use for the trade')
  })
  .strip()
  .describe('Schema for buying Bitcoin (BTC)')
