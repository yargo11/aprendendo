import { Center, Square, Circle, HStack, Box } from '@chakra-ui/react'

export default function CenterComponent() {
    return (
        <>
            <HStack>
                <Center w="40px" h="40px" bg="tomato" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                        Y
                    </Box>
                </Center>
                <Center w="40px" h="40px" bg="tomato" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                        A
                    </Box>
                </Center>
                <Center w="40px" h="40px" bg="tomato" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                        R
                    </Box>
                </Center>
                <Square size="40px" bg="purple.700" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                        G
                    </Box>
                </Square>
                <Circle size="40px" bg="tomato" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                        O
                    </Box>
                </Circle>
            </HStack>
        </>
    )
}