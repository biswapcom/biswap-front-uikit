import React from "react";
import { TextProps } from "../Text";
export declare const tags: {
    P: string;
    SPAN: string;
    DIV: string;
};
export declare const scales: {
    readonly SIZE40: "size40";
    readonly SIZE32: "size32";
    readonly SIZE24: "size24";
    readonly SIZE20: "size20";
    readonly SIZE16: "size16";
    readonly SIZE14: "size14";
    readonly SIZE12: "size12";
    readonly SIZE10: "size10";
};
export declare type Tags = typeof tags[keyof typeof tags];
export declare type Scales = typeof scales[keyof typeof scales];
export interface ScalesObj {
    xs?: Scales;
    sm?: Scales;
    md?: Scales;
    lg?: Scales;
    xl?: Scales;
    xll?: Scales;
    xxl?: Scales;
}
export interface BodyTextProps extends TextProps {
    as?: Tags;
    scale?: Scales | ScalesObj;
    nowrap?: boolean;
    children: string | React.ReactNode | JSX.Element;
    color?: string;
    bold?: boolean;
}
