
export interface CardValuesProps {
    href: string;
    image: string;
    title: string;
    description: string;
    id: number;
  }
  
export const FEATURES: CardValuesProps[] = [
    {
      id: 1,
      href: "https://www.ripio.com/ar/seguridad/",
      image: "/assets/01-seguridad.svg",
      title: "Seguridad",
      description: "Tres capas de seguridad y doble factor de autenticación.",
    },
    {
      id: 2,
      href: "https://www.ripio.com/ar/institucional/",
      image: "/assets/02-innovacion.svg",
      title: "Innovación",
      description: "Somos líderes en desarrollo Blockchain y smart contracts.",
    },
    {
      id: 3,
      href: "https://www.ripio.com/ar/institucional/",
      image: "/assets/03-confianza.svg",
      title: "Confianza",
      description:
        "Guardá y enviá tus cripto o retirá tus fondos cuando quieras.",
    },
  ];
  