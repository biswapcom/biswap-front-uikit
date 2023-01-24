import React from "react";
import styled from "styled-components";
import { FooterInfoLinks, FooterLinks } from "../../types";
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: about;
`;

const About: React.FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} />
    </Wrapper>
  );
};

export default About;
