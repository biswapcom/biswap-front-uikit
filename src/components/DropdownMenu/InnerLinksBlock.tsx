import React, { FC } from "react";
import {
  DropdownMenuDivider,
  DropdownMenuInnerLinkItem,
  InnerLinksBlockContainer,
} from "./styles";
import IconComponent from "../Svg/IconComponent";
import { Text } from "../Text";
import { DropdownMenuItemType, InnerLinksBlockProps } from "./types";
import Grid from "../Box/Grid";

const InnerLinksBlock: FC<InnerLinksBlockProps> = ({
  links,
  leftIcon,
  setIsOpen,
  linkComponent,
}) => {
  const renderLinks = () =>
    links.map(
      (
        {
          label = "",
          href = "/",
          icon = "ChevronRight",
          linkType = DropdownMenuItemType.INTERNAL_LINK,
          fill = "primary",
        },
        index: number
      ) => {
        return (
          <DropdownMenuInnerLinkItem
            key={index + label}
            as={linkComponent}
            href={href}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {icon && <IconComponent width={10} iconName={icon} color={fill} />}
            <Text fontSize={"12px"} color={fill}>
              {label}
            </Text>
          </DropdownMenuInnerLinkItem>
        );
      }
    );

  return (
    <InnerLinksBlockContainer padded={!!leftIcon}>
      <Grid gridTemplateColumns={"1fr 1fr"} gridGap={16} paddingBottom={16}>
        {renderLinks()}
      </Grid>
      <DropdownMenuDivider />
    </InnerLinksBlockContainer>
  );
};

export default InnerLinksBlock;
