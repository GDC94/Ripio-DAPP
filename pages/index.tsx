import { Stack, Text } from "@chakra-ui/layout";

import Head from "next/head";

import Cover from "../components/CoverPage/Cover";
import FeatureOne from "../components/Features/FeatureOne";
import FeatureTwo from "../components/Features/FeatureTwo";
import FooterSwitcher from "../components/Footer/FooterSwitcher";
import Helper from "../components/Help/Helper";
import LaunchpadCard from "../components/Launchpad/LaunchpadCard";
import SectionOne from "../components/SectionOne/SectionOne";
import ValuesSection from "../components/Values/ValuesSection";

interface Props {}

const Index: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>Ripio| Inicio</title>
      </Head>
     
      <Stack mb="32">
        <Cover />
      </Stack>
      <SectionOne />
      <Stack mb='24'>
      <FeatureOne />
      </Stack>
      <ValuesSection />
      <FeatureTwo />
      <Stack mb="24" mt='24'>
        <LaunchpadCard />
      </Stack>
      <FooterSwitcher />
      <Stack alignItems='center' justifyContent='center' h='auto' bg='red'><Text fontSize='12px' fontWeight='bold' color='white'>Este NO es el sitio oficial de RIPIO.</Text></Stack>
      <Helper />
    </>
  );
};

export default Index;
