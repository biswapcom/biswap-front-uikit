import styled from "styled-components";
import Text from "../Text/Text";
import { scales, BodyTextProps } from "./typesBodyText";
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

const getScalesAttributes = ({ scale }: BodyTextProps) => {
  if (typeof scale === "string") return bodyTextScaleMap[scale];

  const tempScales = JSON.parse(JSON.stringify(scale));

  if (!tempScales.xs) tempScales.xs = BodyText.defaultProps?.scale;

  return scale
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
    : { fontSize: [], lineHeight: [] };
};

export const BodyText = styled(Text).attrs(getScalesAttributes)<BodyTextProps>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;

BodyText.defaultProps = {
  scale: "size16",
  as: "p",
};
