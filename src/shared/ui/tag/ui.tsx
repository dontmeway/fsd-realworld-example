import { Text, TextProps } from '@chakra-ui/react'

type Props = {
  title: string
  onClick: () => void
  bg?: string
  color?: string
  border?: string
}

export const Tag: React.FC<Props & TextProps> = ({
  onClick,
  title,
  bg = '#818a91',
  color = '#fff',
  border = 'none',
  ...props
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
      mb="4px"
      cursor="pointer"
      _notLast={{ mr: '5px' }}
      {...props}
    >
      {title}
    </Text>
  )
}
