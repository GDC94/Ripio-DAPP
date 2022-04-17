import { Button } from "@chakra-ui/button";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";

interface FooterItem {
  title: string;
  children: Array<SubItem>;
}
interface SubItem {
  label: string;
  href?: string;
}

const FOOTER_ITEMS: FooterItem[] = [
  {
    title: "Productos",
    children: [
      {
        label: "Criptomonedas",
        href: "https://www.ripio.com/ar/criptomonedas/",
      },
      {
        label: "Wallet",
        href: "https://www.ripio.com/ar/wallet/",
      },
      {
        label: "Exchange",
        href: "https://exchange.ripio.com/es/",
      },
      {
        label: "OTC",
        href: "https://www.ripio.com/ar/otc/",
      },
      {
        label: "Swap",
        href: "https://www.ripio.com/ar/swap/",
      },
    ],
  },
  {
    title: "Útiles",
    children: [
      {
        label: "Launchpad",
        href: "https://www.ripio.com/ar/criptomonedas/",
      },
      {
        label: "Cómo comprar",
        href: "https://www.ripio.com/ar/wallet/",
      },
      {
        label: "Medios de Pago",
        href: "https://exchange.ripio.com/es/",
      },
      {
        label: "Seguridad",
        href: "https://www.ripio.com/ar/otc/",
      },
      {
        label: "Ayuda",
        href: "https://www.ripio.com/ar/swap/",
      },
    ],
  },
  {
    title: "Institucional",
    children: [
      {
        label: "Nosotros",
        href: "https://www.ripio.com/ar/criptomonedas/",
      },
      {
        label: "Trabajá con nosotros",
        href: "https://www.ripio.com/ar/wallet/",
      },
      {
        label: "Términos y condiciones",
        href: "https://exchange.ripio.com/es/",
      },
      {
        label: "Políticas de privacidad",
        href: "https://www.ripio.com/ar/otc/",
      },
      {
        label: "Términos de Ripio Coin (RPC)",
        href: "https://www.ripio.com/ar/swap/",
      },
    ],
  },
];

const FooterRipio: React.FC = () => {
  return (
    <Stack bg="violet.100" h="550px">
      <Stack m="auto" maxW="978px" px="4" h="auto">
        <Grid templateColumns="repeat(5, 1fr)" gap={1} mb="24">
          <GridItem w="375px" h="auto">
            <Heading
              fontFamily="heading"
              color="white"
              maxWidth="200px"
              fontWeight="extrabold"
              fontSize="24px"
            >
              Descubrí la nueva economía digital.
            </Heading>
            <Stack maxWidth="190px" mt="9">
              <Button
                as="a"
                p="4"
                h="2.5"
                color="violet.100"
                bg="white"
                rounded="full"
                fontSize="15px"
                cursor="pointer"
                mb="2"
              >
                Registrarse
              </Button>
              <Button
                as="a"
                p="4"
                h="2.5"
                color="white"
                borderWidth="thin"
                borderColor="white"
                bg="transparent"
                rounded="full"
                fontSize="15px"
                _hover={{
                  bg: "transparent",
                }}
                cursor="pointer"
              >
                Iniciar Sesión
              </Button>
            </Stack>
          </GridItem>

          {FOOTER_ITEMS.map((item) => (
            <GridItem key="" w="179px" h="auto">
              <Heading
                fontFamily="body"
                fontSize="17px"
                fontWeight="900"
                color="white"
                mb="6"
              >
                {item.title}
              </Heading>
              <Stack>
                {item.children && (
                  <>
                    {item.children.map((child) => (
                      <Text
                        key=""
                        as="a"
                        href={child.href}
                        fontSize="14px"
                        color="white"
                      >
                        {child.label}
                      </Text>
                    ))}
                  </>
                )}
              </Stack>
            </GridItem>
          ))}
        </Grid>
        <Box h="0.5" bg="white"></Box>
        <Stack pt="4">
          <Text color="white" fontSize="10px" maxW="470px">
            Los activos digitales pueden tener una cotización altamente volátil.
            Moonbird S.R.L. no efectúa ningún tipo de representación o garantía
            sobre la posibilidad o conveniencia de utilizarlos como inversión.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterRipio;
