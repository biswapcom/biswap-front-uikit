import React, { FC, Fragment } from "react";
import {
  DropdownMenuDivider,
  DropdownMenuInnerLinkItem,
  DropdownMenuInnerOuterLinkItem,
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
  const { isMobile, isTablet } = useMatchBreakpoints();

  const renderLinks = () =>
    links.map(
      (
        {
          label = "",
          href = "/",
          icon = "ChevronRight",
          linkType = DropdownMenuItemType.INTERNAL_LINK,
          mobileTarget,
          target,
          fill = "primary",
        },
        index: number
      ) => {
        const getLinkContent = () => (
          <>
            {icon && (
              <IconComponent
                className="inner-chevron"
                width={10}
                iconName={icon}
                color={fill}
              />
            )}
            <Text bold fontSize={"12px"} color={fill}>
              {label}
            </Text>
          </>
        );
        return (
          <Fragment key={`${index}#${label}`}>
            {linkType === DropdownMenuItemType.INTERNAL_LINK && (
              <DropdownMenuInnerLinkItem
                key={index + label}
                to={href}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {getLinkContent()}
              </DropdownMenuInnerLinkItem>
            )}
            {linkType === DropdownMenuItemType.EXTERNAL_LINK && (
              <DropdownMenuInnerOuterLinkItem
                key={index + label}
                href={href}
                target={isMobile ? mobileTarget || "_self" : target || "_blank"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {getLinkContent()}
              </DropdownMenuInnerOuterLinkItem>
            )}
          </Fragment>
        );
      }
    );

  return (
    <InnerLinksBlockContainer padded={!!leftIcon && !isTablet}>
      <Grid gridTemplateColumns={"1fr 1fr"} gridGap={16} paddingBottom={16}>
        {renderLinks()}
      </Grid>
      {isMobile && <DropdownMenuDivider />}
    </InnerLinksBlockContainer>
  );
};

export default InnerLinksBlock;
