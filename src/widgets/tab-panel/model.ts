import { articleModel } from '@entities/article'
import { combine, split } from 'effector'

export const $status = combine(
  articleModel.$isLoading,
  articleModel.$articlesList,
  (is, list) => {
    if (is) return 'loading'
    if (!is && list.length === 0) return 'empty'
    return 'ready'
  }
)

split({
  source: articleModel.$tag,
  match: {
    public: (tag) => tag !== 'private',
    private: (tag) => tag === 'private',
  },
  cases: {
    public: articleModel.getArticles,
    private: articleModel.getFeedArticles,
  },
})
