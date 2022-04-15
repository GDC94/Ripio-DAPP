export const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export interface Card {
  title: string;
  text: string;
  src: string;
}

export const cards: Card[] = [
  {
    title: "Todo sobre la Web3 👩‍💻",
    text: " Seguro hace poco estas empezando a escuchar que se viene la Web3...Cual es el objetivo de la web 3.0? existen las redes sociales descentralizadas? cual es la diferencia con la web 2.0? 🤯",
    src: "https://www.youtube.com/embed/OjPTW25zHgc",
  },
  {
    title: "⚠️💩 ALTCOINS vs SHITCOINS",
    text: "Si estás empezando a poner algunos ahorros en criptomonedas, seguramente ya hayas escuchado hablar algo de 'altcoins', 'shitcoins' y 'scams' (o estafas) todo junto en algún lado.",
    src: "https://www.youtube.com/embed/Ob34Mjj4tco",
  },
  {
    title: "🕹️Todo sobre PLAY TO EARN 🕹",
    text: "Toda la movida de los NFT hace rato viene en auge pero realmente ¿Qué es el Play To Earn y cómo funciona? ¿Qué es Axie Infinity? Tratemos de ordenar un poco y vamos por partes! 🎮💰",
    src: "https://www.youtube.com/embed/WgXbW_NdYSw",
  },
];
