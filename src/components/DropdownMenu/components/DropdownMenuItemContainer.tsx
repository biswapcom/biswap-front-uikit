import React, { FC } from "react";
import { DropdownMenuItemContainerProps, DropdownMenuItemType } from "../types";
import {
  BannerPlacementItem,
  DropdownInternalMenuItem,
  DropdownMenuDivider,
  DropdownMenuItem,
  StyledDropdownMenuItemContainer,
} from "../styles";
import InnerLinksBlock from "./InnerLinksBlock";
import { useMatchBreakpoints } from "../../../contexts";

const DropdownMenuItemContainer: FC<DropdownMenuItemContainerProps> = ({
  isActive = false,
  leftIcon,
  getMenuItemContent,
  links = [],
  setIsOpen,
  linkComponent,
  href = "/",
  bannerRenderer,
  type,
  target,
  mobileTarget,
  badgeTitle,
  badgeType,
  isOpenItem,
  lastItem,
  ...itemProps
}) => {
  const { isMobile, isDesktop } = useMatchBreakpoints();

  const hasInnerLinks = links.length > 0;

  // @ts-ignore
  return (
    <StyledDropdownMenuItemContainer isOpenMenuItem={isOpenItem} {...itemProps}>
      {type === DropdownMenuItemType.BUTTON && (
        <DropdownMenuItem
          $isActive={isActive}
          $hasIcon={!!leftIcon}
          type="button"
          {...itemProps}
        >
          {getMenuItemContent("")}
        </DropdownMenuItem>
      )}
      {type === DropdownMenuItemType.CONTAINER && (
        <>
          {hasInnerLinks ? (
            <DropdownMenuItem
              $isActive={isActive}
              $hasIcon={true} // to disable hover styling
              as={linkComponent}
              href={links[0]?.href}
              onClick={() => {
                setIsOpen(false);
              }}
              {...itemProps}
            >
              {getMenuItemContent("")}
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              $isActive={isActive}
              $hasIcon={true} // to disable hover styling
              as="div"
              {...itemProps}
            >
              {getMenuItemContent("")}
            </DropdownMenuItem>
          )}

          {hasInnerLinks && (
            <InnerLinksBlock
              links={links}
              leftIcon={leftIcon}
              setIsOpen={setIsOpen}
              linkComponent={linkComponent}
              lastItem={lastItem}
            />
          )}
        </>
      )}
      {type === DropdownMenuItemType.INTERNAL_LINK && (
        <DropdownInternalMenuItem
          label={itemProps.label}
          $isActive={isActive}
          $hasIcon={!!leftIcon}
          as={linkComponent}
          to={href}
          onClick={() => {
            setIsOpen(false);
          }}
          {...itemProps}
        >
          {getMenuItemContent("ArrowRight")}
        </DropdownInternalMenuItem>
      )}
      {type === DropdownMenuItemType.EXTERNAL_LINK && (
        <DropdownMenuItem
          label={itemProps.label}
          $isActive={isActive}
          $hasIcon={!!leftIcon}
          as="a"
          href={href}
          target={isMobile ? mobileTarget || "_self" : target || "_blank"}
          onClick={() => {
            setIsOpen(false);
          }}
          {...itemProps}
        >
          {getMenuItemContent("ArrowUpForward")}
        </DropdownMenuItem>
      )}
      {type === DropdownMenuItemType.DIVIDER && <DropdownMenuDivider />}
      {type === DropdownMenuItemType.BANNER && isDesktop && bannerRenderer && (
        <BannerPlacementItem>
          {bannerRenderer(href, target)}
        </BannerPlacementItem>
      )}
    </StyledDropdownMenuItemContainer>
  );
};

export default DropdownMenuItemContainer;
