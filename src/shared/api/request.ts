import { createEffect } from 'effector'
import { RuntypeBase } from 'runtypes/lib/runtype'

import { authentificatedRequestFx, unathentificatedRequestFx } from './model'

import * as contract from './contracts'
import * as types from './types'

function responseGuard<T>(
  runtypes: Record<number, RuntypeBase<T>>,
  response: { body: unknown; status: number }
): T {
  const runtype = runtypes[response.status]

  if (!runtype) throw response

  if (runtype.guard(response)) {
    return response
  }

  throw response
}

export const loginRequestFx = createEffect<
  types.LoginRequest,
  types.LoginRequestDone
>({
  async handler(params) {
    const response = await unathentificatedRequestFx({
      path: 'users/login',
      method: 'POST',
      body: { user: params },
    })

    return responseGuard({ 200: contract.loginRequestOk }, response)
  },
})

export const registerRequestFx = createEffect<
  types.RegisterRequest,
  types.RegisterRequestDone
>({
  async handler(params) {
    const response = await unathentificatedRequestFx({
      path: 'users',
      method: 'POST',
      body: { user: params },
    })

    return responseGuard({ 200: contract.registerRequestOk }, response)
  },
})

export const userRequestFx = createEffect<void, types.UserRequestDone>({
  async handler() {
    const response = await authentificatedRequestFx({
      path: 'user',
      method: 'GET',
    })

    return responseGuard({ 200: contract.userRequestOk }, response)
  },
})
