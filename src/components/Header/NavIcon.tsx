import { Circle, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface NavIconProps {
    icone: IconType
}

export default function NavIcon({ icone }: NavIconProps) {
    return (
        <Circle
            size='40px'
            bg='pink.700'
            transition='background 0.2s'
            _hover={{
                bg: 'pink.500'
            }}>
            <Icon as={icone} />
        </Circle>
    )
}