import * as typed from 'runtypes'

export const user = typed.Record({
  email: typed.String,
  username: typed.String,
  image: typed.String,
  token: typed.String,
  bio: typed.Union(typed.Null, typed.Unknown),
})

export const loginRequestOk = typed.Record({
  user,
})

export const registerRequestOk = loginRequestOk
export const userRequestOk = loginRequestOk
