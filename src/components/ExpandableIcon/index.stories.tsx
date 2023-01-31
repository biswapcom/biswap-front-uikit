import React, { useState } from "react";
import { Flex } from "../Box";
import Button from "../Button/Button";
import ExpandableIcon from "./ExpandableIcon";
import { ChevronDownCircleSolidIcon, ChevronDownIcon } from "../Svg";
import { HeadText, BodyText } from "../Typography";

export default {
  title: "Components/Expandable",
  component: ExpandableIcon,
  argTypes: {},
};

export const Default = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Flex>
      <Button
        variant="text"
        aria-label="Hide or show expandable content"
        onClick={() => setExpanded(!expanded)}
      >
        <ExpandableIcon
          isOpen={expanded}
          Icon={ChevronDownIcon}
          width="24px"
          color="primary"
        />
      </Button>
      <Button
        variant="text"
        aria-label="Hide or show expandable content"
        onClick={() => setExpanded(!expanded)}
      >
        <ExpandableIcon
          isOpen={expanded}
          Icon={ChevronDownCircleSolidIcon}
          width="24px"
        />
      </Button>
      <Button
        variant="text"
        aria-label="Hide or show expandable content"
        onClick={() => setExpanded(!expanded)}
        endIcon={
          <ExpandableIcon
            isOpen={expanded}
            Icon={ChevronDownIcon}
            width="24px"
          />
        }
      >
        <BodyText mr={"6px"}>Details</BodyText>
      </Button>
    </Flex>
  );
};
