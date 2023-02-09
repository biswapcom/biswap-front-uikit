import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FooterInfoLinks, FooterLinks } from "../../types";
import { DropdownMenuItemType } from "../../../../components/DropdownMenu/types";
import { MenuContext } from "../../context";
// import MenuLink from "../MenuLink";

interface IProps extends FooterInfoLinks {
  title: string;
}

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

const CustomLink = styled.div`
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.colors.pastelBlue};
  font-weight: 600;

  &:hover {
    opacity: 0.65;
  }
`;

const CommonFooterLinksComponent: React.FC<FooterLinks> = ({ footerLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { linkComponent } = useContext(MenuContext);
  const { title, links } = footerLinks;

  const arrLength = links?.length ?? 0;

  return (
    <>
      <TopAction onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <ActionIcon isOpen={isOpen} />
      </TopAction>
      <NavList isOpen={isOpen} innerHeight={arrLength}>
        {links?.map(
          (
            {
              href,
              target = null,
              label,
              type = DropdownMenuItemType.INTERNAL_LINK,
            },
            index
          ) => (
            <NavItem key={index.toString()}>
              {type === DropdownMenuItemType.INTERNAL_LINK && (
                <CustomLink as={linkComponent} to={href}>
                  {label}
                </CustomLink>
              )}
              {type === DropdownMenuItemType.EXTERNAL_LINK && (
                <CustomLink
                  as="a"
                  href={href}
                  target={target ? target : "_self"}
                >
                  {label}
                </CustomLink>
              )}
            </NavItem>
          )
        )}
      </NavList>
    </>
  );
};

export default CommonFooterLinksComponent;
