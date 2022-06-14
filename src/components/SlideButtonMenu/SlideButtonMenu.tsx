import React, { useState, useEffect } from "react";
import styled, { DefaultTheme } from "styled-components";
import getRgba from "../../util/getRgba";
import SlideButtonMenuItem from "./SlideButtonMenuItem";
import {
  SlideButtonMenuProps,
  slideMenuScales,
  slideMenuVariants,
} from "./types";
import { useMatchBreakpoints } from "../../hooks";
import { space } from "styled-system";

interface StyledButtonMenuProps extends SlideButtonMenuProps {
  theme: DefaultTheme;
}

interface SlideMenuProps extends SlideButtonMenuProps {
  onItemClick: (index: number) => void;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return variant === slideMenuVariants.SELECT_LIGHT
    ? getRgba(theme.colors.pastelBlue, 0.08)
    : theme.colors.tooltip;
};

const getBorderRadius = ({ scale }: StyledButtonMenuProps) => {
  return scale === slideMenuScales.SM ? "8px" : "10px";
};

const OverWrap = styled.div<StyledButtonMenuProps>`
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background-color: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  padding: 4px;
`;

const StyledSlideButtonMenu = styled.div<StyledButtonMenuProps>`
  position: relative;
  //background-color: ${getBackgroundColor};
  //border-radius: ${getBorderRadius};
  border-radius: 4px;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  //padding: 4px;
  overflow: hidden;

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${
            variant === slideMenuVariants.PRIMARY
              ? theme.colors.primary
              : theme.colors.textSubtle
          };
        }
    `;
    }
    return "";
  }}
  ${space}
`;

interface ISelection {
  offset: number;
  width: number;
  scale: string;
  variant: string;
}

const Selection = styled.div<ISelection>`
  background-color: ${({ theme, variant }) =>
    theme.colors[variant === slideMenuVariants.SELECT ? "dropDown" : "white"]};
  width: ${({ width }) => `${width}px`};
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ offset }) => `${offset}px`};
  transition: left 0.3s ease;
  border-radius: ${({ scale }) =>
    scale === slideMenuScales.SM ? "6px" : "8px"};
  z-index: 1;
`;

const SlideButtonMenu: React.FC<SlideMenuProps> = ({
  customClass = "",
  activeIndex = 0,
  scale = slideMenuScales.SM,
  variant = slideMenuVariants.SELECT,
  onItemClick,
  disabled,
  fullWidth = false,
  menuTitles = [""],
  ...props
}) => {
  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();

  const [widthsArr, setWidthsArr] = useState(
    [...Array(menuTitles?.length)].map((e, i) => i - i)
  );
  const [blockOffset, setBlockOffset] = useState(0);

  useEffect(() => {
    if (widthsArr) {
      setBlockOffset(
        widthsArr.slice(0, activeIndex).reduce((sum, elem) => sum + elem, 0)
      );
    }
  }, [widthsArr, activeIndex, isDesktop, isMobile, isTablet]);

  return (
    <OverWrap fullWidth={fullWidth} variant={variant} scale={scale}>
      <StyledSlideButtonMenu
        disabled={disabled}
        variant={variant}
        fullWidth={fullWidth}
        {...props}
      >
        {!disabled && (
          <Selection
            scale={scale}
            width={widthsArr[activeIndex]}
            offset={blockOffset}
            variant={variant}
          />
        )}
        {menuTitles.map((title, index) => (
          <SlideButtonMenuItem
            key={index.toString()}
            disabled={disabled}
            customClass={customClass}
            isActive={activeIndex === index}
            onAction={onItemClick}
            itemIndex={index}
            widthsArr={widthsArr}
            setWidth={setWidthsArr}
            blockOffset={blockOffset}
            variant={variant}
            scale={scale}
          >
            {title}
          </SlideButtonMenuItem>
        ))}
      </StyledSlideButtonMenu>
    </OverWrap>
  );
};

export default SlideButtonMenu;
