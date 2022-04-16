import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

import {
  Box,
  Heading,
  HStack,
  Link,
  List,
  Stack,
  Text,
} from "@chakra-ui/layout";

import { FOOTER_ITEMS, SOCIAL_MEDIA_ITEMS, TEXTS } from "./config";

const FooterRipioMobile: React.FC = () => {
  return (
    <Stack
      bg="violet.100"
      h="auto"
      px={{ sm: "20", base: "6" }}
      pt="32"
      pb="28"
    >
      <Stack m={"auto"} justifyContent="center">
        <Heading
          fontFamily="heading"
          color="white"
          textAlign={"center"}
          fontWeight="extrabold"
          fontSize={{ sm: "24px", base: "24px" }}
          pb="6"
        >
          Descubrí la nueva economía <br /> digital
        </Heading>
      </Stack>
      <Stack flexDirection="column" w={"full"} pb="3">
        <Button
          as="a"
          p="4"
          h="2.5"
          color="violet.100"
          bg="white"
          rounded="full"
          fontSize="15px"
          cursor="pointer"
          mb="2"
        >
          {TEXTS.registerButton}
        </Button>
        <Button
          as="a"
          p="4"
          h="2.5"
          color="white"
          borderWidth="thin"
          borderColor="white"
          bg="transparent"
          rounded="full"
          fontSize="15px"
          _hover={{
            bg: "transparent",
          }}
          cursor="pointer"
        >
          {TEXTS.singInButton}
        </Button>
      </Stack>
      <Stack pb="3">
        <Accordion>
          {FOOTER_ITEMS.map((item) => (
            <AccordionItem key={item.title} border="none">
              <Heading>
                <AccordionButton _focus={{ outline: "none" }}>
                  <Heading
                    fontSize="16px"
                    color="white"
                    flex="1"
                    textAlign="left"
                    fontWeight="extrabold"
                  >
                    {item.title}
                  </Heading>
                  <AccordionIcon color="white" />
                </AccordionButton>
              </Heading>
              <AccordionPanel color="white" pb={4}>
                <List>
                  {item.children && (
                    <Stack flexDirection="column" pt="5">
                      {item.children.map((child) => (
                        <Box
                          color="#ffffffd6"
                          as="a"
                          href={child.href}
                          key={child.href}
                          fontSize={{ sm: "16px", base: "14px" }}
                        >
                          {child.label}
                        </Box>
                      ))}
                    </Stack>
                  )}
                </List>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
      <Box h="0.5" bg="white"></Box>
      <Stack alignItems="center" pt="5">
        <Text
          color="#ececece6"
          fontSize="14px"
          textAlign="center"
          lineHeight="13px"
        >
          {TEXTS.footerLeyend}
        </Text>
        <HStack justifyContent="center" flexDirection="row" pt="5">
          {SOCIAL_MEDIA_ITEMS.map((item) => (
            <Link href={item.href} key={item.href} target={"_blank"}>
              <Image w="9" src={item.image} alt="" />
            </Link>
          ))}
        </HStack>
        <Image pt="9" src={"/assets/ripio_footer.svg"} alt="ripio" w="70px" />
      </Stack>
    </Stack>
  );
};

export default FooterRipioMobile;
