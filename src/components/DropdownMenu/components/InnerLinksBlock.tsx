import React, { FC } from "react";
import {
  DropdownMenuDivider,
  DropdownMenuInnerLinkItem,
  InnerLinksBlockContainer,
} from "../styles";
import IconComponent from "../../Svg/IconComponent";
import { Text } from "../../Text";
import { DropdownMenuItemType, InnerLinksBlockProps } from "../types";
import Grid from "../../Box/Grid";
import { useMatchBreakpoints } from "../../../hooks";

const InnerLinksBlock: FC<InnerLinksBlockProps> = ({
  links,
  leftIcon,
  setIsOpen,
  linkComponent,
}) => {
  const { isTablet } = useMatchBreakpoints();

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
            {icon && (
              <IconComponent
                className="inner-chevron"
                width={10}
                iconName={icon}
                color={fill}
              />
            )}
            <Text fontSize={"12px"} color={fill}>
              {label}
            </Text>
          </DropdownMenuInnerLinkItem>
        );
      }
    );

  return (
    <InnerLinksBlockContainer padded={!!leftIcon && !isTablet}>
      <Grid gridTemplateColumns={"1fr 1fr"} gridGap={16} paddingBottom={16}>
        {renderLinks()}
      </Grid>
      {!isTablet && <DropdownMenuDivider />}
    </InnerLinksBlockContainer>
  );
};

export default InnerLinksBlock;
