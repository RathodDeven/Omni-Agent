import {
  AgentKit,
  wethActionProvider,
  walletActionProvider,
  erc20ActionProvider,
  cdpApiActionProvider,
  cdpWalletActionProvider,
  pythActionProvider,
  ViemWalletProvider
} from '@coinbase/agentkit'

import { getLangChainTools } from '@coinbase/agentkit-langchain'
import { HumanMessage } from '@langchain/core/messages'
import { MemorySaver } from '@langchain/langgraph'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { ChatOpenAI } from '@langchain/openai'
import * as readline from 'readline'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { base } from 'viem/chains'
import { buyBtcProvider } from './actions/BuyBtcActionProvider'

/**
 * Initialize the agent with CDP Agentkit
 *
 * @returns Agent executor and config
 */
export async function initializeAgent() {
  try {
    // Initialize LLM
    const llm = new ChatOpenAI({
      model: 'gpt-4o-mini'
    })

    // @ts-ignore
    const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY)

    const client = createWalletClient({
      account,
      chain: base,
      transport: http()
    })

    const walletProvider = new ViemWalletProvider(client)

    // Initialize AgentKit
    const agentkit = await AgentKit.from({
      walletProvider,
      actionProviders: [
        buyBtcProvider(),
        wethActionProvider(),
        pythActionProvider(),
        walletActionProvider()
        // erc20ActionProvider(),
        // cdpApiActionProvider({
        //   apiKeyName: process.env.CDP_API_KEY_NAME,
        //   apiKeyPrivateKey: process.env.CDP_API_KEY_PRIVATE_KEY?.replace(
        //     /\\n/g,
        //     '\n'
        //   )
        // }),
        // cdpWalletActionProvider({
        //   apiKeyName: process.env.CDP_API_KEY_NAME,
        //   apiKeyPrivateKey: process.env.CDP_API_KEY_PRIVATE_KEY?.replace(
        //     /\\n/g,
        //     '\n'
        //   )
        // })
      ]
    })

    const tools = await getLangChainTools(agentkit)

    // Store buffered conversation history in memory
    const memory = new MemorySaver()
    const agentConfig = {
      configurable: { thread_id: 'CDP AgentKit Chatbot Example!' }
    }

    // Create React Agent using the LLM and CDP AgentKit tools
    const agent = createReactAgent({
      llm,
      tools,
      checkpointSaver: memory,
      messageModifier: `
        You are a helpful agent that can interact onchain using the Coinbase Developer Platform AgentKit. You are 
        empowered to interact onchain using your tools. If you ever need funds, you can request them from the 
        faucet if you are on network ID 'base-sepolia'. If not, you can provide your wallet details and request 
        funds from the user. Before executing your first action, get the wallet details to see what network 
        you're on. If there is a 5XX (internal) HTTP error code, ask the user to try again later. If someone 
        asks you to do something you can't do with your currently available tools, you must say so, and 
        encourage them to implement it themselves using the CDP SDK + Agentkit, recommend they go to 
        docs.cdp.coinbase.com for more information. Be concise and helpful with your responses. Refrain from 
        restating your tools' descriptions unless it is explicitly requested.
        `
    })

    return { agent, config: agentConfig }
  } catch (error) {
    console.error('Failed to initialize agent:', error)
    throw error // Re-throw to be handled by caller
  }
}

/**
 * Run the agent autonomously with specified intervals
 */
export async function runAutonomousMode(
  agent: any,
  config: any,
  interval = 3600 // 2 hour
) {
  console.log('Starting autonomous mode...')

  while (true) {
    try {
      const thought =
        'Show wallet details & Choose buy_btc action, call buy_btc action even though the wallet may not have any funds, you need to called buy_btc action anyway as I am testing out right now and execute it that highlights your abilities.'

      const stream = await agent.stream(
        { messages: [new HumanMessage(thought)] },
        config
      )

      for await (const chunk of stream) {
        if ('agent' in chunk) {
          console.log(chunk.agent.messages[0].content)
        } else if ('tools' in chunk) {
          console.log(chunk.tools.messages[0].content)
        }
        console.log('-------------------')
      }

      await new Promise((resolve) => setTimeout(resolve, interval * 1000))
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message)
      }
      process.exit(1)
    }
  }
}

/**
 * Run the agent interactively based on user input
 */
export async function runChatMode(agent: any, config: any) {
  console.log("Starting chat mode... Type 'exit' to end.")

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = (prompt: string): Promise<string> =>
    new Promise((resolve) => rl.question(prompt, resolve))

  try {
    while (true) {
      const userInput = await question('\nPrompt: ')

      if (userInput.toLowerCase() === 'exit') {
        break
      }

      const stream = await agent.stream(
        { messages: [new HumanMessage(userInput)] },
        config
      )

      for await (const chunk of stream) {
        if ('agent' in chunk) {
          console.log(chunk.agent.messages[0].content)
        } else if ('tools' in chunk) {
          console.log(chunk.tools.messages[0].content)
        }
        console.log('-------------------')
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
    process.exit(1)
  } finally {
    rl.close()
  }
}

/**
 * Choose whether to run in autonomous or chat mode
 */
async function chooseMode(): Promise<'chat' | 'auto'> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = (prompt: string): Promise<string> =>
    new Promise((resolve) => rl.question(prompt, resolve))

  while (true) {
    console.log('\nAvailable modes:')
    console.log('1. chat    - Interactive chat mode')
    console.log('2. auto    - Autonomous action mode')

    const choice = (await question('\nChoose a mode (enter number or name): '))
      .toLowerCase()
      .trim()

    if (choice === '1' || choice === 'chat') {
      rl.close()
      return 'chat'
    } else if (choice === '2' || choice === 'auto') {
      rl.close()
      return 'auto'
    }
    console.log('Invalid choice. Please try again.')
  }
}

/**
 * Main entry point
 */
async function main() {
  try {
    const { agent, config } = await initializeAgent()
    const mode = await chooseMode()

    if (mode === 'chat') {
      await runChatMode(agent, config)
    } else {
      await runAutonomousMode(agent, config)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message)
    }
    process.exit(1)
  }
}
