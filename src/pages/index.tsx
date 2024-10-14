import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { OrganizerSection } from "~/sections/organizers";
import { Schedule } from "~/sections/schedule";
import { SpeakersSection } from "~/sections/speakers";
import { CFP } from "~/sections/cfp";
import { Sponsors } from "~/sections/sponsors";
import { Venue } from "~/sections/venue";

const Home = () => (
  <Box>
    <Head>
      <title>{genericInformation.pageTitle}</title>
      <meta property="og:title" content={genericInformation.pageTitle} />
      <meta
        property="og:description"
        content={genericInformation.socialDescription}
      />
      <meta name="twitter:site" content="@pythonpizzaconf" />
      <meta property="og:image" content="/social-image.jpg" />
      <meta name="twitter:image:alt" content="Conference logo" />
      <meta name="twitter:title" content="Brno Python Pizza Conference!!" />
      <meta
        name="twitter:image"
        content="https://brno.python.pizza/social-image.jpg"
      />
      <meta
        name="twitter:description"
        content="Join the fun 🥳🎉🍕 on 22nd February 2025"
      />
      <meta name="photo-attribution" content="Photo by --todo (--url todo)" />
    </Head>
    <Header />
    <Hero />
    <About />
    {/*<SpeakersSection />*/}
    <Schedule />
    <OrganizerSection />
    <Sponsors />
    <CFP />
    <Venue />
    <Coc />
    <Footer />
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    ></script>
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Box>
);

export default Home;
