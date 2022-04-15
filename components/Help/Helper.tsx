import { Button } from "@chakra-ui/button";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";

import { useMediaQuery } from "../../Hooks/UseMediaQuery";

interface Props {}

const Helper: React.FC<Props> = () => {
  const isBreakpoint = useMediaQuery(768);
  const toast = useToast()
  return (
    <>
      {isBreakpoint ? (
        <Box
          rounded="100%"
          position="fixed"
          bottom="1"
          right="2"
          fontWeight="extrabold"
          color="white"
          p="3"
          bg="#4d4655"
          _focus={{ outline: "none" }}
          onClick={() =>
            toast({
              title: 'Este NO es el sitio oficial de RIPIO',
              status: 'error',
              isClosable: true,
            })
          }
        >
          <QuestionOutlineIcon w={6} h={6} />
        </Box>
      ) : (
        <Button
          size="lg"
          rounded="full"
          pl="22px"
          pr="22px"
          position="fixed"
          bottom="4"
          right="5"
          fontWeight="extrabold"
          color="white"
          leftIcon={<QuestionOutlineIcon />}
          bg="#4d4655"
          variant="solid"
          _focus={{ outline: "none" }}
          _hover={{bg: '#202020'}}
          onClick={() =>
            toast({
              title: 'Este NO es el sitio oficial de RIPIO',
              status: 'error',
              isClosable: true,
            })
          }
        >
          {" "}
          Ayuda
        </Button>
      )}
    </>
  );
};

export default Helper;
