import { ChakraProvider } from '@chakra-ui/react'
import { MainTheme } from '@shared/config/chakra-themes'

export const withChakra = (component: () => React.ReactNode) => () => {
  return <ChakraProvider theme={MainTheme}>{component()}</ChakraProvider>
}
