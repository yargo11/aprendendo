import { Box, HStack, VStack, Text, Avatar } from '@chakra-ui/react'
import { FiBell, FiMessageSquare, FiPlus, FiSettings, FiChevronDown } from 'react-icons/fi'
import NavIcon from './NavIcon'

interface NavBarProps {
    showNavBar: boolean
}

export default function NavBar({ showNavBar = true }: NavBarProps) {
    return (
        <HStack>
            <Box>
                <HStack
                    px={2}
                    borderRadius="10px"
                    transition='background 0.2s'
                    _hover={{
                        background: "gray.700"
                    }}>
                    <Avatar bg="pink.500" size='sm' name="Yargo Valério" src="https://avatars.githubusercontent.com/yargo11" />
                    <VStack spacing={0} overflow="hidden" maxW='200px'>
                        {
                            showNavBar ?
                                <>
                                    <Text>Yargo Valério</Text>
                                    <Text as='h6' isTruncated>yagovale@hotmail.com</Text>
                                </>
                                :
                                <>
                                </>
                        }
                    </VStack>
                </HStack>
            </Box>

            {showNavBar ?
                <>
                    <NavIcon icone={FiPlus} />
                    <NavIcon icone={FiMessageSquare} />
                    <NavIcon icone={FiBell} />
                    <NavIcon icone={FiSettings} />
                </>
                :
                <NavIcon icone={FiChevronDown} />
            }

        </HStack>
    )
}