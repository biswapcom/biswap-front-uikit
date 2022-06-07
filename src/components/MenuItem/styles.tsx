import styled, { css } from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const CommonLinkStyles = ({
  $isActive,
  $statusColor,
  $variant,
}: StyledMenuItemProps) => css`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: ${$isActive
    ? ({ theme }) => theme.colors.secondary
    : ({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  transition: color 0.4s ease;

  ${$statusColor &&
  `
    &:after {
      content: "";
      border-radius: 100%;
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
    `}

  ${$variant === "default"
    ? css`
        padding: 0 8px;
        height: 48px;
        ${({ theme }) => theme.mediaQueries.lg} {
          padding: 0 12px;
        }
      `
    : css`
        padding: 4px 4px 0px 4px;
        height: 42px;
      `}

  &:hover {
    div {
      color: ${({ theme }) => theme.colors.pastelBlue};
    }
    svg {
      fill: ${({ theme }) => theme.colors.pastelBlue};
    }
    ${$variant === "default" && "border-radius: 16px;"};
  }
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  ${CommonLinkStyles};
`;

export default StyledMenuItem;
