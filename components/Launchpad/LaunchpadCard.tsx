import { Image } from "@chakra-ui/image";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

interface Props {}

const LaunchpadCard: React.FC<Props> = () => {
  return (
    <Stack
      role="group"
      m="auto"
      maxW="978px"
      px="4"
      pt={{ lg: "24", sm: "24", base: "16" }}
      h={"auto"}
    >
      <motion.div
        transition={{ duration: 0.6, delay: 0.02 }}
        whileHover={{ translateY: -20 }}
      >
        <Stack
          transition=".3s"
          _groupHover={{
            bg: "violet.20",

            boxShadow: "blackStrong",
          }}
          as="a"
          href={"https://launchpad.ripio.com"}
          target="_blank"
          pl={{ lg: "20", md: "16", sm: "10", base: "10" }}
          pr={{ lg: "20", md: "16", sm: "10", base: "10" }}
          pt={{ lg: "55px", sm: "35px", base: "30px" }}
          pb={{ lg: "64px", sm: "44px", base: "30px" }}
          height={"auto"}
          w={"full"}
          rounded="2xl"
          boxShadow="black"
          flexDirection={{
            lg: "row",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          alignItems="center"
        >
          <Stack
            maxW={{ lg: "50%", sm: "full", base: "full" }}
            justifyContent="flex-start"
          >
            <Heading
              _groupHover={{ color: "violet.100" }}
              lineHeight={{ lg: "45px", base: "25px" }}
              fontFamily="body"
              color="primary.100"
              fontWeight="extrabold"
              fontSize={{ lg: "40px", md: "25px", sm: "30px", base: "20px" }}
              pb={{ lg: "6", sm: "3", base: "1" }}
              textAlign={{
                lg: "left",
                md: "center",
                sm: "center",
                base: "center",
              }}
            >
              Toda la información cripto en un solo lugar
            </Heading>
            <Text
              _groupHover={{ color: "violet.100" }}
              color="primary.100"
              lineHeight="24px"
              maxWidth={{ lg: "350px", md: "635px" }}
              fontSize={{ lg: "20px", base: "18px" }}
              fontWeight="400"
              fontFamily="body"
              textAlign={{
                lg: "left",
                md: "center",
                sm: "center",
                base: "center",
              }}
            >
              Launchpad es tu herramienta para navegar el mundo de las
              criptomonedas. Explorá nuestras guías, tutoriales y noticias para
              convertirte en un experto en tecnología Blockchain.
            </Text>
          </Stack>
          <Stack
            maxW={{ lg: "50%", base: "auto" }}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              pb={{ md: "7", sm: "3", base: "12" }}
              ml={{ lg: "12", sm: "0" }}
              w={{ lg: "350px", md: "380px", base: "450px" }}
              src={"/assets/launchpad-v2.svg"}
              alt=""
            />
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default LaunchpadCard;
