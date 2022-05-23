import React from "react";
import styled, { DefaultTheme } from "styled-components";
import ErrorAction from "../Svg/Icons/ErrorAction";
import WarningAction from "../Svg/Icons/WarningAction";
import SuccessAction from "../Svg/Icons/SuccessAction";
import InfoAction from "../Svg/Icons/InfoAction";
import { Text } from "../Text";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";
import {Box} from "../Box";
import ProgressCircle from "../../widgets/Toast/ProgressCircle";

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return 'rgba(249, 59, 93, 0.16)';
    case variants.WARNING:
      return 'rgba(255, 219, 28, 0.16)';
    case variants.SUCCESS:
      return 'rgba(29, 200, 114, 0.16)';
    case variants.INFO:
    default:
      return 'rgba(18, 99, 241, 0.16)';
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return ErrorAction;
    case variants.WARNING:
      return WarningAction;
    case variants.SUCCESS:
      return SuccessAction;
    case variants.INFO:
    default:
      return InfoAction;
  }
};

const IconLabel = styled.div<ThemedIconLabel>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getThemeColor};
  border-radius: 8px;
  border: none;
  padding: 12px;
`;

const Details = styled.div<{ hasHandler: boolean }>`
  display: flex;
`;

const StyledAlert = styled(Flex)`
  background-color: ${({ theme }) => theme.alert.background};
  border-radius: 16px;
  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  padding: 12px;
`;

const StyledBox = styled(Box)`
  position: absolute;
  right: 8px;
  
  // ${({ theme }) => theme.mediaQueries.sm} {
  //   position: static;
  //   transform: translateX(-50%);
  //}
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick, progress }) => {
  const Icon = getIcon(variant);
  return (
    <StyledAlert>
      <div>
        <IconLabel variant={variant} hasDescription={!!children}>
          <Icon width="24px"/>
        </IconLabel>
      </div>
      <Details hasHandler={!!onClick}>
        <Box mx='10px'>
          <Text fontSize='16px' color='dark' bold>{title}</Text>
          {typeof children === "string" ? (
              <Text as="p">{children}</Text>
          ) : (
              children
          )}
        </Box>
        <StyledBox>
          <ProgressCircle
              onClick={onClick}
              filled={progress}
              notFilled={progress ? 100 - progress : 0}
          />
        </StyledBox>
      </Details>
    </StyledAlert>
  );
};

export default Alert;
