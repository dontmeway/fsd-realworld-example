import { Heading } from '@chakra-ui/react'
import { Link } from 'atomic-router-react'

import * as routes from '@shared/routes'

export const Logo = () => {
  return (
    <Heading fontSize="22px" fontWeight="600" color="#5CB85C">
      <Link to={routes.homeRoute}>conduit</Link>
    </Heading>
  )
}
