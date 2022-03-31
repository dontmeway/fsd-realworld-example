import {
  attach,
  createEffect,
  createEvent,
  createStore,
  Effect,
  sample,
} from 'effector'

import { requestInternalFx, Answer, Request } from './init'

export const tokenChanged = createEvent<string | null>()

const setTokenFx = createEffect(setToken)
export const getTokenFx = createEffect(getToken)

const $token = createStore<null | string>(null)

const authentificatedRequestFx: Effect<
  Omit<Request, 'headers'>,
  Answer,
  Answer
> = attach({
  source: $token,
  mapParams: (params, token) => ({
    ...params,
    ...setAuthorizationHeader(token),
  }),
  effect: requestInternalFx,
})
const unathentificatedRequestFx = attach({ effect: requestInternalFx })

$token
  .on(tokenChanged, (_, payload) => payload)
  .on(getTokenFx.doneData, (_, payload) => payload)

sample({
  clock: [$token],
  target: setTokenFx,
})

export { unathentificatedRequestFx, authentificatedRequestFx }

function setAuthorizationHeader(token: null | string) {
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
}

function setToken(token: string | null) {
  if (token) localStorage.setItem('fsd-token', token)
}

function getToken() {
  return localStorage.getItem('fsd-token')
}
