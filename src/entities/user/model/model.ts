import { attach } from 'effector'

import * as api from '@shared/api'

const loginRequestFx = attach({ effect: api.loginRequestFx })

export { loginRequestFx }
