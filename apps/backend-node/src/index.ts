const dotenv = require('dotenv')
dotenv.config()

import './db'
import express from 'express'
import { ONE_HOUR, ONE_MINUTE } from './utils/time'
import { initializeAgent, runAutonomousMode, runChatMode } from './agent'
import { getBTCQuote } from './coinmarketcap'

const http = require('http')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions)) // Enable CORS for all routes

// Add root route handler
app.get('/', (req, res) => {
  res.send('OmniAgent is Running')
})

// Create an HTTP server using Express app
const httpServer = http.createServer(app)

async function startAgent() {
  try {
    const { agent, config } = await initializeAgent()

    const btcQuoteTest = await getBTCQuote()

    console.log('BTC Quote:', btcQuoteTest)

    // Run in autonomous mode since this is a server
    console.log('Starting agent in autonomous mode...')
    await runAutonomousMode(agent, config)
    // await runChatMode(agent, config)
  } catch (error) {
    console.error('Failed to initialize agent:', error)
  }
}

// Start the HTTP server
const PORT = process.env.PORT || 8000
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)

  console.log(`WebSocket server ready at ws://localhost:${PORT}`)

  startAgent()
})
