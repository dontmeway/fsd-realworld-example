import { createEvent, sample } from 'effector'

import { articleModel } from '@entities/article'

export const tabChanged = createEvent<string | null>()

export const $tabsList = articleModel.$tag.map((activeTag) => {
  const list: { label: string; value: string | null }[] = [
    { label: 'Global Feed', value: null },
  ]
  const tag =
    activeTag && activeTag !== 'private'
      ? { label: `#${activeTag}`, value: activeTag }
      : null
  return tag ? list.concat(tag) : list
})

sample({
  clock: tabChanged,
  target: articleModel.tagChanged,
})
