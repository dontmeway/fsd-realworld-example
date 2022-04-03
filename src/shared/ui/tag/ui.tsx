import { Text } from '@chakra-ui/react'

type Props = {
  title: string
  onClick: () => void
  bg?: string
  color?: string
  border?: string
}

export const Tag: React.FC<Props> = ({
  onClick,
  title,
  bg = '#818a91',
  color = '#fff',
  border = 'none',
}) => {
  return (
    <Text
      p="4px 6px"
      borderRadius="30px"
      bg={bg}
      color={color}
      onClick={onClick}
      border={border}
      fontSize="10px"
      _notLast={{ mr: '5px' }}
    >
      {title}
    </Text>
  )
}
