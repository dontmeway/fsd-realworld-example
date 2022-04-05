import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'
import { list, variant } from '@effector/reflect'

import { SelectTags } from '@features/select-tags'
import { LikeButton } from '@features/like-article'
import { Tabs } from '@features/tabs'
import { articleModel, ArticleRow } from '@entities/article'

import * as model from './model'

export const TabPanel = () => {
  return (
    <Flex w="100%">
      <Box flex="1" mr="20px">
        <Tabs />
        <ArticlesList />
      </Box>
      <SelectTags />
    </Flex>
  )
}

type Props = {
  articleSlug: string
  liked: boolean
  likesCount: number
}

const Article: React.FC<Props> = ({ articleSlug, liked, likesCount }) => {
  return (
    <ArticleRow
      articleSlug={articleSlug}
      likeButton={
        <LikeButton
          articleSlug={articleSlug}
          likesCount={likesCount}
          liked={liked}
        />
      }
    />
  )
}

const Articles = list({
  view: Article,
  source: articleModel.$articlesList,
  mapItem: {
    articleSlug: (article) => article.slug,
    liked: (article) => article.favorited,
    likesCount: (article) => article.favoritesCount,
  },
  getKey: (article) => article.slug,
})

const Loader = () => {
  return (
    <Flex justify="center" align="center" minH="400px">
      <Spinner color="green" size="lg" />
    </Flex>
  )
}

const Empty = () => {
  return (
    <Flex justify="center" align="center" minH="400px">
      <Heading color="green.500">There is no articles...</Heading>
    </Flex>
  )
}

const ArticlesList = variant({
  source: model.$status,
  cases: {
    loading: Loader,
    ready: Articles,
    empty: Empty,
  },
})
