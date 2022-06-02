import styled , { css, keyframes }  from 'styled-components';
import { menuAnimationConfig } from './animationConfig';

type StyledBurgerProps = {
    open: boolean
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18.5px;
  height: 13.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 10;
  transition: all 0.2s linear;
  ${({ open }) => {
    if (open) {
      return css`
        animation: ${menuAnimationConfig.boxAnimationForward} 0.5s ease-in 0s normal;
        animation-fill-mode: forwards;
        `
      } else{
        return css`
          animation: ${menuAnimationConfig.boxAnimationBackwards} 0.5s ease-out 0s normal;
        `
    }
  }}

  span {
    width: 18.5px;
    height: 1.5px;
    background: ${({ open }) => open ? "rgb(116, 155, 216);" : "rgb(255, 255, 255)"};
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: center;

    ${({ open }) => {
      if (open) {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationForward} 0.5s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationForward} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationForward} 0.5s ease-in-out 0s normal; 
            animation-fill-mode: forwards;
          }
        `;
      } else {
        return css`
          :first-child {
            animation: ${menuAnimationConfig.firstLineAnimationBackwards} 0.5s ease-in-out 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${menuAnimationConfig.secondLineAnimationBackwards} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${menuAnimationConfig.thirdLineAnimationBackwards} 0.5s ease-in-out 0s normal; 
            animation-fill-mode: forwards;
          `;
      }
    }}
  
  }
`;
