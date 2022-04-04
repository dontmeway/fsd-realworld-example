import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'
import { list, variant } from '@effector/reflect'

import { SelectTags } from '@features/select-tags'
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

const Articles = list({
  view: ArticleRow,
  source: articleModel.$articlesList,
  mapItem: {
    slug: (article) => article.slug,
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
