import { attach, createStore, Effect } from 'effector'
import { requestInternalFx, Answer, Request } from './init'

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

export { unathentificatedRequestFx, authentificatedRequestFx }

function setAuthorizationHeader(token: null | string) {
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
}
