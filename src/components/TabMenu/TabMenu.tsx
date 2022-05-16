import React, {useState, useEffect} from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import {TabBarProps, tabsScales, tabVariants} from "./types";
import TabBarItem from "./TabBarItem";

interface StyledTabBarProps extends TabBarProps {
  theme: DefaultTheme;
}

interface BarProps extends TabBarProps {
  onItemClick: (index: number) => void;
}

const getBackgroundColor = ({ theme, isLight }: StyledTabBarProps) => {
  return theme.colors[isLight ? 'backgroundLight' : 'backgroundDark'];
};

const getBorderRadius = ({ scale }: StyledTabBarProps) => {
  return scale === tabsScales.SM ? '8px' : '10px'
}

const StyledTabBar = styled.div<StyledTabBarProps>`
  position: relative;
  background-color: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 4px;

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
        variant === tabVariants.TAB
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

const Selection = styled.span<{offset: number, width: number, scale: string, isLight: boolean}>`
  width: ${({ width }) => `${width}px`};
  height: calc(100% - 8px);
  position: absolute;
  top: 4px;
  left: ${({ offset }) => `${offset}px`};
  transition: left .3s ease;
  border-bottom: 2px solid ${({ theme, isLight }) => theme.colors[isLight ? 'primary' : 'warning']};  
  //color: ${({ theme, isLight }) => theme.colors[isLight ? 'primary' : 'warning']};
  z-index: 1;
`

const DEFAULT_OFFSET = 4

const TabMenu: React.FC<BarProps> = ({
  customClass = '',
  activeIndex = 0,
  scale = tabsScales.SM,
  variant = tabVariants.TAB,
  onItemClick,
  disabled,
  fullWidth = false,
  menuTitles= [''],
  ...props
}) => {
  const [widthsArr, setWidthsArr] = useState([])
  const [blockOffset, setBlockOffset] = useState(DEFAULT_OFFSET)

  useEffect(() => {
    setBlockOffset(
      widthsArr.slice(0, activeIndex)
          .reduce((sum, elem) => sum + elem, 0)
    )
  }, [widthsArr, activeIndex])

  const isLight = variant === tabVariants.TAB_LIGHT

  return (
    <StyledTabBar
      disabled={disabled}
      isLight={isLight}
      fullWidth={fullWidth}
      {...props}
    >
      {!disabled && <Selection
          scale={scale}
          width={widthsArr[activeIndex]}
          offset={blockOffset + DEFAULT_OFFSET}
          isLight={isLight}
      />}
      {menuTitles.map((title, index) =>
        <TabBarItem
          key={index.toString()}
          disabled={disabled}
          customClass={customClass}
          isActive={activeIndex === index}
          onAction={onItemClick}
          itemIndex={index}
          setWidth={setWidthsArr}
          variant={variant}
          scale={scale}
        >
          {title}
        </TabBarItem>
      )}
    </StyledTabBar>
  );
};

export default TabMenu;
