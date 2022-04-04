import queryString from 'query-string'

import type * as types from '@shared/api'

export function normalizr(array: Readonly<types.Article[]>) {
  return array.reduce<Record<string, types.Article>>(
    (acc, next) => ({ ...acc, [next.slug]: next }),
    {}
  )
}

export const getQueryString = (
  config: Record<string, string | null | number>
) => {
  const query = queryString.stringify(config, { skipNull: true })
  return query !== '' ? `?${query}` : ''
}
