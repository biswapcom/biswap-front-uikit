import { FC } from "react";
import { ColoredToastProps, ColoredToastContainerProps } from "../types";
interface ToastContainerProps extends ColoredToastContainerProps {
    toasts: ColoredToastProps[];
}
declare const ColoredToasts: FC<ToastContainerProps>;
export default ColoredToasts;
