import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, BodyTextProps, Tags } from "./typesBodyText";
import React, { FC } from "react";
import { breakpointsKeys } from "../../theme/base";

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

const TextWrapper = styled(Text)<{
  nowrap?: boolean;
  as?: Tags;
  bold?: boolean;
  textAlign?: string;
}>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
`;

export const BodyText: FC<BodyTextProps> = ({ scale, children, ...props }) => {
  if (typeof scale === "string") {
    return (
      //@ts-ignore
      <TextWrapper {...bodyTextScaleMap[scale]} {...props}>
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
            : null
        ),
        lineHeight: breakpointsKeys.map((breakPoint) =>
          tempScales[breakPoint]
            ? bodyTextScaleMap[tempScales[breakPoint]].lineHeight
            : null
        ),
      }
    : {};
  return (
    //@ts-ignore
    <TextWrapper {...textStyles} {...props}>
      {children}
    </TextWrapper>
  );
};

BodyText.defaultProps = {
  as: tags.P,
  scale: "size16",
  bold: false,
};
