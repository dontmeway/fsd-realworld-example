import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from '@app/index'
import { getTokenFx } from '@shared/api'
// import reportWebVitals from './reportWebVitals';

getTokenFx()

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

// reportWebVitals(console.log);
