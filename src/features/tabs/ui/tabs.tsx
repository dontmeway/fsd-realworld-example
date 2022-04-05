import { Box, Button, ButtonProps } from '@chakra-ui/react'
import { reflect } from '@effector/reflect'

import { articleModel } from '@entities/article'
import { userModel } from '@entities/user'

import * as model from '../model'

type Props = {
  isAuth: boolean
  list: Array<{ label: string; value: string | null }>
  activeTag: string | null
}

export const View: React.FC<Props> = ({ isAuth, list, activeTag }) => {
  return (
    <Box w="100%" borderBottom="1px solid #aaa">
      {isAuth && (
        <Item
          onClick={() => model.tabChanged('private')}
          isActive={activeTag === 'private'}
        >
          Your Feed
        </Item>
      )}
      {list.map(({ label, value }) => (
        <Item
          key={label}
          onClick={() => model.tabChanged(value)}
          isActive={value === activeTag}
        >
          {label}
        </Item>
      ))}
    </Box>
  )
}

export const Tabs = reflect({
  bind: {
    isAuth: userModel.$isAuthorized,
    list: model.$tabsList,
    activeTag: articleModel.$tag,
  },
  view: View,
})

type ItemProps = {
  isActive: boolean
  onClick: () => void
}

const Item: React.FC<ItemProps> = ({ children, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      mr="10px"
      variant="unstyled"
      {...getActiveStyle(isActive)}
    >
      {children}
    </Button>
  )
}

function getActiveStyle(is: boolean): ButtonProps {
  return {
    color: is ? '#5CB85C' : '#aaa',
    _hover: {
      color: is ? '' : '#555',
    },
    borderBottom: is ? '2px solid #5CB85C' : '',
    p: '8px 10px',
    borderRadius: 0,
    _focus: {
      outline: 'none',
    },
  }
}
