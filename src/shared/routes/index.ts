import { createRoute } from 'atomic-router'

const homeRoute = createRoute()
const signInRoute = createRoute()
const signUpRoute = createRoute()

const routes = [
  {
    path: '/',
    route: homeRoute,
  },
  {
    path: '/signin',
    route: signInRoute,
  },
  {
    path: '/signup',
    route: signUpRoute,
  },
]

export { routes, homeRoute, signInRoute, signUpRoute }
