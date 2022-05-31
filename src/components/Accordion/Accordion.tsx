import React, {FC, ReactNode, useEffect, useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {Flex} from "../Box";

interface IProps {
  heading: (s?: boolean) => ReactNode;
  children: ReactNode;
  label?: string;
  clickable?: boolean;
}

const openBodyAnimation = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: auto;
  }
`;

const AccordionBody = styled.div<{ opened: boolean }>`
  display: ${({opened}) => (opened ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;

  ${({opened}) =>
  opened &&
  css`
      animation: ${openBodyAnimation} 0.6s ease;
    `}
`;

const AccordionTitle = styled(Flex)`
  cursor: pointer;
`;

// const AccordionBodyItem = styled.div``;

const AccordionComponent = styled.div`
  width: 100%;
`;

const Accordion: FC<IProps> = ({
   label,
   clickable = true,
   heading,
   children,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!clickable || label === 'Biswap Products') {
      setIsOpened(true)
    }
  }, [label, clickable, setIsOpened])

  const onTitleClick = () => {
    clickable && setIsOpened((prev) => !prev);
  };

  return (
    <AccordionComponent key={`acc-key-${label}`}>
      <AccordionTitle
        alignItems="center"
        justifyContent="space-between"
        onClick={onTitleClick}
      >
        {heading(isOpened)}
      </AccordionTitle>
      <AccordionBody opened={isOpened}>{children}</AccordionBody>
    </AccordionComponent>
  );
};

export default Accordion;
