
import {extendTheme } from "@chakra-ui/react";


export default extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#ffffff",
      },
    },
  },
  fonts: {
    heading: "Hind Vadodara",
    body: "Lato",
  },
  colors: {
    yellow: {
        100: "#FFB400"
    },
    primary: {
      50: "#000000",
      100: "#373744",
      200: "#444444"
    },
    violet: {
      20: "#f5eefa7a",
      30: "#f5eefa",
      50: "#f0e6fc",
      100: "#6d07e6",
    }
  },
  shadows: {
    black: '0px 4px 20px rgb(0 0 0 / 25%)',
    blackStrong: '0px 4px 25px rgb(0 0 0 / 35%)'
  }
});

