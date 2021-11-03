import { Box, HStack, VStack, Circle, Text, Icon, Avatar } from '@chakra-ui/react'
import { FiBell, FiMessageSquare, FiPlus, FiSettings, FiChevronDown } from 'react-icons/fi'

interface NavBarProps {
    showNavBar: boolean
}

export default function NavBar({ showNavBar = true }: NavBarProps) {
    return (
        <Box>
            <HStack>
                <Box>
                    <HStack>
                        <Avatar bg="pink.500" size='sm' name="Yargo Valério" src="" />
                        <VStack>
                            {showNavBar ?
                                <>
                                    <Text>Yargo Valério</Text>
                                    <Text as='h6'>yagovale@hotmail.com</Text>
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
                        <Circle size='40px' bg='pink.700'>
                            <Icon as={FiPlus} />
                        </Circle>
                        <Circle size='40px' bg='pink.700'>
                            <Icon as={FiMessageSquare} />
                        </Circle>
                        <Circle size='40px' bg='pink.700'>
                            <Icon as={FiBell} />
                        </Circle>
                        <Circle size='40px' bg='pink.700'>
                            <Icon as={FiSettings} />
                        </Circle>
                    </>
                    :
                    <>
                        <Circle size='40px' bg='pink.700'>
                            <Icon as={FiChevronDown} />
                        </Circle>
                    </>

                }

            </HStack>
        </Box>
    )
}