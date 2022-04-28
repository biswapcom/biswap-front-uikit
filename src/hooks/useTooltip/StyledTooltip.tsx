import styled from "styled-components";

export const Arrow = styled.div`
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
    background: ${({ theme }) => theme.colors.tooltip};
  }
`;

export const StyledTooltip = styled.div`
  padding: 12px 8px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 8px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.colors.tooltip};
  color: ${({ theme }) => theme.colors.white};

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
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
