import { Stack } from "@chakra-ui/layout";
import { useMediaQuery } from "../../Hooks/UseMediaQuery";
import Home from "../Home/Home";
import { Nav } from "../Navbar/Nav";

const Cover = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <>
      {isBreakpoint ? (
        <Stack
          height={{ base: "122vh", sm: "196vh" }}
          bgImage={"/assets/bgmobile.png"}
          bgRepeat="no-repeat"
          bgPosition={{ sm: "bottom", base: "bottom" }}
          bgSize="cover"
        >
          <Nav />
          <Home />
        </Stack>
      ) : (
        <Stack
          pt="5"
          height="116vh"
          bgImage={"/assets/back.png"}
          bgPosition="bottom"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <Nav />
          <Home />
        </Stack>
      )}
    </>
  );
};

export default Cover;
