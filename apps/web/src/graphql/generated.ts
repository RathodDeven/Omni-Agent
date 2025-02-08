import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigDecimal: { input: any; output: any }
  BigInt: { input: any; output: any }
  Bytes: { input: any; output: any }
  Int8: { input: any; output: any }
  Timestamp: { input: any; output: any }
}

export type Account = {
  __typename?: 'Account'
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars['Int']['output']
  /**  Number of deposits this account made  */
  depositCount: Scalars['Int']['output']
  /**  All deposit events of this account  */
  deposits: Array<Deposit>
  /**  { Account address }  */
  id: Scalars['Bytes']['output']
  /**  Number of open positions this account has  */
  openPositionCount: Scalars['Int']['output']
  /**  Number of positions this account has  */
  positionCount: Scalars['Int']['output']
  /**  All positions that belong to this account  */
  positions: Array<Position>
  /**  Number of times this account has traded/swapped */
  swapCount: Scalars['Int']['output']
  /**  All swap events of this account  */
  swaps: Array<Swap>
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars['Int']['output']
  /**  All withdraw events of this account  */
  withdraws: Array<Withdraw>
}

export type AccountDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Deposit_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Deposit_Filter>
}

export type AccountPositionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Position_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Position_Filter>
}

export type AccountSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Swap_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Swap_Filter>
}

export type AccountWithdrawsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Withdraw_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Withdraw_Filter>
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  depositCount?: InputMaybe<Scalars['Int']['input']>
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>
  depositCount_not?: InputMaybe<Scalars['Int']['input']>
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  deposits_?: InputMaybe<Deposit_Filter>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  openPositionCount?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>
  positionCount_not?: InputMaybe<Scalars['Int']['input']>
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positions_?: InputMaybe<Position_Filter>
  swapCount?: InputMaybe<Scalars['Int']['input']>
  swapCount_gt?: InputMaybe<Scalars['Int']['input']>
  swapCount_gte?: InputMaybe<Scalars['Int']['input']>
  swapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  swapCount_lt?: InputMaybe<Scalars['Int']['input']>
  swapCount_lte?: InputMaybe<Scalars['Int']['input']>
  swapCount_not?: InputMaybe<Scalars['Int']['input']>
  swapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  swaps_?: InputMaybe<Swap_Filter>
  withdrawCount?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  withdraws_?: InputMaybe<Withdraw_Filter>
}

export enum Account_OrderBy {
  ClosedPositionCount = 'closedPositionCount',
  DepositCount = 'depositCount',
  Deposits = 'deposits',
  Id = 'id',
  OpenPositionCount = 'openPositionCount',
  PositionCount = 'positionCount',
  Positions = 'positions',
  SwapCount = 'swapCount',
  Swaps = 'swaps',
  WithdrawCount = 'withdrawCount',
  Withdraws = 'withdraws'
}

export type ActiveAccount = {
  __typename?: 'ActiveAccount'
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars['Bytes']['output']
}

export type ActiveAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<ActiveAccount_Filter>>>
}

export enum ActiveAccount_OrderBy {
  Id = 'id'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input']
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  number_gte?: InputMaybe<Scalars['Int']['input']>
}

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Deposit = {
  __typename?: 'Deposit'
  /**  Account that emitted this event  */
  account: Account
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
  amountUSD: Scalars['BigDecimal']['output']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output']
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Bytes']['output']
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
  inputTokens: Array<Token>
  /**  Amount of liquidity minted  */
  liquidity: Scalars['BigInt']['output']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output']
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output']
  /**  The pool involving this event  */
  pool: LiquidityPool
  /**  The user position changed by this event  */
  position?: Maybe<Position>
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars['BigInt']['output']>
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output']
}

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type DepositInputTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Token_Filter>
}

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  account?: InputMaybe<Scalars['String']['input']>
  account_?: InputMaybe<Account_Filter>
  account_contains?: InputMaybe<Scalars['String']['input']>
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_ends_with?: InputMaybe<Scalars['String']['input']>
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_gt?: InputMaybe<Scalars['String']['input']>
  account_gte?: InputMaybe<Scalars['String']['input']>
  account_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_lt?: InputMaybe<Scalars['String']['input']>
  account_lte?: InputMaybe<Scalars['String']['input']>
  account_not?: InputMaybe<Scalars['String']['input']>
  account_not_contains?: InputMaybe<Scalars['String']['input']>
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_starts_with?: InputMaybe<Scalars['String']['input']>
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hash?: InputMaybe<Scalars['Bytes']['input']>
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>
  hash_not?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_?: InputMaybe<Token_Filter>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
  liquidity?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  logIndex?: InputMaybe<Scalars['Int']['input']>
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>
  logIndex_not?: InputMaybe<Scalars['Int']['input']>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nonce?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  position_?: InputMaybe<Position_Filter>
  position_contains?: InputMaybe<Scalars['String']['input']>
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_ends_with?: InputMaybe<Scalars['String']['input']>
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_gt?: InputMaybe<Scalars['String']['input']>
  position_gte?: InputMaybe<Scalars['String']['input']>
  position_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_lt?: InputMaybe<Scalars['String']['input']>
  position_lte?: InputMaybe<Scalars['String']['input']>
  position_not?: InputMaybe<Scalars['String']['input']>
  position_not_contains?: InputMaybe<Scalars['String']['input']>
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_starts_with?: InputMaybe<Scalars['String']['input']>
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  tickLower?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum Deposit_OrderBy {
  Account = 'account',
  AccountClosedPositionCount = 'account__closedPositionCount',
  AccountDepositCount = 'account__depositCount',
  AccountId = 'account__id',
  AccountOpenPositionCount = 'account__openPositionCount',
  AccountPositionCount = 'account__positionCount',
  AccountSwapCount = 'account__swapCount',
  AccountWithdrawCount = 'account__withdrawCount',
  AmountUsd = 'amountUSD',
  BlockNumber = 'blockNumber',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Hash = 'hash',
  Id = 'id',
  InputTokenAmounts = 'inputTokenAmounts',
  InputTokens = 'inputTokens',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  Nonce = 'nonce',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Position = 'position',
  PositionBlockNumberClosed = 'position__blockNumberClosed',
  PositionBlockNumberOpened = 'position__blockNumberOpened',
  PositionCumulativeDepositUsd = 'position__cumulativeDepositUSD',
  PositionCumulativeWithdrawUsd = 'position__cumulativeWithdrawUSD',
  PositionDepositCount = 'position__depositCount',
  PositionHashClosed = 'position__hashClosed',
  PositionHashOpened = 'position__hashOpened',
  PositionId = 'position__id',
  PositionLiquidity = 'position__liquidity',
  PositionLiquidityTokenType = 'position__liquidityTokenType',
  PositionLiquidityUsd = 'position__liquidityUSD',
  PositionTimestampClosed = 'position__timestampClosed',
  PositionTimestampOpened = 'position__timestampOpened',
  PositionWithdrawCount = 'position__withdrawCount',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  ReserveAmounts = 'reserveAmounts',
  TickLower = 'tickLower',
  TickUpper = 'tickUpper',
  Timestamp = 'timestamp'
}

export type DexAmmProtocol = Protocol & {
  __typename?: 'DexAmmProtocol'
  /**  This is a boolean to indicate whether or not the pools have been instantiated the were initialized before Optimism regenesis  */
  _regenesis: Scalars['Boolean']['output']
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars['Int']['output']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  Number of cumulative liquidity providers  */
  cumulativeUniqueLPs: Scalars['Int']['output']
  /**  Number of cumulative traders  */
  cumulativeUniqueTraders: Scalars['Int']['output']
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output']
  /**  All historical volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']['output']
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['Bytes']['output']
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output']
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output']
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output']
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']['output']
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']['output']
  /**  The blockchain network this subgraph is indexing on  */
  network: Network
  /**  Total number of open positions  */
  openPositionCount: Scalars['Int']['output']
  /**  All pools that belong to this protocol  */
  pools: Array<LiquidityPool>
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']['output']>
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']['output']
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']['output']
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']['output']
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output']
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars['BigDecimal']['output']
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars['BigDecimal']['output']
}

export type DexAmmProtocolDailyUsageMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>
}

export type DexAmmProtocolFinancialMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FinancialsDailySnapshot_Filter>
}

export type DexAmmProtocolHourlyUsageMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
}

export type DexAmmProtocolPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPool_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LiquidityPool_Filter>
}

export type DexAmmProtocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  _regenesis?: InputMaybe<Scalars['Boolean']['input']>
  _regenesis_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  _regenesis_not?: InputMaybe<Scalars['Boolean']['input']>
  _regenesis_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  and?: InputMaybe<Array<InputMaybe<DexAmmProtocol_Filter>>>
  cumulativePositionCount?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativePositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativePositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeUniqueLPs?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueLPs_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueLPs_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueTraders?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueTraders_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueTraders_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_Filter>
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_Filter>
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  methodologyVersion?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_contains?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_gt?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_gte?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  methodologyVersion_lt?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_lte?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_gt?: InputMaybe<Scalars['String']['input']>
  name_gte?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_lt?: InputMaybe<Scalars['String']['input']>
  name_lte?: InputMaybe<Scalars['String']['input']>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  network?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  network_not?: InputMaybe<Network>
  network_not_in?: InputMaybe<Array<Network>>
  openPositionCount?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  or?: InputMaybe<Array<InputMaybe<DexAmmProtocol_Filter>>>
  pools_?: InputMaybe<LiquidityPool_Filter>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  schemaVersion?: InputMaybe<Scalars['String']['input']>
  schemaVersion_contains?: InputMaybe<Scalars['String']['input']>
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_gt?: InputMaybe<Scalars['String']['input']>
  schemaVersion_gte?: InputMaybe<Scalars['String']['input']>
  schemaVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  schemaVersion_lt?: InputMaybe<Scalars['String']['input']>
  schemaVersion_lte?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_gt?: InputMaybe<Scalars['String']['input']>
  slug_gte?: InputMaybe<Scalars['String']['input']>
  slug_in?: InputMaybe<Array<Scalars['String']['input']>>
  slug_lt?: InputMaybe<Scalars['String']['input']>
  slug_lte?: InputMaybe<Scalars['String']['input']>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_contains?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_gt?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_gte?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  subgraphVersion_lt?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_lte?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  type?: InputMaybe<ProtocolType>
  type_in?: InputMaybe<Array<ProtocolType>>
  type_not?: InputMaybe<ProtocolType>
  type_not_in?: InputMaybe<Array<ProtocolType>>
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
}

export enum DexAmmProtocol_OrderBy {
  Regenesis = '_regenesis',
  ActiveLiquidityUsd = 'activeLiquidityUSD',
  CumulativePositionCount = 'cumulativePositionCount',
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeUniqueLPs = 'cumulativeUniqueLPs',
  CumulativeUniqueTraders = 'cumulativeUniqueTraders',
  CumulativeUniqueUsers = 'cumulativeUniqueUsers',
  CumulativeVolumeUsd = 'cumulativeVolumeUSD',
  DailyUsageMetrics = 'dailyUsageMetrics',
  FinancialMetrics = 'financialMetrics',
  HourlyUsageMetrics = 'hourlyUsageMetrics',
  Id = 'id',
  LastSnapshotDayId = 'lastSnapshotDayID',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  MethodologyVersion = 'methodologyVersion',
  Name = 'name',
  Network = 'network',
  OpenPositionCount = 'openPositionCount',
  Pools = 'pools',
  ProtocolControlledValueUsd = 'protocolControlledValueUSD',
  SchemaVersion = 'schemaVersion',
  Slug = 'slug',
  SubgraphVersion = 'subgraphVersion',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalPoolCount = 'totalPoolCount',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  Type = 'type',
  UncollectedProtocolSideValueUsd = 'uncollectedProtocolSideValueUSD',
  UncollectedSupplySideValueUsd = 'uncollectedSupplySideValueUSD'
}

export type FinancialsDailySnapshot = {
  __typename?: 'FinancialsDailySnapshot'
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All historical trade volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']['output']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal']['output']
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output']
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['Bytes']['output']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']['output']>
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars['BigDecimal']['output']
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars['BigDecimal']['output']
}

export type FinancialsDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  day?: InputMaybe<Scalars['Int']['input']>
  day_gt?: InputMaybe<Scalars['Int']['input']>
  day_gte?: InputMaybe<Scalars['Int']['input']>
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day_lt?: InputMaybe<Scalars['Int']['input']>
  day_lte?: InputMaybe<Scalars['Int']['input']>
  day_not?: InputMaybe<Scalars['Int']['input']>
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_Filter>>>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
}

