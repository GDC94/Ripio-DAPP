import { Image } from "@chakra-ui/image";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { FEATURES } from "./Config";

const Cards: React.FC = () => {
  return (
    <Flex
      flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      justifyContent="space-between"
      alignItems="center"
      pt="9"
    >
      {FEATURES.map((feature) => (
        <motion.div
          transition={{ duration: 0.5, delay: 0.02 }}
          key={feature.id}
          whileHover={{ translateY: -20 }}
        >
          <Stack role="group" maxW="540px">
            <Stack
              transition=".3s"
              _groupHover={{
                bg: "violet.20",

                boxShadow: "blackStrong",
              }}
              as="a"
              href={feature.href}
              p="8"
              position="relative"
              height={{ md: "270px", sm: "200px" }}
              w={{ lg: "300px", sm: "full" }}
              rounded="2xl"
              boxShadow="black"
              flexDirection="column"
              alignItems="center"
              mb={{ md: "7", sm: "35px", base: "45px" }}
            >
              <Image
                right={{ lg: "91px", sm: "220px" }}
                top={{ lg: "-70px", sm: "-46px", base: "-23px" }}
                position="absolute"
                w={{ lg: "120px", sm: "100px", base: "80px" }}
                src={feature.image}
                alt=""
              />

              <Stack pt="24px">
                <Heading
                  _groupHover={{ color: "violet.100" }}
                  lineHeight={{
                    lg: "49px",
                    md: "29px",
                    sm: "49px",
                    base: "49px",
                  }}
                  fontFamily="heading"
                  color="primary.50"
                  fontWeight="extrabold"
                  fontSize="24px"
                  textAlign="center"
                  mb={{ md: "2" }}
                >
                  {feature.title}
                </Heading>
                <Text
                  _groupHover={{ color: "violet.100" }}
                  color="primary.200"
                  lineHeight="22px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="body"
                >
                  {feature.description}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
      ))}
    </Flex>
  );
};

export default Cards;
