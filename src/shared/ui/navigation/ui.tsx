/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'atomic-router-react'
import { FaEdit } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'

import * as routes from '@shared/routes'

type Props = {
  user: import('@shared/api').User | null
  isAuth: boolean
}

export const Navigation: React.FC<Props> = ({ isAuth, user }) => {
  return (
    <Flex align="center">
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.homeRoute}
      >
        <Link>Home</Link>
      </RouterLink>
      <Links user={user} isAuth={isAuth} />
    </Flex>
  )
}

const Link: React.FC = ({ children }) => {
  return (
    <Text d="flex" alignItems="center" fontSize="16px" mx="15px">
      {children}
    </Text>
  )
}

const Links = ({ isAuth, user }: Props) => {
  return isAuth ? (
    <>
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.signInRoute}
      >
        <Link>
          <Icon mr="10px" as={FaEdit} /> New article
        </Link>
      </RouterLink>
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.signUpRoute}
      >
        <Link>
          <Icon mr="10px" as={IoIosSettings} /> Settings
        </Link>
      </RouterLink>
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.myArticlesRoute}
        params={{ slug: user?.username || '' }}
      >
        <Link>
          <Avatar size="xs" mr="10px" src={user?.image} /> {user?.username}
        </Link>
      </RouterLink>
    </>
  ) : (
    <>
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.signInRoute}
      >
        <Link>Sign in</Link>
      </RouterLink>
      <RouterLink
        className="navbar-link"
        activeClassName="navbar-active-link"
        to={routes.signUpRoute}
      >
        <Link>Sign up</Link>
      </RouterLink>
    </>
  )
}
