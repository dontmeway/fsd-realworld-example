import { Button as ChakraButton, Icon } from '@chakra-ui/react'
import { useStore } from 'effector-react'
import { AiOutlineHeart } from 'react-icons/ai'

import * as model from '../model'

type Props = {
  likesCount: number
  liked: boolean
  articleSlug: string
}

export const Button: React.FC<Props> = ({ likesCount, articleSlug, liked }) => {
  const isLoading = useStore(model.$isLoading)
  const slug = useStore(model.$lastModifiedArticleSlug)

  return (
    <ChakraButton
      isLoading={isLoading && articleSlug === slug}
      onClick={() => model.likeButtonClicked({ liked, slug: articleSlug })}
      leftIcon={<Icon as={AiOutlineHeart} mr="10px" />}
      border="1px solid green"
    >
      {likesCount}
    </ChakraButton>
  )
}
