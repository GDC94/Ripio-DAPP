import { Heading, Stack, Text } from "@chakra-ui/layout";
import Cards from "./Cards";

interface Props {}

const SectionOne: React.FC<Props> = () => {
  return (
    <Stack
      m="auto"
      maxW="978px"
      px={{ base: 4 }}
      h={{ lg: "container.md", sm: "auto", base: "1100px" }}
      pt="28"
      pb={{ lg: 7, sm: 28 }}
      py={{ base: "5" }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb={{ lg: "24", sm: "24", base: "10" }}
      >
        <Heading
          fontFamily="body"
          fontSize="36px"
          lineHeight="43px"
          textAlign="center"
          marginBottom="1rem"
          color="violet.100"
          fontWeight="900"
          mb="1"
        >
          Qué podés hacer en Ripio
        </Heading>
        <Text
          fontFamily="body"
          fontWeight="400"
          fontSize="21px"
          textAlign={{ sm: "center", base: "center" }}
        >
          Tenemos un producto para cada una de tus necesidades financieras.
        </Text>
      </Stack>
      <Cards />
    </Stack>
  );
};

export default SectionOne;
