import { attach, createStore, sample } from 'effector'

import * as api from '@shared/api'
import type * as types from '@shared/api'

export const loginFx = attach({ effect: api.loginRequest })
export const registerFx = attach({ effect: api.registerRequest })
export const userFx = attach({ effect: api.userRequest })

export const $user = createStore<types.User | null>(null)

export const $isAuthorized = $user.map(Boolean)
export const $isLoading = userFx.pending

$user
  .on(loginFx.doneData, (_, { answer }) => answer.user)
  .on(registerFx.doneData, (_, { answer }) => answer.user)
  .on(userFx.doneData, (_, { answer }) => answer.user)

sample({
  clock: [loginFx.doneData, registerFx.doneData],
  fn: ({ answer }) => answer.user.token,
  target: api.tokenChanged,
})
