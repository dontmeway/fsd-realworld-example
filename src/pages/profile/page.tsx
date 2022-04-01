import { useStore } from 'effector-react'
import { Link, Route } from 'atomic-router-react'

import { ProfileBanner, userModel } from '@entities/user'
import * as routes from '@shared/routes'

import { FavoritesPage } from './favorites'
import { RootPage } from './root'

export const ProfilePage = () => {
  const user = useStore(userModel.$user)
  return (
    <div>
      <ProfileBanner username={user?.username} image={user?.image} />
      <br />
      <Link params={{ slug: 'first1' }} to={routes.favoritesRoute}>
        go to favorites
      </Link>
      <Route route={routes.myArticlesRoute} view={RootPage} />
      <Route route={routes.favoritesRoute} view={FavoritesPage} />
    </div>
  )
}
