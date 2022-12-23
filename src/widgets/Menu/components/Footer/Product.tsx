import React, { useState } from "react";
import styled from "styled-components";
import { FooterLinks } from "../../types";
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: product;
`;

const Product: React.FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} title="Features" />
    </Wrapper>
  );
};

export default Product;
