import styled, { css, keyframes } from "styled-components";
import { menuAnimationConfig } from "./animationConfig";

type StyledBurgerProps = {
  open: boolean;
  isLoaded: boolean;
  isTablet: boolean;
};

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 10;
  transition: all 0.2s linear;
  gap: 3px;
  ${({ open, isLoaded }) => {
    if (open) {
      return css`
        animation: ${menuAnimationConfig.boxAnimationForward} 0.5s ease-in 0s
          normal;
        animation-fill-mode: forwards;
      `;
    } else if (isLoaded) {
      return css`
        animation: ${menuAnimationConfig.boxAnimationBackwards} 0.5s ease-out 0s
          normal;
      `;
    }
  }}

  span {
    width: 20px;
    height: 2px;
    background: ${({ open, isTablet, theme }) => {
      if(open){
        return isTablet ? "#556E9A" : theme.colors.dark800
      }else{
        return theme.colors.white
      }
    }};
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: center;

    ${({ open, isLoaded }) => {
      if (open) {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationForward} 0.3s
              ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }

          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationForward} 0.3s
              linear 0s normal;
            animation-fill-mode: forwards;
          }

          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationForward} 0.3s
              ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
        `;
      } else if (isLoaded) {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationBackwards} 0.3s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationBackwards} 0.3s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationBackwards} 0.3s ease-in-out 0s normal; 
            animation-fill-mode: forwards;
          `;
      }
    }}
  }
`;
