import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadTextProps } from "./typesHeadText";

const style = {
  [scales.SIZE40]: {
    fontSize: '40px',
    lineHeight: '48px',
  },
  [scales.SIZE32]: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  [scales.SIZE24]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [scales.SIZE20]: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  [scales.SIZE16]: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  [scales.SIZE14]: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  [scales.SIZE12]: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  [scales.SIZE10]: {
    fontSize: '10px',
    lineHeight: '12px',
  },
};

const HeadText = styled(Text).attrs({ bold: true })<HeadTextProps>`
  font-size: ${({ scale }) => style[scale || scales.SIZE32].fontSize};
  font-weight: 600;
  white-space: ${({ nowrap }) => nowrap ? "nowrap" : "normal"};
`;

HeadText.defaultProps = {
  as: tags.H2,
};

export default HeadText;
