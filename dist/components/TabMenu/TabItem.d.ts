import React from "react";
import { ButtonProps } from "../Button";
declare const TabItem: {
    <E extends React.ElementType<any> = "button">(props: ButtonProps<E>): JSX.Element;
    defaultProps: {
        isLoading: boolean;
        external: boolean;
        variant: "select";
        scale: "md";
        disabled: boolean;
    };
};
export default TabItem;
