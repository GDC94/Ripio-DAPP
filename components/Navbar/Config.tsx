export interface NavItem {
  label: string;

  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Productos",
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
    label: "Criptomonedas",
    children: [
      {
        label: "Bitcoin",
        href: "https://www.ripio.com/ar/bitcoin/",
      },
      {
        label: "Ethereum",
        href: "https://www.ripio.com/ar/ethereum/",
      },
      {
        label: "USD Coin",
        href: "https://www.ripio.com/ar/usdc/",
      },
      {
        label: "Dai",
        href: "https://www.ripio.com/ar/dai/",
      },
      {
        label: "Litecoin",
        href: "https://www.ripio.com/ar/litecoin/",
      },
      {
        label: "Todas",
        href: "https://www.ripio.com/ar/criptomonedas/",
      },
    ],
  },
  {
    label: "Cotización",
    children: [
      {
        label: "Bitcoin",
        href: "https://www.ripio.com/ar/bitcoin/cotizacion/",
      },
      {
        label: "Ethereum",
        href: "https://www.ripio.com/ar/ethereum/cotizacion/",
      },
      {
        label: "USD Coin",
        href: "https://www.ripio.com/ar/usdc/cotizacion/",
      },
      {
        label: "Dai",
        href: "https://www.ripio.com/ar/dai/cotizacion/",
      },
      {
        label: "Litecoin",
        href: "https://www.ripio.com/ar/litecoin/cotizacion/",
      },
      {
        label: "Todas",
        href: "https://www.ripio.com/ar/criptomonedas/cotizacion/",
      },
    ],
  },
  {
    label: "Aprendé",
    children: [
      {
        label: "Guias",
        href: "https://launchpad.ripio.com/guias",
      },
      {
        label: "Tutoriales",
        href: "https://launchpad.ripio.com/tutoriales",
      },
      {
        label: "Blog",
        href: "https://launchpad.ripio.com/blog",
      },
      {
        label: "Launchpad",
        href: "https://launchpad.ripio.com",
      },
    ],
  },
];
