import { Flex, Text } from '@chakra-ui/react'
import AvatarCard from '../AvatarCard'

export default function CoverAndAvatar() {
    return (
        <>
            <Flex
                w="1250px"
                maxW='100%'
                h='24rem'
                mx='auto'
                bgImage='../covers/synthwave-retrowave.gif'
                bgRepeat='no-repeat'
                bgPos='center'
                bgSize='cover'
                align='flex-end'
                justify='center'
            // position='relative'
            >
                <AvatarCard />
            </Flex>
        </>
    )
}