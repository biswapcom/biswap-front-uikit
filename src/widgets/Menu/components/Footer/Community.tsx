import React from "react";
import styled from "styled-components";
import { socials } from "../../config";
import { SvgProps } from "../../../../components/Svg";
import Link from "../../../../components/Link/Link";
import * as IconModule from "../../../../components/Svg";
import { SocialLinks } from "../../types";
import { Box } from "../../../../components/Box";
import Image from "next/image";

export interface CommunityProps {
  baseAwsUrl: string;
  iconSize?: string;
  menuVariant?: boolean;
  title?: string;
  isFooter?: boolean;
  socialLinks?: SocialLinks;
}
export interface SocialWrapProps {
  menuVariant?: boolean;
}
const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div<{ menuVariant?: boolean }>`
  grid-area: community;
  ${({ menuVariant }) => !menuVariant && "max-width: 136px;"}
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;
const SocialWrap = styled.div<SocialWrapProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;

  ${({ menuVariant }) => {
    if (menuVariant) {
      return `
      width:274px;
        row-gap: 25px;
        column-gap: 26px;
        justify-content: center;
        margin: 0 auto;
        
      `;
    }
  }};
`;
const SocialItem = styled.div`
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.65;
  }
`;
const DropDownWrap = styled.div`
  position: relative;

  &:hover {
    .drop-down-inner {
      display: block;
    }
  }
`;
const DropDownInnerWrap = styled.div`
  display: none;
  position: absolute;
  padding-top: 0;
  padding-bottom: 8px;
  bottom: -5px;
  left: -24px;
  transform: translateX(-50%);
  z-index: 50;
  min-width: 96px;

  &:hover {
    display: block;
  }
`;
const DropDown = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.tooltip};
  bottom: 32px;
  left: 100%;
  transform: translateX(-40%);

  &:before {
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: -4px;
    left: 28px;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.tooltip};
  }
`;
const DropDownLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.pastelBlue};
  user-select: none;
  transition: all 0.4s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
const DropDownLabel = styled.span`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.pastelBlue};
  margin-bottom: 8px;
`;
const FlagWrap = styled.div`
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
  width: 14px;
  height: 14px;
`;

const Community: React.FC<CommunityProps> = ({
  iconSize = "20px",
  title,
  menuVariant,
  isFooter = false,
  socialLinks,
  baseAwsUrl,
}) => {
  return (
    <Wrapper menuVariant={menuVariant || isFooter}>
      {socialLinks?.title && <Title>{socialLinks?.title}</Title>}

      <SocialWrap menuVariant={menuVariant}>
        {socials.map((social) => {
          const Icon = Icons[social.icon];
          const iconProps = {
            width: iconSize,
            color: isFooter ? "pastelBlue" : "gray600",
            style: { cursor: "pointer" },
          };
          if (social.items) {
            return (
              <DropDownWrap key={social.label}>
                <SocialItem className="hovered-item">
                  <Icon {...iconProps} />
                </SocialItem>
                <DropDownInnerWrap className="drop-down-inner">
                  <DropDown>
                    <DropDownLink
                      key={social.items.channel.label}
                      href={social.items.channel.href}
                      target="_blank"
                      aria-label={social.label}
                    >
                      <FlagWrap>
                        <Box width="14px" height="14px">
                          <img src={`${baseAwsUrl}/coins/bsw.svg`} alt="" />
                        </Box>
                      </FlagWrap>
                      {social.items.channel.label}
                    </DropDownLink>
                    <DropDownLabel>Chats:</DropDownLabel>
                    {social.items.chats.map((item) => (
                      <DropDownLink
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        aria-label={social.label}
                      >
                        <FlagWrap>
                          <Image
                            src={`${baseAwsUrl}/icons/Flags/${item.icon}.svg`}
                            width={14}
                            height={14}
                            alt=""
                          />
                        </FlagWrap>
                        {item.label}
                      </DropDownLink>
                    ))}
                  </DropDown>
                </DropDownInnerWrap>
              </DropDownWrap>
            );
          }
          return (
            <SocialItem key={social.label}>
              <Link external href={social.href} aria-label={social.label}>
                <Icon {...iconProps} />
              </Link>
            </SocialItem>
          );
        })}
      </SocialWrap>
    </Wrapper>
  );
};

export default Community;
