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

  const top = useBreakpointValue({ base: "90%", md: "90%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box position={"relative"} mb="10" width={"full"} overflow={"hidden"}>
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
          <Box
            bg="#f6f2fdd1"
            key={index}
            height={{ lg: "300px", sm: "350px", base: "500px" }}
          >
            <Container
              pt="3"
              pb="3"
              w={"full"}
              maxW={"980px"}
              display="flex"
              height="300px"
              flexDirection={{ lg: "row", sm: "row", base: "column" }}
            >
              <Stack
                w={{ lg: "50%", sm: "50%", base: "full" }}
                mr="3.5"
                minH="200px"
                justifyContent="center"
              >
                <Heading
                  fontFamily="heading"
                  color="violet.100"
                  fontSize={{ base: "27px", md: "4xl", lg: "4xl" }}
                  textAlign={{ lg: "left", base: "center" }}
                >
                  {card.title}
                </Heading>
                <Text
                  fontFamily="body"
                  fontSize={{ base: "md", lg: "16px" }}
                  color="black"
                  fontWeight="bold"
                  textAlign={{ lg: "left", base: "center" }}
                >
                  {card.text}
                </Text>
              </Stack>

              <AspectRatio
                w={{ lg: "50%", sm: "50%", base: "full" }}
                ratio={{ lg: 5, sm: 3, base: 2 }}
              >
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
