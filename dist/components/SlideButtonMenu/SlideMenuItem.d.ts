import React from "react";
import { ButtonProps } from "../Button";
declare const SlideMenuItem: {
    <E extends React.ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "primary";
        scale: "md";
        disabled: boolean;
    };
};
export default SlideMenuItem;