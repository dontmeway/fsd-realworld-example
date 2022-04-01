import { createEvent, sample } from 'effector'

import { userModel } from '@entities/user'
import * as routes from '@shared/routes'

import type * as types from '@shared/api'
import { errorToast } from '@shared/lib/toast'

const errors: Record<string, string> = {
  bad_request: 'Invalid email or password',
}

const formSubmitted = createEvent<types.LoginRequest>()

sample({
  clock: formSubmitted,
  target: userModel.loginFx,
})

sample({
  clock: userModel.loginFx.doneData,
  target: routes.homeRoute.open,
})

sample({
  clock: userModel.loginFx.failData,
  fn: (res) => errors[res.status] || 'Unexpected error',
  target: errorToast,
})

export { formSubmitted }
