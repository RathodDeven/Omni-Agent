import React from 'react'
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box
} from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'

// Dummy data for historical trades
const historicalTrades = [
  {
    date: '2024-02-09 09:30',
    token: 'BTC',
    action: 'BUY',
    size: '0.1',
    profitLoss: '+0.8%'
  },
  {
    date: '2024-02-09 11:15',
    token: 'BTC',
    action: 'SELL',
    size: '0.15',
    profitLoss: '-0.3%'
  },
  {
    date: '2024-02-09 13:45',
    token: 'BTC',
    action: 'BUY',
    size: '0.05',
    profitLoss: '+0.6%'
  },
  {
    date: '2024-02-09 15:20',
    token: 'BTC',
    action: 'SELL',
    size: '0.12',
    profitLoss: '-0.4%'
  },
  {
    date: '2024-02-09 17:00',
    token: 'BTC',
    action: 'BUY',
    size: '0.08',
    profitLoss: '+0.9%'
  }
]

// Dummy data for performance chart
const performanceData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-02-${i + 1}`,
  dailyProfit: Math.random() * 1000,
  cumulativeROI: 100 + i * 15 + Math.random() * 50
}))

export default function AIInsights() {
  return (
    <div className="p-6 bg-p-bg min-h-screen">
      {/* AI Strategy Overview */}
      <Paper className="p-6 mb-6 bg-s-bg rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <AutoGraphIcon className="text-blue-500 text-3xl" />
          <Typography variant="h5" className="text-p-text">
            AI Strategy Overview
          </Typography>
        </div>
        <Typography className="text-s-text text-lg">
          Our AI agents utilize advanced machine learning algorithms to detect
          emerging trends in meme coins and token markets. By analyzing social
          sentiment, trading volumes, and price patterns, we identify optimal
          entry and exit points for maximum profit potential.
        </Typography>
      </Paper>

      {/* Historical Trades Table */}
      <Paper className="p-6 mb-6 bg-s-bg rounded-xl">
        <Typography variant="h5" className="mb-4 text-p-text">
          Historical Trades
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-s-text font-medium">Date</TableCell>
              <TableCell className="text-s-text font-medium">Token</TableCell>
              <TableCell className="text-s-text font-medium">Action</TableCell>
              <TableCell className="text-s-text font-medium">Size</TableCell>
              <TableCell className="text-s-text font-medium">
                Profit/Loss
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historicalTrades.map((trade, index) => (
              <TableRow key={index}>
                <TableCell className="text-p-text">{trade.date}</TableCell>
                <TableCell className="text-p-text">{trade.token}</TableCell>
                <TableCell className="text-p-text">
                  <span
                    className={
                      trade.action === 'BUY' ? 'text-green-500' : 'text-red-500'
                    }
                  >
                    {trade.action}
                  </span>
                </TableCell>
                <TableCell className="text-p-text">{trade.size}</TableCell>
                <TableCell className="text-green-500 font-medium">
                  {trade.profitLoss}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Performance Charts */}
      <Paper className="p-6 bg-s-bg rounded-xl">
        <Typography variant="h5" className="mb-4 text-p-text">
          Performance Analytics
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Box>
            <Typography variant="h6" className="mb-4 text-s-text">
              Daily Profit
            </Typography>
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ background: '#1a1a1a', border: 'none' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="dailyProfit"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Box>
          <Box>
            <Typography variant="h6" className="mb-4 text-s-text">
              Cumulative ROI
            </Typography>
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                  <XAxis dataKey="date" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{ background: '#1a1a1a', border: 'none' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cumulativeROI"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Box>
        </div>
      </Paper>
    </div>
  )
}
