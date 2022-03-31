import { reflect } from '@effector/reflect'
import { Box, Flex } from '@chakra-ui/react'

import { userModel } from '@entities/user'
import { Footer } from '@shared/ui/footer'
import { Navbar } from '@shared/ui/navbar'
import { Navigation } from '@shared/ui/navigation'

type Props = {
  isAuth: boolean
  user: import('@shared/api').User | null
}

const View: React.FC<Props> = ({ children, isAuth, user }) => {
  return (
    <Flex h="100%" flexDir="column">
      <Navbar>
        <Navigation isAuth={isAuth} user={user} />
      </Navbar>
      <Box w="100%" flex="2">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export const MainLayout = reflect({
  bind: { isAuth: userModel.$isAuthorized, user: userModel.$user },
  view: View,
})
