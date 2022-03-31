import { createEvent, sample } from 'effector'

import { userModel } from '@entities/user'
import type * as types from '@shared/api'

const formSubmitted = createEvent<types.LoginRequest>()

sample({
  clock: formSubmitted,
  target: userModel.loginRequestFx,
})

export { formSubmitted }
