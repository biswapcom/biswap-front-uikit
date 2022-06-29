import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    hideCloseButton?: boolean;
    backBtnColor?: string;
    background?: string;
    p?: string;
}
declare const ModalWithBackground: React.FC<Props>;
export default ModalWithBackground;