export enum FinancialsDailySnapshot_OrderBy {
  ActiveLiquidityUsd = 'activeLiquidityUSD',
  BlockNumber = 'blockNumber',
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeVolumeUsd = 'cumulativeVolumeUSD',
  DailyProtocolSideRevenueUsd = 'dailyProtocolSideRevenueUSD',
  DailySupplySideRevenueUsd = 'dailySupplySideRevenueUSD',
  DailyTotalRevenueUsd = 'dailyTotalRevenueUSD',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Day = 'day',
  Id = 'id',
  Protocol = 'protocol',
  ProtocolControlledValueUsd = 'protocolControlledValueUSD',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  Timestamp = 'timestamp',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UncollectedProtocolSideValueUsd = 'uncollectedProtocolSideValueUSD',
  UncollectedSupplySideValueUsd = 'uncollectedSupplySideValueUSD'
}

export type LiquidityPool = {
  __typename?: 'LiquidityPool'
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output']
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output']
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt']['output']
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt']['output']
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume occurred for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>
  /**  All trade volume occurred for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['BigDecimal']['output']>
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']['output']
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output']
  /**  Liquidity pool daily snapshots  */
  dailySnapshots: Array<LiquidityPoolDailySnapshot>
  /**  All deposit (add liquidity) events occurred in this pool  */
  deposits: Array<Deposit>
  /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
  fees: Array<LiquidityPoolFee>
  /**  Liquidity pool hourly snapshots  */
  hourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  /**  Smart contract address of the pool  */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['BigDecimal']['output']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']['output']>
  /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
  inputTokens: Array<Token>
  /**  Whether this pool is single-sided (e.g. Bancor, Platypus's Alternative Pool). The specifics of the implementation depends on the protocol.  */
  isSingleSided: Scalars['Boolean']['output']
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output']
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars['Int']['output']
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output']
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output']
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Token>
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>
  /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
  name?: Maybe<Scalars['String']['output']>
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output']
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output']
  /**  All positions in this market  */
  positions: Array<Position>
  /**  The protocol this pool belongs to  */
  protocol: DexAmmProtocol
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']['output']>>
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>
  /**  All trade (swap) events occurred in this pool  */
  swaps: Array<Swap>
  /**  Symbol of liquidity pool (e.g. 3CRV)  */
  symbol?: Maybe<Scalars['String']['output']>
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Current TVL (Total Value Locked) of this pool in USD  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']['output']>
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']['output']>
  /**  All withdraw (remove liquidity) events occurred in this pool  */
  withdraws: Array<Withdraw>
}

export type LiquidityPoolDailySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>
}

export type LiquidityPoolDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Deposit_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Deposit_Filter>
}

export type LiquidityPoolFeesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LiquidityPoolFee_Filter>
}

export type LiquidityPoolHourlySnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>
}

export type LiquidityPoolInputTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Token_Filter>
}

export type LiquidityPoolPositionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Position_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Position_Filter>
}

export type LiquidityPoolRewardTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<RewardToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RewardToken_Filter>
}

export type LiquidityPoolSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Swap_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Swap_Filter>
}

export type LiquidityPoolWithdrawsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Withdraw_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Withdraw_Filter>
}

export type LiquidityPoolDailySnapshot = {
  __typename?: 'LiquidityPoolDailySnapshot'
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output']
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['BigDecimal']['output']>
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']['output']
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity) in a day  */
  dailyDepositCount: Scalars['Int']['output']
  /**  Daily revenue generated by the liquidity pool, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Daily revenue generated by the liquidity pool, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Total number of trades (swaps) in a day  */
  dailySwapCount: Scalars['Int']['output']
  /**  Daily revenue generated by the liquidity pool.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenAmount: Array<Scalars['BigInt']['output']>
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenUSD: Array<Scalars['BigDecimal']['output']>
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal']['output']
  /**  Total number of withdrawals (remove liquidity) in a day  */
  dailyWithdrawCount: Scalars['Int']['output']
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output']
  /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['BigDecimal']['output']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']['output']>
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output']
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output']
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']['output']>>
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']['output']>
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']['output']>
}

export type LiquidityPoolDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyDepositCount?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailySupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailySwapCount?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailySwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_not?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  dailyVolumeByTokenAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  dailyVolumeByTokenAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  dailyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  dailyVolumeByTokenAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  dailyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  dailyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyVolumeByTokenUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeByTokenUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyVolumeByTokenUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  dailyWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day?: InputMaybe<Scalars['Int']['input']>
  day_gt?: InputMaybe<Scalars['Int']['input']>
  day_gte?: InputMaybe<Scalars['Int']['input']>
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day_lt?: InputMaybe<Scalars['Int']['input']>
  day_lte?: InputMaybe<Scalars['Int']['input']>
  day_not?: InputMaybe<Scalars['Int']['input']>
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  openPositionCount?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>
  positionCount_not?: InputMaybe<Scalars['Int']['input']>
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick?: InputMaybe<Scalars['BigInt']['input']>
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>
  tick_not?: InputMaybe<Scalars['BigInt']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  uncollectedProtocolSideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
}

export enum LiquidityPoolDailySnapshot_OrderBy {
  ActiveLiquidity = 'activeLiquidity',
  ActiveLiquidityUsd = 'activeLiquidityUSD',
  BlockNumber = 'blockNumber',
  ClosedPositionCount = 'closedPositionCount',
  CumulativeDepositCount = 'cumulativeDepositCount',
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeSwapCount = 'cumulativeSwapCount',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeVolumeByTokenAmount = 'cumulativeVolumeByTokenAmount',
  CumulativeVolumeByTokenUsd = 'cumulativeVolumeByTokenUSD',
  CumulativeVolumeUsd = 'cumulativeVolumeUSD',
  CumulativeWithdrawCount = 'cumulativeWithdrawCount',
  DailyDepositCount = 'dailyDepositCount',
  DailyProtocolSideRevenueUsd = 'dailyProtocolSideRevenueUSD',
  DailySupplySideRevenueUsd = 'dailySupplySideRevenueUSD',
  DailySwapCount = 'dailySwapCount',
  DailyTotalRevenueUsd = 'dailyTotalRevenueUSD',
  DailyVolumeByTokenAmount = 'dailyVolumeByTokenAmount',
  DailyVolumeByTokenUsd = 'dailyVolumeByTokenUSD',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyWithdrawCount = 'dailyWithdrawCount',
  Day = 'day',
  Id = 'id',
  InputTokenBalances = 'inputTokenBalances',
  InputTokenBalancesUsd = 'inputTokenBalancesUSD',
  InputTokenWeights = 'inputTokenWeights',
  OpenPositionCount = 'openPositionCount',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PositionCount = 'positionCount',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  RewardTokenEmissionsAmount = 'rewardTokenEmissionsAmount',
  RewardTokenEmissionsUsd = 'rewardTokenEmissionsUSD',
  StakedOutputTokenAmount = 'stakedOutputTokenAmount',
  Tick = 'tick',
  Timestamp = 'timestamp',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UncollectedProtocolSideTokenAmounts = 'uncollectedProtocolSideTokenAmounts',
  UncollectedProtocolSideValuesUsd = 'uncollectedProtocolSideValuesUSD',
  UncollectedSupplySideTokenAmounts = 'uncollectedSupplySideTokenAmounts',
  UncollectedSupplySideValuesUsd = 'uncollectedSupplySideValuesUSD'
}

export type LiquidityPoolFee = {
  __typename?: 'LiquidityPoolFee'
  /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
  feePercentage?: Maybe<Scalars['BigDecimal']['output']>
  /**  Type of fee this pool uses  */
  feeType: LiquidityPoolFeeType
  /**  { Fee type }-{ Pool address }  */
  id: Scalars['Bytes']['output']
}

export enum LiquidityPoolFeeType {
  /**  One-time fee charged by the protocol during deposit, in percentages of the deposit token  */
  DepositFee = 'DEPOSIT_FEE',
  /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicLpFee = 'DYNAMIC_LP_FEE',
  /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicProtocolFee = 'DYNAMIC_PROTOCOL_FEE',
  /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  DynamicTradingFee = 'DYNAMIC_TRADING_FEE',
  /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
  FixedLpFee = 'FIXED_LP_FEE',
  /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
  FixedProtocolFee = 'FIXED_PROTOCOL_FEE',
  /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
  FixedTradingFee = 'FIXED_TRADING_FEE',
  /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
  TieredTradingFee = 'TIERED_TRADING_FEE',
  /**  One-time fee charged by the protocol (e.g. Bancor v3) during withdrawal, in percentages of the withdrawal token  */
  WithdrawalFee = 'WITHDRAWAL_FEE'
}

export type LiquidityPoolFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_Filter>>>
  feePercentage?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  feePercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>
  feePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  feeType?: InputMaybe<LiquidityPoolFeeType>
  feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>
  feeType_not?: InputMaybe<LiquidityPoolFeeType>
  feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_Filter>>>
}

export enum LiquidityPoolFee_OrderBy {
  FeePercentage = 'feePercentage',
  FeeType = 'feeType',
  Id = 'id'
}

export type LiquidityPoolHourlySnapshot = {
  __typename?: 'LiquidityPoolHourlySnapshot'
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output']
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output']
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['BigDecimal']['output']>
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']['output']
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output']
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int']['output']
  /**  Hourly revenue generated by the liquidity pool, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Hourly revenue generated by the liquidity pool, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int']['output']
  /**  Hourly revenue generated by the liquidity pool.  */
  hourlyTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  All trade volume occurred in a given hour for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenAmount: Array<Scalars['BigInt']['output']>
  /**  All trade volume occurred in a given hour for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenUSD: Array<Scalars['BigDecimal']['output']>
  /**  All trade volume occurred in a given hour, in USD  */
  hourlyVolumeUSD: Scalars['BigDecimal']['output']
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int']['output']
  /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['BigDecimal']['output']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']['output']>
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output']
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output']
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']['output']>>
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output']
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['BigDecimal']['output']
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['BigDecimal']['output']>
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['BigDecimal']['output']>
}

export type LiquidityPoolHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hour?: InputMaybe<Scalars['Int']['input']>
  hour_gt?: InputMaybe<Scalars['Int']['input']>
  hour_gte?: InputMaybe<Scalars['Int']['input']>
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hour_lt?: InputMaybe<Scalars['Int']['input']>
  hour_lte?: InputMaybe<Scalars['Int']['input']>
  hour_not?: InputMaybe<Scalars['Int']['input']>
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyDepositCount?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlySwapCount?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hourlyVolumeByTokenAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  hourlyVolumeByTokenAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  hourlyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hourlyVolumeByTokenAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  hourlyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  hourlyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  hourlyVolumeByTokenUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyVolumeByTokenUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  hourlyVolumeByTokenUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  openPositionCount?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>
  positionCount_not?: InputMaybe<Scalars['Int']['input']>
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick?: InputMaybe<Scalars['BigInt']['input']>
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>
  tick_not?: InputMaybe<Scalars['BigInt']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  uncollectedProtocolSideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
}

export enum LiquidityPoolHourlySnapshot_OrderBy {
  ActiveLiquidity = 'activeLiquidity',
  ActiveLiquidityUsd = 'activeLiquidityUSD',
  BlockNumber = 'blockNumber',
  ClosedPositionCount = 'closedPositionCount',
  CumulativeDepositCount = 'cumulativeDepositCount',
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeSwapCount = 'cumulativeSwapCount',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeVolumeByTokenAmount = 'cumulativeVolumeByTokenAmount',
  CumulativeVolumeByTokenUsd = 'cumulativeVolumeByTokenUSD',
  CumulativeVolumeUsd = 'cumulativeVolumeUSD',
  CumulativeWithdrawCount = 'cumulativeWithdrawCount',
  Hour = 'hour',
  HourlyDepositCount = 'hourlyDepositCount',
  HourlyProtocolSideRevenueUsd = 'hourlyProtocolSideRevenueUSD',
  HourlySupplySideRevenueUsd = 'hourlySupplySideRevenueUSD',
  HourlySwapCount = 'hourlySwapCount',
  HourlyTotalRevenueUsd = 'hourlyTotalRevenueUSD',
  HourlyVolumeByTokenAmount = 'hourlyVolumeByTokenAmount',
  HourlyVolumeByTokenUsd = 'hourlyVolumeByTokenUSD',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  HourlyWithdrawCount = 'hourlyWithdrawCount',
  Id = 'id',
  InputTokenBalances = 'inputTokenBalances',
  InputTokenBalancesUsd = 'inputTokenBalancesUSD',
  InputTokenWeights = 'inputTokenWeights',
  OpenPositionCount = 'openPositionCount',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PositionCount = 'positionCount',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  RewardTokenEmissionsAmount = 'rewardTokenEmissionsAmount',
  RewardTokenEmissionsUsd = 'rewardTokenEmissionsUSD',
  StakedOutputTokenAmount = 'stakedOutputTokenAmount',
  Tick = 'tick',
  Timestamp = 'timestamp',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UncollectedProtocolSideTokenAmounts = 'uncollectedProtocolSideTokenAmounts',
  UncollectedProtocolSideValuesUsd = 'uncollectedProtocolSideValuesUSD',
  UncollectedSupplySideTokenAmounts = 'uncollectedSupplySideTokenAmounts',
  UncollectedSupplySideValuesUsd = 'uncollectedSupplySideValuesUSD'
}

