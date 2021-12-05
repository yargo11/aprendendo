import { Wrap, WrapItem, Image, Text, VStack, Avatar } from '@chakra-ui/react'

export default function Sobre() {
    return (
        <Wrap w='100%' maxW='1250px' m='auto' py='3rem'>
            <WrapItem>
                <Image src='/yargo.jpg' alt='Eu' w='100%' maxW='750px' borderRadius='10px'
                // boxShadow='10px 5px 5px #290d1d' 
                />
            </WrapItem>
            <WrapItem flex='1'>
                <VStack justify='center' w='100%'>
                    <Text as='h2'>Quem sou eu?</Text>
                    <Text p={4} textAlign='justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, lacus non faucibus
                        sagittis, est sem eleifend dolor, vel faucibus velit nisi non tellus. Curabitur posuere maximus
                        metus. Sed sodales nibh vel metus pharetra, commodo venenatis tortor feugiat. Aenean id tempor
                        tortor. Maecenas molestie ex nec pulvinar aliquet. Etiam non sapien in tellus tempus volutpat
                        eleifend vel ex. Nam tristique velit velit. Aliquam diam mauris, iaculis eu neque a, dignissim
                        mollis velit. Mauris finibus diam vitae commodo gravida. Aenean eget tristique sapien, ut molestie
                        risus. Fusce id erat congue, volutpat arcu sit amet, tempor orci. Duis quis leo in urna congue
                        elementum. Vestibulum massa nisi, pellentesque sed sapien non, eleifend molestie eros. Suspendisse
                        interdum felis nisl, eget gravida sem pretium ut.

                        Sed non tincidunt mauris, in porttitor lacus. Mauris sollicitudin ornare augue, accumsan molestie
                        tellus. Fusce sit amet lacinia risus. Quisque nisi dui, tempus id nulla pretium, posuere scelerisque
                        quam. Vestibulum a blandit odio. Curabitur mattis ipsum tortor, a blandit turpis suscipit nec. Integer
                        diam orci, suscipit in dui sodales, congue pellentesque risus. Aliquam erat volutpat. Sed dictum
                        nibh turpis, vel tempor massa vulputate eu. Nam eleifend suscipit sapien. Maecenas lacinia tortor
                        <Avatar m='1rem' float='right' size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                        quis est facilisis, id euismod purus egestas. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas. Nulla id semper quam. Mauris ornare, arcu eget elementum
                        pellentesque, turpis enim sagittis sapien, ac sagittis sapien felis nec augue.
                    </Text>
                </VStack>
            </WrapItem>
        </Wrap>
    )
}