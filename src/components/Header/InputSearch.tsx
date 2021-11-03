import { Box, Circle, HStack, Flex, Icon, Input, Avatar } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function InputSearch() {
    return (
        <Box>
            <HStack>
                    <Avatar bg="pink.500" size='md' name="Social Gamer" src="" color="#ffffff" />
                <Flex bg='gray.600' w={56} h="40px" borderRadius='3xl' align='center' pl={4}>
                    <Icon as={FiSearch} mr={1} />
                    <Input variant="unstyled" placeholder="Pesquisar..." />
                </Flex>
            </HStack>
        </Box>
    )
}