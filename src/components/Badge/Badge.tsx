import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import { BadgeProps } from "./types";
import Text from "../Text/Text";

interface StyledBadgeProps extends BadgeProps {
  theme: DefaultTheme;
}

const getBadgeBg = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "light") {
    return theme.colors.tertiary;
  }

  if (badgeType === "dark") {
    return theme.colors.dropdown;
  }

  if (badgeType === "new") {
    return theme.colors.success;
  }

  if (badgeType === "hot") {
    return theme.colors.failure;
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

  return theme.colors.inputSecondary;
};

const getBadgeColor = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "light" || badgeType === "dark") {
    return theme.colors.text;
  }

  if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
    return theme.colors.contrast;
  }

  if (badgeType === "warning") {
    return theme.colors.background;
  }

  return theme.colors.contrast;
};

interface WrapperProps extends BadgeProps {
  isMenu?: boolean
}

type TextProps = {
  isMenu?: boolean
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
}

const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  padding: ${({ isMenu }) => isMenu ? '2px 8px' : '4px 12px'};
  background: ${getBadgeBg};
  color: ${getBadgeColor};
  border-radius: 16px;
`;

const StyledText = styled(Text)<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "10px" };
  font-weight: ${({ fontWeight }) => fontWeight || "600" };
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
`

const Badge: FC<BadgeProps> = ({ children, badgeType,fontSize,fontWeight,isMenu, lineHeight }) => {

  return (
    <Wrapper badgeType={badgeType} isMenu={isMenu}>
      <StyledText fontSize={fontSize} lineHeight={lineHeight} fontWeight={fontWeight}  color="inherit" >
        {children}
      </StyledText>
    </Wrapper>
  );
};

export default Badge;
