import {
  Box,
  Container,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { articleModel, ArticleRow } from '@entities/article'
import { userModel } from '@entities/user'
import { MainBanner } from '@shared/ui/banner'
import { useStore } from 'effector-react'

export const HomePage = () => {
  const isAuth = useStore(userModel.$isAuthorized)
  const articles = useStore(articleModel.$articlesList)

  return (
    <div>
      <MainBanner isHidden={isAuth} />
      <Container maxW="container.xl" mt="30px">
        <Flex w="100%">
          <Box flex="1" mr="20px">
            <Tabs colorScheme="whatsapp">
              <TabList>
                <Tab>Global Feed</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {articles.map((article) => (
                    <ArticleRow key={article.slug} slug={article.slug} />
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
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
          </Box>
        </Flex>
      </Container>
    </div>
  )
}
