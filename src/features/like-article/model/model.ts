import { createEvent, createStore, sample } from 'effector'
import { condition } from 'patronum/condition'
import { pending } from 'patronum/pending'

import { articleModel } from '@entities/article'
import { userModel } from '@entities/user'
import * as routes from '@shared/routes'

type LikeButtonParams = {
  slug: string
  liked: boolean
}

export const likeButtonClicked = createEvent<LikeButtonParams>()

export const $lastModifiedArticleSlug = createStore<null | string>(null)

export const $isLoading = pending({
  effects: [articleModel.articlesFavoriteFx, articleModel.articlesUnfavoriteFx],
})

$lastModifiedArticleSlug
  .on(likeButtonClicked, (_, payload) => payload.slug)
  .reset([
    articleModel.articlesFavoriteFx.finally,
    articleModel.articlesUnfavoriteFx.finally,
  ])

condition({
  source: sample({
    clock: likeButtonClicked,
    source: userModel.$isAuthorized,
    filter: Boolean,
    fn: (_, clk) => clk,
  }),
  if: (clk) => clk.liked,
  then: articleModel.articlesUnfavoriteFx.prepend<LikeButtonParams>(
    ({ slug }) => ({ slug })
  ),
  else: articleModel.articlesFavoriteFx.prepend<LikeButtonParams>(
    ({ slug }) => ({ slug })
  ),
})

sample({
  clock: likeButtonClicked,
  source: userModel.$isAuthorized,
  filter: (is) => !is,
  fn: () => ({ query: {}, params: {} }),
  target: routes.signInRoute.open,
})
