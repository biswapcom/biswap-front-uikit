import React, { FC } from "react";
import styled from "styled-components";
import { IconButton } from "../../Button";
import { useMatchBreakpoints } from "../../../contexts";
import { Flex } from "../../Box";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Svg";
import { BodyText } from "../../Typography";

interface Props {
  title: string;
  showNavButtons: boolean;
  handleNav: (arg: string) => void;
}
const NavButton = styled(IconButton)`
  width: 32px;
  height: 32px;
`;

const CarouselHeader: FC<Props> = ({
  handleNav,
  title,
  showNavButtons,
}): JSX.Element => {
  const { isMobile } = useMatchBreakpoints();

  return (
    <Flex
      justifyContent="space-between"
      mb={isMobile ? "24px" : "32px"}
      alignItems={isMobile ? "flex-end" : "flex-start"}
    >
      <BodyText scale={isMobile ? "size24" : "size32"} color="white">
        {title}
      </BodyText>
      {showNavButtons && (
        <Flex>
          <NavButton
            scale="xs"
            variant="primary"
            onClick={() => {
              handleNav("prev");
            }}
          >
            <ChevronLeftIcon color="white" />
          </NavButton>
          <NavButton
            scale="xs"
            variant="primary"
            ml="8px"
            onClick={() => {
              handleNav("next");
            }}
          >
            <ChevronRightIcon color="white" />
          </NavButton>
        </Flex>
      )}
    </Flex>
  );
};

export default CarouselHeader;
