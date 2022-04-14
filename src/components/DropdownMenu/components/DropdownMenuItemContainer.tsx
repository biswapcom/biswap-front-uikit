import React, {FC} from "react";
import {DropdownMenuItemContainerProps, DropdownMenuItemType} from "../types";
import {
  DropdownMenuDivider,
  DropdownMenuItem,
  StyledDropdownMenuItemContainer,
} from "../styles";
import InnerLinksBlock from "./InnerLinksBlock";
import {useMatchBreakpoints} from "../../../hooks";

const DropdownMenuItemContainer: FC<DropdownMenuItemContainerProps> = ({
                                                                         isActive = false,
                                                                         leftIcon,
                                                                         getMenuItemContent,
                                                                         links = [],
                                                                         setIsOpen,
                                                                         linkComponent,
                                                                         href,
                                                                         bannerRenderer,
                                                                         type,
                                                                         ...itemProps
                                                                       }) => {
  const {isDesktop} = useMatchBreakpoints();

  const hasInnerLinks = links.length > 0;

  return (
    <StyledDropdownMenuItemContainer>
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
          <DropdownMenuItem
            $isActive={isActive}
            $hasIcon={true} // to disable hover styling
            as="div"
            {...itemProps}
          >
            {getMenuItemContent("")}
          </DropdownMenuItem>
          {hasInnerLinks && (
            <InnerLinksBlock
              links={links}
              leftIcon={leftIcon}
              setIsOpen={setIsOpen}
              linkComponent={linkComponent}
            />
          )}
        </>
      )}
      {type === DropdownMenuItemType.INTERNAL_LINK && (
        <DropdownMenuItem
          $isActive={isActive}
          $hasIcon={!!leftIcon}
          as={linkComponent}
          href={href}
          onClick={() => {
            setIsOpen(false);
          }}
          {...itemProps}
        >
          {getMenuItemContent("ArrowForward")}
        </DropdownMenuItem>
      )}
      {type === DropdownMenuItemType.EXTERNAL_LINK && (
        <DropdownMenuItem
          $isActive={isActive}
          $hasIcon={!!leftIcon}
          as="a"
          href={href}
          target="_blank"
          onClick={() => {
            setIsOpen(false);
          }}
          {...itemProps}
        >
          {getMenuItemContent("ArrowUpForward")}
        </DropdownMenuItem>
      )}
      {type === DropdownMenuItemType.DIVIDER && <DropdownMenuDivider/>}
      {type === DropdownMenuItemType.BANNER &&
        isDesktop &&
        bannerRenderer &&
        bannerRenderer()}
    </StyledDropdownMenuItemContainer>
  );
};

export default DropdownMenuItemContainer;