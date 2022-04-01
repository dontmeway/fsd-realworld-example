import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { sample } from 'effector'

import App from '@app/index'
import { userModel } from '@entities/user'
import { getTokenFx } from '@shared/api'

sample({
  clock: getTokenFx.doneData,
  filter: Boolean,
  target: userModel.userFx,
})

getTokenFx()

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
