import styled , { css, keyframes }  from 'styled-components';


export const boxAnimationBackwards = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-180deg);
  }
`

export const boxAnimationForward = keyframes`
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
`

export const firstLineAnimationForward = keyframes`
	0% {
		transform: translateY(0px);
	}
	25% {
		transform: translateY(8px);
	}
	50% {
		transform: translateY(8px);
	}
	75% {
    transform: rotate(45deg);
	}
	100% {
    transform: rotate(45deg);
	}
`;

export const firstLineAnimationBackwards = keyframes`
	0% {
        transform: rotate(45deg);
	}
	25% {
        transform: rotate(45deg);
	}
	50% {
		transform: translateY(8px);
	}
	75% {
		transform: translateY(8px);
	}
	100% {
        transform: translateY(0px);
	}
`;

export const secondLineAnimationForward = keyframes`
	0% {
    opacity: 1;
	}
	25% {
    opacity: 1;
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
`;

export const secondLineAnimationBackwards = keyframes`
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
`;

export const thirdLineAnimationForward = keyframes`
	0% {
		transform: translateY(0px);
	}
	25% {
		transform: translateY(-8px);
	}
	50% {
		transform: translateY(-8px);
	}
	75% {
        transform: rotate(-45deg);
	}
	100% {
        transform: rotate(-45deg);
	}
`;

export const thirdLineAnimationBackwards = keyframes`
	0% {
        transform: rotate(-45deg);
	}
	25% {
        transform: rotate(-45deg);
	}
	50% {
		transform: translateY(-8px);
	}
	75% {
		transform: translateY(-8px);
	}
	100% {
		transform: translateY(0px);
	}
`;