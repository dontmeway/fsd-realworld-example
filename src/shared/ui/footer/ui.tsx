import { Flex, Icon, Text } from '@chakra-ui/react'
import { Link } from 'atomic-router-react'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

export const Footer = () => {
  return (
    <Flex
      justify="center"
      py="40px"
      w="100%"
      bg="linear-gradient(rgb(72, 85, 99), rgb(41, 50, 60))"
    >
      <Link to="https://github.com/dontmeway/fsd-realworld-example">
        <Flex align="center">
          <Icon h="40px" fill="#fff" as={AiFillGithub} />
          <Text color="#fff" ml="10px">
            Source code
          </Text>
        </Flex>
      </Link>
    </Flex>
  )
}
