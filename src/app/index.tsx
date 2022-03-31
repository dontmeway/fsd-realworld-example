import { useEffect } from 'react'

import { Routing } from '@pages/index'
import { userModel } from '@entities/user'
import { withProviders } from './providers'

import './index.css'

function App() {
  useEffect(() => {
    userModel.appStarted()
  }, [])

  return <Routing />
}

export default withProviders(App)
