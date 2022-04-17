import { Box, Flex, Text } from "@chakra-ui/layout";
import { Stack, useClipboard, FormControl, FormLabel } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import { useMoralis } from "react-moralis";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import CardContainer from "./CardContainer";
import { useState } from "react";

interface Props {}

const Profile: React.FC<Props> = () => {
  const { user, setUserData, isUserUpdating } = useMoralis();
  const { hasCopied, onCopy } = useClipboard(
    "0x8CF70736d8E7715437306bb278060155b0ec0f84"
  );

  const [input, setInput] = useState("");

  const handleInput = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setUserData({
        username: input,
      }).then(() => setInput(""));
    }
  };

  console.log(input);
  return (
    <CardContainer>
      <Flex flexDirection="column" maxW="400px" >
        <Flex flexDirection="column" mb="3">
          <Tag
            rounded="full"
            fontWeight="bold"
            size={"lg"}
            variant="solid"
            bg="violet.30"
            color="violet.100"
          >
            Tu nombre de usuario
          </Tag>
          <Tag
            size={"lg"}
            fontWeight="bold"
            variant="solid"
            bg="white"
            color="black"
          >
            &nbsp;{user && user.getUsername()}
          </Tag>
        </Flex>
        <Flex flexDirection="column">
          <Tag
            rounded="full"
            color="violet.100"
            fontWeight="bold"
            size={"lg"}
            variant="solid"
            bg="violet.30"
          >
            Tu dirección en Metamask
          </Tag>
          <Tooltip
            label={
              hasCopied ? "Dirección de wallet!" : "Copiar dirección de wallet"
            }
            closeOnClick={false}
            hasArrow
          >
            <Button
              _focus={{ outline: "none" }}
              aria-label="email"
              variant="ghost"
              size="md"
              onClick={onCopy}
              _hover={{ bg: "transparent" }}
            >
              {" "}
              {user && user.get("ethAddress")}
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        pt="5"
        flexDirection="column"
        textAlign="left"
        alignItems="left"
 
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="username" fontWeight="bold" as="legend">
              Cambiar nombre de usuario
            </FormLabel>
            <Input
              _focus={{ outline: "none" }}
              rounded="full"
              w="400px"
              placeholder="Ingresá el nuevo nombre"
              size="sm"
              mb="3.5"
              mt="2"
              outline="none"
              borderColor="violet.100"
              id="username"
              type="text"
              value={input}
              onChange={handleInput}
            />
          </FormControl>

          <Button
            type="submit"
            _focus={{ outline: "none" }}
            _hover={{ bg: "violet.100" }}
            bg="violet.100"
            color="white"
            fontWeight="bold"
            rounded="full"
            size="sm"
            w="400px"
            disabled={isUserUpdating}
          >
            Cambiar
          </Button>
        </form>
      </Flex>
    </CardContainer>
  );
};

export default Profile;
