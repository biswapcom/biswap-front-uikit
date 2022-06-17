import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { Text } from "../Text";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultColor = "toggleBg",
  checkedColor = "success",
  scale = scales.MD,
  disabled,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <StyledToggle
      $checked={isChecked}
      $checkedColor={checkedColor}
      $defaultColor={defaultColor}
      scale={scale}
      disabled={disabled}
    >
      <Input
        checked={checked}
        scale={scale}
        {...props}
        type="checkbox"
        disabled={disabled}
      />
      <Handle scale={scale} disabled={disabled} />
    </StyledToggle>
  );
};

export default Toggle;
