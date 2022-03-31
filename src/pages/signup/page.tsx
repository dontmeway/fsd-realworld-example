import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'atomic-router-react'

import { SignUpForm } from '@features/signup'
import * as routes from '@shared/routes'

export const SignUpPage = () => {
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
          Sign up
        </Heading>
        <Link to={routes.signInRoute}>
          <Text fontSize="16px" color="#5CB85C">
            Have an account?
          </Text>
        </Link>
      </Box>
      <SignUpForm />
    </Flex>
  )
}
