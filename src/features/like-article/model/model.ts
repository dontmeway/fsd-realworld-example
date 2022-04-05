import { articleModel } from '@entities/article'
import { userModel } from '@entities/user'
import * as routes from '@shared/routes'
import { attach, createEvent, sample } from 'effector'

export const likeButtonClicked = createEvent<string>()
const likeArticleFx = attach({
  effect: articleModel.articlesFavoriteFx,
  mapParams: (slug: string) => ({ slug }),
})

sample({
  clock: likeButtonClicked,
  source: userModel.$isAuthorized,
  filter: (is) => is,
  fn: (_, slug) => slug,
  target: likeArticleFx,
})

sample({
  clock: likeButtonClicked,
  source: userModel.$isAuthorized,
  filter: (is) => !is,
  fn: () => ({ query: {}, params: {} }),
  target: routes.signInRoute.open,
})
