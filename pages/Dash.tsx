import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Head from "next/head";
import Carousel from "../components/Carrousel/Carousel";
import Operations from "../components/Operations/Operations";
import Form from "../components/FormETH/Form";

interface Props {}

const Dash: React.FC<Props> = () => {
  const { isAuthenticated, logout, user, isLoggingOut } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>Dasboard</title>
      </Head>

      <Box maxW="978px" m="auto" pt="2">
        <Flex p="4" justifyContent="space-between" alignItems="center">
          <Image src={"/assets/logonegro.svg"} w="67px" alt="" />

          <Flex
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Badge
              rounded="lg"
              display={{ lg: "inherit", base: "none" }}
              colorScheme="green"
            >
              {" "}
              {user && user.getUsername()} &nbsp; 🟢{" "}
            </Badge>
            <Button
              w="180px"
              rounded="full"
              p="6px"
              fontFamily="body"
              fontSize={"16px"}
              fontWeight={"bold"}
              variant={"link"}
              bg="violet.100"
              color="white"
              _hover={{ textDecoration: "none" }}
              ml="20px"
              disabled={isLoggingOut}
              onClick={logout}
            >
              Desconectar
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Carousel />
  
      <Flex px='4'  h="400px" maxW='980px' m='auto' pt='5'>
        <Operations />
        <Form/>

      </Flex>

    </>
  );
};

export default Dash;
