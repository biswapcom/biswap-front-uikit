import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import { useMatchBreakpoints } from "../../contexts";
import { Box, Flex } from "../Box";
import { DropdownMenuDivider } from "../DropdownMenu/styles";

interface IProps {
  heading: (s?: boolean) => ReactNode;
  children: ReactNode;
  label?: string;
  clickable?: boolean;
  index: number;
  href?: string;
  linkComponent?: React.ElementType;
  isOpenItem?: boolean;
  setIsOpenMenu: (arg: boolean) => void;
  currentOpen: string | undefined;
  setCurrentOpen: Dispatch<SetStateAction<string | undefined>>;
}

const AccordionBody = styled.div<{ opened: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.45s;

  ${({ opened }) =>
    opened &&
    css`
      max-height: 900px;
    `}
`;

const AccordionTitle = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const AccordionComponent = styled.div`
  width: 100%;
`;

const Accordion: FC<IProps> = ({
  label,
  clickable = true,
  heading,
  children,
  index,
  href,
  linkComponent,
  setIsOpenMenu,
  isOpenItem,
  currentOpen,
  setCurrentOpen,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const { isMobile } = useMatchBreakpoints();

  useEffect(() => {
    if (!clickable || isOpenItem) {
      setCurrentOpen(label);
    }
  }, [label, clickable]);

  useEffect(() => {
    setIsOpened(clickable ? currentOpen === label : true);
  }, [currentOpen, clickable]);

  const onTitleClick = () => {
    if (!href && clickable) {
      setCurrentOpen(!isOpened ? label : undefined);
    } else {
      setIsOpenMenu(false);
    }
  };

  return (
    <AccordionComponent key={`acc-key-${label}`}>
      {isMobile && index !== 1 && <DropdownMenuDivider color="btnTertiary" />}
      <AccordionTitle
        as={href ? linkComponent : "div"}
        href={href}
        onClick={onTitleClick}
      >
        {heading(isOpened)}
      </AccordionTitle>
      <AccordionBody opened={isOpened}>{children}</AccordionBody>
      {isMobile && !index && (
        <Box m={"0 -24px 0"}>
          <DropdownMenuDivider color="rgba(18, 99, 241, 0.16)" />
        </Box>
      )}
    </AccordionComponent>
  );
};

export default Accordion;
