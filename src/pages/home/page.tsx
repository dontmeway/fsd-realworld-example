import { useStore } from 'effector-react'
import { Button, Container } from '@chakra-ui/react'

import { TabPanel } from '@widgets/tab-panel'
import { userModel } from '@entities/user'
import { MainBanner } from '@shared/ui/banner'
import { history } from '@shared/routes'

export const HomePage = () => {
  const isAuth = useStore(userModel.$isAuthorized)

  return (
    <div>
      <MainBanner isHidden={isAuth} />
      <Button
        onClick={() =>
          history.push({
            search: 'tab=hello',
          })
        }
      >
        Click
      </Button>
      <Container maxW="container.xl" mt="30px">
        <TabPanel />
      </Container>
    </div>
  )
}
