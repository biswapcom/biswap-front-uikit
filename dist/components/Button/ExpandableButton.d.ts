import React, { ReactNode } from "react";
interface Props {
    onClick?: () => void;
    expanded?: boolean;
    children: ReactNode;
}
export declare const ExpandableButton: React.FC<Props>;
export declare const ExpandableLabel: React.FC<Props>;
export {};
