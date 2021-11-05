import { Flex, Image } from '@chakra-ui/react'

export default function AvatarCard() {
    return (
        <Flex
            borderRadius='full'
            borderWidth='2px'
            borderColor='pink.500'
            boxSize="176px"
            mb='-10px'
        >
            <Image
                borderRadius="full"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
                fallbackSrc="https://via.placeholder.com/150"
            />
        </Flex>
    )
}