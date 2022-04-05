import { useStore } from 'effector-react'
import { Container } from '@chakra-ui/react'

import { TabPanel } from '@widgets/tab-panel'
import { userModel } from '@entities/user'
import { MainBanner } from '@shared/ui/banner'

export const HomePage = () => {
  const isAuth = useStore(userModel.$isAuthorized)

  return (
    <div>
      <MainBanner isHidden={isAuth} />
      <Container maxW="container.xl" mt="30px">
        <TabPanel />
      </Container>
    </div>
  )
}
