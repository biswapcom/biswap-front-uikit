import React, { useState } from "react";
import { Box, Flex } from "../Box";
import Button from "../Button/Button";
import ExpandableIcon from "./ExpandableIcon";
import { BodyText } from "../Typography";

export default {
  title: "Components/Expandable",
  component: ExpandableIcon,
  argTypes: {},
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Flex>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon isOpen={open} iconName="ChevronDown" />
        </Button>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon
            isOpen={open}
            width="14px"
            iconName="ChevronDownCircleSolid"
          />
        </Button>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
          endIcon={
            <ExpandableIcon
              isOpen={open}
              iconName="ChevronDown"
              width="18px"
              ml="40px"
              rotateType="transformV2"
            />
          }
        >
          <BodyText scale="size12">Details2</BodyText>
        </Button>
      </Flex>
      <Flex>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon
            isOpen={open}
            iconName={"ChevronDown"}
            width="24px"
            color="success"
            rotateType="transformV1"
          />
        </Button>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
        >
          <ExpandableIcon
            isOpen={open}
            width="24px"
            iconName="ChevronDownCircleSolid"
            color="warning"
            ml="4px"
            rotateType="transformV1"
          />
        </Button>
        <Button
          variant="text"
          aria-label="Hide or show expandable content"
          onClick={() => setOpen(!open)}
          endIcon={
            <ExpandableIcon
              isOpen={open}
              iconName="ChevronDown"
              width="20px"
              rotateType="transformV1"
            />
          }
        >
          <BodyText mr="4px" color="primary" bold>
            Details
          </BodyText>
        </Button>
      </Flex>
    </Box>
  );
};
