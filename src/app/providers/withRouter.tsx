import { RouterProvider } from 'atomic-router-react'

import { router } from '../routing'

export const withRouter = (component: () => React.ReactNode) => () => {
  return <RouterProvider router={router}>{component()}</RouterProvider>
}
