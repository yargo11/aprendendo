import { Flex, Text, Center, SimpleGrid } from '@chakra-ui/react'
import Projeto from './Projeto'

export default function Projetos() {
    return (
        <Flex w='100%' maxW='1250px' m='auto' direction='column'>
            <Text as='h1' py='1rem' mx={['auto', '0']}>Meus trabalhos</Text>
            <SimpleGrid minChildWidth='300px' spacing='40px' as='h3' pb='3rem'>
                <Projeto projeto={'TJRN'} anchor={'/'}/>
                <Projeto projeto={'LGPD'} anchor={'/'}/>
                <Projeto projeto={'Revista TJRN'} anchor={'/'}/>
                <Projeto projeto={'PotiLab'} anchor={'/'}/>
                <Projeto projeto={'Raul Oliveira'} anchor={'/'}/>                
            </SimpleGrid>
        </Flex>
    )
}