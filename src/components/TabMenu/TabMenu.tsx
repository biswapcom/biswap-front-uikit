import React, {
  useState,
  useEffect,
  Children,
  ReactElement,
  cloneElement,
} from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { space, SpaceProps, variant } from "styled-system";
import { TabBarProps, tabsScales, tabVariants } from "./types";
import { sectionScaleVariants } from "./theme";
import { useMatchBreakpoints } from "../../contexts";

interface StyledTabBarProps extends TabBarProps {
  theme: DefaultTheme;
  activeIndex?: number;
}

interface BarProps extends TabBarProps {
  onItemClick: (index: number) => void;
  activeIndex: number;
}

interface IWrapper extends SpaceProps {
  variant: string;
  fullWidth: boolean;
  scrollX: boolean;
}

const Wrapper = styled.div<IWrapper>`
  background-color: transparent;
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  overflow: hidden;

  ${({ scrollX }) =>
    scrollX &&
    css`
      overflow-x: scroll;
    `};

  &::-webkit-scrollbar {
    display: none;
  }

  ${space}
`;

const StyledTabBar = styled.div<StyledTabBarProps>`
  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > div,
  & > a {
    flex-grow: 1;

    ${({ equalElementWidth }) =>
      equalElementWidth &&
      css`
        flex: 1;
      `}
  }

  & > button,
  & > div,
  & a {
    box-shadow: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

const Selection = styled.div<{
  offset: number;
  width: number;
  scale: string;
  variant: string;
  withoutAnimation: boolean;
}>`
  width: ${({ width }) => `${width}px`};
  height: 2px;
  position: absolute;
  bottom: 0;
  left: ${({ offset }) => `${offset}px`};
  z-index: 1;

  ${({ withoutAnimation }) =>
    !withoutAnimation &&
    css`
      transition: left 0.3s ease, width 0.3s ease;
    `}

  ${variant({
    prop: "scale",
    variants: sectionScaleVariants,
  })}
`;

const ColorSection = styled.div<{ variant: string }>`
  width: 100%;
  height: 100%;
  background: ${({ theme, variant }) =>
    theme.colors[variant === tabVariants.DARK ? "warning" : "primary"]};
`;

const TabMenu: React.FC<BarProps> = ({
  activeIndex,
  scale = tabsScales.MD,
  variant = tabVariants.DARK,
  onItemClick,
  disabled = false,
  fullWidth = false,
  menuIcons = [],
  scrollX = false,
  children,
  equalElementWidth,
  withoutAnimation = false,
  ...props
}) => {
  const [widthsArr, setWidthsArr] = useState([]);

  const [blockOffset, setBlockOffset] = useState<number | null>(null);
  const [activeButtonIndex, setActiveButtonIndex] =
    useState<number | null>(null);

  const { isDesktop, isMobile, isTablet } = useMatchBreakpoints();

  useEffect(() => {
    setActiveButtonIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (activeButtonIndex !== null && widthsArr.length) {
      setBlockOffset(
        widthsArr
          .slice(0, activeButtonIndex)
          .reduce((sum, elem) => sum + elem, 0)
      );
    }
  }, [widthsArr, activeButtonIndex, isDesktop, isMobile, isTablet]);

  const showSelection =
    !disabled && activeIndex !== null && blockOffset !== null;

  return (
    <Wrapper
      fullWidth={fullWidth}
      variant={variant}
      scrollX={scrollX}
      {...props}
    >
      {showSelection && (
        <Selection
          scale={scale}
          width={widthsArr[activeIndex]}
          offset={blockOffset}
          variant={variant}
          withoutAnimation={withoutAnimation}
        >
          <ColorSection variant={variant} />
        </Selection>
      )}
      <StyledTabBar
        disabled={disabled}
        variant={variant}
        fullWidth={fullWidth}
        equalElementWidth={equalElementWidth}
        {...props}
      >
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onItemClick: onItemClick ? () => onItemClick(index) : undefined,
            setWidth: setWidthsArr,
            itemIndex: index,
            activeButtonIndex,
            blockOffset,
            scale,
            variant,
            disabled,
          });
        })}
      </StyledTabBar>
    </Wrapper>
  );
};

export default TabMenu;
