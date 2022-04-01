import { Flex, Spinner } from '@chakra-ui/react'
import { useStore } from 'effector-react'

import { Routing } from '@pages/index'
import { userModel } from '@entities/user'

import { withProviders } from './providers'

import './index.css'

function App() {
  const isLoading = useStore(userModel.$isLoading)

  if (isLoading) return <Loading />

  return <Routing />
}

function Loading() {
  return (
    <Flex h="100%" w="100%" align="center" justify="center">
      <Spinner colorScheme="whatsapp" size="lg" />
    </Flex>
  )
}

export default withProviders(App)
