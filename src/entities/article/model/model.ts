import { attach, combine, createEvent, createStore, sample } from 'effector'

import * as api from '@shared/api'
import type * as types from '@shared/api'

import * as lib from './lib'

export const tagChanged = createEvent<string | null>()
export const getArticles = createEvent()
export const getFeedArticles = createEvent()

export const $articles = createStore<Record<string, types.Article>>({})
export const $articlesList = $articles.map(Object.values)
export const $tag = createStore<string | null>(null)

const $query = combine({ tag: $tag }).map(lib.getQueryString)

const articlesFx = attach({
  effect: api.articlesRequest,
  source: $query,
  mapParams: (_, query) => ({ query }),
})

const articlesFeedFx = attach({ effect: api.articlesFeedRequest })

export const $isLoading = combine(
  [articlesFeedFx.pending, articlesFx.pending],
  (pendings) => pendings.some(Boolean)
)

$articles
  .on(articlesFx.doneData, (_, { answer }) => lib.normalizr(answer.articles))
  .on(articlesFeedFx.doneData, (_, { answer }) =>
    lib.normalizr(answer.articles)
  )

$tag.on(tagChanged, (_, payload) => payload)

sample({
  clock: getArticles,
  target: articlesFx,
})

sample({
  clock: getFeedArticles,
  target: articlesFeedFx,
})
