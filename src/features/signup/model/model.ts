import { createEvent, sample } from 'effector'

import type * as types from '@shared/api'
import { userModel } from '@entities/user'

const formSubmitted = createEvent<types.RegisterRequest>()

sample({
  clock: formSubmitted,
  target: userModel.registerRequestFx,
})

export { formSubmitted }
