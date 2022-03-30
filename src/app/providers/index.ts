import compose from 'compose-function'

import { withChakra } from './withChakra'
import { withRouter } from './withRouter'

export const withProviders = compose(withRouter, withChakra)
