import { userModel } from '@entities/user'
import { createEvent, sample } from 'effector'

export type FormFields = {
  email: string
  password: string
}

const formSubmitted = createEvent<FormFields>()

sample({
  clock: formSubmitted,
  target: userModel.loginRequestFx,
})

export { formSubmitted }
