import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Helper from "../components/Help/Helper";
import { Spinner } from "@chakra-ui/spinner";

interface Props {}

const SignIn: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, authenticate, authError } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace("/Dash");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const ingresar = () => {
    setLoading(true);
    setTimeout(() => {
      authenticate({
        signingMessage: "¿Quieres autorizar esta conexión?",
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <Flex position="relative" h="100vh" flexDirection="row">
      <Stack
        display={{ lg: "inherit", md: "none", base: "none" }}
        w="24%"
        bgImage={"/assets/signin.svg"}
        bgPosition="bottom"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="full"
      ></Stack>
      <Stack
        w={{ lg: "76%", md: "full", sm: "full", base: "full" }}
        bg="white"
        h="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex w="230px" justifyContent="space-between" alignItems="center">
          <Box as="a" href="/">
            <Image w="90px" src={"/assets/logonegro.svg"} alt="logo" />
          </Box>
          <Text>➕</Text>
          <Box as="a" href="https://metamask.io/">
            <Image w="50px" src={"/assets/meta.png"} alt="logo" />
          </Box>
        </Flex>
        <Text textAlign="center" maxW="300px" pb="12" fontSize="19px">
          Ahora puedes identificarte utilizando tus credenciales de Metamask!
        </Text>

        <Button
          px="4"
          w="300px"
          rounded="full"
          p="15px"
          fontFamily="body"
          fontSize={"17px"}
          fontWeight={"extrabold"}
          variant={"link"}
          bg="violet.100"
          color="white"
          _hover={{ textDecoration: "none" }}
          mr="3"
          onClick={() => ingresar()}
          _focus={{ outline: "none" }}
        >
          Ingresar
        </Button>

        <Stack pt="7">
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.8s"
              emptyColor="gray.200"
              color="violet.100"
              size="lg"
            />
          ) : (
            <Spinner
              thickness="4px"
              speed="0.99s"
              emptyColor="white"
              color="white"
              size="lg"
            />
          )}
        </Stack>

        <Image
          pt="7"
          display={{ lg: "none", sm: "inherit" }}
          src={"/assets/w.svg"}
          alt=""
          w="250px"
        />
      </Stack>

      <Helper />
    </Flex>
  );
};

export default SignIn;
