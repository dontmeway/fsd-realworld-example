import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { fonts } from './fonts'
import { global } from './global'

const MainTheme = extendTheme({
  styles: { global },
  colors,
  fonts,
})

export default MainTheme
