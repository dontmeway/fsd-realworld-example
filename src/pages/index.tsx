import { Route } from 'atomic-router-react'
import { variant } from '@effector/reflect'

import { MainLayout } from '@widgets/layout/main'
import { userModel } from '@entities/user'
import * as routes from '@shared/routes'

import { HomePage } from './home'
import { SignInPage } from './signin'
import { SignUpPage } from './signup'
import { ProfilePage } from './profile'
import { SettingsPage } from './settings'
import { CreateArticlePage, EditArticlePage } from './editor'
import { ArticlePage } from './article'

export const Routing = () => {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  )
}
const PrivateRoutes = () => {
  return (
    <>
      <Route view={HomePage} route={routes.homeRoute} />
      <Route view={ArticlePage} route={routes.articleRoute} />
      <Route view={CreateArticlePage} route={routes.createArticleRoute} />
      <Route view={EditArticlePage} route={routes.editArticleRoute} />
      <Route view={SettingsPage} route={routes.settingsRoute} />
      <Route view={ProfilePage} route={routes.profileRoute} />
    </>
  )
}

const PublicRoutes = () => {
  return (
    <>
      <Route view={HomePage} route={routes.homeRoute} />
      <Route view={ArticlePage} route={routes.articleRoute} />
      <Route view={SignInPage} route={routes.signInRoute} />
      <Route view={SignUpPage} route={routes.signUpRoute} />
    </>
  )
}

const $isPrivate = userModel.$isAuthorized.map((is) =>
  is ? 'private' : 'public'
)

const Routes = variant({
  source: $isPrivate,
  cases: {
    private: PrivateRoutes,
    public: PublicRoutes,
  },
})
