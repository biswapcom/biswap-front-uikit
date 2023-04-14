import { ReactNode } from "react";
import { CarouselButtonsTypes } from "../../hooks";

export interface IDirectionButtonProps {
  enabled: boolean;
  onClick: () => void;
  iconName: string;
  isNextButton?: boolean;
  navPadding?: number;
  themeType: CarouselButtonsTypes;
}

export const variantsNavButton = {
  PRIMARY: "primary",
  WHITE: "white",
  GRAY_OPACITY: "grayOpacity",
} as const;

export type VariantNavButton =
  typeof variantsNavButton[keyof typeof variantsNavButton];

export interface IDirectButtonStyled {
  disabled?: boolean;
  isNextButton?: boolean;
  navPadding?: number;
  variant: VariantNavButton;
}
