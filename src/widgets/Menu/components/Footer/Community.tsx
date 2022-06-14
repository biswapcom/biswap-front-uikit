import React from "react";
import styled from "styled-components";
import { socials } from "../../config";
import { SvgProps } from "../../../../components/Svg";
import Link from "../../../../components/Link/Link";
import * as IconModule from "../../icons";

export interface CommunityProps {
  iconSize?: string;
  menuVariant?: boolean;
  title?: string;
}
export interface SocialWrapProps {
  menuVariant?: boolean;
}
const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  grid-area: community;
  margin-top: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`;
const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;
const SocialWrap = styled.div<SocialWrapProps>`
  display: flex;
  margin: 0 -4px;
  ${({ menuVariant }) => {
    if (menuVariant) {
      return `
        justify-content: flex-start;
        align-items: flex-end;
        gap: 5%;
      `;
    }
  }};
`;
const SocialItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 4px;
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
}) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <SocialWrap menuVariant={menuVariant}>
        {socials.map((social) => {
          const Icon = Icons[social.icon];
          const iconProps = {
            width: iconSize,
            color: "textSubtle",
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
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 256 256"
                          fill="none"
                        >
                          <path
                            d="M128 256C198.692 256 256 198.692 256 128C256 57.3075 198.692 0 128 0C57.3075 0 0 57.3075 0 128C0 198.692 57.3075 256 128 256Z"
                            fill="white"
                          />
                          <path
                            d="M227.149 48.1543C218.272 49.9091 209.807 52.3865 202.839 53.9349C186.943 57.4962 172.078 69.6768 168.826 91.9736C165.936 111.896 172.646 120.464 169.704 143.638C164.543 184.102 125.73 198.038 107.614 206.502C97.1362 211.354 71.691 222.502 52.0781 231.018C73.3426 246.709 99.562 255.999 128.001 255.999C198.71 255.999 256.001 198.709 256.001 127.999C256.001 97.8574 245.575 70.1413 228.13 48.3091C227.82 48.2575 227.51 48.2059 227.149 48.1543Z"
                            fill="url(#paint0_linear)"
                          />
                          <path
                            d="M113.6 109.213C123.458 87.8966 119.897 87.845 127.381 67.8192C136.826 42.4257 166.193 49.6515 174.297 50.7354C187.664 52.5419 191.174 47.7935 219.355 43.2515C220.748 43.0451 222.09 42.8386 223.432 42.6838C200 16.5161 165.935 0 128 0C77.058 0 33.0838 29.729 12.4903 72.8257C54.7096 83.3031 100.284 106.064 113.6 109.213ZM85.6257 22.2967C89.3419 22.8645 107.406 45.3161 110.813 102.968C110.813 102.968 87.587 97.3934 82.5806 85.4192C78.4515 75.5612 83.8193 62.6063 85.6257 22.2967ZM227.922 48.0515C227.974 48.1548 228.077 48.2064 228.129 48.3096C227.819 48.258 227.458 48.258 227.148 48.2064C227.406 48.1031 227.664 48.1031 227.922 48.0515ZM0 128C0 117.78 1.1871 107.871 3.45806 98.374C8.10322 102.245 13.0581 106.529 18.3226 111.432C51.6645 142.348 105.91 166.761 125.677 144.051C125.729 144.103 125.781 144.103 125.781 144.155C122.168 148.903 108.387 163.922 82.0644 159.277L40.4645 221.367C15.5871 198.038 0 164.851 0 128Z"
                            fill="url(#paint1_linear)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="204.871"
                              y1="81.6791"
                              x2="174.673"
                              y2="248.042"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF496A" />
                              <stop offset="1" stopColor="#E42648" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear"
                              x1="61.7817"
                              y1="188.552"
                              x2="128.549"
                              y2="-4.19941e-05"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.00181229" stopColor="#1158F1" />
                              <stop offset="1" stopColor="#119BED" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </FlagWrap>
                      {social.items.channel.label}
                    </DropDownLink>
                    <DropDownLabel>Chats:</DropDownLabel>
                    {social.items.chats.map((item) => {
                      const IconFlag = Icons[item.icon];
                      return (
                        <DropDownLink
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          aria-label={social.label}
                        >
                          <FlagWrap>
                            <IconFlag width="14px" />
                          </FlagWrap>
                          {item.label}
                        </DropDownLink>
                      );
                    })}
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
