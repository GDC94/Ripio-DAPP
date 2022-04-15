import { Stack } from "@chakra-ui/layout";
import { useMediaQuery } from "../../Hooks/UseMediaQuery";
import FooterRipioDesktop from "./FooterRipioDesktop";
import FooterRipioMobile from "./FooterRipioMobile";

const FooterSwitcher = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <Stack>
      {isBreakpoint ? (
        <>
          <FooterRipioMobile />
        </>
      ) : (
        <>
          <FooterRipioDesktop />
        </>
      )}
    </Stack>
  );
};

export default FooterSwitcher;
