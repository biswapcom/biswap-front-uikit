import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { space, layout, variant } from "styled-system";
import { getRgba } from "../../util";

import {
  SkeletonProps,
  animation as ANIMATION,
  variants as VARIANT,
} from "./types";
import { variantsSkeleton } from "./theme";

const waves = keyframes`
   from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
`;

const pulse = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
`;

const Root = styled.div<SkeletonProps>`
  min-height: 20px;
  display: block;
  background-color: ${({ theme }) =>
    getRgba(theme.colors.pastelBlue, theme, 0.16)};
  border-radius: ${({ variant, theme }) =>
    variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small};

  ${layout}
  ${space}
  ${variant({
    variants: variantsSkeleton,
  })}
`;

const Pulse = styled(Root)`
  animation: ${pulse} 2s infinite ease-out;
  transform: translate3d(0, 0, 0);
  background-color: ${({ theme }) => theme.colors.pastelBlue};
`;

const Waves = styled(Root)`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(116, 155, 216, 0) 0%,
      rgba(116, 155, 216, 0.16) 50%,
      rgba(116, 155, 216, 0) 100%
    );

    top: 0;
    left: -150px;
    height: 100%;
    width: 150px;
    animation: ${waves} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const Skeleton: FC<SkeletonProps> = ({
  variant = VARIANT.RECT,
  animation = ANIMATION.PULSE,
  ...props
}) => {
  if (animation === ANIMATION.WAVES) {
    return <Waves variant={variant} {...props} />;
  }

  return <Pulse variant={variant} {...props} />;
};

export default Skeleton;
