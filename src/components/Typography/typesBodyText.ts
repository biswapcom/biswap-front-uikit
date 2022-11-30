import React, { PropsWithChildren, ReactChildren, ReactChild } from "react";
import { TextProps } from "../Text";
import { SpaceProps, TypographyProps } from "styled-system";

export const tags = {
  P: "p",
  SPAN: "span",
  DIV: "div",
};
export const scales = {
  SIZE40: "size40",
  SIZE32: "size32",
  SIZE24: "size24",
  SIZE20: "size20",
  SIZE16: "size16",
  SIZE14: "size14",
  SIZE12: "size12",
  SIZE10: "size10",
} as const;

export type Tags = typeof tags[keyof typeof tags];
export type Scales = typeof scales[keyof typeof scales];
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
  children: string | React.ReactNode | JSX.Element;
  color?: string;
}
