/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex } from '@chakra-ui/react'

import { Logo } from '../logo'

export const Navbar: React.FC = ({ children }) => {
  return (
    <Box
      bg="#fff"
      pos="sticky"
      top="0"
      boxShadow="0px 5px 4px -2px rgba(0,0,0,0.2)"
      zIndex={2}
    >
      <Flex
        maxW="1280px"
        w="100%"
        p="10px 15px"
        justify="space-between"
        align="center"
        m="auto"
      >
        <Logo />
        {children}
      </Flex>
    </Box>
  )
}
