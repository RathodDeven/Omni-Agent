'use client'
import React from 'react'

interface WaitForMountWrapperProps {
  children: React.ReactNode
}

const WaitForMountWrapper = ({ children }: WaitForMountWrapperProps) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // If you need to wait for other libraries, perform their initialization checks here.
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner, e.g. <div>Loading...</div>
  }

  return <>{children}</>
}

export default WaitForMountWrapper
