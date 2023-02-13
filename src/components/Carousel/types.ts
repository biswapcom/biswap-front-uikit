import {ReactNode} from "react";

export interface ICarouselButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export interface IDirectionButtonProps {
  enabled: boolean;
  onClick: () => void;
  iconName: string;
  isNextButton?: boolean;
}