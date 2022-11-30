import React, { Children, FC } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, BodyTextProps, Tags } from "./typesBodyText";
import { breakpointsKeys } from "../../theme/base";
import { TextProps } from "../Text";

interface scalesMap {
  [x: string]: {
    fontSize: string;
    lineHeight: string;
  };
}

export const bodyTextScaleMap: scalesMap = {
  [scales.SIZE40]: {
    fontSize: "40px",
    lineHeight: "48px",
  },
  [scales.SIZE32]: {
    fontSize: "32px",
    lineHeight: "40px",
  },
  [scales.SIZE24]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [scales.SIZE20]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  [scales.SIZE16]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  [scales.SIZE14]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [scales.SIZE12]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [scales.SIZE10]: {
    fontSize: "10px",
    lineHeight: "12px",
  },
};

const TextWrapper = styled(Text).attrs({ bold: false })<{
  nowrap?: boolean;
  as?: Tags;
  bold?: boolean;
  children: any;
}>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;

export const BodyText: FC<BodyTextProps> = ({ scale, children, ...props }) => {
  //MAIN APPROACH FOR PROPS
  const textProps = {...props} as TextProps
  if (typeof scale === "string") {
    return (
      <TextWrapper {...bodyTextScaleMap[scale]} {...textProps} >
        {children}
      </TextWrapper>
    );
  }

  const tempScales = JSON.parse(JSON.stringify(scale));

  if (!tempScales.xs) tempScales.xs = BodyText.defaultProps?.scale;

  const textStyles = scale
    ? {
        fontSize: breakpointsKeys.map((breakPoint) =>
          tempScales[breakPoint]
            ? bodyTextScaleMap[tempScales[breakPoint]].fontSize
            : bodyTextScaleMap[scales.SIZE20].fontSize
        )[0],
        lineHeight: breakpointsKeys.map((breakPoint) =>
          tempScales[breakPoint]
            ? bodyTextScaleMap[tempScales[breakPoint]].lineHeight
            : bodyTextScaleMap[scales.SIZE20].lineHeight
        )[0],
      }
    : {};
  return (
    <TextWrapper {...textStyles} {...textProps}>
      {children}
    </TextWrapper>
  );
};

BodyText.defaultProps = {
  as: tags.P,
  scale: "size16",
  bold: false,
};
