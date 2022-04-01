import { attach, createStore, sample } from 'effector'

import * as api from '@shared/api'
import type * as types from '@shared/api'

export const loginRequestFx = attach({ effect: api.loginRequestFx })
export const registerRequestFx = attach({ effect: api.registerRequestFx })
export const userRequestFx = attach({ effect: api.userRequestFx })

export const $user = createStore<types.User | null>(null)

export const $isAuthorized = $user.map(Boolean)
export const $isLoading = userRequestFx.pending

$user
  .on(loginRequestFx.doneData, (_, payload) => payload.user)
  .on(registerRequestFx.doneData, (_, payload) => payload.user)
  .on(userRequestFx.doneData, (_, payload) => payload.user)

sample({
  clock: [loginRequestFx.doneData, registerRequestFx.doneData],
  fn: (response) => response.user.token,
  target: api.tokenChanged,
})
