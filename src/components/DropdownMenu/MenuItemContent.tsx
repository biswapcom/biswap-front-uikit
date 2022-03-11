import React, { FC } from "react";
import IconComponent from "../Svg/IconComponent";
import { Flex } from "../Box";
import { Text } from "../Text";
import { LinkStatus } from "./styles";
import { MenuItemContentProps } from "./types";

const MenuItemContent: FC<MenuItemContentProps> = ({
  leftIcon,
  label,
  description,
  status,
  rightIcon,
  fill,
}) => (
  <>
    {leftIcon && <IconComponent width={40} iconName={leftIcon} />}
    <Flex flexDirection={"column"} flex={1} paddingLeft={leftIcon && "16px"}>
      <Text small>{label}</Text>
      {description && (
        <Text fontSize={"12px"} color={"gray900"}>
          {description}
        </Text>
      )}
    </Flex>
    {status && (
      <LinkStatus color={status.color} fontSize="14px">
        {status.text}
      </LinkStatus>
    )}
    {rightIcon && <IconComponent iconName={rightIcon} color={fill} />}
  </>
);

export default MenuItemContent;
