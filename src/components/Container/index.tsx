import { Container, VStack } from "@chakra-ui/react"

export default function ContainerComponent() {
    return (
        <VStack>
            <Container
                borderColor="red.200"
                borderWidth="1px"
                maxW="container.xl"
            >
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team, but it also brings benefits to
                engineering teams. It makes sure that our experiences have a consistent look
                and feel, not just in our design specs, but in production
            </Container>
            <Container
                borderColor="red.200"
                borderWidth="1px"
                maxW="container.lg"
            >
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team, but it also brings benefits to
                engineering teams. It makes sure that our experiences have a consistent look
                and feel, not just in our design specs, but in production
            </Container>
            <Container
                borderColor="red.200"
                borderWidth="1px"
                maxW="container.md"
            >
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team, but it also brings benefits to
                engineering teams. It makes sure that our experiences have a consistent look
                and feel, not just in our design specs, but in production
            </Container>
            <Container
                borderColor="red.200"
                borderWidth="1px"
                maxW="container.sm"
                centerContent
            >
                Texto pequeno centralizado
            </Container>

        </VStack>
    )
}