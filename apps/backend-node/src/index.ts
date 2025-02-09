const dotenv = require('dotenv')
dotenv.config()

import './db'
import express from 'express'
import { ONE_HOUR, ONE_MINUTE } from './utils/time'

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

// Start the HTTP server
const PORT = process.env.PORT || 8000
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)

  console.log(`WebSocket server ready at ws://localhost:${PORT}`)

  setInterval(() => {
    console.log('Ping every 30seconds')
  }, ONE_MINUTE / 2)
})
