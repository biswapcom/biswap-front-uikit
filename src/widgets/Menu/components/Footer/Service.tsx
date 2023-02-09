import React from "react";
import styled from "styled-components";
import { FooterLinks } from "../../types";
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: service;
`;

const Service: React.FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} />
    </Wrapper>
  );
};

export default Service;
