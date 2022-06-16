import React from "react";
import { TabProps } from "./types";
declare const TabItem: {
    <E extends React.ElementType<any> = "button">(props: TabProps<E>): JSX.Element;
    defaultProps: {
        external: boolean;
        variant: "dark";
        scale: "sm";
        disabled: boolean;
    };
};
export default TabItem;
