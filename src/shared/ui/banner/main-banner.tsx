import { Container, Flex, Heading, Text } from '@chakra-ui/react'

type Props = {
  isHidden: boolean
}

export const MainBanner: React.FC<Props> = ({ isHidden }) => {
  if (isHidden) return null

  return (
    <Flex
      align="center"
      justify="center"
      bg="#5CB85C"
      py="30px"
      w="100%"
      boxShadow="lg"
    >
      <Container maxW="container.xl" textAlign="center" color="#fff">
        <Heading mb="8px" fontSize="50px" letterSpacing="1.2px">
          conduit
        </Heading>
        <Text fontSize="24px">A place to share your knowledge.</Text>
      </Container>
    </Flex>
  )
}
