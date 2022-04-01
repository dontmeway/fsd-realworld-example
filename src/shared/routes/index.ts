import { createRoute } from 'atomic-router'

export const homeRoute = createRoute()
export const signInRoute = createRoute()
export const signUpRoute = createRoute()
export const createArticleRoute = createRoute()
export const editArticleRoute = createRoute<{ articleSlug: string }>()
export const settingsRoute = createRoute()
export const articleRoute = createRoute<{ slug: string }>()
export const profileRoute = createRoute()
export const myArticlesRoute = createRoute<{ slug: string }>()
export const favoritesRoute = createRoute<{ slug: string }>()

export const routes = [
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
  // {
  //   path: '/editor',
  //   view: createArticleRoute,
  // },
  // {
  //   path: '/editor/:articleSlug',
  //   route: editArticleRoute,
  // },
  {
    path: '/settings',
    route: settingsRoute,
  },
  {
    path: '/profile/:slug*',
    route: profileRoute,
  },
  {
    path: '/profile/:slug',
    route: myArticlesRoute,
  },
  {
    path: '/profile/:slug/favorites',
    route: favoritesRoute,
  },
]
