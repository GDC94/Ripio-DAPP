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

      <Flex
        px={"4"}
        h="400px"
        maxW="980px"
        m="auto"
        pt="5"
        flexDirection={{ lg: "row", sm: "column", base: "column" }}
      >
        <Operations />
        <Form />
      </Flex>
      <Flex flexDirection="column" mt="16" h="160px" w="full" bg="violet.100">
        <Flex alignItems='center' maxW="980px" m="auto" flexDirection='column'>
          <Image w="60px" src="/assets/logo_ripio.svg" alt="" />
          <Text textAlign='center' maxW='400px' fontSize="13px" fontWeight="bold" color="white">
            Esta app fue construida con Next js, Typescript, Chakra UI y Moralis.Para ver el código, podés hacer click <Box color='whatsapp.100' as='a' href='https://github.com/GDC94/Ripio-DAPP' target={'_blank'}>aquí</Box>
          </Text>

        </Flex>
        <Stack alignItems="center" justifyContent="center" h="auto" bg="red">
          <Text px='3' textAlign='center' fontSize="13px" fontWeight="bold" color="white">
            Este NO es el sitio oficial de RIPIO. Es solamente una app de
            prueba construida por <Box textDecoration='underline' as='a' href='https://www.linkedin.com/in/german-derbes-catoni/' target={'_blank'}>German Derbes Catoni</Box>
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Dash;
