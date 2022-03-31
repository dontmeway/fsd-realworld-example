import * as typed from 'runtypes'

import * as contract from './contracts'

export type LoginRequest = {
  email: string
  password: string
}

export type RegisterRequest = {
  username: string
  email: string
  password: string
}

export type LoginRequestDone = typed.Static<typeof contract.loginRequestOk>
export type RegisterRequestDone = typed.Static<
  typeof contract.registerRequestOk
>
export type UserRequestDone = typed.Static<typeof contract.userRequestOk>

export type User = typed.Static<typeof contract.user>
