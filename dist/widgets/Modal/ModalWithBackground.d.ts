import React, { ReactNode } from "react";
import { InjectedProps } from "./types";
import { BoxProps } from "../../components/Box";
interface Props extends InjectedProps, BoxProps {
    hideCloseButton?: boolean;
    backBtnColor?: string;
    background?: string;
    backgroundTransparent?: boolean;
    p?: string;
    children: ReactNode;
}
declare const ModalWithBackground: React.FC<Props>;
export default ModalWithBackground;
