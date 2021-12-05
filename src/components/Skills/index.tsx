import {
    Flex, Text, List,
    SimpleGrid,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

export default function Skills() {
    return (
        <Flex w='100%' maxW='1250px' m='auto' direction='column'>
            <Text as='h1' py='1rem' mx={['auto', '0']}>Conhecimentos</Text>
            <SimpleGrid minChildWidth='300px' spacing='40px' as='h3' pb='3rem'>
                <Text>VSCode</Text>
                <Text>ReactJS</Text>
                <Text>Chakra-UI</Text>
                <Text>Git</Text>
                <Text>NextJS</Text>
                <Text>React Native</Text>
                <Text>NodeJS</Text>
            </SimpleGrid>
        </Flex>
    )
}