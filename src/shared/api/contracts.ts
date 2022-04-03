import * as typed from 'typed-contracts'

export const user = typed.object({
  email: typed.string,
  username: typed.string,
  image: typed.string,
  token: typed.string,
  bio: typed.union(typed.nul, typed.string),
})

export const article = typed.object({
  author: typed.object({
    following: typed.boolean,
    bio: typed.union(typed.nul, typed.string),
    image: typed.string,
    username: typed.string,
  }),
  body: typed.string,
  createdAt: typed.string,
  description: typed.string,
  favorited: typed.boolean,
  favoritesCount: typed.number,
  slug: typed.string,
  title: typed.string,
  updatedAt: typed.string,
  tagList: typed.array(typed.string),
})

export const loginRequestOk = typed.object({
  user,
})

export const loginRequestBadRequest = typed.object({
  errors: typed.object({
    'email or password': typed.array(typed.string),
  }),
})

export const registerRequestOk = loginRequestOk
export const userRequestOk = loginRequestOk
export const articlesRequestOk = typed.object({
  articles: typed.array(article),
  articlesCount: typed.number,
})
