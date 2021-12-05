import { Center, Link } from '@chakra-ui/react'

interface ProjetoProp {
    projeto: string,
    anchor: string
}

export default function Projeto({ projeto, anchor }: ProjetoProp) {
    return (
        <Link href={anchor} >
            <Center bg='pink.900' height='250px'>
                <Center w='100%' h='100%' transition='background-color 0.3s'
                    _hover={{
                        bg: 'rgba(0,0,0,0.7)',
                        h: '100%'
                    }}>
                    {projeto}
                </Center>
            </Center>
        </Link>
    )
}