import { createEffect } from 'effector'
import axios from 'axios'

import { unathentificatedRequestFx } from './model'
import * as types from './types'

export const loginRequestFx = createEffect({
  async handler(params: types.LoginRequest) {
    // const response = await unathentificatedRequestFx({
    //   path: 'users/login',
    //   method: 'POST',
    //   body: { user: params },
    // })
    const resp = await axios.post('https://api.realworld.io/api/users/login', {
      user: { params },
    })
    return resp
  },
})
