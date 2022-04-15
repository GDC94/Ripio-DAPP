import { Stack } from "@chakra-ui/layout";
import { useMediaQuery } from "../../Hooks/UseMediaQuery";
import { Hero, HeroMobile } from "./Hero";

const Home = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <Stack>
      {isBreakpoint ? (
        <>
          <HeroMobile />
        </>
      ) : (
        <>
          <Hero />
        </>
      )}
    </Stack>
  );
};

export default Home;
