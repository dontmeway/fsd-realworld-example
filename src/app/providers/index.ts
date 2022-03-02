import compose from 'compose-function'

import { withChakra } from './withChakra'

export const withProviders = compose(withChakra)
