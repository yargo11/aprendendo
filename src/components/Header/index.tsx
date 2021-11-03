import { Flex, Spacer } from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/react"

import InputSearch from './InputSearch'
import NavBar from './NavBar'

export default function Header() {

    const isWideScreen = useBreakpointValue({ base: false, lg: true })

    return (
        <Flex
            bg='gray.800'
            h={16}
            maxW='100%'
            align='center'
            px={4}
        >
            <InputSearch />
            
            <Spacer />

            <NavBar showNavBar={isWideScreen}/>
            
        </Flex>
    )
}