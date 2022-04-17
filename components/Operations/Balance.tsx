import { Button } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Stack, Text } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import { Tag } from "@chakra-ui/tag";
import { Tooltip } from "@chakra-ui/tooltip";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useERC20Balances, useMoralis, useMoralisWeb3Api } from "react-moralis";

import CardContainer from "./CardContainer";

interface Props {}

const Balance: React.FC<Props> = () => {
  const Web3Api = useMoralisWeb3Api();
  const [balance, setBalance] = useState("");
  const { user } = useMoralis();
  const { hasCopied, onCopy } = useClipboard(
    "0x8CF70736d8E7715437306bb278060155b0ec0f84"
  );
  const { fetchERC20Balances, data } = useERC20Balances();

  const getMyBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: "0x8CF70736d8E7715437306bb278060155b0ec0f84",
      })
      .catch((err) => console.log(err));
    if (result) {
      setBalance(Moralis.Units.FromWei(result.balance));
    }
  };
  useEffect(() => {
    getMyBalance();
    fetchERC20Balances({
      params: {
        chain: "rinkeby",
        address: "0x8CF70736d8E7715437306bb278060155b0ec0f84",
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardContainer>
      <Stack w="full" alignItems="center" maxW={{ lg: "400px", sm: "full" }}>
        <Tag
          w="full"
          bg="violet.30"
          fontWeight="bold"
          size={"lg"}
          variant="solid"
          color="violet.100"
          rounded="full"
        >
          Tu saldo en Metamask
        </Tag>
        <Stack w="full" justifyContent="center" alignItems="center" h="140px">
          <Image src="/assets/eth.svg" alt="" w="35px" />
          <Text fontSize="30px" fontWeight="bold">
            {balance && balance} ETH
          </Text>
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
              size="sm"
              onClick={onCopy}
              _hover={{ bg: "transparent" }}
              color="gray.400"
            >
              {" "}
              {user && user.get("ethAddress")}
            </Button>
          </Tooltip>
          {data &&
            data.map((token) => (
              <Stack key={token.symbol}>
                <Text fontWeight="bold">
                  {Moralis.Units.FromWei(token.balance)} - {token.symbol}
                </Text>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </CardContainer>
  );
};

export default Balance;
