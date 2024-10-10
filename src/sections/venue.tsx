import { Container, Heading, Paragraph } from "theme-ui";
import { Image } from "~/components/image";

export const Venue = () => (
    <Container id="venue" variant="smallContainer">
        <Heading>Venue</Heading>
        <Paragraph>
            The event will take place in the lobby of <a href="https://clubco.cz/brno/">Clubco</a> Brno office #TODO
        </Paragraph>
        <br></br>
        <Paragraph>
            TODO: how to get there.
        </Paragraph>
        <br></br>
        <Paragraph>
            If you encounter any issues, please call #TODO.
        </Paragraph>
        <br></br>
        <Paragraph>Photos of previous events at the venue</Paragraph>
        <Image src={"/venue/clubco1.jpg"} alt="venue image" width="100%"
            height="auto" objectFit="contain" />
        <Image src={"/venue/clubco1.jpg"} alt="venue image" width="100%"
            height="auto"
            objectFit="contain" />
        <Image src={"/venue/clubco1.jpg"} alt="venue image" width="50%"
            height="auto"
            objectFit="contain" />
    </Container >
);
