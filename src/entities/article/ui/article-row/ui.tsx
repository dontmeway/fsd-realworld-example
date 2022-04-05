import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Tag } from '@shared/ui/tag'
import { Link } from 'atomic-router-react'
import dayjs from 'dayjs'
import { useStoreMap } from 'effector-react'

import * as routes from '@shared/routes'

import * as model from '../../model'

type Props = {
  likeButton: React.ReactNode
  articleSlug: string
}

export const Row: React.FC<Props> = ({ articleSlug, likeButton }) => {
  const article = useStoreMap({
    store: model.$articles,
    keys: [articleSlug],
    fn: (articles, [id]) => articles[id],
  })

  if (!article) return null

  return (
    <Box py="15px" _notLast={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
      <Flex justify="space-between" mb="15px" align="center">
        <Flex align="center">
          <Link
            to={routes.myArticlesRoute}
            params={{ slug: article.author.username }}
          >
            <Avatar size="md" src={article.author.image} mr="8px" />
          </Link>
          <Box>
            <Link
              to={routes.myArticlesRoute}
              params={{ slug: article.author.username }}
            >
              <Heading
                color="#5CB85C"
                as="h6"
                fontSize="16px"
                fontWeight={400}
                mb="4px"
              >
                {article.author.username}
              </Heading>
            </Link>
            <Text fontSize={14}>
              {dayjs(article.createdAt).format('MMMM DD, YYYY')}
            </Text>
          </Box>
        </Flex>
        {likeButton}
      </Flex>
      <Link to={routes.articleRoute} params={{ slug: article.slug }}>
        <Heading as="h4" fontSize="24px" mb="10px">
          {article.title}
        </Heading>
        <Text fontSize={16} color="#999" mb="20px">
          {article.body}
        </Text>
      </Link>
      <Flex justify="space-between" align="center">
        <Link to={routes.articleRoute} params={{ slug: article.slug }}>
          <Text fontSize="12px" color="#999">
            Read more...
          </Text>
        </Link>
        <Flex>
          {article.tagList.map((tag) => (
            <Tag
              key={tag}
              bg="#fff"
              color="#999"
              border="1px solid #999"
              title={tag}
              onClick={() => null}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
