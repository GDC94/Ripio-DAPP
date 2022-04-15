import { Image } from "@chakra-ui/image";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { FEATURES } from "./Config";

const CardValues: React.FC = () => {
  return (
    <Flex
      flexDirection={{ lg: "row", md: "row", sm: "row", base: "column" }}
      justifyContent="space-between"
      alignItems="center"
    >
      {FEATURES.map((feature) => (
        <motion.div
          transition={{ duration: 0.6, delay: 0.02 }}
          key={feature.id}
          whileHover={{ translateY: -15 }}
        >
          <Stack role="group" mb={{ base: "20px" }}>
            <Stack
              minH={{ md: "300px" }}
              transition=".3s"
              _groupHover={{
                bg: "violet.20",
                transform: "translateY(-10px)",
                boxShadow: "blackStrong",
              }}
              as="a"
              href={feature.href}
              p={{ lg: "9", md: "7", sm: "4", base: "9" }}
              height={{ lg: "340px", sm: "auto", base: "230px" }}
              w={{ lg: "300px", md: "230px", sm: "220px" }}
              rounded="2xl"
              boxShadow="black"
              flexDirection={"column"}
              alignItems={{
                lg: "flex-start",
                md: "flex-start",
                sm: "flex-start",
              }}
              mb={{ md: 0, sm: "35px" }}
              justifyContent={{ sm: "space-around", base: "center" }}
            >
              <Stack>
                <Image w={"70px"} src={feature.image} alt="" />
              </Stack>

              <Stack pt={{ lg: "4", sm: "0" }} pb={"6"} justifyContent="center">
                <Heading
                  _groupHover={{ color: "violet.100" }}
                  lineHeight={{ lg: "49px", sm: "29px" }}
                  fontFamily="heading"
                  color="primary.50"
                  fontWeight="extrabold"
                  fontSize="28px"
                  pb={{ lg: "4", sm: "4" }}
                >
                  {feature.title}
                </Heading>
                <Text
                  _groupHover={{ color: "violet.100" }}
                  color="primary.200"
                  lineHeight="22px"
                  fontSize="20px"
                  fontWeight="400"
                  fontFamily="body"
                  pb={{ sm: "3", base: "3" }}
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

export default CardValues;
