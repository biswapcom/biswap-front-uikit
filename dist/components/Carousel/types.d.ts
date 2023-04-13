import { ReactNode } from "react";
import { CarouselButtonsTypes } from "../../hooks";
export interface ICarouselButtonProps {
    onClick: () => void;
    children: ReactNode;
    isNextButton?: boolean;
    navPadding?: number;
}
export interface IDirectionButtonProps {
    enabled: boolean;
    onClick: () => void;
    iconName: string;
    isNextButton?: boolean;
    navPadding?: number;
    themeType: CarouselButtonsTypes;
}
export declare const variantsNavButton: {
    readonly PRIMARY: "primary";
    readonly WHITE: "white";
    readonly GRAY_OPACITY: "grayOpacity";
};
export declare type VariantNavButton = typeof variantsNavButton[keyof typeof variantsNavButton];
export interface IDirectButtonStyled {
    disabled?: boolean;
    isNextButton?: boolean;
    navPadding?: number;
    variant: VariantNavButton;
}
