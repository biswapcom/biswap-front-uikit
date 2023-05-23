import { FC } from "react";
import { ColoredToastProps, ToastProps } from "../types";
interface ColoredToastItemProps extends Pick<ToastProps, "onRemove" | "ttl" | "style"> {
    toast: ColoredToastProps;
}
declare const ColoredToastItem: FC<ColoredToastItemProps>;
export default ColoredToastItem;
