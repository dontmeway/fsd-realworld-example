import { createEvent, sample } from 'effector'

import type * as types from '@shared/api'
import { userModel } from '@entities/user'
import * as routes from '@shared/routes'

const formSubmitted = createEvent<types.RegisterRequest>()

sample({
  clock: formSubmitted,
  target: userModel.registerFx,
})

sample({
  clock: userModel.registerFx.doneData,
  target: routes.homeRoute.open,
})

export { formSubmitted }