export type LiquidityPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<LiquidityPool_Filter>>>
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_Filter>
  deposits_?: InputMaybe<Deposit_Filter>
  fees?: InputMaybe<Array<Scalars['String']['input']>>
  fees_?: InputMaybe<LiquidityPoolFee_Filter>
  fees_contains?: InputMaybe<Array<Scalars['String']['input']>>
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  fees_not?: InputMaybe<Array<Scalars['String']['input']>>
  fees_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalancesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenBalances_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenBalances_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenWeights_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenWeights_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_?: InputMaybe<Token_Filter>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
  isSingleSided?: InputMaybe<Scalars['Boolean']['input']>
  isSingleSided_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  isSingleSided_not?: InputMaybe<Scalars['Boolean']['input']>
  isSingleSided_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotHourID?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_not?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityToken?: InputMaybe<Scalars['String']['input']>
  liquidityTokenType?: InputMaybe<TokenType>
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>
  liquidityTokenType_not?: InputMaybe<TokenType>
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>
  liquidityToken_?: InputMaybe<Token_Filter>
  liquidityToken_contains?: InputMaybe<Scalars['String']['input']>
  liquidityToken_contains_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_ends_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_gt?: InputMaybe<Scalars['String']['input']>
  liquidityToken_gte?: InputMaybe<Scalars['String']['input']>
  liquidityToken_in?: InputMaybe<Array<Scalars['String']['input']>>
  liquidityToken_lt?: InputMaybe<Scalars['String']['input']>
  liquidityToken_lte?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_contains?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_ends_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  liquidityToken_not_starts_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_starts_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_gt?: InputMaybe<Scalars['String']['input']>
  name_gte?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_lt?: InputMaybe<Scalars['String']['input']>
  name_lte?: InputMaybe<Scalars['String']['input']>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  openPositionCount?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  or?: InputMaybe<Array<InputMaybe<LiquidityPool_Filter>>>
  positionCount?: InputMaybe<Scalars['Int']['input']>
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>
  positionCount_not?: InputMaybe<Scalars['Int']['input']>
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  positions_?: InputMaybe<Position_Filter>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  rewardTokens?: InputMaybe<Array<Scalars['String']['input']>>
  rewardTokens_?: InputMaybe<RewardToken_Filter>
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  rewardTokens_not?: InputMaybe<Array<Scalars['String']['input']>>
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  rewardTokens_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  swaps_?: InputMaybe<Swap_Filter>
  symbol?: InputMaybe<Scalars['String']['input']>
  symbol_contains?: InputMaybe<Scalars['String']['input']>
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_gt?: InputMaybe<Scalars['String']['input']>
  symbol_gte?: InputMaybe<Scalars['String']['input']>
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>
  symbol_lt?: InputMaybe<Scalars['String']['input']>
  symbol_lte?: InputMaybe<Scalars['String']['input']>
  symbol_not?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick?: InputMaybe<Scalars['BigInt']['input']>
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>
  tick_not?: InputMaybe<Scalars['BigInt']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  uncollectedProtocolSideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedProtocolSideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideTokenAmounts?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  uncollectedSupplySideValuesUSD?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  withdraws_?: InputMaybe<Withdraw_Filter>
}

export enum LiquidityPool_OrderBy {
  ActiveLiquidity = 'activeLiquidity',
  ActiveLiquidityUsd = 'activeLiquidityUSD',
  ClosedPositionCount = 'closedPositionCount',
  CreatedBlockNumber = 'createdBlockNumber',
  CreatedTimestamp = 'createdTimestamp',
  CumulativeDepositCount = 'cumulativeDepositCount',
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeSwapCount = 'cumulativeSwapCount',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeVolumeByTokenAmount = 'cumulativeVolumeByTokenAmount',
  CumulativeVolumeByTokenUsd = 'cumulativeVolumeByTokenUSD',
  CumulativeVolumeUsd = 'cumulativeVolumeUSD',
  CumulativeWithdrawCount = 'cumulativeWithdrawCount',
  DailySnapshots = 'dailySnapshots',
  Deposits = 'deposits',
  Fees = 'fees',
  HourlySnapshots = 'hourlySnapshots',
  Id = 'id',
  InputTokenBalances = 'inputTokenBalances',
  InputTokenBalancesUsd = 'inputTokenBalancesUSD',
  InputTokenWeights = 'inputTokenWeights',
  InputTokens = 'inputTokens',
  IsSingleSided = 'isSingleSided',
  LastSnapshotDayId = 'lastSnapshotDayID',
  LastSnapshotHourId = 'lastSnapshotHourID',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  LiquidityToken = 'liquidityToken',
  LiquidityTokenType = 'liquidityTokenType',
  LiquidityTokenLargePriceChangeBuffer = 'liquidityToken___largePriceChangeBuffer',
  LiquidityTokenLargeTvlImpactBuffer = 'liquidityToken___largeTVLImpactBuffer',
  LiquidityTokenLastPricePool = 'liquidityToken___lastPricePool',
  LiquidityTokenTotalSupply = 'liquidityToken___totalSupply',
  LiquidityTokenTotalValueLockedUsd = 'liquidityToken___totalValueLockedUSD',
  LiquidityTokenDecimals = 'liquidityToken__decimals',
  LiquidityTokenId = 'liquidityToken__id',
  LiquidityTokenLastPriceBlockNumber = 'liquidityToken__lastPriceBlockNumber',
  LiquidityTokenLastPriceUsd = 'liquidityToken__lastPriceUSD',
  LiquidityTokenName = 'liquidityToken__name',
  LiquidityTokenSymbol = 'liquidityToken__symbol',
  Name = 'name',
  OpenPositionCount = 'openPositionCount',
  PositionCount = 'positionCount',
  Positions = 'positions',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  RewardTokenEmissionsAmount = 'rewardTokenEmissionsAmount',
  RewardTokenEmissionsUsd = 'rewardTokenEmissionsUSD',
  RewardTokens = 'rewardTokens',
  StakedOutputTokenAmount = 'stakedOutputTokenAmount',
  Swaps = 'swaps',
  Symbol = 'symbol',
  Tick = 'tick',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UncollectedProtocolSideTokenAmounts = 'uncollectedProtocolSideTokenAmounts',
  UncollectedProtocolSideValuesUsd = 'uncollectedProtocolSideValuesUSD',
  UncollectedSupplySideTokenAmounts = 'uncollectedSupplySideTokenAmounts',
  UncollectedSupplySideValuesUsd = 'uncollectedSupplySideValuesUSD',
  Withdraws = 'withdraws'
}

export enum Network {
  ArbitrumOne = 'ARBITRUM_ONE',
  ArweaveMainnet = 'ARWEAVE_MAINNET',
  Aurora = 'AURORA',
  Avalanche = 'AVALANCHE',
  Base = 'BASE',
  Boba = 'BOBA',
  Bsc = 'BSC',
  Celo = 'CELO',
  Cosmos = 'COSMOS',
  Cronos = 'CRONOS',
  Fantom = 'FANTOM',
  Fuse = 'FUSE',
  Harmony = 'HARMONY',
  Juno = 'JUNO',
  Mainnet = 'MAINNET',
  Matic = 'MATIC',
  Moonbeam = 'MOONBEAM',
  Moonriver = 'MOONRIVER',
  NearMainnet = 'NEAR_MAINNET',
  Optimism = 'OPTIMISM',
  Osmosis = 'OSMOSIS',
  Xdai = 'XDAI'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Position = {
  __typename?: 'Position'
  /**  Account that owns this position  */
  account: Account
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars['BigInt']['output']>
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars['BigInt']['output']
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars['BigDecimal']['output']
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars['BigDecimal']['output']
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int']['output']
  /**  All deposit events of this position  */
  deposits: Array<Deposit>
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars['Bytes']['output']>
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars['Bytes']['output']
  /**  { Account address }-{ Market address }-{ Count }  */
  id: Scalars['Bytes']['output']
  /**  total position liquidity  */
  liquidity: Scalars['BigInt']['output']
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Token>
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>
  /**  total position liquidity in USD  */
  liquidityUSD: Scalars['BigDecimal']['output']
  /**  The liquidity pool in which this position was opened  */
  pool: LiquidityPool
  /**  Position daily snapshots for open positions  */
  snapshots: Array<PositionSnapshot>
  /**  lower tick of the position  */
  tickLower?: Maybe<Tick>
  /**  upper tick of the position  */
  tickUpper?: Maybe<Tick>
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars['BigInt']['output']
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int']['output']
  /**  All withdraw events of this position  */
  withdraws: Array<Withdraw>
}

export type PositionDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Deposit_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Deposit_Filter>
}

export type PositionSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PositionSnapshot_Filter>
}

export type PositionWithdrawsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Withdraw_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Withdraw_Filter>
}

export type PositionSnapshot = {
  __typename?: 'PositionSnapshot'
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']['output']
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars['BigDecimal']['output']
  /**  Total reward token accumulated under this position, in native amounts  */
  cumulativeRewardTokenAmounts?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars['BigDecimal']['output']
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int']['output']
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars['Bytes']['output']
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars['Bytes']['output']
  /**  total position liquidity  */
  liquidity?: Maybe<Scalars['BigInt']['output']>
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<TokenType>
  /**  total position liquidity in USD  */
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output']
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars['BigInt']['output']
  /**  Position of this snapshot  */
  position: Position
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']['output']
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int']['output']
}

export type PositionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeDepositTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeRewardTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  depositCount?: InputMaybe<Scalars['Int']['input']>
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>
  depositCount_not?: InputMaybe<Scalars['Int']['input']>
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hash?: InputMaybe<Scalars['Bytes']['input']>
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>
  hash_not?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  liquidity?: InputMaybe<Scalars['BigInt']['input']>
  liquidityTokenType?: InputMaybe<TokenType>
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>
  liquidityTokenType_not?: InputMaybe<TokenType>
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  logIndex?: InputMaybe<Scalars['Int']['input']>
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>
  logIndex_not?: InputMaybe<Scalars['Int']['input']>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nonce?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>
  position?: InputMaybe<Scalars['String']['input']>
  position_?: InputMaybe<Position_Filter>
  position_contains?: InputMaybe<Scalars['String']['input']>
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_ends_with?: InputMaybe<Scalars['String']['input']>
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_gt?: InputMaybe<Scalars['String']['input']>
  position_gte?: InputMaybe<Scalars['String']['input']>
  position_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_lt?: InputMaybe<Scalars['String']['input']>
  position_lte?: InputMaybe<Scalars['String']['input']>
  position_not?: InputMaybe<Scalars['String']['input']>
  position_not_contains?: InputMaybe<Scalars['String']['input']>
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_starts_with?: InputMaybe<Scalars['String']['input']>
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  withdrawCount?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
}

export enum PositionSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  CumulativeDepositTokenAmounts = 'cumulativeDepositTokenAmounts',
  CumulativeDepositUsd = 'cumulativeDepositUSD',
  CumulativeRewardTokenAmounts = 'cumulativeRewardTokenAmounts',
  CumulativeRewardUsd = 'cumulativeRewardUSD',
  CumulativeWithdrawTokenAmounts = 'cumulativeWithdrawTokenAmounts',
  CumulativeWithdrawUsd = 'cumulativeWithdrawUSD',
  DepositCount = 'depositCount',
  Hash = 'hash',
  Id = 'id',
  Liquidity = 'liquidity',
  LiquidityTokenType = 'liquidityTokenType',
  LiquidityUsd = 'liquidityUSD',
  LogIndex = 'logIndex',
  Nonce = 'nonce',
  Position = 'position',
  PositionBlockNumberClosed = 'position__blockNumberClosed',
  PositionBlockNumberOpened = 'position__blockNumberOpened',
  PositionCumulativeDepositUsd = 'position__cumulativeDepositUSD',
  PositionCumulativeWithdrawUsd = 'position__cumulativeWithdrawUSD',
  PositionDepositCount = 'position__depositCount',
  PositionHashClosed = 'position__hashClosed',
  PositionHashOpened = 'position__hashOpened',
  PositionId = 'position__id',
  PositionLiquidity = 'position__liquidity',
  PositionLiquidityTokenType = 'position__liquidityTokenType',
  PositionLiquidityUsd = 'position__liquidityUSD',
  PositionTimestampClosed = 'position__timestampClosed',
  PositionTimestampOpened = 'position__timestampOpened',
  PositionWithdrawCount = 'position__withdrawCount',
  Timestamp = 'timestamp',
  WithdrawCount = 'withdrawCount'
}

