import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";

import { FOOTER_ITEMS, SOCIAL_MEDIA_ITEMS, TEXTS } from "./config";

const FooterRipioDesktop: React.FC = () => {
  return (
    <Stack bg="violet.100" h="550px">
      <Stack m="auto" maxW="978px" px="4" h="auto">
        <Grid templateColumns="repeat(5, 1fr)" gap={1} mb="24">
          <GridItem w="375px" h="auto">
            <Heading
              fontFamily="heading"
              color="white"
              maxWidth="200px"
              fontWeight="extrabold"
              fontSize="24px"
            >
              {TEXTS.footerTitle}
            </Heading>
            <Stack maxWidth="190px" mt="9">
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
          </GridItem>

          {FOOTER_ITEMS.map((item) => (
            <GridItem key="" w="179px" h="auto">
              <Heading
                fontFamily="body"
                fontSize="17px"
                fontWeight="900"
                color="white"
                mb="6"
              >
                {item.title}
              </Heading>
              <Stack>
                {item.children && (
                  <>
                    {item.children.map((child) => (
                      <Text
                        key=""
                        as="a"
                        href={child.href}
                        fontSize="14px"
                        color="white"
                      >
                        {child.label}
                      </Text>
                    ))}
                  </>
                )}
              </Stack>
            </GridItem>
          ))}
        </Grid>
        <Box h="0.5" bg="white"></Box>
        <Stack
          pt="2"
          flexDirection={{ lg: "row", sm: "column" }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Text color="white" fontSize="10px" maxW="470px">
            {TEXTS.footerLeyend}
          </Text>

          <HStack flexDirection="row">
            {SOCIAL_MEDIA_ITEMS.map((item) => (
              <Link href={item.href} key={item.href} target={"_blank"}>
                <Image w="9" src={item.image} alt="" />
              </Link>
            ))}
          </HStack>

          <Image src={"/assets/ripio_footer.svg"} alt="ripio" w="75px" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterRipioDesktop;
