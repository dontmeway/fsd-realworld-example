import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
} from '@chakra-ui/react'
import { Link } from 'atomic-router-react'
import { IoIosSettings } from 'react-icons/io'

import * as routes from '@shared/routes'

type Props = {
  username: string | undefined
  image: string | undefined
}

export const ProfileBanner: React.FC<Props> = ({ username, image }) => {
  return (
    <Flex bg="#f3f3f3" justify="center" align="center" py="40px" w="100%">
      <Container maxW="container.xl" textAlign="right">
        <Flex flexDir="column" align="center" mb="10px">
          <Avatar src={image} mb="15px" size="2xl" />
          <Heading>{username}</Heading>
        </Flex>
        <Link to={routes.settingsRoute}>
          <Button
            p="8px 10px"
            bg="#fff"
            variant="ghost"
            border="1px solid #000"
          >
            <Icon as={IoIosSettings} mr="5px" />
            Edit Profile Settings
          </Button>
        </Link>
      </Container>
    </Flex>
  )
}
