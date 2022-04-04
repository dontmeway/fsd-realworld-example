import { Box, Flex, Heading } from '@chakra-ui/react'
import { reflect } from '@effector/reflect'
import { articleModel } from '@entities/article'
import { Tag } from '@shared/ui/tag'

import * as model from './model'

type Props = {
  tags: string[]
  activeTag: string | null
}

export const View: React.FC<Props> = ({ activeTag, tags }) => {
  return (
    <Box
      maxW="200px"
      w="100%"
      h="max-content"
      p="10px"
      bg="#f3f3f3"
      borderRadius="4px"
    >
      <Heading fontWeight={500} as="h4" fontSize="15px" mb="5px">
        Popular Tags
      </Heading>
      <Flex wrap="wrap">
        {tags.map((tag) => (
          <Tag
            textDecor={tag === activeTag ? 'underline' : ''}
            title={tag}
            key={tag}
            onClick={() => model.tagChanged(tag)}
          />
        ))}
      </Flex>
    </Box>
  )
}

export const SelectTags = reflect({
  bind: {
    tags: model.$tags,
    activeTag: articleModel.$tag,
  },
  view: View,
})
