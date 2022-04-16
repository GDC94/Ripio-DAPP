import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "../theme";
import { Fonts } from "../fonts/Fonts";

import { MoralisProvider } from "react-moralis";
import { motion } from "framer-motion";
const server = "https://rc7zjxjwv14f.usemoralis.com:2053/server";
const appId = "buVUlvsXshDcaSheimkZc78iaMdtaFb607KTvKwo";
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider appId={appId} serverUrl={server}>
        <motion.div
          initial="pageInitial"
          animate="pageAnitame"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnitame: {
              opacity: 1.3,
            },
          }}
        >
          <Fonts />
          <Component {...pageProps} />
        </motion.div>
      </MoralisProvider>
    </ChakraProvider>
  );
};

export default App;
