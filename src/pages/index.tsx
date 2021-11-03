import { Text, Flex, Center } from '@chakra-ui/react'
import AspectRatioComponent from '../components/AspectRadio/index'
import CenterComponent from '../components/Center/index'
import ContainerComponent from '../components/Container/index'
import Header from '../components/Header/index'

export default function Home() {
  return (
    <>
    <Header />
      <Flex
        borderColor="red.200"
        borderWidth="1px"
        w={["sm", "md", "lg", "xl", "2xl"]}
        // h="500px"
        mx="auto" my="1rem"
        p={4}
      >
        <Text as='h1'>Sou um H1</Text>
      </Flex>
      {/* <AspectRatioComponent /> */}
      {/* <CenterComponent /> */}
      <ContainerComponent />
    </>
  )
}
