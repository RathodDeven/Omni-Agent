import React from 'react'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { APP_NAME } from '../utils/config'
const Home = () => {
  return (
    <div className="h-full centered-col">
      <div className="text-xl font-bold py-10">Your Project : {APP_NAME} </div>
      <div className="text-xl">
        Start editing by modifying{' '}
        <code className="text-red-400">components/wrappers/UILayout.tsx</code> &{' '}
        <code className="text-red-400">app/page.tsx</code>
      </div>
      <div className="text-xl font-bold py-10 between-row gap-x-2">
        Mui Icon :{' '}
        <div className="text-blue-400">
          <CelebrationIcon />
        </div>{' '}
      </div>
      <div className="text-xl font-bold py-10 between-row gap-x-2">
        Mui Button:
        <>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </>
      </div>
    </div>
  )
}

export default Home
