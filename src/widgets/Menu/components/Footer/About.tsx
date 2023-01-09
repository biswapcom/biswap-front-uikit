import React from "react";
import styled from "styled-components";
import { FooterLinks } from "../../types";
import CommonFooterLinksComponent from "./CommonFooterLinksComponent";

const Wrapper = styled.div`
  grid-area: about;
`;

const About: React.FC<FooterLinks> = ({ footerLinks }) => {
  return (
    <Wrapper>
      <CommonFooterLinksComponent footerLinks={footerLinks} title="About Us" />
    </Wrapper>
  );
};

export default About;
