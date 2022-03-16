import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { Flex } from "../Box";

interface IProps {
  heading: (s?: boolean) => ReactNode;
  children: ReactNode;
  label: string;
  clickable?: boolean;
}

const AccordionBody = styled.div<{ opened: boolean }>`
  display: ${({ opened }) => (opened ? "flex" : "none")};
  flex-direction: column;
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
  const [isOpened, setIsOpened] = useState(true);

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
