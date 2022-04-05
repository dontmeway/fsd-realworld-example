import { Button as ChakraButton, Icon } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'

import * as model from '../model'

type Props = {
  likesCount: number
  liked: boolean
  articleSlug: string
}

export const Button: React.FC<Props> = ({ likesCount, articleSlug }) => {
  return (
    <ChakraButton
      onClick={() => model.likeButtonClicked(articleSlug)}
      leftIcon={<Icon as={AiOutlineHeart} mr="10px" />}
      border="1px solid green"
    >
      {likesCount}
    </ChakraButton>
  )
}
