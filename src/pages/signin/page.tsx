import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'atomic-router-react'

import * as routes from '@shared/routes'
import { SignInForm } from '@features/signin'

export const SignInPage = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      m="auto"
      maxW="570px"
      w="100%"
      p="15px"
      mt="40px"
    >
      <Box mb="20px">
        <Heading fontSize={42} fontWeight="500" mb="15px">
          Sign in
        </Heading>
        <Link to={routes.signUpRoute}>
          <Text fontSize="16px" color="#5CB85C">
            Need an account?
          </Text>
        </Link>
      </Box>
      <SignInForm />
    </Flex>
  )
}
