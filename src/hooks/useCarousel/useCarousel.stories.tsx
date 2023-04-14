import React, { FC } from "react";
import { useCarousel } from "./useCarousel";
import { Box, Flex } from "../../components/Box";
import { BodyText } from "../../components/Typography";
import { useTheme } from "styled-components";
import { CarouselButtonsTypes } from "./types";

export default {
  title: "Hooks/useCarousel",
};

const data = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Item: FC<{ text: string }> = ({ text }) => (
  <Flex
    p="24px"
    width="100%"
    minWidth="100%"
    alignItems="center"
    justifyContent="center"
  >
    <BodyText textAlign="center" color="white">
      {text}
    </BodyText>
  </Flex>
);

export const Default = () => {
  const {
    // @ts-ignore
    colors: { dark900 },
  } = useTheme();
  const [carouselComponent] = useCarousel({
    data: data,
    Slide: Item,
    isAutoplay: true,
    isDraggable: true,
  });

  return (
    <Box py="56px" background={dark900}>
      {carouselComponent()}
    </Box>
  );
};
export const TopButtons = () => {
  const {
    // @ts-ignore
    colors: { dark900 },
  } = useTheme();
  const [carouselComponent] = useCarousel({
    data: data,
    Slide: Item,
    showNumberBlock: false,
    withNavButtonsHeader: true,
    isDraggable: true,
    withDots: false,
    position: "center",
    isAutoplay: true,
    withNavButtons: false,
    slideGap: 0,
    speed: 5,
    delay: 3000,
  });

  return (
    <Box py="56px" background={dark900}>
      {carouselComponent()}
    </Box>
  );
};

export const WithDots = () => {
  const {
    // @ts-ignore
    colors: { dark900 },
  } = useTheme();
  const [carouselComponent] = useCarousel({
    data: data,
    Slide: Item,
    showNumberBlock: false,
    withNavButtonsHeader: false,
    isDraggable: true,
    withDots: true,
    position: "center",
    isAutoplay: true,
    withNavButtons: false,
    slideGap: 0,
    speed: 5,
    delay: 3000,
  });

  return (
    <Box py="56px" background={dark900}>
      {carouselComponent()}
    </Box>
  );
};

export const WithNavButtons = () => {
  const {
    // @ts-ignore
    colors: { dark900 },
  } = useTheme();
  const [carouselComponent] = useCarousel({
    data: data,
    Slide: Item,
    showNumberBlock: false,
    withNavButtonsHeader: false,
    isDraggable: true,
    withDots: false,
    position: "center",
    isAutoplay: true,
    withNavButtons: true,
    navPadding: 4,
    slideGap: 0,
    speed: 5,
    delay: 3000,
    // navButtonsType: CarouselButtonsTypes.PRIMARY,
  });

  return (
    <Box py="56px" background={dark900}>
      {carouselComponent()}
    </Box>
  );
};
