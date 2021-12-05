import { extendTheme} from '@chakra-ui/react'

export const theme = extendTheme ({
    styles:{
        global:{
            body:{
                bg: 'gray.900',
                color: 'gray.50',
                
            },
            h1:{
                color: 'pink.500',
                fontSize:['1.5rem','1.875rem','2.25rem'],
                fontWeight:'600'
            },
            h2:{
                color: 'pink.500',
                fontSize:['1.5rem','1,75rem','2rem'],
                fontWeight:'600'
            },
            h3:{
                fontSize:['1rem','1.25rem','1,5rem'],
                fontWeight:'600'
            }
        }
    }
})