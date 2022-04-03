import { sample } from 'effector'

import * as routes from '@shared/routes'
import { articleModel } from '@entities/article'

sample({
  clock: routes.homeRoute.opened,
  target: articleModel.getArticles,
})
