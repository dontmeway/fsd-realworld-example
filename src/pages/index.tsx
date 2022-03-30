import { MainLayout } from '@shared/ui/layout/main'
import { Route } from 'atomic-router-react'

import * as routes from '@shared/routes'

import { HomePage } from './home'
import { SignInPage } from './signin'

export const Routing = () => {
  return (
    <MainLayout>
      <Route view={HomePage} route={routes.homeRoute} />
      <Route view={SignInPage} route={routes.signInRoute} />
    </MainLayout>
  )
}
