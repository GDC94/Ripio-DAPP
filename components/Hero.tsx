import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export default function Hero() {
  return (
    <Box>
      <Flex
        h="77vh"
        m="auto"
        maxW="978px"
        px="3.5"
        justifyContent="center"
        flexDirection="column"
      >
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
      </Flex>
    </Box>
  );
}
