import { Box, Flex } from "@chakra-ui/layout";


interface Props {
 
}

const CardContainer: React.FC<Props> = ({children}) => {
  return (
    <Flex flexDirection='column'    m='auto' maxW="400px" h="full"  rounded="lg" alignItems='center'>
      {children}
    </Flex>
  );
};

export default CardContainer;
