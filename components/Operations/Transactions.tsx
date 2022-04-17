import { Code, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CardContainer from "./CardContainer";

interface Props {}

const Transactions: React.FC<Props> = () => {
  const Web3Api = useMoralisWeb3Api();
  const [transactions, setTransactions] = useState([]);
  const BASE_URL = "https://rinkeby.etherscan.io/tx/";
  const getMyTransactions = async () => {
    const result = await Web3Api.account
      .getTransactions({
        chain: "rinkeby",
        address: "0x8CF70736d8E7715437306bb278060155b0ec0f84",
        limit: 5,
      })
      .catch((err) => console.log(err));
    if (result) {
      setTransactions(result.result);
    }
  };

  console.log(transactions);

  useEffect(() => {
    getMyTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardContainer>
      <Stack maxW={{lg: '400px', sm: 'full', base: 'full'}} px='4' >
        <Tag
          w="full"
          bg="violet.30"
          fontWeight="bold"
          size={"lg"}
          variant="solid"
          color="violet.100"
          rounded="full"
        >
          Ultimas transacciones
        </Tag>

        {transactions &&
          transactions.map((item) => (
            <Stack
              p="1.5"
              px="4"
              key={item.hash}
              borderWidth="thin"
              borderColor="gray.300"
              rounded="lg"
            >
              {item.from_address !==
              "0x8CF70736d8E7715437306bb278060155b0ec0f84" ? (
                <Text
                  fontWeight="extrabold"
                  fontSize="20px"
                  color="whatsapp.600"
                >
                  Recibiste{" "}
                </Text>
              ) : (
                <Text fontWeight="extrabold" fontSize="20px" color="red">
                  Enviaste
                </Text>
              )}
              <Flex flexDirection="row">
                <Text fontWeight="bold">Hora: &nbsp;</Text>
                <Text>{item.block_timestamp}</Text>
              </Flex>

              <Flex flexDirection="column">
                <Text fontWeight="bold">Hash de la operación </Text>
                <Link
                  _focus={{ outline: "none" }}
                  isExternal
                  href={`${BASE_URL}${item.hash}`}
                >
                  {item.hash}
                </Link>
              </Flex>
            </Stack>
          ))}
      </Stack>
    </CardContainer>
  );
};

export default Transactions;
