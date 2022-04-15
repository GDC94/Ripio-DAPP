import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";

interface Props {}

const FeatureTwo: React.FC<Props> = () => {
  return (
    <Flex
      h={{ lg: "100vh", sm: "auto", base: "auto" }}
      pt={{ lg: "52", base: "20" }}
      flexDirection={{ lg: "row", md: "row", sm: "row", base: "column" }}
    >
      <Stack
        position={"relative"}
        w={{ lg: "50%", md: "80%" }}
        justifyContent={{ lg: "center", base: "initial" }}
      >
        <Image
          position={{ lg: "absolute", md: "absolute", base: "inherit" }}
          w={{ lg: "705px", md: "520px", sm: "330px", base: "400px" }}
          src={"/assets/ilus-2.png"}
          alt=""
          left="0"
        />
      </Stack>

      <Stack
        pl={{ lg: "16", md: "16", base: "0" }}
        w={{ lg: "50%", sm: "400px", base: "full" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        maxW={{ lg: "460px", base: "full" }}
      >
        <Stack
          pr={{ md: "5", sm: "1" }}
          alignItems={{ lg: "inherit", md: "flex-end", base: "center" }}
        >
          <Stack
            w="max-content"
            mb={{ lg: "7", base: "1" }}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              fontWeight="extrabold"
              color="primary.200"
              fontSize={{ lg: "19px", base: "60px" }}
              mr={{ lg: "4", base: 0 }}
              textAlign={{ md: "right", base: "center" }}
            >
              Control
            </Text>
            <Box
              display={{ lg: "inherit", base: "none" }}
              h="0.5"
              w="35px"
              bg="primary.200"
            ></Box>
          </Stack>

          <Heading
            fontFamily="heading"
            color="primary.200"
            fontWeight="extrabold"
            fontSize={{ lg: "63px", sm: "30px" }}
            maxW="lg"
            letterSpacing="tight"
            textAlign={{ lg: "left", sm: "right" }}
            display={{ lg: "inherit", base: "none" }}
          >
            Tomá el control de tus finanzas
          </Heading>
          <Text
            px={{ lg: "0", md: "0", sm: "0", base: "4" }}
            color="#585555da"
            lineHeight="24px"
            fontSize="20px"
            fontFamily="body"
            maxW="md"
            pt={{ lg: "8", md: "0", sm: "2", base: "0" }}
            textAlign={{ lg: "left", sm: "center", base: "center" }}
          >
            Te damos todas las herramientas para que puedas comprar, vender,
            guardar y enviar criptomonedas de forma rápida y simple las 24
            horas, todos los días del año.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default FeatureTwo;
