import { FC } from "react";
import { CarouselButtonsTypes } from "./types";
interface Props<T, C, A> {
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
    slideProps?: A;
    loop?: boolean;
    marginDots?: string;
    slideGap?: number;
    speed?: number;
    delay?: number;
}
export declare const useCarousel: ({ data, Slide, title, slidesToScroll, isDraggable, withDots, withNavButtons, navButtonsType, navPadding, withNavButtonsHeader, showNumberBlock, position, isAutoplay, alignItem, breakpoints, slideProps, loop, marginDots, slideGap, speed, delay, }: Props<any, any, any>) => [() => JSX.Element];
export {};
