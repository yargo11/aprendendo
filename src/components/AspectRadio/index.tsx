import { AspectRatio, Image, Box, Text } from "@chakra-ui/react"

export default function AspectRatioComponent() {
    return (
        <Box
            display="block"
            justifyContent="center"
            w={["sm", "md", "lg", "xl", "2xl"]}
            mx="auto" my="1rem"
        >
            <Text as='h1'>AspectRatio com Vídeo</Text>
            <AspectRatio ratio={1}>
                <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                />

            </AspectRatio>
            <Text as='h1'>Aspect Ratio com Imagem</Text>
            <AspectRatio ratio={4 / 3}>
                <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
            </AspectRatio>
            <Text as='h1'>Aspect Ratio com mapa</Text>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                // alt="demo"
                />
            </AspectRatio>
        </Box>
    )
}