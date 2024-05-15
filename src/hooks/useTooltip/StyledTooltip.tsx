import styled from "styled-components";

export const Arrow = styled.div<{ isDark: boolean }>`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme, isDark }) => isDark ? theme.colors.tooltip : theme.colors.white};
  }
`;

export const StyledTooltip = styled.div<{ isDark: boolean }>`
  max-width: 320px;
  padding: 8px 12px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  color: ${({ theme, isDark }) => isDark ? theme.colors.white : theme.colors.dark800};
  background: ${({ theme, isDark }) => isDark ? theme.colors.tooltip : theme.colors.white};
  z-index: 101;

  &[data-popper-placement^="top"] {
      & > ${Arrow} {
          bottom: -4px;
      }
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
