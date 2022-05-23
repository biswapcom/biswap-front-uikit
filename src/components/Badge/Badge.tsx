import React, {FC} from "react";
import styled, {DefaultTheme} from "styled-components";
import {BadgeProps} from "./types";
import getRgba from "../../util/getRgba";

interface StyledBadgeProps extends BadgeProps {
  theme: DefaultTheme;
}

const getBadgeBg = ({badgeType = "light", theme}: StyledBadgeProps) => {
  if (badgeType === "active") {
    return getRgba(theme.colors.success, 0.16)
  }

  if (badgeType === "notActive") {
    return getRgba(theme.colors.secondary, 0.16)
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
    return getRgba(theme.colors.primary, 0.16)
  }

  return theme.colors.inputSecondary;
};

const getBadgeColor = ({badgeType = "active", theme}: StyledBadgeProps) => {
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

  if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
    return theme.colors.white;
  }

  return theme.colors.white;
};

// interface BadgeProps{}


const Wrapper = styled.div<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({isIcon}) => isIcon === 'left' ? '4px 12px 4px 4px' : isIcon === 'right' ? '4px 4px 4px 12px' : '4px 12px'};
  background: ${getBadgeBg};
  color: ${getBadgeColor};
  border-radius: 16px;
  height: 20px;
  font-size: ${({fontSize}) => fontSize || "10px"};
  font-weight: ${({fontWeight}) => fontWeight || "400"};
`;

const Badge: FC<BadgeProps> = ({children, badgeType, fontSize, fontWeight, isIcon}) => {

  return (
    <Wrapper badgeType={badgeType} isIcon={isIcon}>
      {children}
    </Wrapper>
  );
};

export default Badge;
