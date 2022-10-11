import React, { ReactNode } from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    hideCloseButton?: boolean;
    backBtnColor?: string;
    background?: string;
    backgroundTransparent?: boolean;
    p?: string;
    children: ReactNode;
}
declare const ModalWithBackground: React.FC<Props>;
export default ModalWithBackground;
