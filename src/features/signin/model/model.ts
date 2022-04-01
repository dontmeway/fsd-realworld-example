import { createEvent, sample } from 'effector'

import { userModel } from '@entities/user'
import * as routes from '@shared/routes'
import type * as types from '@shared/api'

const errors: Record<number, string> = {
  403: 'Invalid email or password',
}

const formSubmitted = createEvent<types.LoginRequest>()

sample({
  clock: formSubmitted,
  target: userModel.loginRequestFx,
})

sample({
  clock: userModel.loginRequestFx.doneData,
  target: routes.homeRoute.open,
})

// sample({
//   clock: userModel.loginRequestFx.failData,
//   fn: (res) => res.
// })

export { formSubmitted }
