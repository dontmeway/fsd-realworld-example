/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'atomic-router-react'

import * as routes from '@shared/routes'

import { Logo } from '../logo'

export const Navbar: React.FC = () => {
  return (
    <Box pos="sticky" top="0" boxShadow="0px 5px 4px -2px rgba(0,0,0,0.2)">
      <Flex
        maxW="1280px"
        w="100%"
        p="10px 15px"
        justify="space-between"
        align="center"
        m="auto"
      >
        <Logo />
        <Box>
          <RouterLink to={routes.homeRoute}>
            <Link>Home</Link>
          </RouterLink>
          <RouterLink to={routes.signInRoute}>
            <Link>Sign in</Link>
          </RouterLink>
          <RouterLink to={routes.signUpRoute}>
            <Link>Sign up</Link>
          </RouterLink>
        </Box>
      </Flex>
    </Box>
  )
}

const Link: React.FC = ({ children }) => {
  return (
    <Text d="inline" fontSize="16px" mx="15px">
      {children}
    </Text>
  )
}
