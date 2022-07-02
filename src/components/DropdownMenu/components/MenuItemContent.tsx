import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import IconComponent from "../../Svg/IconComponent";
import { Flex } from "../../Box";
import { Text } from "../../Text";
import { MenuItemContentProps } from "../types";
import { useMatchBreakpoints } from "../../../hooks";

const getBG = ({
  theme,
  leftIcon,
}: {
  theme: DefaultTheme;
  leftIcon: string;
}) => {
  switch (leftIcon) {
    case "Market":
      return "linear-gradient(136.03deg, #1263F1 -7.36%, #F63D5E 131.43%)";
    case "GameFi":
      return "radial-gradient(170.13% 152.5% at 50% -32.5%, #FF1C5E 4.9%, #00000D 58.29%, #1EBB95 100%)";
    default:
      return theme.colors.primary;
  }
};

const IconComponentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getBG};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-self: flex-start;
`;
const MenuItemContent: FC<MenuItemContentProps> = ({
  leftIcon,
  label,
  description,
  rightIcon,
  fill = "primary",
}) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <>
      {leftIcon && (
        <IconComponentWrap leftIcon={leftIcon}>
          <IconComponent width={24} iconName={leftIcon} color="white" />
        </IconComponentWrap>
      )}
      <Flex
        alignSelf={isMobile ? "stretch" : ""}
        flexDirection={"column"}
        flex={1}
        paddingLeft={leftIcon && "16px"}
      >
        {label}
        {description && (
          <Text fontSize={"12px"} color={"gray900"} lineHeight="16px">
            {description}
          </Text>
        )}
      </Flex>
      {rightIcon && (
        <IconComponent
          className="arrow-icon"
          iconName={rightIcon}
          color={fill}
        />
      )}
    </>
  );
};

export default MenuItemContent;
