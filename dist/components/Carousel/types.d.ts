import { ReactNode } from "react";
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
}
