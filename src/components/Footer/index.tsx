import { Flex, Box, Stack, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box w='full' bg='#0c0c0c' py='2rem'>
            <Flex w='100%' maxW='1250px' m='auto'>
                <Stack direction={['column', 'row']} w='full' justify='space-between'>
                    <Box>
                        <Text>Yargo Valério dos Santos Abou Ali</Text>
                        <Text>Contato: (84) 998374418</Text>
                    </Box>
                    <Box>
                        <Text>Yargo Valério dos Santos Abou Ali</Text>
                        <Text>Contato: (84) 998374418</Text>
                    </Box>
                    <Box>
                        <Text>Yargo Valério dos Santos Abou Ali</Text>
                        <Text>Contato: (84) 998374418</Text>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
}