export type Position_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  account?: InputMaybe<Scalars['String']['input']>
  account_?: InputMaybe<Account_Filter>
  account_contains?: InputMaybe<Scalars['String']['input']>
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_ends_with?: InputMaybe<Scalars['String']['input']>
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_gt?: InputMaybe<Scalars['String']['input']>
  account_gte?: InputMaybe<Scalars['String']['input']>
  account_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_lt?: InputMaybe<Scalars['String']['input']>
  account_lte?: InputMaybe<Scalars['String']['input']>
  account_not?: InputMaybe<Scalars['String']['input']>
  account_not_contains?: InputMaybe<Scalars['String']['input']>
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_starts_with?: InputMaybe<Scalars['String']['input']>
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  and?: InputMaybe<Array<InputMaybe<Position_Filter>>>
  blockNumberClosed?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumberClosed_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberClosed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumberOpened?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumberOpened_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumberOpened_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeDepositTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeDepositUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeRewardUSD_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  cumulativeWithdrawUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeWithdrawUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  depositCount?: InputMaybe<Scalars['Int']['input']>
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>
  depositCount_not?: InputMaybe<Scalars['Int']['input']>
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  deposits_?: InputMaybe<Deposit_Filter>
  hashClosed?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_contains?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_gt?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_gte?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hashClosed_lt?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_lte?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_not?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hashClosed_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hashOpened?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_contains?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_gt?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_gte?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hashOpened_lt?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_lte?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_not?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hashOpened_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  liquidity?: InputMaybe<Scalars['BigInt']['input']>
  liquidityToken?: InputMaybe<Scalars['String']['input']>
  liquidityTokenType?: InputMaybe<TokenType>
  liquidityTokenType_in?: InputMaybe<Array<TokenType>>
  liquidityTokenType_not?: InputMaybe<TokenType>
  liquidityTokenType_not_in?: InputMaybe<Array<TokenType>>
  liquidityToken_?: InputMaybe<Token_Filter>
  liquidityToken_contains?: InputMaybe<Scalars['String']['input']>
  liquidityToken_contains_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_ends_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_gt?: InputMaybe<Scalars['String']['input']>
  liquidityToken_gte?: InputMaybe<Scalars['String']['input']>
  liquidityToken_in?: InputMaybe<Array<Scalars['String']['input']>>
  liquidityToken_lt?: InputMaybe<Scalars['String']['input']>
  liquidityToken_lte?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_contains?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_ends_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  liquidityToken_not_starts_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityToken_starts_with?: InputMaybe<Scalars['String']['input']>
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<Position_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  snapshots_?: InputMaybe<PositionSnapshot_Filter>
  tickLower?: InputMaybe<Scalars['String']['input']>
  tickLower_?: InputMaybe<Tick_Filter>
  tickLower_contains?: InputMaybe<Scalars['String']['input']>
  tickLower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tickLower_ends_with?: InputMaybe<Scalars['String']['input']>
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickLower_gt?: InputMaybe<Scalars['String']['input']>
  tickLower_gte?: InputMaybe<Scalars['String']['input']>
  tickLower_in?: InputMaybe<Array<Scalars['String']['input']>>
  tickLower_lt?: InputMaybe<Scalars['String']['input']>
  tickLower_lte?: InputMaybe<Scalars['String']['input']>
  tickLower_not?: InputMaybe<Scalars['String']['input']>
  tickLower_not_contains?: InputMaybe<Scalars['String']['input']>
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tickLower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickLower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tickLower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickLower_starts_with?: InputMaybe<Scalars['String']['input']>
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper?: InputMaybe<Scalars['String']['input']>
  tickUpper_?: InputMaybe<Tick_Filter>
  tickUpper_contains?: InputMaybe<Scalars['String']['input']>
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper_ends_with?: InputMaybe<Scalars['String']['input']>
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper_gt?: InputMaybe<Scalars['String']['input']>
  tickUpper_gte?: InputMaybe<Scalars['String']['input']>
  tickUpper_in?: InputMaybe<Array<Scalars['String']['input']>>
  tickUpper_lt?: InputMaybe<Scalars['String']['input']>
  tickUpper_lte?: InputMaybe<Scalars['String']['input']>
  tickUpper_not?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_contains?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tickUpper_starts_with?: InputMaybe<Scalars['String']['input']>
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestampClosed?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestampClosed_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_not?: InputMaybe<Scalars['BigInt']['input']>
  timestampClosed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestampOpened?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestampOpened_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_not?: InputMaybe<Scalars['BigInt']['input']>
  timestampOpened_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  withdrawCount?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  withdraws_?: InputMaybe<Withdraw_Filter>
}

export enum Position_OrderBy {
  Account = 'account',
  AccountClosedPositionCount = 'account__closedPositionCount',
  AccountDepositCount = 'account__depositCount',
  AccountId = 'account__id',
  AccountOpenPositionCount = 'account__openPositionCount',
  AccountPositionCount = 'account__positionCount',
  AccountSwapCount = 'account__swapCount',
  AccountWithdrawCount = 'account__withdrawCount',
  BlockNumberClosed = 'blockNumberClosed',
  BlockNumberOpened = 'blockNumberOpened',
  CumulativeDepositTokenAmounts = 'cumulativeDepositTokenAmounts',
  CumulativeDepositUsd = 'cumulativeDepositUSD',
  CumulativeRewardUsd = 'cumulativeRewardUSD',
  CumulativeWithdrawTokenAmounts = 'cumulativeWithdrawTokenAmounts',
  CumulativeWithdrawUsd = 'cumulativeWithdrawUSD',
  DepositCount = 'depositCount',
  Deposits = 'deposits',
  HashClosed = 'hashClosed',
  HashOpened = 'hashOpened',
  Id = 'id',
  Liquidity = 'liquidity',
  LiquidityToken = 'liquidityToken',
  LiquidityTokenType = 'liquidityTokenType',
  LiquidityTokenLargePriceChangeBuffer = 'liquidityToken___largePriceChangeBuffer',
  LiquidityTokenLargeTvlImpactBuffer = 'liquidityToken___largeTVLImpactBuffer',
  LiquidityTokenLastPricePool = 'liquidityToken___lastPricePool',
  LiquidityTokenTotalSupply = 'liquidityToken___totalSupply',
  LiquidityTokenTotalValueLockedUsd = 'liquidityToken___totalValueLockedUSD',
  LiquidityTokenDecimals = 'liquidityToken__decimals',
  LiquidityTokenId = 'liquidityToken__id',
  LiquidityTokenLastPriceBlockNumber = 'liquidityToken__lastPriceBlockNumber',
  LiquidityTokenLastPriceUsd = 'liquidityToken__lastPriceUSD',
  LiquidityTokenName = 'liquidityToken__name',
  LiquidityTokenSymbol = 'liquidityToken__symbol',
  LiquidityUsd = 'liquidityUSD',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Snapshots = 'snapshots',
  TickLower = 'tickLower',
  TickLowerCreatedBlockNumber = 'tickLower__createdBlockNumber',
  TickLowerCreatedTimestamp = 'tickLower__createdTimestamp',
  TickLowerId = 'tickLower__id',
  TickLowerIndex = 'tickLower__index',
  TickLowerLastSnapshotDayId = 'tickLower__lastSnapshotDayID',
  TickLowerLastSnapshotHourId = 'tickLower__lastSnapshotHourID',
  TickLowerLastUpdateBlockNumber = 'tickLower__lastUpdateBlockNumber',
  TickLowerLastUpdateTimestamp = 'tickLower__lastUpdateTimestamp',
  TickLowerLiquidityGross = 'tickLower__liquidityGross',
  TickLowerLiquidityGrossUsd = 'tickLower__liquidityGrossUSD',
  TickLowerLiquidityNet = 'tickLower__liquidityNet',
  TickLowerLiquidityNetUsd = 'tickLower__liquidityNetUSD',
  TickUpper = 'tickUpper',
  TickUpperCreatedBlockNumber = 'tickUpper__createdBlockNumber',
  TickUpperCreatedTimestamp = 'tickUpper__createdTimestamp',
  TickUpperId = 'tickUpper__id',
  TickUpperIndex = 'tickUpper__index',
  TickUpperLastSnapshotDayId = 'tickUpper__lastSnapshotDayID',
  TickUpperLastSnapshotHourId = 'tickUpper__lastSnapshotHourID',
  TickUpperLastUpdateBlockNumber = 'tickUpper__lastUpdateBlockNumber',
  TickUpperLastUpdateTimestamp = 'tickUpper__lastUpdateTimestamp',
  TickUpperLiquidityGross = 'tickUpper__liquidityGross',
  TickUpperLiquidityGrossUsd = 'tickUpper__liquidityGrossUSD',
  TickUpperLiquidityNet = 'tickUpper__liquidityNet',
  TickUpperLiquidityNetUsd = 'tickUpper__liquidityNetUSD',
  TimestampClosed = 'timestampClosed',
  TimestampOpened = 'timestampOpened',
  WithdrawCount = 'withdrawCount',
  Withdraws = 'withdraws'
}

export type Protocol = {
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']['output']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']['output']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']['output']
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output']
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['Bytes']['output']
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']['output']
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']['output']
  /**  The blockchain network this subgraph is indexing on  */
  network: Network
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']['output']>
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']['output']
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']['output']
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']['output']
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output']
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType
}

export type ProtocolDailyUsageMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>
}

export type ProtocolFinancialMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FinancialsDailySnapshot_Filter>
}

export type ProtocolHourlyUsageMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
}

export enum ProtocolType {
  Bridge = 'BRIDGE',
  Exchange = 'EXCHANGE',
  Generic = 'GENERIC',
  Lending = 'LENDING',
  Yield = 'YIELD'
}

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<
    Scalars['BigDecimal']['input']
  >
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_Filter>
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_Filter>
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  methodologyVersion?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_contains?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_gt?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_gte?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  methodologyVersion_lt?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_lte?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_gt?: InputMaybe<Scalars['String']['input']>
  name_gte?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_lt?: InputMaybe<Scalars['String']['input']>
  name_lte?: InputMaybe<Scalars['String']['input']>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  network?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  network_not?: InputMaybe<Network>
  network_not_in?: InputMaybe<Array<Network>>
  or?: InputMaybe<Array<InputMaybe<Protocol_Filter>>>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  protocolControlledValueUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  schemaVersion?: InputMaybe<Scalars['String']['input']>
  schemaVersion_contains?: InputMaybe<Scalars['String']['input']>
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_gt?: InputMaybe<Scalars['String']['input']>
  schemaVersion_gte?: InputMaybe<Scalars['String']['input']>
  schemaVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  schemaVersion_lt?: InputMaybe<Scalars['String']['input']>
  schemaVersion_lte?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  schemaVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_gt?: InputMaybe<Scalars['String']['input']>
  slug_gte?: InputMaybe<Scalars['String']['input']>
  slug_in?: InputMaybe<Array<Scalars['String']['input']>>
  slug_lt?: InputMaybe<Scalars['String']['input']>
  slug_lte?: InputMaybe<Scalars['String']['input']>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_contains?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_gt?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_gte?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']['input']>>
  subgraphVersion_lt?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_lte?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']['input']>
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  type?: InputMaybe<ProtocolType>
  type_in?: InputMaybe<Array<ProtocolType>>
  type_not?: InputMaybe<ProtocolType>
  type_not_in?: InputMaybe<Array<ProtocolType>>
}

export enum Protocol_OrderBy {
  CumulativeProtocolSideRevenueUsd = 'cumulativeProtocolSideRevenueUSD',
  CumulativeSupplySideRevenueUsd = 'cumulativeSupplySideRevenueUSD',
  CumulativeTotalRevenueUsd = 'cumulativeTotalRevenueUSD',
  CumulativeUniqueUsers = 'cumulativeUniqueUsers',
  DailyUsageMetrics = 'dailyUsageMetrics',
  FinancialMetrics = 'financialMetrics',
  HourlyUsageMetrics = 'hourlyUsageMetrics',
  Id = 'id',
  MethodologyVersion = 'methodologyVersion',
  Name = 'name',
  Network = 'network',
  ProtocolControlledValueUsd = 'protocolControlledValueUSD',
  SchemaVersion = 'schemaVersion',
  Slug = 'slug',
  SubgraphVersion = 'subgraphVersion',
  TotalPoolCount = 'totalPoolCount',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  Type = 'type'
}

