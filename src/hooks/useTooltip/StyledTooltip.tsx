import styled from "styled-components";

export const Arrow = styled.div<{ isLight: boolean }>`
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
    background: ${({ theme, isLight }) => isLight ? theme.colors.white : theme.colors.tooltip};
  }
`;

export const StyledTooltip = styled.div<{ isLight: boolean }>`
  max-width: 320px;
  padding: 8px 12px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  color: ${({ theme, isLight }) => isLight ? theme.colors.dark800 : theme.colors.white};
  background: ${({ theme, isLight }) => isLight ? theme.colors.white : theme.colors.tooltip};
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
