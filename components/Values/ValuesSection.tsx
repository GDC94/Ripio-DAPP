import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import CardValues from "./CardValues";

interface Props {}

const ValuesSection: React.FC<Props> = () => {
  return (
    <Stack
      m="auto"
      maxW="978px"
      px={{ sm: 4, base: 4 }}
      h={{ lg: "container.md", sm: "auto" }}
      pt={{ lg: "64", sm: "36", base: "24" }}
    >
      <Stack
        justifyContent={{ lg: "space-between", md: "left", sm: "left" }}
        alignItems="flex-start"
        flexDirection="row"
        mb="20"
      >
        <Stack>
          <Heading
            fontFamily="heading"
            fontSize="36px"
            lineHeight="43px"
            marginBottom="1rem"
            color="violet.100"
            fontWeight="900"
            mb="1.5"
            textAlign={{ lg: "left", md: "left", sm: "left", base: "center" }}
            maxW={{ lg: "full", md: "400px", sm: "full" }}
            m={{ lg: "0", sm: "auto" }}
          >
            Nos preocupamos por cada detalle
          </Heading>
          <Text
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
            fontFamily="body"
            fontWeight="400"
            fontSize="21px"
            color="primary.200"
            maxW={{ lg: "full", md: "400px", sm: "full" }}
          >
            Contamos con la tecnología para proteger tus fondos y asegurar cada
            una de tus operaciones.
          </Text>
        </Stack>

        <Stack w="100px" display={{ lg: "inherit", sm: "none", base: "none" }}>
          <Stack
            w="120px"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
            __css={{ transform: "rotate(90deg)" }}
          >
            <Text fontWeight="extrabold" color="primary.200" fontSize="19px">
              Valores
            </Text>
            <Box mb="2.5" h="0.5" w="37px" bg="primary.200"></Box>
          </Stack>
        </Stack>
      </Stack>
      <CardValues />
    </Stack>
  );
};

export default ValuesSection;
