import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Section from "../AnimatedSection/Section";

export function Hero() {
  return (
    <Box>
      <Flex
        pt="3"
        h="600px"
        m="auto"
        maxW="978px"
        px="3.5"
        justifyContent={{ lg: "center", md: "flex-end", sm: "center" }}
        flexDirection="column"
      >
        <Section delay={"0.8"} duration={"0.4"}>
          <Box mb="4">
            <Heading
              mb="2"
              fontFamily="body"
              maxW="md"
              fontSize="50px"
              fontWeight="extrabold"
              color="white"
              lineHeight="57.5px"
            >
              Descubrí el futuro de la economía digital
            </Heading>

            <Text
              fontFamily="body"
              mt="6"
              fontSize="20.5px"
              color="white"
              fontWeight="400"
              lineHeight="26px"
            >
              Comprá y vendé criptomonedas de la manera más simple.
            </Text>
          </Box>
          <Button
            transition=".2s"
            _hover={{ bg: "violet.50" }}
            bg="violet.30"
            mt="70px"
            color="violet.100"
            fontSize="14px"
            fontWeight="400"
            w="184px"
            rounded="full"
            pl="24px"
            pr="24px"
            pt="15px"
            pb="15px"
          >
            Empezar
          </Button>
        </Section>
      </Flex>
    </Box>
  );
}

export function HeroMobile() {
  return (
    <Section delay={"0.8"} duration={"0.4"}>
    <Stack
      px={2}
      width="full"
      h="420px"
      justifyContent={{ sm: "flex-end", base: "center" }}
      alignItems="center"
    >
      <Heading
        mb="2"
        fontFamily="body"
        maxW={{ sm: "full", base: "md" }}
        fontSize={{ sm: "54px", base: "34px" }}
        fontWeight="extrabold"
        color="white"
        lineHeight={{ sm: "55px", base: "38px" }}
        textAlign="center"
      >
        Descubrí el futuro <br /> de la economía digital
      </Heading>
      <Text
        fontFamily="body"
        mt="6"
        fontSize={{ sm: "26px", base: "21.5px" }}
        color="white"
        fontWeight="400"
        lineHeight="26px"
        textAlign="center"
        pt={{ sm: "6" }}
      >
        Comprá y vendé criptomonedas de la
        <br /> manera más simple.
      </Text>
      <Flex
        pt={{ sm: "8", base: "4" }}
        w="290px"
        justifyContent="space-between"
      >
        <Box rounded="md" borderWidth="1px" borderColor="white">
          <Image w="135px" src={"/assets/play.png"} alt="" />
        </Box>
        <Box rounded="md" borderWidth="1px" borderColor="white">
          <Image w="135px " src={"/assets/apple.png"} alt="" />
        </Box>
      </Flex>
    </Stack>
    </Section>
  );
}
