import { extendTheme} from '@chakra-ui/react'

export const theme = extendTheme ({
    styles:{
        global:{
            body:{
                bg: 'gray.900',
                color: 'gray.50'
            },
            h1:{
                color: 'pink.500',
                fontSize:'lg'
            },
            h6:{
                fontSize:'sm'
            }
        }
    }
})