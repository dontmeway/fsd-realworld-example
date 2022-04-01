import * as typed from 'runtypes'

export const user = typed.Record({
  email: typed.String,
  username: typed.String,
  image: typed.String,
  token: typed.String,
  bio: typed.Union(typed.Null, typed.Unknown),
})

export const loginRequestOk = typed.Record({
  body: typed.Record({
    user,
  }),
  status: typed.Number,
})

export const loginRequestFail = typed.Record({
  status: typed.Number,
  body: typed.Record({
    errors: typed.Record({
      'email or password': typed.Array(typed.String),
    }),
  }),
})

export const registerRequestOk = loginRequestOk
export const userRequestOk = loginRequestOk
