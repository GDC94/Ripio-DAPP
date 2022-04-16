import { Flex } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Balance from "./Balance";
import Profile from "./Profile";
import Transactions from "./Transactions";

interface Props {}

const Operations: React.FC<Props> = () => {
  return (
    <Flex w="50%"    px={{lg: '0',base: '4'}}>
      <Tabs isFitted variant="unstyled">
        <TabList>
          <Tab
          _selected={{ color: 'black',  bg: 'twitter.100'  }}
            border="none"
            rounded='lg'
            fontWeight="bold"
            w="230px"
            _focus={{ outline: "none" }}
          >
            Mi perfil
          </Tab>
          <Tab
          _selected={{ color: 'black', bg: 'twitter.100' }}
            border="none"
            rounded='lg'
            fontWeight="bold"
            _focus={{ outline: "none" }}
          >
            Balance
          </Tab>
          <Tab
          rounded='lg'
          _selected={{ color: 'black',  bg: 'twitter.100'  }}
            border="none"
           
            fontWeight="bold"
            _focus={{ outline: "none" }}
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
