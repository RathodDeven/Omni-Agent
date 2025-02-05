import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import {
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'

// Dummy data for charts
const priceData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-02-${i + 1}`,
  price: 3.5 + Math.random() * 0.5
}))

const roiData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-02-${i + 1}`,
  roi: Math.floor(100 + Math.random() * 50)
}))

const recentTrades = [
  { id: 1, token: 'PEPE', type: 'BUY', amount: '1000', profit: '+2.3%' },
  { id: 2, token: 'WOJAK', type: 'SELL', amount: '500', profit: '+1.7%' },
  { id: 3, token: 'DOGE', type: 'BUY', amount: '750', profit: '+3.1%' }
]

const Dashboard = () => {
  return (
    <div className="p-6 bg-p-bg">
      {/* Portfolio Overview */}
      <Paper className="p-6 mb-6 bg-s-bg">
        <Typography variant="h5" className="mb-4 text-p-text">
          Portfolio Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography className="text-s-text">Your OMNI Balance</Typography>
            <Typography variant="h6" className="text-p-text">
              123.45 OMNI
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-s-text">USD Value</Typography>
            <Typography variant="h6" className="text-p-text">
              $456.78
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-s-text">Current Price</Typography>
            <Typography variant="h6" className="text-p-text">
              $3.70
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-s-text">Share in Pool</Typography>
            <Typography variant="h6" className="text-p-text">
              5.3%
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Charts Section */}
      <Grid container spacing={3} className="mb-6">
        <Grid item xs={12} md={6}>
          <Paper className="p-4 bg-s-bg">
            <Typography variant="h6" className="mb-4 text-p-text">
              OMNI Price
            </Typography>
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="p-4 bg-s-bg">
            <Typography variant="h6" className="mb-4 text-p-text">
              ROI Performance
            </Typography>
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="roi" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Trades */}
      <Paper className="p-4 bg-s-bg">
        <Typography variant="h6" className="mb-4 text-p-text">
          Recent AI Trades
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentTrades.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell>{trade.token}</TableCell>
                <TableCell>{trade.type}</TableCell>
                <TableCell>{trade.amount}</TableCell>
                <TableCell className="text-green-500">{trade.profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default Dashboard