export type Query = {
  __typename?: 'Query'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  account?: Maybe<Account>
  accounts: Array<Account>
  activeAccount?: Maybe<ActiveAccount>
  activeAccounts: Array<ActiveAccount>
  deposit?: Maybe<Deposit>
  deposits: Array<Deposit>
  dexAmmProtocol?: Maybe<DexAmmProtocol>
  dexAmmProtocols: Array<DexAmmProtocol>
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
  financialsDailySnapshots: Array<FinancialsDailySnapshot>
  helperStore?: Maybe<_HelperStore>
  helperStores: Array<_HelperStore>
  liquidityPool?: Maybe<LiquidityPool>
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
  liquidityPoolFee?: Maybe<LiquidityPoolFee>
  liquidityPoolFees: Array<LiquidityPoolFee>
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  liquidityPools: Array<LiquidityPool>
  position?: Maybe<Position>
  positionSnapshot?: Maybe<PositionSnapshot>
  positionSnapshots: Array<PositionSnapshot>
  positions: Array<Position>
  protocol?: Maybe<Protocol>
  protocols: Array<Protocol>
  rewardToken?: Maybe<RewardToken>
  rewardTokens: Array<RewardToken>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  tick?: Maybe<Tick>
  tickDailySnapshot?: Maybe<TickDailySnapshot>
  tickDailySnapshots: Array<TickDailySnapshot>
  tickHourlySnapshot?: Maybe<TickHourlySnapshot>
  tickHourlySnapshots: Array<TickHourlySnapshot>
  ticks: Array<Tick>
  token?: Maybe<Token>
  tokenWhitelist?: Maybe<_TokenWhitelist>
  tokenWhitelistSymbol?: Maybe<_TokenWhitelistSymbol>
  tokenWhitelistSymbols: Array<_TokenWhitelistSymbol>
  tokenWhitelists: Array<_TokenWhitelist>
  tokens: Array<Token>
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
  withdraw?: Maybe<Withdraw>
  withdraws: Array<Withdraw>
}

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Account_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Account_Filter>
}

export type QueryActiveAccountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryActiveAccountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ActiveAccount_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<ActiveAccount_Filter>
}

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Deposit_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Deposit_Filter>
}

export type QueryDexAmmProtocolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryDexAmmProtocolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<DexAmmProtocol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<DexAmmProtocol_Filter>
}

export type QueryFinancialsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryFinancialsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<FinancialsDailySnapshot_Filter>
}

export type QueryHelperStoreArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryHelperStoresArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_HelperStore_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_HelperStore_Filter>
}

export type QueryLiquidityPoolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryLiquidityPoolAmountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryLiquidityPoolAmountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_LiquidityPoolAmount_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_LiquidityPoolAmount_Filter>
}

export type QueryLiquidityPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryLiquidityPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>
}

export type QueryLiquidityPoolFeeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryLiquidityPoolFeesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolFee_Filter>
}

export type QueryLiquidityPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryLiquidityPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>
}

export type QueryLiquidityPoolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPool_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPool_Filter>
}

export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<PositionSnapshot_Filter>
}

export type QueryPositionsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Position_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Position_Filter>
}

export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryProtocolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Protocol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Protocol_Filter>
}

export type QueryRewardTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryRewardTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<RewardToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<RewardToken_Filter>
}

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Swap_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Swap_Filter>
}

export type QueryTickArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTickDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTickDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TickDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TickDailySnapshot_Filter>
}

export type QueryTickHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTickHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TickHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TickHourlySnapshot_Filter>
}

export type QueryTicksArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Tick_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Tick_Filter>
}

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTokenWhitelistArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTokenWhitelistSymbolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryTokenWhitelistSymbolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_TokenWhitelistSymbol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_TokenWhitelistSymbol_Filter>
}

export type QueryTokenWhitelistsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_TokenWhitelist_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_TokenWhitelist_Filter>
}

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Token_Filter>
}

export type QueryUsageMetricsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryUsageMetricsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>
}

export type QueryUsageMetricsHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryUsageMetricsHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
}

export type QueryWithdrawArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryWithdrawsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Withdraw_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Withdraw_Filter>
}

export type RewardToken = {
  __typename?: 'RewardToken'
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['Bytes']['output']
  /**  Reference to the actual token  */
  token: Token
  /**  The type of the reward token  */
  type: RewardTokenType
}

export enum RewardTokenType {
  /**  For reward tokens awarded to borrowers  */
  Borrow = 'BORROW',
  /**  For reward tokens awarded to LPs/lenders  */
  Deposit = 'DEPOSIT'
}

export type RewardToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<RewardToken_Filter>>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<RewardToken_Filter>>>
  token?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_Filter>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<RewardTokenType>
  type_in?: InputMaybe<Array<RewardTokenType>>
  type_not?: InputMaybe<RewardTokenType>
  type_not_in?: InputMaybe<Array<RewardTokenType>>
}

export enum RewardToken_OrderBy {
  Id = 'id',
  Token = 'token',
  TokenLargePriceChangeBuffer = 'token___largePriceChangeBuffer',
  TokenLargeTvlImpactBuffer = 'token___largeTVLImpactBuffer',
  TokenLastPricePool = 'token___lastPricePool',
  TokenTotalSupply = 'token___totalSupply',
  TokenTotalValueLockedUsd = 'token___totalValueLockedUSD',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenLastPriceBlockNumber = 'token__lastPriceBlockNumber',
  TokenLastPriceUsd = 'token__lastPriceUSD',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  Type = 'type'
}

export type Subscription = {
  __typename?: 'Subscription'
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  account?: Maybe<Account>
  accounts: Array<Account>
  activeAccount?: Maybe<ActiveAccount>
  activeAccounts: Array<ActiveAccount>
  deposit?: Maybe<Deposit>
  deposits: Array<Deposit>
  dexAmmProtocol?: Maybe<DexAmmProtocol>
  dexAmmProtocols: Array<DexAmmProtocol>
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
  financialsDailySnapshots: Array<FinancialsDailySnapshot>
  helperStore?: Maybe<_HelperStore>
  helperStores: Array<_HelperStore>
  liquidityPool?: Maybe<LiquidityPool>
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
  liquidityPoolFee?: Maybe<LiquidityPoolFee>
  liquidityPoolFees: Array<LiquidityPoolFee>
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  liquidityPools: Array<LiquidityPool>
  position?: Maybe<Position>
  positionSnapshot?: Maybe<PositionSnapshot>
  positionSnapshots: Array<PositionSnapshot>
  positions: Array<Position>
  protocol?: Maybe<Protocol>
  protocols: Array<Protocol>
  rewardToken?: Maybe<RewardToken>
  rewardTokens: Array<RewardToken>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  tick?: Maybe<Tick>
  tickDailySnapshot?: Maybe<TickDailySnapshot>
  tickDailySnapshots: Array<TickDailySnapshot>
  tickHourlySnapshot?: Maybe<TickHourlySnapshot>
  tickHourlySnapshots: Array<TickHourlySnapshot>
  ticks: Array<Tick>
  token?: Maybe<Token>
  tokenWhitelist?: Maybe<_TokenWhitelist>
  tokenWhitelistSymbol?: Maybe<_TokenWhitelistSymbol>
  tokenWhitelistSymbols: Array<_TokenWhitelistSymbol>
  tokenWhitelists: Array<_TokenWhitelist>
  tokens: Array<Token>
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
  withdraw?: Maybe<Withdraw>
  withdraws: Array<Withdraw>
}

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>
}

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Account_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Account_Filter>
}

export type SubscriptionActiveAccountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionActiveAccountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ActiveAccount_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<ActiveAccount_Filter>
}

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Deposit_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Deposit_Filter>
}

export type SubscriptionDexAmmProtocolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionDexAmmProtocolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<DexAmmProtocol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<DexAmmProtocol_Filter>
}

export type SubscriptionFinancialsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionFinancialsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<FinancialsDailySnapshot_Filter>
}

export type SubscriptionHelperStoreArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionHelperStoresArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_HelperStore_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_HelperStore_Filter>
}

export type SubscriptionLiquidityPoolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionLiquidityPoolAmountArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionLiquidityPoolAmountsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_LiquidityPoolAmount_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_LiquidityPoolAmount_Filter>
}

export type SubscriptionLiquidityPoolDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionLiquidityPoolDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolDailySnapshot_Filter>
}

export type SubscriptionLiquidityPoolFeeArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionLiquidityPoolFeesArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolFee_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolFee_Filter>
}

export type SubscriptionLiquidityPoolHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionLiquidityPoolHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPoolHourlySnapshot_Filter>
}

export type SubscriptionLiquidityPoolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPool_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<LiquidityPool_Filter>
}

export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<PositionSnapshot_Filter>
}

export type SubscriptionPositionsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Position_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Position_Filter>
}

export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionProtocolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Protocol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Protocol_Filter>
}

export type SubscriptionRewardTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionRewardTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<RewardToken_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<RewardToken_Filter>
}

export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Swap_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Swap_Filter>
}

export type SubscriptionTickArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTickDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTickDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TickDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TickDailySnapshot_Filter>
}

export type SubscriptionTickHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTickHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TickHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<TickHourlySnapshot_Filter>
}

export type SubscriptionTicksArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Tick_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Tick_Filter>
}

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTokenWhitelistArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTokenWhitelistSymbolArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionTokenWhitelistSymbolsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_TokenWhitelistSymbol_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_TokenWhitelistSymbol_Filter>
}

export type SubscriptionTokenWhitelistsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<_TokenWhitelist_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<_TokenWhitelist_Filter>
}

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Token_Filter>
}

export type SubscriptionUsageMetricsDailySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionUsageMetricsDailySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<UsageMetricsDailySnapshot_Filter>
}

export type SubscriptionUsageMetricsHourlySnapshotArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionUsageMetricsHourlySnapshotsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<UsageMetricsHourlySnapshot_Filter>
}

export type SubscriptionWithdrawArgs = {
  block?: InputMaybe<Block_Height>
  id: Scalars['ID']['input']
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionWithdrawsArgs = {
  block?: InputMaybe<Block_Height>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Withdraw_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  subgraphError?: _SubgraphErrorPolicy_
  where?: InputMaybe<Withdraw_Filter>
}

export type Swap = {
  __typename?: 'Swap'
  /**  Account that emitted this event  */
  account: Account
  /**  Amount of token deposited into pool in native units  */
  amountIn: Scalars['BigInt']['output']
  /**  Amount of token deposited into pool in USD  */
  amountInUSD: Scalars['BigDecimal']['output']
  /**  Amount of token withdrawn from pool in native units  */
  amountOut: Scalars['BigInt']['output']
  /**  Amount of token withdrawn from pool in USD  */
  amountOutUSD: Scalars['BigDecimal']['output']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output']
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Bytes']['output']
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['Bytes']['output']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output']
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output']
  /**  The pool involving this event  */
  pool: LiquidityPool
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  the tick after the swap  */
  tick?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output']
  /**  Token deposited into pool  */
  tokenIn: Token
  /**  Token withdrawn from pool  */
  tokenOut: Token
}

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  account?: InputMaybe<Scalars['String']['input']>
  account_?: InputMaybe<Account_Filter>
  account_contains?: InputMaybe<Scalars['String']['input']>
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_ends_with?: InputMaybe<Scalars['String']['input']>
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_gt?: InputMaybe<Scalars['String']['input']>
  account_gte?: InputMaybe<Scalars['String']['input']>
  account_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_lt?: InputMaybe<Scalars['String']['input']>
  account_lte?: InputMaybe<Scalars['String']['input']>
  account_not?: InputMaybe<Scalars['String']['input']>
  account_not_contains?: InputMaybe<Scalars['String']['input']>
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_starts_with?: InputMaybe<Scalars['String']['input']>
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  amountIn?: InputMaybe<Scalars['BigInt']['input']>
  amountInUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountInUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  amountInUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountIn_gt?: InputMaybe<Scalars['BigInt']['input']>
  amountIn_gte?: InputMaybe<Scalars['BigInt']['input']>
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountIn_lt?: InputMaybe<Scalars['BigInt']['input']>
  amountIn_lte?: InputMaybe<Scalars['BigInt']['input']>
  amountIn_not?: InputMaybe<Scalars['BigInt']['input']>
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountOut?: InputMaybe<Scalars['BigInt']['input']>
  amountOutUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountOutUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  amountOutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountOut_gt?: InputMaybe<Scalars['BigInt']['input']>
  amountOut_gte?: InputMaybe<Scalars['BigInt']['input']>
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountOut_lt?: InputMaybe<Scalars['BigInt']['input']>
  amountOut_lte?: InputMaybe<Scalars['BigInt']['input']>
  amountOut_not?: InputMaybe<Scalars['BigInt']['input']>
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hash?: InputMaybe<Scalars['Bytes']['input']>
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>
  hash_not?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  logIndex?: InputMaybe<Scalars['Int']['input']>
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>
  logIndex_not?: InputMaybe<Scalars['Int']['input']>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nonce?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  tick?: InputMaybe<Scalars['BigInt']['input']>
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>
  tick_not?: InputMaybe<Scalars['BigInt']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenIn?: InputMaybe<Scalars['String']['input']>
  tokenIn_?: InputMaybe<Token_Filter>
  tokenIn_contains?: InputMaybe<Scalars['String']['input']>
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tokenIn_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenIn_gt?: InputMaybe<Scalars['String']['input']>
  tokenIn_gte?: InputMaybe<Scalars['String']['input']>
  tokenIn_in?: InputMaybe<Array<Scalars['String']['input']>>
  tokenIn_lt?: InputMaybe<Scalars['String']['input']>
  tokenIn_lte?: InputMaybe<Scalars['String']['input']>
  tokenIn_not?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_contains?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenIn_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut?: InputMaybe<Scalars['String']['input']>
  tokenOut_?: InputMaybe<Token_Filter>
  tokenOut_contains?: InputMaybe<Scalars['String']['input']>
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut_gt?: InputMaybe<Scalars['String']['input']>
  tokenOut_gte?: InputMaybe<Scalars['String']['input']>
  tokenOut_in?: InputMaybe<Array<Scalars['String']['input']>>
  tokenOut_lt?: InputMaybe<Scalars['String']['input']>
  tokenOut_lte?: InputMaybe<Scalars['String']['input']>
  tokenOut_not?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_contains?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tokenOut_starts_with?: InputMaybe<Scalars['String']['input']>
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
}

