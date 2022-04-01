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
      <Route view={SettingsPage} route={routes.settingsRoute} />
      <Route view={ProfilePage} route={routes.profileRoute} />
    </>
  )
}

const PublicRoutes = () => {
  return (
    <>
      <Route view={HomePage} route={routes.homeRoute} />
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
  bind: { isAuthorized: userModel.$isAuthorized },
  cases: {
    private: PrivateRoutes,
    public: PublicRoutes,
  },
})
