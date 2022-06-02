import styled , { keyframes }  from 'styled-components';

type StyledBurgerProps = {
    open: boolean
}
const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

export const StyledBurger = styled.button<StyledBurgerProps>`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
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
//   transform: ${({ open }) => open ? 'rotate(360deg)' : 'rotate(0)'};

  span {
    width: 1.5rem;
    height: 0.1rem;
    background: ${({ open }) => !open ? "rgb(116, 155, 216);" : "rgb(255, 255, 255)"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      animation: 1s linear 1s normal 
    //   transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
    //   opacity: ${({ open }) => open ? '0' : '1'};
    }

    :nth-child(3) {
    //   transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
