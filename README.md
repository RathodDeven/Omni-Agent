# Omni Agent

## Overview

Omni Agent is an AI-powered trading system that leverages advanced machine learning algorithms to generate profits through strategic trading on the Base network. The system uses CoinMarketCap's API for real-time price data and implements conservative trading strategies with clear profit targets and loss limits.

## Key Features

### AI Trading Strategy

- Real-time BTC market analysis using CoinMarketCap API
- Conservative profit target: +1%
- Strict loss limit: -0.5%
- 24-hour price movement analysis
- Volume and market pattern recognition
- Optimal entry/exit point detection

### Smart Contract Integration

- Utilizes Coinbase Developer Platform (CDP) AgentKit
- Secure wallet connections on Base network
- Automated swap functionalities
- Located in `apps/backend-node`

### $OMNI Token

$OMNI tokens allow holders to participate in the AI agent's success:

- Automated buybacks from trading profits
- Liquidity provision to OMNI/ETH pair
- Strategic trading across Base, Starknet, and Arbitrum
- Continuous price optimization through yield strategies

### Uniswap Pool

ETH/OMNI pool available on Uniswap (Base):

- Pool Address: [0xaaE056f7b0e618b18ED07FD6322FB68d1B2D976a](https://app.uniswap.org/explore/pools/base/0xaaE056f7b0e618b18ED07FD6322FB68d1B2D976a)

## Project Structure

```
apps/
├── backend-node/    # AI trading logic & CDP AgentKit integration
├── web/            # NextJS frontend application
└── contract/       # OMNI token smart contracts
```

### Technology Stack

- Frontend: Next.js
- Backend: Node.js with CDP AgentKit
- Network: Base Mainnet
- DEX: Uniswap V3

## Note

Current trading activities shown in the interface are simulations to demonstrate the strategy's potential. The system is designed to showcase optimal trading patterns without actual capital deployment.
