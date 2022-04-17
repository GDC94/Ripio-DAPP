import { Box, Flex } from "@chakra-ui/layout";

interface Props {}

const CardContainer: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      m="auto"
      maxW={{lg: '400px', sm: 'full'}}
      h="full"
      rounded="lg"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default CardContainer;
