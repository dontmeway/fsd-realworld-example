import * as typed from 'typed-contracts'

export const user = typed.object({
  email: typed.string,
  username: typed.string,
  image: typed.string,
  token: typed.string,
  bio: typed.union(typed.nul, typed.string),
})

export const loginRequestOk = typed.object({
  user,
})

export const loginRequestBadRequest = typed.object({
  errors: typed.object({
    'email or password': typed.array(typed.string),
  }),
})

export const registerRequestOk = loginRequestOk
export const userRequestOk = loginRequestOk
