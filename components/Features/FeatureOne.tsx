import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";

interface Props {}

const FeatureOne: React.FC<Props> = () => {
  return (
    <Flex
      h={{ lg: "60vh", sm: "auto", base: "85vh" }}
      px="4"
      flexDirection={{ lg: "row", sm: "row", base: "column" }}
    >
      <Stack
        w={{ lg: "50%", sm: "400px", base: "full" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Stack>
          <Stack
            w={{ lg: "150px", md: "full", base: "full" }}
            pl={{ lg: "9", base: 0 }}
            mb={{ lg: "7", base: 0 }}
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            display={{ lg: "inherit", md: "inherit", sm: "inherit" }}
          >
            <Text
              fontWeight="extrabold"
              color="primary.200"
              fontSize={{ lg: "19px", base: "60px" }}
              mr={{ lg: "4", base: "0" }}
              textAlign={{ md: "center", sm: "center", base: "center" }}
            >
              Acceso
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
            maxW={{ lg: "lg" }}
            letterSpacing="tight"
            pl={{ lg: "9", md: "9", sm: "1" }}
            display={{ lg: "inherit", base: "none" }}
          >
            Somos tu puerta de acceso al mundo cripto
          </Heading>
          <Text
            pl={{ lg: "9", md: "9", sm: "1" }}
            color="#585555da"
            lineHeight="24px"
            fontSize="20px"
            fontFamily="body"
            maxW={{ lg: "md" }}
            pt={{ lg: "8", md: "0", sm: "2" }}
            pr={{ sm: "3" }}
            textAlign={{ lg: "left", sm: "center", base: "center" }}
            pb={{ lg: "0", base: "7" }}
          >
            Queremos que tu viaje por la nueva economía digital sea fácil. Por
            eso diseñamos una plataforma con herramientas e información para
            brindarte una experiencia única.
          </Text>
        </Stack>
      </Stack>

      <Stack
        position="relative"
        w={{ lg: "50%", md: "full", sm: "50%" }}
        justifyContent={{ lg: "center", base: "initial" }}
      >
        <Image
          position={"absolute"}
          w={{ lg: "705px", sm: "350px", base: "390px" }}
          src={"/assets/ilus.png"}
          alt=""
          right="0"
        />
      </Stack>
    </Flex>
  );
};

export default FeatureOne;