export enum Swap_OrderBy {
  Account = 'account',
  AccountClosedPositionCount = 'account__closedPositionCount',
  AccountDepositCount = 'account__depositCount',
  AccountId = 'account__id',
  AccountOpenPositionCount = 'account__openPositionCount',
  AccountPositionCount = 'account__positionCount',
  AccountSwapCount = 'account__swapCount',
  AccountWithdrawCount = 'account__withdrawCount',
  AmountIn = 'amountIn',
  AmountInUsd = 'amountInUSD',
  AmountOut = 'amountOut',
  AmountOutUsd = 'amountOutUSD',
  BlockNumber = 'blockNumber',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Hash = 'hash',
  Id = 'id',
  LogIndex = 'logIndex',
  Nonce = 'nonce',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  ReserveAmounts = 'reserveAmounts',
  Tick = 'tick',
  Timestamp = 'timestamp',
  TokenIn = 'tokenIn',
  TokenInLargePriceChangeBuffer = 'tokenIn___largePriceChangeBuffer',
  TokenInLargeTvlImpactBuffer = 'tokenIn___largeTVLImpactBuffer',
  TokenInLastPricePool = 'tokenIn___lastPricePool',
  TokenInTotalSupply = 'tokenIn___totalSupply',
  TokenInTotalValueLockedUsd = 'tokenIn___totalValueLockedUSD',
  TokenInDecimals = 'tokenIn__decimals',
  TokenInId = 'tokenIn__id',
  TokenInLastPriceBlockNumber = 'tokenIn__lastPriceBlockNumber',
  TokenInLastPriceUsd = 'tokenIn__lastPriceUSD',
  TokenInName = 'tokenIn__name',
  TokenInSymbol = 'tokenIn__symbol',
  TokenOut = 'tokenOut',
  TokenOutLargePriceChangeBuffer = 'tokenOut___largePriceChangeBuffer',
  TokenOutLargeTvlImpactBuffer = 'tokenOut___largeTVLImpactBuffer',
  TokenOutLastPricePool = 'tokenOut___lastPricePool',
  TokenOutTotalSupply = 'tokenOut___totalSupply',
  TokenOutTotalValueLockedUsd = 'tokenOut___totalValueLockedUSD',
  TokenOutDecimals = 'tokenOut__decimals',
  TokenOutId = 'tokenOut__id',
  TokenOutLastPriceBlockNumber = 'tokenOut__lastPriceBlockNumber',
  TokenOutLastPriceUsd = 'tokenOut__lastPriceUSD',
  TokenOutName = 'tokenOut__name',
  TokenOutSymbol = 'tokenOut__symbol'
}

export type Tick = {
  __typename?: 'Tick'
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt']['output']
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt']['output']
  /**  { pool address }-{ tick index }  */
  id: Scalars['Bytes']['output']
  /**  tick index  */
  index: Scalars['BigInt']['output']
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output']
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars['Int']['output']
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output']
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output']
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output']
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['BigDecimal']['output']
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output']
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['BigDecimal']['output']
  /**  Liquidity pool this tick belongs to  */
  pool: LiquidityPool
  /**  calculated price of token0 of tick within this pool - constant  */
  prices: Array<Scalars['BigDecimal']['output']>
}

export type TickDailySnapshot = {
  __typename?: 'TickDailySnapshot'
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output']
  /**  { pool address }-{ tick index }-{ day ID }  */
  id: Scalars['Bytes']['output']
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output']
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['BigDecimal']['output']
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output']
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['BigDecimal']['output']
  /**  liquidity pool this tick belongs to  */
  pool: LiquidityPool
  /**  tick index  */
  tick: Tick
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
}

export type TickDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TickDailySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  day?: InputMaybe<Scalars['Int']['input']>
  day_gt?: InputMaybe<Scalars['Int']['input']>
  day_gte?: InputMaybe<Scalars['Int']['input']>
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day_lt?: InputMaybe<Scalars['Int']['input']>
  day_lte?: InputMaybe<Scalars['Int']['input']>
  day_not?: InputMaybe<Scalars['Int']['input']>
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<TickDailySnapshot_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick?: InputMaybe<Scalars['String']['input']>
  tick_?: InputMaybe<Tick_Filter>
  tick_contains?: InputMaybe<Scalars['String']['input']>
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tick_ends_with?: InputMaybe<Scalars['String']['input']>
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_gt?: InputMaybe<Scalars['String']['input']>
  tick_gte?: InputMaybe<Scalars['String']['input']>
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>
  tick_lt?: InputMaybe<Scalars['String']['input']>
  tick_lte?: InputMaybe<Scalars['String']['input']>
  tick_not?: InputMaybe<Scalars['String']['input']>
  tick_not_contains?: InputMaybe<Scalars['String']['input']>
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_starts_with?: InputMaybe<Scalars['String']['input']>
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum TickDailySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  Day = 'day',
  Id = 'id',
  LiquidityGross = 'liquidityGross',
  LiquidityGrossUsd = 'liquidityGrossUSD',
  LiquidityNet = 'liquidityNet',
  LiquidityNetUsd = 'liquidityNetUSD',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Tick = 'tick',
  TickCreatedBlockNumber = 'tick__createdBlockNumber',
  TickCreatedTimestamp = 'tick__createdTimestamp',
  TickId = 'tick__id',
  TickIndex = 'tick__index',
  TickLastSnapshotDayId = 'tick__lastSnapshotDayID',
  TickLastSnapshotHourId = 'tick__lastSnapshotHourID',
  TickLastUpdateBlockNumber = 'tick__lastUpdateBlockNumber',
  TickLastUpdateTimestamp = 'tick__lastUpdateTimestamp',
  TickLiquidityGross = 'tick__liquidityGross',
  TickLiquidityGrossUsd = 'tick__liquidityGrossUSD',
  TickLiquidityNet = 'tick__liquidityNet',
  TickLiquidityNetUsd = 'tick__liquidityNetUSD',
  Timestamp = 'timestamp'
}

export type TickHourlySnapshot = {
  __typename?: 'TickHourlySnapshot'
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output']
  /**  { pool address }-{ tick index }-{ hour ID }  */
  id: Scalars['Bytes']['output']
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output']
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['BigDecimal']['output']
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output']
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['BigDecimal']['output']
  /**  liquidity pool this tick belongs to  */
  pool: LiquidityPool
  /**  tick index  */
  tick: Tick
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
}

export type TickHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hour?: InputMaybe<Scalars['Int']['input']>
  hour_gt?: InputMaybe<Scalars['Int']['input']>
  hour_gte?: InputMaybe<Scalars['Int']['input']>
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hour_lt?: InputMaybe<Scalars['Int']['input']>
  hour_lte?: InputMaybe<Scalars['Int']['input']>
  hour_not?: InputMaybe<Scalars['Int']['input']>
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<TickHourlySnapshot_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick?: InputMaybe<Scalars['String']['input']>
  tick_?: InputMaybe<Tick_Filter>
  tick_contains?: InputMaybe<Scalars['String']['input']>
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tick_ends_with?: InputMaybe<Scalars['String']['input']>
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_gt?: InputMaybe<Scalars['String']['input']>
  tick_gte?: InputMaybe<Scalars['String']['input']>
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>
  tick_lt?: InputMaybe<Scalars['String']['input']>
  tick_lte?: InputMaybe<Scalars['String']['input']>
  tick_not?: InputMaybe<Scalars['String']['input']>
  tick_not_contains?: InputMaybe<Scalars['String']['input']>
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  tick_starts_with?: InputMaybe<Scalars['String']['input']>
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum TickHourlySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  Hour = 'hour',
  Id = 'id',
  LiquidityGross = 'liquidityGross',
  LiquidityGrossUsd = 'liquidityGrossUSD',
  LiquidityNet = 'liquidityNet',
  LiquidityNetUsd = 'liquidityNetUSD',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Tick = 'tick',
  TickCreatedBlockNumber = 'tick__createdBlockNumber',
  TickCreatedTimestamp = 'tick__createdTimestamp',
  TickId = 'tick__id',
  TickIndex = 'tick__index',
  TickLastSnapshotDayId = 'tick__lastSnapshotDayID',
  TickLastSnapshotHourId = 'tick__lastSnapshotHourID',
  TickLastUpdateBlockNumber = 'tick__lastUpdateBlockNumber',
  TickLastUpdateTimestamp = 'tick__lastUpdateTimestamp',
  TickLiquidityGross = 'tick__liquidityGross',
  TickLiquidityGrossUsd = 'tick__liquidityGrossUSD',
  TickLiquidityNet = 'tick__liquidityNet',
  TickLiquidityNetUsd = 'tick__liquidityNetUSD',
  Timestamp = 'timestamp'
}

export type Tick_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Tick_Filter>>>
  createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  index?: InputMaybe<Scalars['BigInt']['input']>
  index_gt?: InputMaybe<Scalars['BigInt']['input']>
  index_gte?: InputMaybe<Scalars['BigInt']['input']>
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  index_lt?: InputMaybe<Scalars['BigInt']['input']>
  index_lte?: InputMaybe<Scalars['BigInt']['input']>
  index_not?: InputMaybe<Scalars['BigInt']['input']>
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotHourID?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_not?: InputMaybe<Scalars['Int']['input']>
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGrossUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGrossUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNetUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNetUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<Tick_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  prices?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  prices_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  prices_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  prices_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  prices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  prices_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
}

export enum Tick_OrderBy {
  CreatedBlockNumber = 'createdBlockNumber',
  CreatedTimestamp = 'createdTimestamp',
  Id = 'id',
  Index = 'index',
  LastSnapshotDayId = 'lastSnapshotDayID',
  LastSnapshotHourId = 'lastSnapshotHourID',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  LiquidityGross = 'liquidityGross',
  LiquidityGrossUsd = 'liquidityGrossUSD',
  LiquidityNet = 'liquidityNet',
  LiquidityNetUsd = 'liquidityNetUSD',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Prices = 'prices'
}

export type Token = {
  __typename?: 'Token'
  _largePriceChangeBuffer: Scalars['Int']['output']
  _largeTVLImpactBuffer: Scalars['Int']['output']
  /**  last pool that gave this token a price  */
  _lastPricePool?: Maybe<Scalars['Bytes']['output']>
  /**  amount of tokens in the protocol  */
  _totalSupply: Scalars['BigInt']['output']
  /**  Total value locked in the protocol  */
  _totalValueLockedUSD: Scalars['BigDecimal']['output']
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int']['output']
  /**  Smart contract address of the token  */
  id: Scalars['Bytes']['output']
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']['output']>
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']['output']>
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String']['output']
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String']['output']
}

