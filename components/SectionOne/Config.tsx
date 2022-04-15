
export interface CardProps {
    href: string;
    image: string;
    title: string;
    description: string;
    id: number;
  }
  
export const FEATURES: CardProps[] = [
    {
      id: 1,
      href: "https://www.ripio.com/ar/criptomonedas/como-comprar/",
      image: "/assets/wallet.svg",
      title: "Depositá pesos",
      description:
        "Fondeá tu cuenta por transferencia bancaria, Mercado Pago o en efectivo.",
    },
    {
      id: 2,
      href: "https://www.ripio.com/ar/criptomonedas/comprar/",
      image: "/assets/cripto.svg",
      title: "Comprá cripto",
      description: "Accedé a bitcoins y otros activos digitales en pocos pasos.",
    },
    {
      id: 3,
      href: "https://www.ripio.com/ar/wallet/",
      image: "/assets/piggy.svg",
      title: "Gestioná tus fondos",
      description:
        "Guardá y enviá tus cripto o retirá tus fondos cuando quieras.",
    },
  ];
  