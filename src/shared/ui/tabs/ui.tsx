import { Tab, TabList, TabPanels, Tabs as ChakraTabs } from '@chakra-ui/react'

type Props = {
  tabsList: string[]
  onTabChange: (tabIndex: number) => void
  tabIndex: number
}

export const Tabs: React.FC<Props> = ({
  tabsList,
  children,
  onTabChange,
  tabIndex,
}) => {
  return (
    <ChakraTabs colorScheme="whatsapp" onChange={onTabChange} index={tabIndex}>
      <TabList>
        {tabsList.map((item) => (
          <Tab key={item}>{item}</Tab>
        ))}
      </TabList>
      <TabPanels>{children}</TabPanels>
    </ChakraTabs>
  )
}
