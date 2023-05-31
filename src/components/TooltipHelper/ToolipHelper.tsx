import React, { FC } from "react";
import styled, { css } from "styled-components";
import { TriggerType } from "../../hooks/useTooltip";
import { Box, BoxProps, Flex } from "../Box";
import { HelpIcon } from "../Svg";
import { useTooltip } from "../../hooks";
import { Placement } from "@popperjs/core";

interface IconProps {
  color?: string;
  size?: string;
}
interface Props extends BoxProps {
  text: string | React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType;
  size?: string;
  Icon?: FC<IconProps>;
  children?: React.ReactNode;
  showTooltip?: boolean;
}

const QuestionWrapper = styled(Flex)<{ showTooltip: boolean }>`
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  ${({ showTooltip }) =>
    showTooltip &&
    css`
      :hover,
      :focus {
        opacity: 0.7;
      }
    `}
`;

const TooltipHelper: React.FC<Props> = ({
  text,
  placement = "auto",
  size = "16px",
  color = "pastelBlue",
  trigger,
  Icon = HelpIcon,
  ml = "4px",
  children,
  showTooltip = true,
  ...props
}) => {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(text, {
    placement,
    trigger,
  });

  return (
    <Box ml={ml} {...props}>
      {showTooltip && tooltipVisible && tooltip}
      <QuestionWrapper ref={targetRef} showTooltip={showTooltip}>
        {children ?? <Icon color={color} width={size} />}
      </QuestionWrapper>
    </Box>
  );
};
export default TooltipHelper;
