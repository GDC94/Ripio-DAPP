import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "../theme";
import { Fonts } from "../fonts/Fonts";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../config/web3/Index";
import { MoralisProvider } from "react-moralis";
import { motion } from "framer-motion";
import { Router } from "next/router";


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
      <motion.div  initial='pageInitial' animate='pageAnitame' variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnitame: {
          opacity: 1.3
        }
      }}>
        <Fonts />
        <Component {...pageProps} />
        </motion.div>
      </MoralisProvider>
    </ChakraProvider>
  );
};

export default App;