export enum TokenType {
  Bep20 = 'BEP20',
  Bep721 = 'BEP721',
  Bep1155 = 'BEP1155',
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155',
  Multiple = 'MULTIPLE',
  Unknown = 'UNKNOWN'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  _largePriceChangeBuffer?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_gt?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_gte?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_in?: InputMaybe<Array<Scalars['Int']['input']>>
  _largePriceChangeBuffer_lt?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_lte?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_not?: InputMaybe<Scalars['Int']['input']>
  _largePriceChangeBuffer_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  _largeTVLImpactBuffer?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_gt?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_gte?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_in?: InputMaybe<Array<Scalars['Int']['input']>>
  _largeTVLImpactBuffer_lt?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_lte?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_not?: InputMaybe<Scalars['Int']['input']>
  _largeTVLImpactBuffer_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  _lastPricePool?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_contains?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_gt?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_gte?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  _lastPricePool_lt?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_lte?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_not?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  _lastPricePool_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  _totalSupply?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  _totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>
  _totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  _totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  _totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  _totalValueLockedUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>
  decimals?: InputMaybe<Scalars['Int']['input']>
  decimals_gt?: InputMaybe<Scalars['Int']['input']>
  decimals_gte?: InputMaybe<Scalars['Int']['input']>
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>
  decimals_lt?: InputMaybe<Scalars['Int']['input']>
  decimals_lte?: InputMaybe<Scalars['Int']['input']>
  decimals_not?: InputMaybe<Scalars['Int']['input']>
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_gt?: InputMaybe<Scalars['String']['input']>
  name_gte?: InputMaybe<Scalars['String']['input']>
  name_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_lt?: InputMaybe<Scalars['String']['input']>
  name_lte?: InputMaybe<Scalars['String']['input']>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>
  symbol?: InputMaybe<Scalars['String']['input']>
  symbol_contains?: InputMaybe<Scalars['String']['input']>
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_gt?: InputMaybe<Scalars['String']['input']>
  symbol_gte?: InputMaybe<Scalars['String']['input']>
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>
  symbol_lt?: InputMaybe<Scalars['String']['input']>
  symbol_lte?: InputMaybe<Scalars['String']['input']>
  symbol_not?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
}

export enum Token_OrderBy {
  LargePriceChangeBuffer = '_largePriceChangeBuffer',
  LargeTvlImpactBuffer = '_largeTVLImpactBuffer',
  LastPricePool = '_lastPricePool',
  TotalSupply = '_totalSupply',
  TotalValueLockedUsd = '_totalValueLockedUSD',
  Decimals = 'decimals',
  Id = 'id',
  LastPriceBlockNumber = 'lastPriceBlockNumber',
  LastPriceUsd = 'lastPriceUSD',
  Name = 'name',
  Symbol = 'symbol'
}

export type UsageMetricsDailySnapshot = {
  __typename?: 'UsageMetricsDailySnapshot'
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output']
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity) in an day  */
  dailyDepositCount: Scalars['Int']['output']
  /**  Total number of trades (swaps) in an day  */
  dailySwapCount: Scalars['Int']['output']
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int']['output']
  /**  Total number of withdrawals (remove liquidity) in an day  */
  dailyWithdrawCount: Scalars['Int']['output']
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output']
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['Bytes']['output']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output']
}

export type UsageMetricsDailySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyActiveUsers?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']['input']>
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyDepositCount?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailySwapCount?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailySwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_not?: InputMaybe<Scalars['Int']['input']>
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyTransactionCount?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']['input']>
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day?: InputMaybe<Scalars['Int']['input']>
  day_gt?: InputMaybe<Scalars['Int']['input']>
  day_gte?: InputMaybe<Scalars['Int']['input']>
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>
  day_lt?: InputMaybe<Scalars['Int']['input']>
  day_lte?: InputMaybe<Scalars['Int']['input']>
  day_not?: InputMaybe<Scalars['Int']['input']>
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_Filter>>>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
}

export enum UsageMetricsDailySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  CumulativeUniqueUsers = 'cumulativeUniqueUsers',
  DailyActiveUsers = 'dailyActiveUsers',
  DailyDepositCount = 'dailyDepositCount',
  DailySwapCount = 'dailySwapCount',
  DailyTransactionCount = 'dailyTransactionCount',
  DailyWithdrawCount = 'dailyWithdrawCount',
  Day = 'day',
  Id = 'id',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  Timestamp = 'timestamp',
  TotalPoolCount = 'totalPoolCount'
}

export type UsageMetricsHourlySnapshot = {
  __typename?: 'UsageMetricsHourlySnapshot'
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output']
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output']
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output']
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int']['output']
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int']['output']
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int']['output']
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int']['output']
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int']['output']
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['Bytes']['output']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output']
}

export type UsageMetricsHourlySnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hour?: InputMaybe<Scalars['Int']['input']>
  hour_gt?: InputMaybe<Scalars['Int']['input']>
  hour_gte?: InputMaybe<Scalars['Int']['input']>
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hour_lt?: InputMaybe<Scalars['Int']['input']>
  hour_lte?: InputMaybe<Scalars['Int']['input']>
  hour_not?: InputMaybe<Scalars['Int']['input']>
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyActiveUsers?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']['input']>
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyDepositCount?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlySwapCount?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyTransactionCount?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_Filter>>>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum UsageMetricsHourlySnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  CumulativeUniqueUsers = 'cumulativeUniqueUsers',
  Hour = 'hour',
  HourlyActiveUsers = 'hourlyActiveUsers',
  HourlyDepositCount = 'hourlyDepositCount',
  HourlySwapCount = 'hourlySwapCount',
  HourlyTransactionCount = 'hourlyTransactionCount',
  HourlyWithdrawCount = 'hourlyWithdrawCount',
  Id = 'id',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  Timestamp = 'timestamp'
}

export type Withdraw = {
  __typename?: 'Withdraw'
  /**  Account that emitted this event  */
  account: Account
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
  amountUSD: Scalars['BigDecimal']['output']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output']
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Bytes']['output']
  /**  { Transaction hash }-{ Log index } */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']['output']>
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>
  /**  Amount of liquidity burned  */
  liquidity: Scalars['BigInt']['output']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output']
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output']
  /**  The pool involving this event  */
  pool: LiquidityPool
  /**  The user position changed by this event  */
  position?: Maybe<Position>
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars['BigInt']['output']>
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars['BigInt']['output']>
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output']
}

export type WithdrawInputTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Token_Filter>
}

export type Withdraw_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  account?: InputMaybe<Scalars['String']['input']>
  account_?: InputMaybe<Account_Filter>
  account_contains?: InputMaybe<Scalars['String']['input']>
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_ends_with?: InputMaybe<Scalars['String']['input']>
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_gt?: InputMaybe<Scalars['String']['input']>
  account_gte?: InputMaybe<Scalars['String']['input']>
  account_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_lt?: InputMaybe<Scalars['String']['input']>
  account_lte?: InputMaybe<Scalars['String']['input']>
  account_not?: InputMaybe<Scalars['String']['input']>
  account_not_contains?: InputMaybe<Scalars['String']['input']>
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  account_starts_with?: InputMaybe<Scalars['String']['input']>
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  and?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  hash?: InputMaybe<Scalars['Bytes']['input']>
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>
  hash_not?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  inputTokenAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_?: InputMaybe<Token_Filter>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
  liquidity?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  logIndex?: InputMaybe<Scalars['Int']['input']>
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>
  logIndex_not?: InputMaybe<Scalars['Int']['input']>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nonce?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  or?: InputMaybe<Array<InputMaybe<Withdraw_Filter>>>
  pool?: InputMaybe<Scalars['String']['input']>
  pool_?: InputMaybe<LiquidityPool_Filter>
  pool_contains?: InputMaybe<Scalars['String']['input']>
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_gt?: InputMaybe<Scalars['String']['input']>
  pool_gte?: InputMaybe<Scalars['String']['input']>
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_lt?: InputMaybe<Scalars['String']['input']>
  pool_lte?: InputMaybe<Scalars['String']['input']>
  pool_not?: InputMaybe<Scalars['String']['input']>
  pool_not_contains?: InputMaybe<Scalars['String']['input']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  pool_starts_with?: InputMaybe<Scalars['String']['input']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['String']['input']>
  position_?: InputMaybe<Position_Filter>
  position_contains?: InputMaybe<Scalars['String']['input']>
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_ends_with?: InputMaybe<Scalars['String']['input']>
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_gt?: InputMaybe<Scalars['String']['input']>
  position_gte?: InputMaybe<Scalars['String']['input']>
  position_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_lt?: InputMaybe<Scalars['String']['input']>
  position_lte?: InputMaybe<Scalars['String']['input']>
  position_not?: InputMaybe<Scalars['String']['input']>
  position_not_contains?: InputMaybe<Scalars['String']['input']>
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  position_starts_with?: InputMaybe<Scalars['String']['input']>
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol?: InputMaybe<Scalars['String']['input']>
  protocol_?: InputMaybe<DexAmmProtocol_Filter>
  protocol_contains?: InputMaybe<Scalars['String']['input']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_gt?: InputMaybe<Scalars['String']['input']>
  protocol_gte?: InputMaybe<Scalars['String']['input']>
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_lt?: InputMaybe<Scalars['String']['input']>
  protocol_lte?: InputMaybe<Scalars['String']['input']>
  protocol_not?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>
  reserveAmounts_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  tickLower?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
}

export enum Withdraw_OrderBy {
  Account = 'account',
  AccountClosedPositionCount = 'account__closedPositionCount',
  AccountDepositCount = 'account__depositCount',
  AccountId = 'account__id',
  AccountOpenPositionCount = 'account__openPositionCount',
  AccountPositionCount = 'account__positionCount',
  AccountSwapCount = 'account__swapCount',
  AccountWithdrawCount = 'account__withdrawCount',
  AmountUsd = 'amountUSD',
  BlockNumber = 'blockNumber',
  GasLimit = 'gasLimit',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Hash = 'hash',
  Id = 'id',
  InputTokenAmounts = 'inputTokenAmounts',
  InputTokens = 'inputTokens',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  Nonce = 'nonce',
  Pool = 'pool',
  PoolActiveLiquidity = 'pool__activeLiquidity',
  PoolActiveLiquidityUsd = 'pool__activeLiquidityUSD',
  PoolClosedPositionCount = 'pool__closedPositionCount',
  PoolCreatedBlockNumber = 'pool__createdBlockNumber',
  PoolCreatedTimestamp = 'pool__createdTimestamp',
  PoolCumulativeDepositCount = 'pool__cumulativeDepositCount',
  PoolCumulativeProtocolSideRevenueUsd = 'pool__cumulativeProtocolSideRevenueUSD',
  PoolCumulativeSupplySideRevenueUsd = 'pool__cumulativeSupplySideRevenueUSD',
  PoolCumulativeSwapCount = 'pool__cumulativeSwapCount',
  PoolCumulativeTotalRevenueUsd = 'pool__cumulativeTotalRevenueUSD',
  PoolCumulativeVolumeUsd = 'pool__cumulativeVolumeUSD',
  PoolCumulativeWithdrawCount = 'pool__cumulativeWithdrawCount',
  PoolId = 'pool__id',
  PoolIsSingleSided = 'pool__isSingleSided',
  PoolLastSnapshotDayId = 'pool__lastSnapshotDayID',
  PoolLastSnapshotHourId = 'pool__lastSnapshotHourID',
  PoolLastUpdateBlockNumber = 'pool__lastUpdateBlockNumber',
  PoolLastUpdateTimestamp = 'pool__lastUpdateTimestamp',
  PoolLiquidityTokenType = 'pool__liquidityTokenType',
  PoolName = 'pool__name',
  PoolOpenPositionCount = 'pool__openPositionCount',
  PoolPositionCount = 'pool__positionCount',
  PoolStakedOutputTokenAmount = 'pool__stakedOutputTokenAmount',
  PoolSymbol = 'pool__symbol',
  PoolTick = 'pool__tick',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalLiquidityUsd = 'pool__totalLiquidityUSD',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  Position = 'position',
  PositionBlockNumberClosed = 'position__blockNumberClosed',
  PositionBlockNumberOpened = 'position__blockNumberOpened',
  PositionCumulativeDepositUsd = 'position__cumulativeDepositUSD',
  PositionCumulativeWithdrawUsd = 'position__cumulativeWithdrawUSD',
  PositionDepositCount = 'position__depositCount',
  PositionHashClosed = 'position__hashClosed',
  PositionHashOpened = 'position__hashOpened',
  PositionId = 'position__id',
  PositionLiquidity = 'position__liquidity',
  PositionLiquidityTokenType = 'position__liquidityTokenType',
  PositionLiquidityUsd = 'position__liquidityUSD',
  PositionTimestampClosed = 'position__timestampClosed',
  PositionTimestampOpened = 'position__timestampOpened',
  PositionWithdrawCount = 'position__withdrawCount',
  Protocol = 'protocol',
  ProtocolRegenesis = 'protocol___regenesis',
  ProtocolActiveLiquidityUsd = 'protocol__activeLiquidityUSD',
  ProtocolCumulativePositionCount = 'protocol__cumulativePositionCount',
  ProtocolCumulativeProtocolSideRevenueUsd = 'protocol__cumulativeProtocolSideRevenueUSD',
  ProtocolCumulativeSupplySideRevenueUsd = 'protocol__cumulativeSupplySideRevenueUSD',
  ProtocolCumulativeTotalRevenueUsd = 'protocol__cumulativeTotalRevenueUSD',
  ProtocolCumulativeUniqueLPs = 'protocol__cumulativeUniqueLPs',
  ProtocolCumulativeUniqueTraders = 'protocol__cumulativeUniqueTraders',
  ProtocolCumulativeUniqueUsers = 'protocol__cumulativeUniqueUsers',
  ProtocolCumulativeVolumeUsd = 'protocol__cumulativeVolumeUSD',
  ProtocolId = 'protocol__id',
  ProtocolLastSnapshotDayId = 'protocol__lastSnapshotDayID',
  ProtocolLastUpdateBlockNumber = 'protocol__lastUpdateBlockNumber',
  ProtocolLastUpdateTimestamp = 'protocol__lastUpdateTimestamp',
  ProtocolMethodologyVersion = 'protocol__methodologyVersion',
  ProtocolName = 'protocol__name',
  ProtocolNetwork = 'protocol__network',
  ProtocolOpenPositionCount = 'protocol__openPositionCount',
  ProtocolProtocolControlledValueUsd = 'protocol__protocolControlledValueUSD',
  ProtocolSchemaVersion = 'protocol__schemaVersion',
  ProtocolSlug = 'protocol__slug',
  ProtocolSubgraphVersion = 'protocol__subgraphVersion',
  ProtocolTotalLiquidityUsd = 'protocol__totalLiquidityUSD',
  ProtocolTotalPoolCount = 'protocol__totalPoolCount',
  ProtocolTotalValueLockedUsd = 'protocol__totalValueLockedUSD',
  ProtocolType = 'protocol__type',
  ProtocolUncollectedProtocolSideValueUsd = 'protocol__uncollectedProtocolSideValueUSD',
  ProtocolUncollectedSupplySideValueUsd = 'protocol__uncollectedSupplySideValueUSD',
  ReserveAmounts = 'reserveAmounts',
  TickLower = 'tickLower',
  TickUpper = 'tickUpper',
  Timestamp = 'timestamp'
}

