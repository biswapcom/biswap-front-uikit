import React from "react";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultColor = "toggleBg",
  checkedColor = "success",
  scale = scales.LG,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <StyledToggle
      $checked={isChecked}
      $checkedColor={checkedColor}
      $defaultColor={defaultColor}
      scale={scale}
    >
      <Input checked={checked} scale={scale} {...props} type="checkbox"/>
      <Handle scale={scale} />
    </StyledToggle>
  );
};

export default Toggle;
