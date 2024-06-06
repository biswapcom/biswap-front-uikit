import React, { FC } from "react";
import styled from "styled-components";
import { getRgba } from "../../../../util";
import { BodyText } from "../../../../components/Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;
  background: ${({ theme }) =>
    getRgba(theme.colors.backgroundDark, theme, 0.16)};
  padding: 12px 16px;
`;
const LabelWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.span``;

const LanguageSelector: FC = () => {
  return (
    <Wrapper>
      <LabelWrap>
        <BodyText color="backgroundDark" bold>
          Language:
        </BodyText>
      </LabelWrap>
    </Wrapper>
  );
};

export default LanguageSelector;
