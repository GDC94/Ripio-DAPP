export interface FooterItem {
  title: string;
  children: Array<SubItem>;
}
export interface SubItem {
  label: string;
  href: string;
}

export const FOOTER_ITEMS: FooterItem[] = [
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

export interface SocialMediaItem {
  image: string;
  href: string;
}

export const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
  {
    image: "/assets/facebook.svg",
    href: "https://www.facebook.com/RipioApp/",
  },
  {
    image: "/assets/twitter.svg",
    href: "https://twitter.com/ripioapp",
  },
  {
    image: "/assets/instagram.svg",
    href: "https://www.instagram.com/ripioapp/",
  },
  {
    image: "/assets/youtube.svg",
    href: "https://www.youtube.com/Ripiotv",
  },
  {
    image: "/assets/linkedin.svg",
    href: "https://www.linkedin.com/company/ripio/",
  },
  {
    image: "/assets/DATAWEB.jpg",
    href: "https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx",
  },
];

export const TEXTS = {
  footerTitle: "Descubrí la nueva economía digital.",
  footerLeyend:
    "Los activos digitales pueden tener una cotización altamente volátil.Moonbird S.R.L. no efectúa ningún tipo de representación o garantía sobre la posibilidad o conveniencia de utilizarlos como inversión.",
  registerButton: "Registrarse",
  singInButton: "Iniciar Sesión",
};
