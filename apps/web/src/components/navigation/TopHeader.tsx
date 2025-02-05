import React from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { APP_NAME } from '@/src/utils/config'
import { useTheme } from '../wrappers/TailwindThemeProvider'
import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const TopHeader = () => {
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Trade', path: '/trade' },
    { name: 'AI Insights', path: '/ai-insights' }
  ]

  return (
    <div className="flex flex-row items-center justify-between p-5 bg-s-bg">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold">{APP_NAME}</div>
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-s-text hover:text-p-text transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-8">
        <ConnectButton />
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </div>
  )
}

export default TopHeader
