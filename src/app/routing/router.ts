import { createHistoryRouter } from 'atomic-router'

import { routes, history } from '@shared/routes'

const router = createHistoryRouter({ routes })

router.setHistory(history)

export { router }
