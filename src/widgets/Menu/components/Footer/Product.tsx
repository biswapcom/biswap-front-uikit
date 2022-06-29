import React, { useState } from "react";
import styled from "styled-components";
import { FooterProductLinks } from "../../types";
// import MenuLink from "../MenuLink";

const Wrapper = styled.div`
  grid-area: product;
`;

const TopAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const ActionIcon = styled.div<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  position: relative;
  display: block;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    width: 14px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transition: transform 0.3s ease;
  }

  &:before {
    transform: ${({ isOpen }) =>
      isOpen
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%) rotate(90deg)"};
  }

  &:after {
    transform: ${({ isOpen }) =>
      isOpen
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%) rotate(0deg)"};
  }
`;

const NavList = styled.div<{ isOpen: boolean; innerHeight: number }>`
  overflow: hidden;
  transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  height: ${({ isOpen, innerHeight }) =>
    isOpen ? `${innerHeight * 26 + 16}px` : "0"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: transform 0.3s ease, opacity 0.3s ease, height 0.3s ease;
  padding-bottom: ${({ isOpen }) => (isOpen ? "16px" : "0")};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 0;
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  }
`;

const NavItem = styled.div`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray900};
  line-height: 18px;
`;

const CustomLink = styled.a`
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;

const Product: React.FC<FooterProductLinks> = ({ productLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrLength = productLinks.length;

  return (
    <Wrapper>
      <TopAction onClick={() => setIsOpen(!isOpen)}>
        <Title>Features</Title>
        <ActionIcon isOpen={isOpen} />
      </TopAction>
      <NavList isOpen={isOpen} innerHeight={arrLength}>
        {productLinks.map((item, index) => (
          <NavItem key={index.toString()}>
            <CustomLink
              href={item.href}
              target={item.target ? item.target : "_self"}
            >
              {item.label}
            </CustomLink>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
};

export default Product;
