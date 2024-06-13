import React from "react";
import styled, { DefaultTheme } from "styled-components";
import {
  CheckSolidIcon,
  WarningSolidIcon,
  CloseCircleSolidIcon,
  InfoSolidIcon,
  ConflictIcon,
} from "../Svg";
import { Text } from "../Text";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";
import { Box } from "../Box";
import ProgressCircle from "../../widgets/Toast/ProgressCircle";

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return "rgba(249, 59, 93, 0.16)";
    case variants.WARNING:
      return "rgba(255, 219, 28, 0.16)";
    case variants.SUCCESS:
      return "rgba(29, 200, 114, 0.16)";
    case variants.EXTENSIONS_CONFLICT:
      return "rgba(255, 255, 255, 1)";
    case variants.INFO:
    default:
      return "rgba(18, 99, 241, 0.16)";
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return CloseCircleSolidIcon;
    case variants.WARNING:
      return WarningSolidIcon;
    case variants.SUCCESS:
      return CheckSolidIcon;
    case variants.EXTENSIONS_CONFLICT:
      return ConflictIcon;
    case variants.INFO:
    default:
      return InfoSolidIcon;
  }
};

const getIconColor = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return "secondary";
    case variants.WARNING:
      return "warning";
    case variants.SUCCESS:
      return "success";
    case variants.INFO:
    default:
      return "primary";
  }
};

const IconLabel = styled(Flex)<ThemedIconLabel>`
  justify-content: center;
  align-items: center;
  background-color: ${getThemeColor};
  border-radius: ${({variant}) => variant === variants.EXTENSIONS_CONFLICT ? '50px' : '8px'};
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
  padding: 12px 60px 12px 12px;
`;

const StyledBox = styled(Box)`
  position: absolute;
  right: 8px;

  // ${({ theme }) => theme.mediaQueries.sm} {
  //   position: static;
  //   transform: translateX(-50%);
  //}
`;

const Wrapper = styled(Flex)`
    flex-direction: column;
    border-radius: ${({theme}) => theme.radii.default};
    background-color: ${({ theme }) => theme.colors.gray200};
    overflow: hidden;
`;

const TitleWrapper = styled(Box)`
    background-color: ${({theme}) => theme.colors.white};
`;

const Alert: React.FC<AlertProps> = ({
  title,
  children,
  variant,
  onClick,
  progress,
}) => {
  const Icon = getIcon(variant);
  const IconColor = getIconColor(variant);

  if (variant === variants.EXTENSIONS_CONFLICT) {
    return (
      <Wrapper>
        <TitleWrapper py="8px" pl="20px" pr="66px">
          <Text fontSize="16px" color="dark800" bold>
            {title}
          </Text>
        </TitleWrapper>
        <Flex p="16px">
          <Box mr="12px">
            <IconLabel variant={variant} hasDescription={!!children}>
              <Icon width="48px" color={IconColor} />
            </IconLabel>
          </Box>
          {typeof children === "string" ? (
            <Text as="p">{children}</Text>
          ) : (
            children
          )}
        </Flex>
        <StyledBox>
          <ProgressCircle
            onClick={onClick}
            filled={progress}
            notFilled={progress ? 100 - progress : 0}
          />
        </StyledBox>
      </Wrapper>
    )
  }

  return (
    <StyledAlert>
      <div>
        <IconLabel variant={variant} hasDescription={!!children}>
          <Icon width="24px" color={IconColor} />
        </IconLabel>
      </div>
      <Details hasHandler={!!onClick}>
        <Box ml="10px">
          <Text fontSize="16px" color="dark" bold>
            {title}
          </Text>
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
