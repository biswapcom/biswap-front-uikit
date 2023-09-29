import React, { FC, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";
//types
import { CarouselButtonsTypes } from "./types";

//components
import {
  CarouselHeader,
  CarouselNumbersBlock,
  DirectionButton,
  Dot,
} from "../../components/Carousel";
import { Box, Flex } from "../../components/Box";
import { useMatchBreakpoints } from "../../contexts";

interface IProps<T, C, A> {
  data: T[];
  Slide: FC<C>;
  title?: string;
  slidesToScroll?: number;
  isDraggable?: boolean;
  withDots?: boolean;
  withNavButtons?: boolean;
  navButtonsType?: CarouselButtonsTypes;
  navPadding?: number;
  withNavButtonsHeader?: boolean;
  showNumberBlock?: boolean;
  position?: "start" | "center" | "end" | number;
  isAutoplay?: boolean;
  breakpoints?: any;
  alignItem?: string;
  slideProps?: A; // additional props to pass into Slide Component
  loop?: boolean;
  marginDots?: string;
  slideGap?: number; //pixel value
  speed?: number;
  delay?: number;
  containerOverflow?: string;
}

type ReturnDataType = [() => JSX.Element, () => void, () => void, number];

const NavWrapper = styled(Flex)<{ navPadding?: number }>`
  position: absolute;
  width: 100%;
  justify-content: space-between;
  left: 0;
  top: 50%;
  padding: ${({ navPadding }) => (navPadding ? `0 ${navPadding}px` : "0")};
  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  > * {
    transform: translate(0, -50%);
  }
`;

const Embla = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  &:hover ${NavWrapper} {
    opacity: 1;
  }
`;

const Viewport = styled.div<{ containerOverflow?: string }>`
  overflow: ${({ containerOverflow }) => containerOverflow || "hidden"};
  width: 100%;
`;

const Container = styled(Flex)<{ alignItem: string; gap: number }>`
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  align-items: ${({ alignItem }) => alignItem};
  margin: ${({ gap }) => (gap === 0 ? "0" : gap > 0 ? `0 -${gap / 2}px` : "0")};
`;

export const useCarousel = ({
  data,
  Slide,
  title,
  slidesToScroll = 1,
  isDraggable = false,
  withDots = false,
  withNavButtons = false,
  navButtonsType = CarouselButtonsTypes.GRAY_OPACITY,
  navPadding = 0,
  withNavButtonsHeader = false,
  showNumberBlock = false,
  position = "center",
  isAutoplay = false,
  alignItem = "normal",
  breakpoints = {},
  slideProps = {},
  loop = true,
  marginDots = "24px",
  slideGap = 32,
  speed = 10,
  delay = 8000,
  containerOverflow,
}: IProps<any, any, any>): ReturnDataType => {
  const autoplay = isAutoplay ? [Autoplay({ delay: delay })] : [];
  const { isMobile } = useMatchBreakpoints();
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop,
      draggable: isDraggable,
      speed: speed,
      slidesToScroll,
      skipSnaps: false,
      align: position,
      breakpoints: breakpoints,
    },
    autoplay
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const reInit = useCallback(() => embla && embla.reInit(), [embla]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    isMobile &&
      slideProps?.selectHandle &&
      slideProps?.selectHandle(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex, isMobile, slideProps]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const renderSlides = (): JSX.Element[] =>
    data?.map((item, index) => (
      <Slide
        key={`key-${index}`}
        index={index}
        selectedIndex={selectedIndex}
        {...item}
        {...slideProps}
        reInit={reInit}
      />
    ));

  const handleDirectionClick = (direction: string) => {
    if (embla) direction === "next" ? embla.scrollNext() : embla.scrollPrev();
  };

  const scrollToHandle = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
      setSelectedIndex(index);
    }
  };

  const renderNav = (
    navType: CarouselButtonsTypes,
    navPadding?: number
  ): JSX.Element => {
    return (
      <>
        <DirectionButton
          iconName="ChevronLeft"
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
          themeType={navType}
          navPadding={navPadding}
        />
        <DirectionButton
          isNextButton
          iconName="ChevronRight"
          onClick={scrollNext}
          enabled={nextBtnEnabled}
          themeType={navType}
          navPadding={navPadding}
        />
      </>
    );
  };

  const showHeader = title || withNavButtonsHeader;

  const carouselComponent = () => (
    <Box>
      {showHeader && (
        <CarouselHeader
          title={title}
          handleNav={handleDirectionClick}
          showNavButtons={withNavButtonsHeader}
        />
      )}
      {showNumberBlock && (
        <CarouselNumbersBlock
          dataLength={data?.length}
          selectedIndex={selectedIndex}
          scrollToHandle={scrollToHandle}
        />
      )}

      {data?.length && (
        <Embla>
          <Viewport containerOverflow={containerOverflow} ref={viewportRef}>
            <Container gap={slideGap} alignItem={alignItem}>
              {renderSlides()}
            </Container>
          </Viewport>
          {withNavButtons && (
            <NavWrapper navPadding={navPadding}>
              {renderNav(navButtonsType, navPadding)}
            </NavWrapper>
          )}
        </Embla>
      )}

      {withDots && (
        <Flex
          alignItems="center"
          justifyContent="center"
          marginTop={marginDots}
        >
          {scrollSnaps.map((_, index) => (
            <Dot
              key={index.toString()}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </Flex>
      )}
    </Box>
  );

  return [carouselComponent, scrollNext, scrollPrev, selectedIndex];
};
