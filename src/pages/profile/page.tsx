import { Link, Route } from 'atomic-router-react'

import * as routes from '@shared/routes'
import { FavoritesPage } from './favorites'
import { RootPage } from './root'

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      <br />
      <Link params={{ slug: 'first1' }} to={routes.favoritesRoute}>
        go to favorites
      </Link>
      <Route route={routes.myArticlesRoute} view={RootPage} />
      <Route route={routes.favoritesRoute} view={FavoritesPage} />
    </div>
  )
}
