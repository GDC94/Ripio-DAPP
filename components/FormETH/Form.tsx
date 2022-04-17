import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { useToast } from "@chakra-ui/toast";
import Moralis from "moralis";

import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";

interface Props {}

const Form: React.FC<Props> = () => {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  const handleChange = (value) => setAmount(value);

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: receiver,
    type: "native",
  });

  const toast = useToast();

  return (
    <Flex
      flexDirection="column"
      m="auto"
      w="full"
      h="full"
      textAlign="left"
      justifyContent="center"
      maxW={{ lg: "400px", sm: "full" }}
    >
      <Heading mb="3" fontSize="25px" color="violet.100">
        Enviar Ethereum
      </Heading>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await Moralis.enableWeb3();
          fetch({
            onSuccess: () => {
              toast({
                title: "eth enviado",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            },
            onError: (error) => {
              toast({
                title: "El envío falló",
                description: error,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            },
          });
        }}
      >
        <FormControl mb="9">
          <FormLabel fontWeight="extrabold" htmlFor="amount">
            Monto a enviar
          </FormLabel>
          <NumberInput size="sm" step={0.1} onChange={handleChange}>
            <NumberInputField rounded="full" id={"amount"} value={amount} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <FormLabel fontWeight="extrabold" mt="2" htmlFor="receiver">
            Enviar a:
          </FormLabel>
          <Input
            size="sm"
            id="receiver"
            type={"text"}
            placeholder="Ingresá la dirección"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            rounded="full"
          />
        </FormControl>
        <Button
          type="submit"
          _focus={{ outline: "none" }}
          _hover={{ bg: "transparent" }}
          bg="white"
          color="violet.100"
          fontWeight="bold"
          rounded="full"
          size="sm"
          w="full"
          borderWidth="2px"
          borderColor="violet.100"
          disabled={isFetching}
        >
          Enviar
        </Button>
      </form>
    </Flex>
  );
};

export default Form;
