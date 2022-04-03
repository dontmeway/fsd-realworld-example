import type * as types from '@shared/api'

export function normalizr(array: Readonly<types.Article[]>) {
  return array.reduce<Record<string, types.Article>>(
    (acc, next) => ({ ...acc, [next.slug]: next }),
    {}
  )
}
