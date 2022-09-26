import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, BodyTextProps } from "./typesBodyText";

const style = {
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
};

const HeadText = styled(Text).attrs({ bold: true })<BodyTextProps>`
  font-size: ${({ scale }) => style[scale || scales.SIZE16].fontSize};
  font-weight: 600;
`;

HeadText.defaultProps = {
  as: tags.P,
};

export default HeadText;