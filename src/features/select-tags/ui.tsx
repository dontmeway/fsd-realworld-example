import { Box, Heading } from '@chakra-ui/react'

export const SelectTags: React.FC = () => {
  return (
    <Box maxW="200px" w="100%" p="10px" bg="#f3f3f3" borderRadius="4px">
      <Heading fontWeight={500} as="h4" fontSize="15px" mb="5px">
        Popular Tags
      </Heading>
    </Box>
  )
}
