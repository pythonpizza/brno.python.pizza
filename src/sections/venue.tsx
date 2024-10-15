import { Container, Heading, Paragraph } from "theme-ui";

import { Image } from "~/components/image";

export const Venue = () => (
  <Container id="venue" variant="smallContainer">
    <Heading>Venue</Heading>
    <Paragraph>
      The event will take place in the lobby of{" "}
      <a href="https://clubco.cz/brno/">Clubco</a> Brno office.
    </Paragraph>
    <br />
    <Paragraph>
      If you're traveling by train, head towards Galerie Vaňkovka shopping
      center. Stay on the street level, avoiding the stairs, and cross the road
      to your left, placing the shopping center on the opposite side. Walk along
      the road with the shopping center on your right. After passing several
      buildings, you'll notice a small park-like area on your left. Enter this
      area, and you'll find Clubco in one of the buildings further along on your
      right.
    </Paragraph>
    <br />
    {/*<Paragraph>If you encounter any issues, please call #TODO.</Paragraph>*/}
    {/*<br></br>*/}
    <Paragraph>Photos of the venue</Paragraph>
    <Image
      src={"venue/clubco1.jpg"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
    <Image
      src={"venue/clubco2.jpg"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
    <Image
      src={"venue/clubco3.jpg"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
  </Container>
);
