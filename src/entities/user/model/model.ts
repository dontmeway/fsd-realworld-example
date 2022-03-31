import { attach, createEvent, createStore, sample } from 'effector'

import * as api from '@shared/api'
import type * as types from '@shared/api'

const appStarted = createEvent()

const loginRequestFx = attach({ effect: api.loginRequestFx })
const registerRequestFx = attach({ effect: api.registerRequestFx })
const userRequestFx = attach({ effect: api.userRequestFx })

const $user = createStore<types.User | null>(null)

const $isAuthorized = $user.map(Boolean)
const $isLoading = userRequestFx.pending

$user
  .on(loginRequestFx.doneData, (_, payload) => payload.user)
  .on(registerRequestFx.doneData, (_, payload) => payload.user)
  .on(userRequestFx.doneData, (_, payload) => payload.user)

sample({
  clock: [loginRequestFx.doneData, registerRequestFx.doneData],
  fn: (response) => response.user.token,
  target: api.tokenChanged,
})

sample({
  clock: appStarted,
  target: userRequestFx,
})

export {
  $isAuthorized,
  loginRequestFx,
  registerRequestFx,
  appStarted,
  $isLoading,
  $user,
}
