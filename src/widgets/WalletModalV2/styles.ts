import styled from "styled-components";
import { Text } from "../../components/Text";
import { Box } from "../../components/Box";
import { getRgba } from "../../util";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";

export const StyledText = styled(Text)`
  ${({ theme }) => theme.mediaQueries.md} {
   align-self: flex-start;
  }
`;

export const WalletCardsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  max-height: 50vh;
  margin-left: 16px;
  padding-right: 6px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 0;
    width: 352px;
    margin-left: 32px;
  }
`;

export const ScrollWrapper = styled(Box)`
  overflow-x: hidden;
  margin-right: 6px;
  align-self: stretch;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 14px;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      getRgba(theme.colors.pastelBlue, theme, 0.24)};
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 172px;
  }

  &:hover > div {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ConnectWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray200};
  height: 508px;
  width: 100%;
  padding-bottom: 32px;
`;
