import React, {FC, useEffect} from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import { BaseButtonProps } from "../Button/types";
import {SlideButtonMenuItemProps, slideMenuVariants,} from "./types";
import SlideMenuItem from "./SlideMenuItem";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps,
  "button"> = styled(SlideMenuItem)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({theme}) => theme.colors.pastelBlue};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const SlideButtonMenuItem: FC<SlideButtonMenuItemProps> = ({
  isActive = false,
  variant = slideMenuVariants.SELECT,
  as,
  setWidth,
  itemIndex,
  onAction,
                                                   customClass,
  ...props
}: SlideButtonMenuItemProps): JSX.Element => {

  const className = 'slide-menu-item-' + itemIndex + customClass
  const element = document.getElementsByClassName(className)

  console.log('element', element)

  useEffect(() => {
    setWidth((prev: Array<number>) => [...prev, element.item(0)?.clientWidth ?? 0])
  }, [element])

  const handleClick = () => {
    onAction ? onAction(itemIndex) : undefined
  }

  if (!isActive) {
    return <InactiveButton onClick={handleClick} className={className} forwardedAs={as} variant={variant} {...props} />;
  }

  return <SlideMenuItem onClick={handleClick} className={className} as={as} variant={variant} {...props} />;
};

export default SlideButtonMenuItem;
