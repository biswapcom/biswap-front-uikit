import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import { BadgeProps } from "./types";
import getRgba from "../../util/getRgba";

interface StyledBadgeProps extends BadgeProps {
  theme: DefaultTheme;
}

const getBadgeBg = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "active") {
    return getRgba(theme.colors.success, 0.16);
  }

  if (badgeType === "notActive") {
    return getRgba(theme.colors.secondary, 0.16);
  }

  if (badgeType === "success") {
    return theme.colors.success;
  }

  if (badgeType === "error") {
    return theme.colors.secondary;
  }

  if (badgeType === "primary") {
    return theme.colors.primary;
  }

  if (badgeType === "warning") {
    return theme.colors.warning;
  }

  if (badgeType === "boost") {
    return theme.colors.boost;
  }

  if (badgeType === "core") {
    return getRgba(theme.colors.primary, 0.16);
  }

  if (badgeType === "light") {
    return theme.colors.disabled;
  }

  return theme.colors.inputSecondary;
};

const getBadgeColor = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "active") {
    return theme.colors.success;
  }

  if (badgeType === "notActive") {
    return theme.colors.secondary;
  }

  if (badgeType === "warning") {
    return theme.colors.dark800;
  }

  if (badgeType === "core") {
    return theme.colors.primary;
  }

  if (badgeType === "light") {
    return theme.colors.background;
  }

  if (
    badgeType === "new" ||
    badgeType === "primary" ||
    badgeType === "hot" ||
    badgeType === "boost"
  ) {
    return theme.colors.white;
  }

  return theme.colors.white;
};

// interface BadgeProps{}

const Wrapper = styled.div<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ isIcon, isLarge }) =>
    !isLarge
      ? isIcon === "left"
        ? "4px 8px 4px 4px"
        : isIcon === "right"
        ? "4px 4px 4px 8px"
        : "4px 8px"
      : "8px 24px"};
  background: ${getBadgeBg};
  color: ${getBadgeColor};
  border-radius: 16px;
  height: ${({ isLarge }) => (isLarge ? "38px" : "20px")};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: 600;
`;

const Badge: FC<BadgeProps> = ({
  children,
  badgeType,
  fontSize,
  fontWeight,
  isIcon,
  isLarge,
}) => {
  return (
    <Wrapper
      badgeType={badgeType}
      isIcon={isIcon}
      isLarge={isLarge}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </Wrapper>
  );
};

export default Badge;
