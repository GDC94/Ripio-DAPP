import { Flex } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Balance from "./Balance";
import Profile from "./Profile";
import Transactions from "./Transactions";

interface Props {}

const Operations: React.FC<Props> = () => {
  return (
    <Flex w="full" maxW={{lg: '50%', sm: 'full'}} px={{ lg: "0", base: "4" }} minH='400px' mb={{lg: '0', sm: '30px', base: '40px'}}>
      <Tabs w="full" maxW={{lg: '100%', sm: 'full'}} isFitted variant="unstyled" >
        <TabList>
          <Tab
            _selected={{ color: "black", bg: 'yellow.200' }}
            border="none"
            rounded="lg"
            fontWeight="bold"
            bg='violet.30'
            _focus={{ outline: "none" }}
            mr='1'
          >
            Mi perfil
          </Tab>
          <Tab
            _selected={{ color: "black", bg: 'yellow.200' }}
            border="none"
            rounded="lg"
            fontWeight="bold"
            _focus={{ outline: "none" }}
            bg='violet.30'
            mr='1'
          >
            Balance
          </Tab>
          <Tab
            rounded="lg"
            _selected={{ color: "black", bg: 'yellow.200' }}
            border="none"
            fontWeight="bold"
            _focus={{ outline: "none" }}
            bg='violet.30'
    
          >
            Transacciones
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel py="9">
            <Profile />
          </TabPanel>
          <TabPanel py="9">
            <Balance />
          </TabPanel>
          <TabPanel py="9">
            <Transactions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Operations;
