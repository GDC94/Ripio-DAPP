import React from "react";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  AspectRatio,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { cards, settings } from "./Config";

export default function Carousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
      height={"250px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={"violet.100"}
        _focus={{ outline: "none" }}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={"violet.100"}
        _focus={{ outline: "none" }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box bg="#f6f2fdd1" key={index} height={"250px"}>
            <Container
              pt="3"
              pb="3"
              w={"full"}
              maxW={"980px"}
              display="flex"
              height="250px"
              flexDirection="row"
            >
              <Stack w={"50%"} justifyContent="center" mr="3.5">
                <Heading
                  
                  fontFamily="heading"
                  color="violet.100"
                  fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
                >
                  {card.title}
                </Heading>
                <Text
                  fontFamily="body"
                  fontSize={{ base: "md", lg: "16px" }}
                  color="black"
                  fontWeight="bold"
                >
                  {card.text}
                </Text>
              </Stack>

              <AspectRatio w="50%" ratio={5} >
                <iframe
               
                  width="560"
                  height="315"
                  src={card.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </AspectRatio>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
