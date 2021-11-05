import { Text, Flex, Divider } from '@chakra-ui/react'
import CoverAndAvatar from '../components/CoverAndAvatar'
import Header from '../components/Header/index'
import MyMenu from '../components/MyMenu'

export default function Home() {
  return (
    <Flex
      direction='column'
      >
      <Header />
      <CoverAndAvatar />
      <Flex w='100%' justify='center' my={4}>
        <Text as='h1'>
          Yargo Valério
        </Text>
      </Flex>
      <Divider  maxW='90%' w="1250px" m='auto'/>
      <MyMenu />
    </Flex>
  )
}
