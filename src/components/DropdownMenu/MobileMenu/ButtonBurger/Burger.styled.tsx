import styled , { css, keyframes }  from 'styled-components';
import { boxAnimationBackwards, boxAnimationForward, firstLineAnimationBackwards, firstLineAnimationForward, secondLineAnimationBackwards, secondLineAnimationForward, thirdLineAnimationBackwards, thirdLineAnimationForward } from './animationConfig';

type StyledBurgerProps = {
    open: boolean
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
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
        animation: ${boxAnimationForward} 0.5s linear 0s normal;
        animation-fill-mode: forwards;
        `
      } else{
        return css`
          animation: ${boxAnimationBackwards} 0.5s linear 0s normal;
          animation-direction: reverse;    
        `
    }
  }}

  span {
    width: 1.5rem;
    height: 0.1rem;
    background: ${({ open }) => open ? "rgb(116, 155, 216);" : "rgb(255, 255, 255)"};
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: 1px;

    ${({ open }) => {
      if (open) {
        return css`
          :first-child {
            animation: ${firstLineAnimationForward} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${secondLineAnimationForward} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${thirdLineAnimationForward} 0.5s linear 0s normal; 
            animation-fill-mode: forwards;
          }
        `;
      } else {
        return css`
          :first-child {
            animation: ${firstLineAnimationBackwards} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
          
          :nth-child(2) {
            animation: ${secondLineAnimationBackwards} 0.5s linear 0s normal;
            animation-fill-mode: forwards;
          }
      
          :nth-child(3) {
            animation: ${thirdLineAnimationBackwards} 0.5s linear 0s normal; 
            animation-fill-mode: forwards;
          `;
      }
    }}
  
  }
`;