export type _Block_ = {
  __typename?: '_Block_'
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>
  /** The block number */
  number: Scalars['Int']['output']
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>
}

/**   Used to keep track of the price of Ether/TVL in USD, pool deposit count, and total unique users  */
export type _HelperStore = {
  __typename?: '_HelperStore'
  id: Scalars['Bytes']['output']
  /**  price of ETH/TVL in USD  */
  valueDecimal?: Maybe<Scalars['BigDecimal']['output']>
  /**  Token Prices  */
  valueDecimalList?: Maybe<Array<Scalars['BigDecimal']['output']>>
  /**  # of deposits, # of unique users  */
  valueInt?: Maybe<Scalars['Int']['output']>
}

export type _HelperStore_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<_HelperStore_Filter>>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<_HelperStore_Filter>>>
  valueDecimal?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimalList?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  valueDecimalList_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  valueDecimalList_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  valueDecimalList_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  valueDecimalList_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  valueDecimalList_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  valueDecimal_gt?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimal_gte?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  valueDecimal_lt?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimal_lte?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimal_not?: InputMaybe<Scalars['BigDecimal']['input']>
  valueDecimal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  valueInt?: InputMaybe<Scalars['Int']['input']>
  valueInt_gt?: InputMaybe<Scalars['Int']['input']>
  valueInt_gte?: InputMaybe<Scalars['Int']['input']>
  valueInt_in?: InputMaybe<Array<Scalars['Int']['input']>>
  valueInt_lt?: InputMaybe<Scalars['Int']['input']>
  valueInt_lte?: InputMaybe<Scalars['Int']['input']>
  valueInt_not?: InputMaybe<Scalars['Int']['input']>
  valueInt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
}

export enum _HelperStore_OrderBy {
  Id = 'id',
  ValueDecimal = 'valueDecimal',
  ValueDecimalList = 'valueDecimalList',
  ValueInt = 'valueInt'
}

export type _LiquidityPoolAmount = {
  __typename?: '_LiquidityPoolAmount'
  /**  Smart contract address of the pool  */
  id: Scalars['Bytes']['output']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigDecimal']['output']>
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>
  tokenPrices: Array<Scalars['BigDecimal']['output']>
}

export type _LiquidityPoolAmountInputTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<Token_Filter>
}

export type _LiquidityPoolAmount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_Filter>>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalances_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  inputTokenBalances_not_contains?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokenBalances_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_?: InputMaybe<Token_Filter>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  inputTokens_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
  or?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_Filter>>>
  tokenPrices?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  tokenPrices_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  tokenPrices_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
  tokenPrices_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  tokenPrices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>
  tokenPrices_not_contains_nocase?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >
}

export enum _LiquidityPoolAmount_OrderBy {
  Id = 'id',
  InputTokenBalances = 'inputTokenBalances',
  InputTokens = 'inputTokens',
  TokenPrices = 'tokenPrices'
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_'
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']['output']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output']
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelist = {
  __typename?: '_TokenWhitelist'
  /**  Token Address  */
  id: Scalars['Bytes']['output']
  /**  pools token is in that are white listed for USD pricing  */
  whitelistPools: Array<LiquidityPool>
}

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelistWhitelistPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPool_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LiquidityPool_Filter>
}

export type _TokenWhitelistSymbol = {
  __typename?: '_TokenWhitelistSymbol'
  /**  Whitelist Token Address */
  address: Scalars['Bytes']['output']
  /**  Whitelist Token Symbol  */
  id: Scalars['ID']['output']
}

export type _TokenWhitelistSymbol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  address?: InputMaybe<Scalars['Bytes']['input']>
  address_contains?: InputMaybe<Scalars['Bytes']['input']>
  address_gt?: InputMaybe<Scalars['Bytes']['input']>
  address_gte?: InputMaybe<Scalars['Bytes']['input']>
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  address_lt?: InputMaybe<Scalars['Bytes']['input']>
  address_lte?: InputMaybe<Scalars['Bytes']['input']>
  address_not?: InputMaybe<Scalars['Bytes']['input']>
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  and?: InputMaybe<Array<InputMaybe<_TokenWhitelistSymbol_Filter>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_gt?: InputMaybe<Scalars['ID']['input']>
  id_gte?: InputMaybe<Scalars['ID']['input']>
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>
  id_lt?: InputMaybe<Scalars['ID']['input']>
  id_lte?: InputMaybe<Scalars['ID']['input']>
  id_not?: InputMaybe<Scalars['ID']['input']>
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>
  or?: InputMaybe<Array<InputMaybe<_TokenWhitelistSymbol_Filter>>>
}

export enum _TokenWhitelistSymbol_OrderBy {
  Address = 'address',
  Id = 'id'
}

export type _TokenWhitelist_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<_TokenWhitelist_Filter>>>
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  or?: InputMaybe<Array<InputMaybe<_TokenWhitelist_Filter>>>
  whitelistPools?: InputMaybe<Array<Scalars['String']['input']>>
  whitelistPools_?: InputMaybe<LiquidityPool_Filter>
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']['input']>>
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>
  whitelistPools_not?: InputMaybe<Array<Scalars['String']['input']>>
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']['input']>>
  whitelistPools_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >
}

export enum _TokenWhitelist_OrderBy {
  Id = 'id',
  WhitelistPools = 'whitelistPools'
}

export type LiquidityPoolQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type LiquidityPoolQuery = {
  __typename?: 'Query'
  liquidityPool?: {
    __typename?: 'LiquidityPool'
    id: any
    name?: string | null
    inputTokenBalances: Array<any>
    inputTokens: Array<{
      __typename?: 'Token'
      id: any
      symbol: string
      name: string
      decimals: number
    }>
  } | null
}

export type GetPoolDailySnapshotsQueryVariables = Exact<{
  poolId: Scalars['String']['input']
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_OrderBy>
  orderDirection?: InputMaybe<OrderDirection>
}>

export type GetPoolDailySnapshotsQuery = {
  __typename?: 'Query'
  liquidityPoolDailySnapshots: Array<{
    __typename?: 'LiquidityPoolDailySnapshot'
    id: any
    timestamp: any
    inputTokenBalances: Array<any>
  }>
}

export const LiquidityPoolDocument = gql`
  query LiquidityPool($id: ID!) {
    liquidityPool(id: $id) {
      id
      name
      inputTokens {
        id
        symbol
        name
        decimals
      }
      inputTokenBalances
    }
  }
`

/**
 * __useLiquidityPoolQuery__
 *
 * To run a query within a React component, call `useLiquidityPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiquidityPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiquidityPoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLiquidityPoolQuery(
  baseOptions: Apollo.QueryHookOptions<
    LiquidityPoolQuery,
    LiquidityPoolQueryVariables
  > &
    (
      | { variables: LiquidityPoolQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LiquidityPoolQuery, LiquidityPoolQueryVariables>(
    LiquidityPoolDocument,
    options
  )
}
export function useLiquidityPoolLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LiquidityPoolQuery,
    LiquidityPoolQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LiquidityPoolQuery, LiquidityPoolQueryVariables>(
    LiquidityPoolDocument,
    options
  )
}
export function useLiquidityPoolSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        LiquidityPoolQuery,
        LiquidityPoolQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    LiquidityPoolQuery,
    LiquidityPoolQueryVariables
  >(LiquidityPoolDocument, options)
}
export type LiquidityPoolQueryHookResult = ReturnType<
  typeof useLiquidityPoolQuery
>
export type LiquidityPoolLazyQueryHookResult = ReturnType<
  typeof useLiquidityPoolLazyQuery
>
export type LiquidityPoolSuspenseQueryHookResult = ReturnType<
  typeof useLiquidityPoolSuspenseQuery
>
export type LiquidityPoolQueryResult = Apollo.QueryResult<
  LiquidityPoolQuery,
  LiquidityPoolQueryVariables
>
export const GetPoolDailySnapshotsDocument = gql`
  query GetPoolDailySnapshots(
    $poolId: String!
    $first: Int = 30
    $orderBy: LiquidityPoolDailySnapshot_orderBy = timestamp
    $orderDirection: OrderDirection = asc
  ) {
    liquidityPoolDailySnapshots(
      where: { pool: $poolId }
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      timestamp
      inputTokenBalances
    }
  }
`

/**
 * __useGetPoolDailySnapshotsQuery__
 *
 * To run a query within a React component, call `useGetPoolDailySnapshotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolDailySnapshotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolDailySnapshotsQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useGetPoolDailySnapshotsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPoolDailySnapshotsQuery,
    GetPoolDailySnapshotsQueryVariables
  > &
    (
      | { variables: GetPoolDailySnapshotsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPoolDailySnapshotsQuery,
    GetPoolDailySnapshotsQueryVariables
  >(GetPoolDailySnapshotsDocument, options)
}
export function useGetPoolDailySnapshotsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPoolDailySnapshotsQuery,
    GetPoolDailySnapshotsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPoolDailySnapshotsQuery,
    GetPoolDailySnapshotsQueryVariables
  >(GetPoolDailySnapshotsDocument, options)
}
export function useGetPoolDailySnapshotsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetPoolDailySnapshotsQuery,
        GetPoolDailySnapshotsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetPoolDailySnapshotsQuery,
    GetPoolDailySnapshotsQueryVariables
  >(GetPoolDailySnapshotsDocument, options)
}
export type GetPoolDailySnapshotsQueryHookResult = ReturnType<
  typeof useGetPoolDailySnapshotsQuery
>
export type GetPoolDailySnapshotsLazyQueryHookResult = ReturnType<
  typeof useGetPoolDailySnapshotsLazyQuery
>
export type GetPoolDailySnapshotsSuspenseQueryHookResult = ReturnType<
  typeof useGetPoolDailySnapshotsSuspenseQuery
>
export type GetPoolDailySnapshotsQueryResult = Apollo.QueryResult<
  GetPoolDailySnapshotsQuery,
  GetPoolDailySnapshotsQueryVariables
>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Protocol: ['DexAmmProtocol']
  }
}
export default result
