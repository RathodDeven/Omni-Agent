import type { Token } from '@coinbase/onchainkit/token'

export const APP_NAME = '🤖 OMNI Agent'
export const IPFS_ENDPOINT = 'https://4everland.io/ipfs/'
export const IMAGE_KIT_ENDPOINT = 'https://ik.imagekit.io/kopveel8c'
export const DEFAULT_THEME: 'light' | 'dark' = 'light'
export const GRAPHQL_ENDPOINT = `https://gateway.thegraph.com/api/253d0633ad8639678af503483ab5b801/subgraphs/id/FUbEPQw1oMghy39fwWBFY5fE6MXPXZQtjncQy2cXdrNS`
export const POOL_ID = '0xaaE056f7b0e618b18ED07FD6322FB68d1B2D976a'

export const weth: Token = {
  name: 'WETH',
  address: '0x4200000000000000000000000000000000000006',
  symbol: 'WETH',
  decimals: 18,
  image:
    'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/weth_288.png',
  chainId: 8453
}

export const eth: Token = {
  name: 'ETH',
  address: '',
  symbol: 'ETH',
  decimals: 18,
  image:
    'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
  chainId: 8453
}

export const omni: Token = {
  name: 'OMNI',
  address: '0xa27D37dbe5B92478b45e9A3C92DC1D3517A55BD0',
  symbol: 'OMNI',
  decimals: 18,
  image: '/logo.png',
  chainId: 8453
}
