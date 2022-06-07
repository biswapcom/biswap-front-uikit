import { keyframes } from "styled-components";

const translateY = "5px";

export const menuAnimationConfig = {
  boxAnimationBackwards: keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-180deg);
    }
    75% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  `,
  boxAnimationForward: keyframes`
    0% {
      transform: rotate(-180deg);
    }
    25% {
      transform: rotate(-180deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `,
  firstLineAnimationForward: keyframes`
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(${translateY});
    }
    50% {
      transform: translateY(${translateY});
    }
    75% {
      transform: translateY(${translateY}) rotate(45deg);
    }
    100% {
      transform: translateY(${translateY}) rotate(45deg);
    }
  `,
  firstLineAnimationBackwards: keyframes`
    0% {
      transform: translateY(${translateY}) rotate(45deg);
    }
    25% {
      transform: translateY(${translateY}) rotate(45deg);
    }
    50% {
      transform: translateY(${translateY});
    }
    75% {
      transform: translateY(${translateY});
    }
    100% {
      transform: translateY(0px);
    }
  `,
  secondLineAnimationForward: keyframes`
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `,
  secondLineAnimationBackwards: keyframes`
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  `,
  thirdLineAnimationForward: keyframes`
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-${translateY});
    }
    50% {
      transform: translateY(-${translateY});
    }
    75% {
      transform: translateY(-${translateY}) rotate(-45deg);
    }
    100% {
      transform: translateY(-${translateY}) rotate(-45deg);
    }
  `,
  thirdLineAnimationBackwards: keyframes`
    0% {
      transform: translateY(-${translateY}) rotate(-45deg);
    }
    25% {
      transform: translateY(-${translateY}) rotate(-45deg);
    }
    50% {
      transform: translateY(-${translateY});
    }
    75% {
      transform: translateY(-${translateY});
    }
    100% {
      transform: translateY(0px);
    }
  `,
};
