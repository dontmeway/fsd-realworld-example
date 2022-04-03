import { createStore } from 'effector'

const DEFAULT_TAGS = [
  'welcome',
  'implementations',
  'codebaseShow',
  'introduction',
]

export const $tags = createStore(DEFAULT_TAGS)
