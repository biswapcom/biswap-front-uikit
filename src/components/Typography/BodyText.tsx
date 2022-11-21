import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, BodyTextProps } from "./typesBodyText";

export const bodyTextScaleMap = {
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
};

export const BodyText = styled(Text)<BodyTextProps>`
  font-size: ${({ scale }) =>
    bodyTextScaleMap[scale || scales.SIZE16].fontSize};
  line-height: ${({ scale }) =>
    bodyTextScaleMap[scale || scales.SIZE16].lineHeight};
  font-weight: 400;
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "normal")};
`;

BodyText.defaultProps = {
  as: tags.P,
};
