/* eslint-disable effector/enforce-effect-naming-convention */
/* eslint-disable no-throw-literal */
import { createEffect } from 'effector'
import * as typed from 'typed-contracts'

import { authentificatedRequestFx, unathentificatedRequestFx } from './model'

import * as contracts from './contracts'
import * as types from './types'

type ErrorCodes = 403

function parseByStatus<
  Variants extends string,
  Contracts extends Record<number, [Variants, typed.Contract<any>]>,
  Result extends {
    [Code in keyof Contracts]: Contracts[Code] extends [
      infer Status,
      typed.Contract<infer T>
    ]
      ? { status: Status; answer: T }
      : never
  }
>(
  name: string,
  response: { status: number; body?: unknown },
  contractsObject: Contracts
): Result[Exclude<keyof Result, ErrorCodes>] {
  const contractObject = contractsObject[response.status]
  if (!contractObject) {
    throw {
      status: 'unknown_status',
      error: {
        status: response.status,
        body: response.body,
      },
    }
  }
  const [status, contract] = contractObject
  const answer = contract(name, response.body)
  if (answer instanceof typed.ValidationError) {
    const error = { status: 'validation_error', error: answer }
    console.log(error)
    throw error
  }

  if (response.status >= 400) {
    throw { status, error: answer }
  }
  return { status, answer } as Result[Exclude<keyof Result, ErrorCodes>]
}

//* ******************************************** */

export const loginRequest = createEffect<
  types.LoginRequest,
  types.LoginRequestDone,
  types.LoginRequestFail
>({
  async handler(params) {
    const name = 'loginRequest.body'
    try {
      const response = await unathentificatedRequestFx({
        path: 'users/login',
        method: 'POST',
        body: { user: params },
      })

      return parseByStatus(name, response, {
        200: ['ok', contracts.loginRequestOk],
      })
    } catch (errorResponse) {
      return parseByStatus(
        name,
        errorResponse as { status: number; body: unknown },
        {
          403: ['bad_request', contracts.loginRequestBadRequest],
        }
      )
    }
  },
})

export const registerRequest = createEffect<
  types.RegisterRequest,
  types.RegisterRequestDone
>({
  async handler(params) {
    const name = 'registerRequest.body'
    const response = await unathentificatedRequestFx({
      path: 'users',
      method: 'POST',
      body: { user: params },
    })

    return parseByStatus(name, response, {
      200: ['ok', contracts.registerRequestOk],
    })
  },
})

export const userRequest = createEffect<void, types.UserRequestDone>({
  async handler() {
    const name = 'userRequest.body'
    const response = await authentificatedRequestFx({
      path: 'user',
      method: 'GET',
    })

    return parseByStatus(name, response, {
      200: ['ok', contracts.userRequestOk],
    })
  },
})

export const articlesRequest = createEffect<
  types.ArticlesRequest,
  types.ArticlesRequestDone
>({
  async handler({ query = '' }) {
    const name = 'articlesRequest.body'
    const response = await authentificatedRequestFx({
      path: `articles${query}`,
      method: 'GET',
    })

    return parseByStatus(name, response, {
      200: ['ok', contracts.articlesRequestOk],
    })
  },
})

export const articlesFeedRequest = createEffect<
  void,
  types.ArticlesFeedRequestDone
>({
  async handler() {
    const name = 'articlesFeedRequest.body'
    const response = await authentificatedRequestFx({
      path: 'articles/feed',
      method: 'GET',
    })

    return parseByStatus(name, response, {
      200: ['ok', contracts.articlesFeedRequestOk],
    })
  },
})

export const articlesFavoriteRequest = createEffect({
  async handler(params: types.ArticlesFavoriteRequest) {
    const name = 'articlesFavoriteRequest.body'
    const path = `articles/${params.slug}/favorite`
    const response = await authentificatedRequestFx({ path, method: 'POST' })

    return parseByStatus(name, response, {
      200: ['ok', contracts.articlesFavoriteRequestOk],
    })
  },
})

export const articlesUnfavoriteRequest = createEffect({
  async handler(params: types.ArticlesFavoriteRequest) {
    const name = 'articlesUnfavoriteRequest.body'
    const path = `articles/${params.slug}/favorite`
    const response = await authentificatedRequestFx({ path, method: 'DELETE' })

    return parseByStatus(name, response, {
      200: ['ok', contracts.articlesUnfavoriteRequestOk],
    })
  },
})
