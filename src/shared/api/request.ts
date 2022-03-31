import { createEffect } from 'effector'
import { RuntypeBase } from 'runtypes/lib/runtype'

import { authentificatedRequestFx, unathentificatedRequestFx } from './model'

import * as contract from './contracts'
import * as types from './types'

function responseGuard<T>(runtype: RuntypeBase<T>, response: unknown): T {
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
    return responseGuard(contract.loginRequestOk, response.body)
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

    return responseGuard(contract.registerRequestOk, response.body)
  },
})

export const userRequestFx = createEffect<void, types.UserRequestDone>({
  async handler() {
    const response = await authentificatedRequestFx({
      path: 'user',
      method: 'GET',
    })

    return responseGuard(contract.userRequestOk, response.body)
  },
})
