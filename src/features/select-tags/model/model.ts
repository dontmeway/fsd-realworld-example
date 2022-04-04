import { articleModel } from '@entities/article'
import { createEvent, createStore, sample } from 'effector'

const DEFAULT_TAGS = [
  'welcome',
  'implementations',
  'codebaseShow',
  'introduction',
]

export const tagChanged = createEvent<string>()

export const $tags = createStore(DEFAULT_TAGS)
sample({
  clock: tagChanged,
  target: articleModel.tagChanged,
})
