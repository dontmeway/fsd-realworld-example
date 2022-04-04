import * as typed from 'typed-contracts'

import * as contracts from './contracts'

export type LoginRequest = {
  email: string
  password: string
}

export type RegisterRequest = {
  username: string
  email: string
  password: string
}

export type LoginRequestDone = {
  status: 'ok'
  answer: typed.Get<typeof contracts.loginRequestOk>
}
export type LoginRequestFail = {
  status: 'bad_request'
  error: typed.Get<typeof contracts.loginRequestBadRequest>
}

export type RegisterRequestDone = {
  status: 'ok'
  answer: typed.Get<typeof contracts.registerRequestOk>
}
export type UserRequestDone = {
  status: 'ok'
  answer: typed.Get<typeof contracts.userRequestOk>
}

export type User = typed.Get<typeof contracts.user>
export type Article = typed.Get<typeof contracts.article>
export type ArticlesRequestDone = {
  status: 'ok'
  answer: typed.Get<typeof contracts.articlesRequestOk>
}

export type ArticlesRequest = {
  query?: string
}

export type ArticlesFeedRequestDone = {
  status: 'ok'
  answer: typed.Get<typeof contracts.articlesFeedRequestOk>
}
