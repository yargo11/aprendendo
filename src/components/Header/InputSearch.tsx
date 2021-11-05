import { Box, Circle, HStack, Flex, Icon, Input, Avatar } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

interface InputProps {
    showPlaceHolder: boolean
}

export default function InputSearch({ showPlaceHolder = true }: InputProps) {
    return (
        <Box>
            <HStack>
                <Avatar bg="pink.500" size='md' name="Social Gamer" src="" color="#ffffff" />
                <Flex
                    bg='gray.600'
                    w={['40px', 'null', 'null', 56]}
                    h="40px"
                    borderRadius={['50%', '3xl']}
                    align='center'
                    justify='center'
                    pl={['null', 'null', 'null', 4]}
                >
                    {
                        showPlaceHolder ?
                            (
                                <>
                                    <Icon as={FiSearch} />
                                    <Input variant="unstyled" placeholder="Pesquisar..." />
                                </>
                            )
                            :
                            (
                                <Icon as={FiSearch} />
                            )

                    }
                </Flex>
            </HStack>
        </Box>
    )
}