import React from "react";
import styled from "styled-components";
import Text from "../../../../components/Text/Text";
import { BSWPriceProps } from "../../types";
import { BswIcon } from "../../../../components/Svg";
// import { formatSpacingAmount } from "../../../util/formatSpacingAmount";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  grid-template-areas:
    "logo bsw-title"
    "logo bsw-value";
  grid-column-gap: 8px;
  position: relative;
  width: 140px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    grid-column-gap: 16px;
  }

  .logo {
    width: 38px;
    grid-area: logo;
  }
`;

const BSWPrice: React.FC<BSWPriceProps> = ({
  BSWPriceLabel,
  BSWPriceValue,
}) => {
  return (
    <Wrapper>
      <BswIcon width="38px" className="logo" />
      <Text color="gray900" fontSize="12px" lineHeight="18px" bold>
        {BSWPriceLabel}
      </Text>
      <Text color="contrast" fontSize="16px" lineHeight="19px" bold>
        {/*${formatSpacingAmount(BSWPriceValue)}*/}
        {BSWPriceValue}
      </Text>
    </Wrapper>
  );
};

export default BSWPrice;
