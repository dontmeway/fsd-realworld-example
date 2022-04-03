import { attach, createEvent, createStore, sample } from 'effector'

import * as api from '@shared/api'
import type * as types from '@shared/api'

import * as lib from './lib'

export const getArticles = createEvent()

const articlesFx = attach({ effect: api.articlesRequest })

export const $articles = createStore<Record<string, types.Article>>({})
export const $articlesList = $articles.map(Object.values)

$articles.on(articlesFx.doneData, (_, { answer }) =>
  lib.normalizr(answer.articles)
)

sample({
  clock: getArticles,
  target: articlesFx,
})
