import React from "react";
import { SlideButtonProps } from "./types";
declare const SlideMenuItem: {
    <E extends React.ElementType<any> = "button">(props: SlideButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "dark";
        scale: "sm";
        disabled: boolean;
    };
};
export default SlideMenuItem;
